import Country from "../../interfaces/country";
import { getCountryData } from "../../lib/geo-api";
import Image from "next/image";

type Props = {
  country: Country;
};

const FactCards = ({ country }: Props) => {
  return (
    <>
      <div className="flex flex-row space-x-8 stretch">
        <div className="rounded-lg p-2 bg-gray-100 space-y-2">
          <div className="flex items-center text-lg font-medium text-gray-500 leading-tight md:leading-none ml-1 p-2">
            Flag
          </div>
          <img
            src={`https://countryflagsapi.com/png/${
              getCountryData(country.code).properties.iso_a3
            }`}
            alt={`Flag of ${getCountryData(country.code).properties.admin}`}
            className="h-32"
          />
        </div>
      </div>
    </>
  );
};

export default FactCards;
