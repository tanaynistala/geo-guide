import Country from "../../interfaces/country";
import Image from "next/image";
import Card from "../card";

type Props = {
  country: Country;
};

const FactCards = ({ country }: Props) => {
  return (
    <>
      <div className="grid grid-flow-col-dense grid-cols-3 grid-rows-2 gap-4">
        <div className="row-span-2">
          <Card title="Flag">
            <div className="aspect-video">
              <img
                src={`https://countryflagsapi.com/png/${country.code3}`}
                alt={`Flag of ${country.name}`}
                className="h-full"
              />
            </div>
          </Card>
        </div>
        <Card title="Capital"></Card>
        <Card title="Domain TLD"></Card>
        <Card title="Hello"></Card>
        <Card title="Hello"></Card>
      </div>
    </>
  );
};

export default FactCards;
