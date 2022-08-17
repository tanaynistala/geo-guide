import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  useZoomPanContext,
  Marker,
} from "react-simple-maps";
import Link from "next/link";
import geoData from "../lib/geo-data/geography.geo.json";
import { useState, memo } from "react";
import ReactTooltip from "react-tooltip";

const Map = ({ country = "" }) => {
  const [tooltipContent, setTooltipContent] = useState("");

  const mapWidth = 1024;
  const mapHeight = 512;

  return (
    <div className="lg:max-h-[32rem] bg-gray-100 rounded-2xl overflow-clip">
      <ComposableMap
        projection="geoEquirectangular"
        width={mapWidth}
        height={mapHeight}
        data-tip=""
        projectionConfig={{
          rotate: [-10, 0, 0],
        }}
        className="outline-none"
      >
        <ZoomableGroup
          translateExtent={[
            [0, 0],
            [mapWidth, mapHeight],
          ]}
        >
          <Geographies geography={geoData}>
            {({ geographies }) =>
              geographies.map((feature) => (
                <Link
                  href={`/countries/${feature.properties.adm0_a3}`}
                  key={feature.properties.adm0_a3}
                >
                  <a
                    className={`${
                      country == feature.properties.adm0_a3
                        ? "fill-gray-500"
                        : "fill-gray-300 hover:fill-gray-400"
                    }
                            stroke-gray-500 stroke-[0.5]`}
                  >
                    <Geography
                      className="outline-none"
                      key={feature.rsmKey}
                      geography={feature}
                      onMouseEnter={() => {
                        setTooltipContent(`${feature.properties.admin}`);
                      }}
                      onMouseLeave={() => {
                        setTooltipContent("");
                      }}
                    />
                  </a>
                </Link>
              ))
            }
          </Geographies>

          {geoData.features
            .filter((feature) => {
              return feature.properties.tiny > 0;
            })
            .map(({ type, properties, geometry }) => (
              <Marker
                key={properties.adm0_a3}
                coordinates={
                  geometry.type == "MultiPolygon"
                    ? geometry.coordinates[0][0][0]
                    : geometry.coordinates[0][0]
                }
                onMouseEnter={() => {
                  setTooltipContent(`${properties.admin}`);
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
              >
                <Link
                  href={`/countries/${properties.adm0_a3}`}
                  key={properties.adm0_a3}
                >
                  <a
                    className={`${
                      country == properties.adm0_a3
                        ? "fill-gray-500"
                        : "fill-gray-300 hover:fill-gray-400"
                    }
                            stroke-gray-500 stroke-[0.5]`}
                  >
                    <circle r={2} />
                  </a>
                </Link>
              </Marker>
            ))}
        </ZoomableGroup>
      </ComposableMap>
      <ReactTooltip className="font-mono font-bold text-8xl bg-blue-500 text-white shadow-lg">
        {tooltipContent}
      </ReactTooltip>
    </div>
  );
};

export default memo(Map);
