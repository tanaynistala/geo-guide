import Container from "../../components/container"
import Header from "../../components/header"
import Layout from "../../components/layout"
import Head from "next/head"

import HeroCard from "../../components/events/event-cards/hero-card"
import EventCard from "../../components/events/event-cards/event-card"

import { Title, Subtitle } from "../../components/typography"
import { getGuides } from "../../lib/api"
import EventType from "../../interfaces/event"

type Props = {
  allEvents: EventType[]
}

export default function Index({ allEvents }: Props) {
  const heroEvent = allEvents[0]
  const moreEvents = allEvents.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Events | GeoGuide</title>
        </Head>
        <Container>
          <Header />

          <Title text="Events" />

          <Subtitle text="There's always something going on in the world of GeoGuessr, whether you're a competitive player or just casually playing the game!" />

          {heroEvent && (
            <HeroCard event={heroEvent} href={`/events/${heroEvent.slug}`} />
          )}

          <div className="grid grid-flow-row grid-cols-2 gap-16 mb-32">
            {moreEvents.length > 0 &&
              moreEvents.map((event) => (
                <EventCard event={event} href={`/events/${event.slug}`} />
              ))}
          </div>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allEvents = await Promise.all(getGuides("event"))
  // const allGuides = JSON.stringify(events);

  return {
    props: {
      allEvents,
    },
  }
}
