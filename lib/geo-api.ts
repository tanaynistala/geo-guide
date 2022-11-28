const geographies = require("./geo-data/geography.geo.json")
const centroids = require("./geo-data/centroids.geo.json")
const capitals = require("./geo-data/capitals.geo.json")
const currencyNames = require("./geo-data/currency-names.json")
const currencyCodes = require("./geo-data/currency-codes.json")
const domainTlds = require("./geo-data/domain-tlds.json")
const drivingSides = require("./geo-data/driving-sides.json")
const phoneCodes = require("./geo-data/phone-codes.json")

export function getCategorizedCountries() {
  let result = {}

  const continents = [
    "North America",
    "South America",
    "Asia",
    "Europe",
    "Oceania",
    "Africa",
  ]

  return continents.map((continent) => {
    return {
      continent: continent,
      features: geographies.features
        .filter((feature) => {
          return continent == feature.properties.continent
        })
        .sort(function (a, b) {
          return a.properties.admin.localeCompare(b.properties.admin)
        }),
    }
  })
}

export function getCountryData(countryCode: string) {
  const countryGeoData = geographies.features.find(
    (geo) => geo.properties.adm0_a3 === countryCode
  )

  const name = countryGeoData.properties.admin
  const code3 = countryGeoData.properties.adm0_a3
  const code2 = countryGeoData.properties.iso_a2
  const country = countryGeoData.properties.sovereignt

  const centroid = centroids.features.find(
    (geo) => geo.properties.ISO === code2
  )?.geometry.coordinates ?? [0, 0]

  const continent = countryGeoData.properties.continent
  const subregion = countryGeoData.properties.subregion

  const capital =
    capitals.features.find((geo) => geo.properties.iso2 === code2)?.properties
      .city ?? "N/A"
  const capitalCoords = capitals.features.find(
    (geo) => geo.properties.iso2 === code2
  )?.geometry.coordinates ?? [0, 0]

  const currency = [
    currencyNames.find((geo) => geo.country === name)?.currency_name ?? "N/A",
    currencyCodes.find((geo) => geo.country === name)?.currency_code ?? "N/A",
  ]

  const tld = domainTlds.find((geo) => geo.country === name)?.tld ?? "N/A"

  const drivesOnLeft =
    drivingSides.find((geo) => geo.country === name)?.drives_on_left ?? false

  return {
    name,
    code3,
    code2,
    coordinates: centroid,
    continent,
    subregion,
    capital,
    capitalCoords,
    currency,
    tld,
    drivesOnLeft: drivesOnLeft,
  }
}

export function getSubdivisionData(countryCode: string) {
  const countryName = getCountryData(countryCode).name
  const data = phoneCodes.find((geo) => geo.country === countryName)
  return {
    regions: data.regions,
    codes: data.codes,
  }
}
