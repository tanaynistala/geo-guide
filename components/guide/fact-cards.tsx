import Country from "../../interfaces/country";
import Image from "next/image";
import Card from "../card";

type Props = {
  country: Country;
};

const FactCards = ({ country }: Props) => {
  return (
    <>
      <div className="grid grid-flow-col-dense grid-cols-3 grid-rows-2 gap-4 mb-8">
        <div className="row-span-2">
          <Card title="Flag">
            <div className="aspect-video">
              <img
                src={`https://countryflagsapi.com/png/${country.code2}`}
                alt={`Flag of ${country.name}`}
                className="h-full"
              />
            </div>
          </Card>
        </div>
        <Card title="Capital">{country.capital}</Card>
        <Card title="Domain TLD">{country.tld}</Card>
        <Card title="Currency">{country.currency}</Card>
        <Card title="Driving Side">
          {country.drivesOnLeft ? "Left" : "Right"}
        </Card>
      </div>
    </>
  );
};

export default FactCards;
