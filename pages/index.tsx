import Container from "../components/container"
import Header from "../components/header"
import Layout from "../components/layout"
import Head from "next/head"
import { Title, Subtitle } from "../components/typography"
import WorldMap from "../components/world-map/world-map"
import { getGuides } from "../lib/api"
import GuideType from "../interfaces/guide"
import GuideCard from "../components/guides/guide-cards/guide-card"

type Props = {
  allGuides: GuideType[]
}

export default function Index({ allGuides }: Props) {
  const guides = allGuides
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else if (a.date > b.date) {
        return -1
      } else {
        return 0
      }
    })
    .slice(0, 3)

  return (
    <>
      <Layout>
        <Head>
          <title>GeoGuide</title>
        </Head>
        <Container>
          <Header />

          <div className="mt-16 mb-16 space-y-8 md:w-3/4 p-4">
            <h1 className="text-5xl text-zinc-800 font-semibold">
              Handcrafted guides about everything{"\n"}
              <span className="text-red-400">GeoGuessr</span>
            </h1>
            <Subtitle text="Welcome to GeoGuide — the place to learn about everything that's going on in the GeoGuessr-verse! Explore our country-specific guides using the map below, or check out our event guides and tips and tricks documents." />
          </div>

          <h1 className="mt-16 mb-8 text-3xl text-zinc-800 font-semibold p-4">
            Country Guides
          </h1>
          <WorldMap />

          <h1 className="mt-16 mb-8 text-3xl text-zinc-800 font-semibold p-4">
            Fresh off the Street View car
          </h1>
          <div className="flex flex-col gap-12 w-3/4 pl-4 pr-6 mb-32">
            {guides.length > 0 &&
              guides.map((guide) => (
                <GuideCard guide={guide} href={`/guides/${guide.slug}`} />
              ))}
          </div>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allGuides = await Promise.all(getGuides("other"))
  allGuides
  // const allGuides = JSON.stringify(guides);

  return {
    props: {
      allGuides,
    },
  }
}
