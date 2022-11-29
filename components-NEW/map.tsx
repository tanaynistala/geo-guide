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
  staticMap?: boolean
  border?: boolean
}

const MapContainer = ({
  children,
  proj,
  mapWidth = 1024,
  mapHeight = 512,
  rotate = [-10, 0, 0],
  scale,
  staticMap = false,
  border = false,
}: Props) => {
  const [position, setPosition] = useState({
    coordinates: [-rotate[0], -rotate[1]],
    zoom: 1,
  })

  function handleZoomIn() {
    if (position.zoom >= 4) return
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }))
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }))
  }

  function handleMoveEnd(position) {
    setPosition(position)
  }

  return (
    <div
      className={`relative rounded-xl overflow-hidden ${
        border ? "border-4" : ""
      }`}
    >
      {!staticMap && (
        <div className="absolute right-0 top-0 m-1 grid rounded overflow-hidden w-8 h-16 bg-gray-200 text-black/50">
          <button className="hover:bg-gray-300" onClick={handleZoomIn}>
            +
          </button>
          <button className="hover:bg-gray-300" onClick={handleZoomOut}>
            -
          </button>
        </div>
      )}
      <ComposableMap
        projection={proj}
        width={mapWidth}
        height={mapHeight}
        data-tip=""
        projectionConfig={{ rotate, scale }}
        className="outline-none h-full w-full mx-auto"
      >
        {staticMap ? (
          <>{children}</>
        ) : (
          <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates}
            onMoveEnd={handleMoveEnd}
            translateExtent={[
              [0, 0],
              [mapWidth, mapHeight],
            ]}
          >
            <Sphere className="fill-gray-50" />
            {children}
          </ZoomableGroup>
        )}
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
      <MapContainer proj="geoEquirectangular" border>
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
  const [activeRegion, setActiveRegion] = useState("")
  const countryData = getCountryData(code)

  return (
    <div className="xl:flex gap-4">
      <div className="xl:w-1/2 grid sm:grid-cols-2 gap-x-4 pb-4">
        {countryData.subdivisions.map((subdiv) => (
          <div
            className={`flex rounded-md cursor-pointer p-2 leading-snug inline-block ${
              activeRegion === subdiv.name ? "bg-black/5" : ""
            }`}
            onMouseEnter={() => setActiveRegion(subdiv.name)}
            onMouseLeave={() => setActiveRegion("")}
          >
            <div className="px-1.5 py-0.5 text-sm font-mono font-semibold bg-black/5 rounded mr-2 h-fit">
              {subdiv.code}
            </div>
            <div>{subdiv.name}</div>
          </div>
        ))}
      </div>
      <div className="xl:w-1/2">
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
          border
        >
          <Geographies
            geography={`https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json`}
          >
            {({ geographies }) =>
              geographies.map(
                (feature) =>
                  feature.properties.adm0_a3 !== code && (
                    <Geography
                      className="outline-none stroke-gray-100 stroke-1 fill-gray-200"
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
              geographies.map((feature) => {
                const name =
                  level == 1
                    ? feature.properties.NAME_1
                    : level == 2
                    ? feature.properties.NAME_2
                    : feature.properties.NAME_3
                return (
                  <Geography
                    className={`outline-none stroke-gray-50 ${
                      activeRegion === name
                        ? "fill-gray-400"
                        : "fill-gray-300 hover:fill-gray-400"
                    }`}
                    key={feature.rsmKey}
                    geography={feature}
                    onMouseEnter={() => {
                      setTooltipContent(name)
                      setActiveRegion(name)
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("")
                      setActiveRegion("")
                    }}
                  />
                )
              })
            }
          </Geographies>
        </MapContainer>
        <ReactTooltip className="bg-black text-white">
          {tooltipContent}
        </ReactTooltip>
      </div>
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
      mapWidth={512}
      mapHeight={512}
      rotate={[-countryData.coordinates[0], -countryData.coordinates[1], 0]}
      staticMap
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
