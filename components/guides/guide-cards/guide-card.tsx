import Link from "next/link"
import GuideType from "../../../interfaces/guide"
import DateFormatter from "../../../components/date-formatter"

type Props = {
  guide: GuideType
  href: String
}

const HeroCard = ({ guide, href }: Props) => {
  return (
    <div className="group p-4 -m-4 hover:bg-gray-100 rounded-xl transition-all">
      <Link href={`${href}`}>
        <a>
          <div>
            <h2 className="text-xl font-semibold break-words">{guide.title}</h2>
            <p className="text-base 2xl:text-xl opacity-70 my-2">
              {guide.excerpt}
            </p>
            <p className="font-medium opacity-70">
              {guide.author.name} ∙ <DateFormatter dateString={guide.date} />
            </p>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default HeroCard
