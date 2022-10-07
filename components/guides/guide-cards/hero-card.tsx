import Link from "next/link"
import GuideType from "../../../interfaces/guide"
import DateFormatter from "../../../components/date-formatter"

type Props = {
  guide: GuideType
  href: String
}

const HeroCard = ({ guide, href }: Props) => {
  return (
    <div className="group my-12 p-4 pb-6 -m-4 hover:bg-gray-100 rounded-3xl transition-all">
      <Link href={`${href}`}>
        <a>
          <div className="bg-blue-300 rounded-xl flex items-center justify-center">
            <img
              src={guide.coverImage}
              className="group-hover:opacity-50 transition-all rounded-xl"
            />
            <a className="hidden group-hover:flex absolute py-2 px-4 bg-gray-50 rounded-lg font-mono border-blue-300 border-4 text-blue-300 font-bold">
              Read Article →
            </a>
          </div>
          <div className="mt-6 flex flex-col md:flex-row gap-4 md:gap-16">
            <div className="md:w-1/3">
              <h2 className="text-5xl 2xl:text-6xl font-semibold break-words">
                {guide.title}
              </h2>
              <p className="font-medium">
                {guide.author.name} ∙ <DateFormatter dateString={guide.date} />
              </p>
            </div>
            <p className="text-lg 2xl:text-xl opacity-70 md:w-2/3">
              {guide.excerpt}
            </p>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default HeroCard
