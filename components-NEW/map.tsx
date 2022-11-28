import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
  Sphere,
  Graticule,
} from "react-simple-maps"
import ReactTooltip from "react-tooltip"

import { getCountryData } from "../lib/geo-api"

import Link from "next/link"
import { ReactNode, useState, memo } from "react"

type Props = {
  children: ReactNode
  proj: string
  mapWidth?: number
  mapHeight?: number
  rotate?: Array<number>
  scale?: number
}

const MapContainer = ({
  children,
  proj,
  mapWidth = 1024,
  mapHeight = 512,
  rotate = [-10, 0, 0],
  scale,
}: Props) => {
  return (
    <div>
      <ComposableMap
        projection={proj}
        width={mapWidth}
        height={mapHeight}
        data-tip=""
        projectionConfig={{ rotate, scale }}
        className="outline-none h-full w-full mx-auto"
      >
        <ZoomableGroup
          translateExtent={[
            [0, 0],
            [mapWidth, mapHeight],
          ]}
        >
          {children}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  )
}

/* World Map */
const WorldMap = ({}) => {
  const [tooltipContent, setTooltipContent] = useState("")
  const data = require("../lib/geo-data/geography.geo.json")

  return (
    <div>
      <MapContainer proj="geoEquirectangular">
        <Geographies geography={data}>
          {({ geographies }) =>
            geographies.map((feature) => (
              <Link
                href={`/countries/${feature.properties.adm0_a3}`}
                key={feature.properties.adm0_a3}
              >
                <a className="fill-gray-300 hover:fill-gray-400 stroke-1 stroke-gray-100">
                  <Geography
                    className="outline-none"
                    key={feature.rsmKey}
                    geography={feature}
                    onMouseEnter={() => {
                      setTooltipContent(`${feature.properties.admin}`)
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("")
                    }}
                  />
                </a>
              </Link>
            ))
          }
        </Geographies>

        {data.features
          .filter((feature) => {
            return feature.properties.tiny > 0
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
                setTooltipContent(`${properties.admin}`)
              }}
              onMouseLeave={() => {
                setTooltipContent("")
              }}
            >
              <Link
                href={`/countries/${properties.adm0_a3}`}
                key={properties.adm0_a3}
              >
                <a className="fill-gray-300 hover:fill-gray-400 stroke-1 stroke-gray-100">
                  <circle r={3} />
                </a>
              </Link>
            </Marker>
          ))}
      </MapContainer>
      <ReactTooltip className="bg-black text-white">
        {tooltipContent}
      </ReactTooltip>
    </div>
  )
}

/* Continent Map */
const ContinentMap = ({}) => {
  return (
    <MapContainer proj="geoAzimuthalEqualArea">
      <></>
    </MapContainer>
  )
}

/* Country Map */
const CountryMap = ({ code, scale, level = 1, offsetX = 0, offsetY = 0 }) => {
  const [tooltipContent, setTooltipContent] = useState("")
  const countryData = getCountryData(code)

  return (
    <div>
      <MapContainer
        proj="geoAzimuthalEqualArea"
        mapWidth={512}
        mapHeight={512}
        scale={scale}
        rotate={[
          offsetX - countryData.coordinates[0],
          offsetY - countryData.coordinates[1],
          0,
        ]}
      >
        <Geographies
          geography={`https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json`}
        >
          {({ geographies }) =>
            geographies.map(
              (feature) =>
                feature.properties.adm0_a3 !== code && (
                  <Geography
                    className="outline-none fill-gray-200 stroke-gray-100 stroke-1"
                    key={feature.rsmKey}
                    geography={feature}
                  />
                )
            )
          }
        </Geographies>
        <Geographies
          geography={`https://raw.githubusercontent.com/piwodlaiwo/TopoJSON-Data/master/diva-gis/${countryData.code3}_adm/${countryData.code3}_adm${level}.topo.json`}
        >
          {({ geographies }) =>
            geographies.map((feature) => (
              <Geography
                className="outline-none fill-gray-300 hover:fill-gray-400 stroke-gray-100 stroke-1"
                key={feature.rsmKey}
                geography={feature}
                onMouseEnter={() => {
                  setTooltipContent(
                    `${
                      level == 1
                        ? feature.properties.NAME_1
                        : level == 2
                        ? feature.properties.NAME_2
                        : feature.properties.NAME_3
                    }`
                  )
                }}
                onMouseLeave={() => {
                  setTooltipContent("")
                }}
              />
            ))
          }
        </Geographies>
      </MapContainer>
      <ReactTooltip className="bg-black text-white">
        {tooltipContent}
      </ReactTooltip>
    </div>
  )
}

/* Mini-Map */
const MiniMap = ({ countryCode }) => {
  const data = require("../lib/geo-data/geography.geo.json")
  const countryData = getCountryData(countryCode)

  return (
    <MapContainer
      proj="geoOrthographic"
      rotate={[-countryData.coordinates[0], -countryData.coordinates[1], 0]}
    >
      <Sphere className="stroke-gray-300 stroke-1" />
      <Graticule className="stroke-gray-300 stroke-1" />
      <Geographies geography={data}>
        {({ geographies }) =>
          geographies.map((feature) => (
            <Geography
              className={`outline-none ${
                countryData.code3 == feature.properties.adm0_a3
                  ? "fill-gray-800"
                  : "fill-gray-300"
              }`}
              key={feature.rsmKey}
              geography={feature}
            />
          ))
        }
      </Geographies>

      {data.features
        .filter((feature) => {
          return (
            countryData.code3 == feature.properties.adm0_a3 &&
            (feature.properties.scalerank > 2 || feature.properties.tiny > 0)
          )
        })
        .map(({ properties, geometry }) => {
          return (
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
          )
        })}
    </MapContainer>
  )
}

export { WorldMap, ContinentMap, CountryMap, MiniMap }
