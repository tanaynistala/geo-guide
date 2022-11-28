import Card from "../components-NEW/card"
import Breadcrumb from "../components-NEW/breadcrumb"
import { WorldMap, CountryMap, MiniMap } from "../components-NEW/map"
import { getCountryData } from "../lib/geo-api"

export default function Test() {
  return (
    <div className="p-8 bg-gray-100">
      <WorldMap />
      <CountryMap code="PNG" scale={1500} level={1} />
      <MiniMap countryCode="PNG" />
    </div>
  )
}
