import { useRouter } from "next/router"
import ErrorPage from "next/error"
import Container from "../../components/container"
import Body from "../../components/guides/body"
import Header from "../../components/header"
import GuideHeader from "../../components/guides/header"
import Layout from "../../components/layout"
import { getGuide, getSlugs } from "../../lib/api"
import { Title } from "../../components/typography"
import Head from "next/head"
import type GuideType from "../../interfaces/guide"

type Props = {
  guide: GuideType
  moreGuides: GuideType[]
  preview?: boolean
}

export default function Guide({ guide, moreGuides, preview }: Props) {
  const router = useRouter()

  if (!router.isFallback && !guide?.slug) {
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
                <title>{guide.title} | GeoGuide</title>
                <meta property="og:image" content={guide.ogImage.url} />
              </Head>
              <GuideHeader
                title={guide.title}
                coverImage={guide.coverImage}
                date={guide.date}
                author={guide.author}
              />
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
  const guide = await getGuide("other", slug)

  return {
    props: {
      guide,
    },
  }
}

export async function getStaticPaths() {
  const paths = getSlugs("other").map((slug) => {
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
