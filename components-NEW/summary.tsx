import Country from "../interfaces/country"

import Card from "./card"
import Breadcrumb from "./breadcrumb"
import { MiniMap } from "./map"

type Props = {
  country: Country
}

const Summary = ({ country }: Props) => {
  const Flag = ({}) => {
    return (
      <div className="p-1 bg-gray-100 rounded-lg">
        <img
          src={`https://raw.githubusercontent.com/hampusborgos/country-flags/main/svg/${country.code2.toLowerCase()}.svg`}
          alt={`Flag of ${country.name}`}
          className="rounded-md"
        />
      </div>
    )
  }

  const CamGen = ({ gen, available = false }) => {
    return (
      <div>
        <span className="px-1.5 py-0.5 text-sm font-mono font-semibold bg-black/10 rounded mr-2">
          {available ? "Y" : "N"}
        </span>
        {gen}
      </div>
    )
  }

  return (
    <div className="flex flex-col p-8 border-b-4 gap-8">
      <div className="flex gap-8 justify-between">
        <div className="flex flex-col justify-end">
          <Breadcrumb
            items={[country.continent].concat(
              country.subregion === country.continent ? [] : [country.subregion]
            )}
          />
          <h1 className="text-6xl xl:text-8xl font-semibold tracking-tight">
            {country.name}
          </h1>
        </div>

        <div className="w-1/4 md:w-1/6">
          <MiniMap countryCode={country.code3} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 lg:grid-flow-col gap-4">
        <div className="row-span-3 lg:col-span-2">
          <Flag />
        </div>

        <Card title="Capital">{country.capital}</Card>

        <Card title="Largest City">{country.capital}</Card>

        <Card title="Top-Level Domain">
          {country.tld !== "N/A" ? (
            <>
              <span className="text-black/50">www.example</span>
              <span className="font-medium inline-flex">{country.tld}</span>
            </>
          ) : (
            "N/A"
          )}
        </Card>

        <div className="sm:order-last lg:order-none">
          <Card title="Calling Code">+{country.callingCode}</Card>
        </div>

        <div className="sm:order-last lg:order-none">
          <Card title="Driving Side">
            {country.drivesOnLeft ? "Left" : "Right"}
          </Card>
        </div>

        <Card title="Currency">
          <span className="px-1.5 py-0.5 text-sm font-mono font-semibold bg-black/10 rounded mr-2">
            {country.currency[1]}
          </span>
          {country.currency[0]}
        </Card>

        <div className="row-span-3 lg:order-last">
          <Card title="Camera Generations">
            <div className="grid">
              <CamGen
                gen="Gen 1"
                available={country.camGens.gen1 === "available"}
              />
              <CamGen
                gen="Gen 2"
                available={country.camGens.gen2 === "available"}
              />
              <CamGen
                gen="Gen 3"
                available={country.camGens.gen3 === "available"}
              />
              <CamGen
                gen="Gen 4"
                available={country.camGens.gen4 === "available"}
              />
              <CamGen gen="Trekker" available={country.camGens.isTrekkerOnly} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Summary

/*
        <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="flex p-8 bg-gray-100 gap-8">
          <MiniMap countryCode={country.code3} />

          <Breadcrumb
            items={[country.continent].concat(
              country.subregion === country.continent ? [] : [country.subregion]
            )}
          />
          <h1 className="text-6xl xl:text-8xl font-semibold tracking-tight">
            {country.name}
          </h1>
        </div>
          <img
            src={`https://raw.githubusercontent.com/hampusborgos/country-flags/main/svg/${country.code2.toLowerCase()}.svg`}
            alt={`Flag of ${country.name}`}
            className="rounded-md"
          />

          <Card title="Camera Generations">
            <ul>
              <li>Gen 1</li>
              <li>Gen 2</li>
              <li>Gen 3</li>
              <li>Gen 4</li>
              <li>Trekker</li>
            </ul>
          </Card>

          <Card title="Capital">{country.capital}</Card>

          <Card title="Top-Level Domain">{country.tld}</Card>

          <Card title="Driving Side">
            {country.drivesOnLeft ? "Left" : "Right"}
          </Card>

          <Card title="Currency">
            <span className="px-1.5 py-0.5 text-sm font-mono font-semibold bg-black/10 rounded mr-2">
              {country.currency[1]}
            </span>
            {country.currency[0]}
          </Card>
        </div>
        */
