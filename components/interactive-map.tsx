import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";
import { getCountryData, getSubdivisionData } from "../lib/geo-api";
import geoData from "../lib/geo-data/geography.geo.json";
import Country from "../interfaces/country";
import { useState, memo } from "react";
import ReactTooltip from "react-tooltip";

type Props = {
  code: string;
  scale: number;
  level: string;
};

const InteractiveMap = ({ code, scale, level = "1" }: Props) => {
  const [tooltipContent, setTooltipContent] = useState("");
  const [focus, setFocus] = useState(-1);

  const country = getCountryData(code);

  const mapWidth = 512;
  const mapHeight = 512;

  const data = getSubdivisionData(code);

  const Disclosure = ({ phoneCode }) => {
    return (
      <li>
        <button
          className={`p-2 ${
            focus === phoneCode ? "bg-blue-200" : "bg-gray-200"
          } w-full rounded-lg hover:bg-gray-300`}
          onClick={() => {
            focus === phoneCode ? setFocus(-1) : setFocus(phoneCode);
          }}
        >
          {phoneCode}
        </button>
        <ol>
          {() => {
            const children = data
              .map((item) => item.code)
              .filter(
                (item) =>
                  item.toString().slice(0, phoneCode.length) === phoneCode
              );

            return children.map((item) => (
              <Disclosure
                phoneCode={item.toString().slice(0, phoneCode.length + 1)}
              />
            ));
          }}
        </ol>
      </li>
    );
  };

  return (
    <div className="flex flex-col md:flex-row">
      <>
        <ComposableMap
          projection="geoAzimuthalEqualArea"
          width={mapWidth}
          height={mapHeight}
          className="rounded-lg my-12 outline-none"
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
                    className={`outline-none stroke-gray-400 stroke-[0.5] rounded
                      ${
                        focus === getCode(feature)
                          ? "fill-gray-500"
                          : "fill-gray-300"
                      }
                        `}
                    key={feature.rsmKey}
                    geography={feature}
                    onMouseEnter={() => {
                      setTooltipContent(`${getName(feature)}`);
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
      </>
      <div>
        <ol>
          {data
            .map((item) => item.code)
            .filter((item, index, arr) => arr.indexOf(item) === index)
            .sort((a, b) => a - b)
            .map((value) => (
              <Disclosure phoneCode={value} />
            ))}
        </ol>
      </div>
    </div>
  );

  function getName(feature) {
    switch (level) {
      case "1":
        return feature.properties.NAME_1;
        break;

      case "2":
        return feature.properties.NAME_2;
        break;

      case "3":
        return feature.properties.NAME_2;
        break;

      default:
        return feature.properties.NAME_1;
        break;
    }
  }

  function getID(feature) {
    switch (level) {
      case "1":
        return feature.properties.ID_1;
        break;

      case "2":
        return feature.properties.ID_2;
        break;

      case "3":
        return feature.properties.ID_2;
        break;

      default:
        return feature.properties.ID_1;
        break;
    }
  }

  function getCode(feature) {
    const id = getID(feature);
    return data.find((geo) => geo.id === id).code;
  }
};

export default memo(InteractiveMap);
