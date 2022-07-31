import GuideTitle from "./guide-title";
import Map from "../focus-map";
import Country from "../../interfaces/country";
import { getCountryData } from "../../lib/geo-api";

type Props = {
  title: string;
  country: Country;
};

const GuideHeader = ({ title, country }: Props) => {
  return (
    <>
      {/* <div className="grid grid-cols-4 2xl:grid-cols-5 grid-rows-2 space-4">
        <div className="col-span-3 2xl:col-span-4 row-span-1">
          <GuideTitle>{title}</GuideTitle>
        </div>
        <div className="col-span-1 row-span-2">
          <Map country={country} />
        </div>
        <div className="p-4 mr-4 bg-gray-100 rounded-lg object-cover">
          {country.code}
        </div>
        <div className="p-4 mr-4 bg-gray-100 rounded-lg object-cover">
          {country.code}
        </div>
        <div className="p-4 mr-4 bg-gray-100 rounded-lg object-cover">
          {country.code}
        </div>
      </div> */}

      <div className="flex flex-row space-x-8 stretch mb-16 lg:mb-8">
        <div className="flex-1 self-start">
          <div className="flex items-center text-lg font-medium text-gray-500 leading-tight md:leading-none ml-1">
            <span>{getCountryData(country.code).properties.continent}</span>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.75 8.75L14.25 12L10.75 15.25"
              ></path>
            </svg>
            <span>{getCountryData(country.code).properties.subregion}</span>
          </div>
          <GuideTitle>{title}</GuideTitle>
        </div>
        <div className="flex-initial w-36 h-36">
          <Map country={country} />
        </div>
      </div>
    </>
  );
};

export default GuideHeader;
