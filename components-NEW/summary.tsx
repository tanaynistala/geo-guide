import Country from "../interfaces/country"

import Card from "./card"
import { MiniMap } from "./map"

type Props = {
  country: Country
}

const Summary = ({ country }: Props) => {
  return (
    <div>
      <div className="flex">
        <img src="" alt={`Flag of ${country.name}`} className="rounded" />
        <h1>{country.name}</h1>
        <MiniMap countryCode={country.code3} />
      </div>
      <div>
        <div>Capital</div>
        <div>Largest City</div>
        <div>Currency</div>
        <div>Dialing Code</div>
        <div>Domain</div>
        <div>Driving Side</div>

        <div>Camera Generations</div>
      </div>
    </div>
    /* <div className="m-8 grid grid-cols-4 gap-4">
      <div className="col-span-2 row-span-2">
        <Card
          // imageSrc={`https://countryflagsapi.com/png/${country.code2}`}
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1920px-Flag_of_Denmark.svg.png"
          imageAlt={`Flag of ${country.name}`}
        />
      </div>
      <Card title="Capital" description={country.capital} />
      <Card title="Largest City" description={country.capital} />
      <Card title="Capital" description={country.capital} />
      <Card title="Largest City" description={country.capital} />
      <Card title="Capital" description={country.capital} />
      <Card title="Largest City" description={country.capital} />
      <Card title="Capital" description={country.capital} />
      <Card title="Largest City" description={country.capital} />
    </div> */
  )
}

export default Summary
