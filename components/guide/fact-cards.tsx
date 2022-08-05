import Country from "../../interfaces/country";
import Image from "next/image";
import Card from "../card";

type Props = {
  country: Country;
};

const FactCards = ({ country }: Props) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4">
        <img
          src={`https://countryflagsapi.com/png/${country.code2}`}
          alt={`Flag of ${country.name}`}
          className="rounded-lg bg-gray-100 h-48 max-w-xs border-4"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-content-stretch h-96 sm:h-48 w-full">
          <Card title="Capital">{country.capital}</Card>
          <Card title="Driving Side">
            {country.drivesOnLeft ? "Left" : "Right"}
          </Card>
          <Card title="Currency">
            {country.currency[0]}{" "}
            <span className="text-xs">({country.currency[1]})</span>
          </Card>
          <Card title="Domain TLD">
            {country.tld !== "N/A" ? (
              <>
                <span className="text-gray-500 opacity-50">www.example</span>
                <span className="font-medium inline-flex">{country.tld}</span>
              </>
            ) : (
              "N/A"
            )}
          </Card>
        </div>
      </div>
    </>
  );
};

export default FactCards;
