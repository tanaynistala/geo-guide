import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import GuideBody from "../../components/guide/guide-body";
import Header from "../../components/header";
import GuideHeader from "../../components/guide/guide-header";
import Layout from "../../components/layout";
import { getGuide, getSlugs } from "../../lib/api";
import GuideTitle from "../../components/guide/guide-title";
import Head from "next/head";
import type GuideType from "../../interfaces/guide";

type Props = {
  guide: GuideType;
};

export default function Guide({ guide }: Props) {
  const router = useRouter();
  if (!router.isFallback && !guide?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <GuideTitle title={Loading…}/>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{guide.title} | GeoGuide</title>
              </Head>
              <GuideHeader title={guide.title} />
              <GuideBody content={guide.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const slug = params.slug;
  const guide = await getGuide("other", slug);

  return {
    props: {
      guide,
    },
  };
}

export async function getStaticPaths() {
  const paths = getSlugs("other").map((slug) => {
    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
