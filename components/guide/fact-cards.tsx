import Country from "../../interfaces/country";
import Image from "next/image";
import Card from "../card";

type Props = {
  country: Country;
};

const FactCards = ({ country }: Props) => {
  return (
    <>
      <div className="flex gap-4 justify-center items-center max-h-48 mb-8">
        <img
          src={`https://countryflagsapi.com/png/${country.code2}`}
          alt={`Flag of ${country.name}`}
          className="rounded-xl bg-gray-100 h-48 max-w-xs border-2"
        />
        <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-4 h-48">
          <Card title="Capital">{country.capital}</Card>
          <Card title="Driving Side">
            {country.drivesOnLeft ? "Left" : "Right"}
          </Card>
          <Card title="Currency">
            {country.currency[0]}{" "}
            <span className="text-xs">({country.currency[1]})</span>
          </Card>
          <Card title="Domain TLD">
            <span className="text-slate-400">www.example</span>
            {country.tld}
          </Card>
        </div>
      </div>
    </>
  );
};

export default FactCards;
