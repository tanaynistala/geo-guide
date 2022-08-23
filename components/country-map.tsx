import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";
import { getCountryData } from "../lib/geo-api";
import geoData from "../lib/geo-data/geography.geo.json";
import Country from "../interfaces/country";
import { useState, memo } from "react";
import ReactTooltip from "react-tooltip";

type Props = {
  code: string;
  scale: number;
  level: number;
};

const CountryMap = ({ code, scale, level = 1 }: Props) => {
  const [tooltipContent, setTooltipContent] = useState("");

  const country = getCountryData(code);
  console.log(country.capitalCoords);

  const mapWidth = 512;
  const mapHeight = 512;

  return (
    <div>
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        width={mapWidth}
        height={mapHeight}
        className="rounded-lg mt-12 outline-none"
        data-tip=""
        projectionConfig={{
          rotate: [-country.coordinates[0], -country.coordinates[1], 0],
          // center: country.coordinates,
          scale,
        }}
      >
        <ZoomableGroup
          translateExtent={[
            [0, 0],
            [mapWidth, mapHeight],
          ]}
        >
          <Sphere className="fill-gray-100" />

          <Geographies
            geography={`https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json`}
          >
            {({ geographies }) =>
              geographies.map((feature) => (
                <Geography
                  className="outline-none fill-gray-200 stroke-gray-300"
                  key={feature.rsmKey}
                  geography={feature}
                />
              ))
            }
          </Geographies>

          <Geographies
            geography={`https://raw.githubusercontent.com/piwodlaiwo/TopoJSON-Data/master/diva-gis/${country.code3}_adm/${country.code3}_adm${level}.topo.json`}
          >
            {({ geographies }) =>
              geographies.map((feature) => (
                <Geography
                  className="outline-none fill-gray-300 stroke-gray-400 stroke-[0.5] hover:fill-gray-400 rounded"
                  key={feature.rsmKey}
                  geography={feature}
                  onMouseEnter={() => {
                    setTooltipContent(
                      `${
                        level == 1
                          ? feature.properties.NAME_1
                          : feature.properties.NAME_2
                      }`
                    );
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <ReactTooltip className="font-bold text-8xl bg-white border-2 border-blackshadow-lg">
        {tooltipContent}
      </ReactTooltip>
    </div>
  );
};

export default memo(CountryMap);
