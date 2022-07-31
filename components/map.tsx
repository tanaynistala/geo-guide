import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import Link from "next/link";
import geoData from "../public/world.geo.json";

export default function Map({ country = "" }) {
  return (
    <div className="px-4 pt-8 pb-0 lg:max-h-[32rem] bg-gray-100 rounded-2xl">
      <ComposableMap
        projection="geoEquirectangular"
        width={1024}
        height={512}
        projectionConfig={{
          rotate: [-10, 0, 0],
        }}
      >
        <Geographies geography={geoData}>
          {({ geographies }) =>
            geographies.map((feature) => (
              <Link
                href={`/guides/countries/${feature.properties.adm0_a3}`}
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
            >
              <Link
                href={`/guides/countries/${properties.adm0_a3}`}
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
                  <circle r={4} />
                </a>
              </Link>
            </Marker>
          ))}
      </ComposableMap>
    </div>
  );
}
