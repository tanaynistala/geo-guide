import GuideTitle from "./guide-title";
import Map from "../focus-map";
import Country from "../../interfaces/country.ts";

type Props = {
  title: string;
  country: Country;
};

const GuideHeader = ({ title, country }: Props) => {
  return (
    <>
      <div className="grid grid-cols-4 2xl:grid-cols-5 grid-rows-2 space-4">
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
      </div>
    </>
  );
};

export default GuideHeader;
