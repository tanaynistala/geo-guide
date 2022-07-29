import geoData from "../public/world.geo.json";

export function getCategorizedCountries() {
  let result = {};

  const continents = [
    "North America",
    "South America",
    "Asia",
    "Europe",
    "Oceania",
    "Africa",
  ];

  return continents.map((continent) => {
    return {
      continent: continent,
      features: geoData.features
        .filter((feature) => {
          return continent == feature.properties.continent;
        })
        .sort(function (a, b) {
          return a.admin - b.admin;
        }),
    };
  });
}
