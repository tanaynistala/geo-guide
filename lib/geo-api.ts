import geographies from "./geo-data/geography.geo.json";
import centroids from "./geo-data/centroids.geo.json";

import capitals from "./geo-data/capitals.json";
import currencyNames from "./geo-data/currency-names.json";
import currencyCodes from "./geo-data/currency-codes.json";
import domainTlds from "./geo-data/domain-tlds.json";

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
      features: geographies.features
        .filter((feature) => {
          return continent == feature.properties.continent;
        })
        .sort(function (a, b) {
          return a.properties.admin.localeCompare(b.properties.admin);
        }),
    };
  });
}

export function getCountryData(countryCode: string) {
  const countryGeoData = geographies.features.find(
    (geo) => geo.properties.adm0_a3 === countryCode
  );

  const name = countryGeoData.properties.name_long;
  const code3 = countryGeoData.properties.adm0_a3;
  const country = countryGeoData.properties.sovereignt;
  const code2 = countryGeoData.properties.iso_a2;

  const centroid = centroids.features.find(
    (geo) => geo.properties.ISO === code2
  )?.geometry.coordinates ?? [0, 0];

  const continent = countryGeoData.properties.continent;
  const subregion = countryGeoData.properties.subregion;

  const capital = capitals.find((geo) => country === name)?.city ?? "N/A";

  const currency =
    (currencyNames.find((geo) => country === name)?.currency_name ?? "N/A") +
    " (" +
    (currencyCodes.find((geo) => country === name)?.currency_code ?? "N/A") +
    ")";

  const tld = domainTlds.find((geo) => country === name)?.tld ?? "N/A";

  return {
    name,
    code3,
    code2,
    coordinates: centroid,
    continent,
    subregion,
    capital,
    currency,
    tld,
    drivesOnLeft: false,
  };
}
