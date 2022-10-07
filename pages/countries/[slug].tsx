import { useRouter } from "next/router"
import ErrorPage from "next/error"
import Container from "../../components/container"

import { Title } from "../../components/typography"

import Body from "../../components/guides/body"
import Header from "../../components/header"
import Layout from "../../components/layout"
import { getGuide, getSlugs } from "../../lib/api"
import { getCountryData } from "../../lib/geo-api"
import FactCards from "../../components/country-guides/fact-cards"
import Head from "next/head"
import Breadcrumb from "../../components/country-guides/breadcrumb"
import Map from "../../components/country-guides/focus-map"
import GuideHeader from "../../components/country-guides/header"
import TOC from "../../components/toc"
import type CountryGuideType from "../../interfaces/country-guide"

type Props = {
  guide: CountryGuideType
}

export default function Guide({ guide }: Props) {
  const router = useRouter()
  if (!router.isFallback && !guide?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const country = getCountryData(guide.slug)

  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <Title text="Loading…" />
        ) : (
          <>
            <article className="my-8 space-y-4">
              <Head>
                <title>{country.name} | GeoGuide</title>
              </Head>
              <div className="flex flex-row gap-8 mb-8">
                <div className="flex-1 self-start">
                  <Breadcrumb country={country} />
                  <Title text={country.name} />
                </div>
                <div className="w-36 h-36">
                  <Map country={country} />
                </div>
              </div>
              <FactCards country={country} />
              <Body content={guide.content} />
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
  const guide = await getGuide("country", slug)

  return {
    props: {
      guide,
    },
  }
}

export async function getStaticPaths() {
  const paths = getSlugs("country").map((slug) => {
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
