import Map from "./map"
import CountryList from "./country-list"
import CountryGrid from "./country-grid"
import Link from "next/link"

const WorldMap = () => {
  return (
    <section className="flex flex-col">
      {/* <div className="mb-4">
        <div className="lg:grid lg:grid-cols-2">
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight tracking-tight font-bold self-end">
            Country Guides
          </h3>
          <p className="text-lg leading-relaxed mb-4 font-mono italic">
            Explore handmade guides for over 200 countries, territories, and
            regions!
          </p>
        </div>
      </div> */}
      <div className="lg:grid lg:grid-cols-4 lg:gap-x-8">
        <div className="col-span-3 mb-4 overflow-clip">
          <Map />
        </div>
        <div className="hidden lg:block">
          <CountryList />
        </div>
        <div className="lg:hidden mt-4">
          <CountryGrid />
        </div>
      </div>
    </section>
  )
}

export default WorldMap
