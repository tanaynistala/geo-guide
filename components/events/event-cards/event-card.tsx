import Link from "next/link"
import EventType from "../../../interfaces/event"
import DateFormatter from "../../../components/date-formatter"

type Props = {
  event: EventType
  href: String
}

const EventCard = ({ event, href }: Props) => {
  return (
    <div className="group p-4 -m-4 hover:bg-gray-100 rounded-xl transition-all">
      <Link href={`${href}`}>
        <a>
          <div>
            <h2 className="text-xl font-semibold break-words">{event.title}</h2>
            <p className="text-base 2xl:text-xl opacity-70 my-2">
              {event.excerpt}
            </p>
            <p className="font-medium opacity-70">
              {event.organizer.name} ∙ <DateFormatter dateString={event.date} />
            </p>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default EventCard
