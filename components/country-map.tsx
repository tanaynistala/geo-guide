import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Marker,
} from "react-simple-maps";
import { getCountryData } from "../lib/geo-api";
import Country from "../interfaces/country";
import { useState, memo } from "react";
import ReactTooltip from "react-tooltip";

type Props = {
  code: string;
  scale: number;
};

const CountryMap = ({ code, scale }: Props) => {
  const [tooltipContent, setTooltipContent] = useState("");

  const country = getCountryData(code);

  return (
    <div>
      <div>
        <ComposableMap
          projection="geoAzimuthalEqualArea"
          width={512}
          height={512}
          className="rounded-lg"
          data-tip=""
          projectionConfig={{
            rotate: [-country.coordinates[0], -country.coordinates[1], 0],
            // center: country.coordinates,
            scale,
          }}
        >
          <Sphere className="fill-gray-100" />
          <Geographies
            geography={`https://raw.githubusercontent.com/piwodlaiwo/TopoJSON-Data/master/diva-gis/${country.code3}_adm/${country.code3}_adm1.topo.json`}
          >
            {({ geographies }) =>
              geographies.map((feature) => (
                <Geography
                  className="outline-none fill-gray-300 stroke-gray-400 stroke-1 hover:fill-gray-400"
                  key={feature.rsmKey}
                  geography={feature}
                  onMouseEnter={() => {
                    setTooltipContent(`${feature.properties.NAME_1}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
        <ReactTooltip className="font-mono font-bold text-8xl bg-blue-200 text-blue-500 shadow-lg">
          {tooltipContent}
        </ReactTooltip>
      </div>
    </div>
  );
};

export default memo(CountryMap);
