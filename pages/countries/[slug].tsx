import { useRouter } from "next/router"
import ErrorPage from "next/error"

import Layout from "../../components-NEW/layout/layout"
import Container from "../../components-NEW/mdx/container"

import { getGuide, getSlugs } from "../../lib/api-NEW"
import { getCountryData } from "../../lib/geo-api"
import type CountryGuideType from "../../interfaces/country-guide"

type Props = {
  guide: CountryGuideType
}

export default function Guide({ guide }: Props) {
  const router = useRouter()
  if (!router.isFallback && !guide?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const countryData = getCountryData(guide.slug)

  return (
    <Layout
      title={countryData.name}
      description={`A guide to ${countryData.name} in GeoGuessr`}
      url={router.asPath}
    >
      {router.isFallback ? (
        <h1>Loading...</h1>
      ) : (
        <Container content={guide.content} headings={guide.headings} />
      )}
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
  const paths = getSlugs("country").map((slug: string) => {
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
