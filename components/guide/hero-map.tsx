import Map from "../map";
import CountryList from "../country-list";
import Link from "next/link";

const HeroMap = () => {
  return (
    <section>
      <div className="mb-8 mt-16 lg:grid lg:grid-cols-4 lg:gap-x-8">
        <div className="col-span-3">
          <Map />
        </div>
        <div className="hidden lg:block">
          <CountryList />
        </div>
      </div>
      <div className="md:grid md:grid-cols-3 gap-x-8 mb-20 md:mb-28">
        <div className="col-span-2">
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight tracking-tight font-mono font-bold">
            Country Guides
          </h3>
          <p className="text-lg leading-relaxed mb-4 font-mono">
            Explore handmade guides for over 200 countries, territories, and
            regions!
          </p>
        </div>
        <div className="lg:hidden">
          <CountryList />
        </div>
      </div>
    </section>
  );
};

export default HeroMap;
