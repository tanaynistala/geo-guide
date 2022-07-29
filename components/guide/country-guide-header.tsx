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
      <div className="grid grid-cols-5 2xl:grid-rows-2">
        <div className="col-span-4">
          <GuideTitle>{title}</GuideTitle>
          <div className="col-span-2 2xl:col-span-1">
            {country.code}
            {country.coordinates}
            {country.zoom}
          </div>
        </div>
        <div className="row-span-2">
          <Map country={country} />
        </div>
      </div>
    </>
  );
};

export default GuideHeader;
