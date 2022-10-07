import { useRouter } from "next/router"
import ErrorPage from "next/error"
import Container from "../../components/container"
import Body from "../../components/events/body"
import Header from "../../components/header"
import GuideHeader from "../../components/events/header"
import Layout from "../../components/layout"
import { getGuide, getSlugs } from "../../lib/api"
import { Title } from "../../components/typography"
import Head from "next/head"
import type EventType from "../../interfaces/event"

type Props = {
  event: EventType
  moreEvents: EventType[]
  preview?: boolean
}

export default function Guide({ event, moreEvents, preview }: Props) {
  const router = useRouter()

  if (!router.isFallback && !event?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <Title text="Loading…" />
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{event.title} | GeoGuide</title>
                <meta property="og:image" content={event.ogImage.url} />
              </Head>
              <GuideHeader
                title={event.title}
                coverImage={event.coverImage}
                date={event.date}
                organizer={event.organizer}
              />
              <Body content={event.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const slug = params.slug
  const event = await getGuide("event", slug)

  return {
    props: {
      event,
    },
  }
}

export async function getStaticPaths() {
  const paths = getSlugs("event").map((slug) => {
    return {
      params: {
        slug,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}
