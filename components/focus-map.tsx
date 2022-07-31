import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
  Marker,
} from "react-simple-maps";
import geoData from "../public/world.geo.json";
import Country from "../interfaces/country";

type Props = {
  country: Country;
};

const Map = ({ country }: Props) => {
  return (
    <ComposableMap
      projection="geoOrthographic"
      width={512}
      height={512}
      projectionConfig={{
        rotate: [-country.coordinates[0], -country.coordinates[1], 0],
      }}
    >
      <Sphere className="stroke-gray-300 stroke-1 fill-gray-50" />
      <Graticule className="stroke-gray-300 stroke-1" />
      <Geographies geography={geoData}>
        {({ geographies }) =>
          geographies.map((feature) => (
            <Geography
              className={`outline-none ${
                country.code == feature.properties.adm0_a3
                  ? "fill-gray-800 stroke-gray-800"
                  : "fill-gray-300 stroke-gray-300"
              }`}
              key={feature.rsmKey}
              geography={feature}
            />
          ))
        }
      </Geographies>

      {geoData.features
        .filter((feature) => {
          return (
            feature.properties.scalerank > 2 &&
            country.code == feature.properties.adm0_a3
          );
        })
        .map(({ type, properties, geometry }) => (
          <Marker
            key={properties.adm0_a3}
            coordinates={
              geometry.type == "MultiPolygon"
                ? geometry.coordinates[0][0][0]
                : geometry.coordinates[0][0]
            }
            style={{
              hidden: { opacity: 0 },
            }}
          >
            <circle r={8} className="fill-gray-800 stroke-gray-800" />
          </Marker>
        ))}
    </ComposableMap>
  );
};

export default Map;
