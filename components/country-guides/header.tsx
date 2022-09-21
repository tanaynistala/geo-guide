import { Title } from "../typography"
import Map from "./focus-map"
import Country from "../../interfaces/country"

type Props = {
  title: string
  country: Country
}

const GuideHeader = ({ title, country }: Props) => {
  return (
    <>
      <div className="flex flex-row space-x-8 stretch mb-16 mt-12 mx-auto">
        <Map country={country} />
        <div className="flex-1 self-start">
          <div className="flex items-center text-lg font-medium text-gray-500 leading-tight md:leading-none mb-2">
            <span>{country.continent}</span>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10.75 8.75L14.25 12L10.75 15.25"
              ></path>
            </svg>
            <span>{country.subregion}</span>
          </div>
          <Title title={title} />
        </div>
      </div>
    </>
  )
}

export default GuideHeader
