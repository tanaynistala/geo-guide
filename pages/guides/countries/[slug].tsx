import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../../components/container";
import GuideBody from "../../../components/guide/guide-body";
import Header from "../../../components/header";
import GuideHeader from "../../../components/guide/country-guide-header";
import Layout from "../../../components/layout";
import {
  getCountryGuideBySlug,
  getAllCountryGuides,
} from "../../../lib/country-guides-api";
import GuideTitle from "../../../components/guide/guide-title";
import FactCards from "../../../components/guide/fact-cards";
import Head from "next/head";
import { CMS_NAME } from "../../../lib/constants";
import markdownToHtml from "../../../lib/markdownToHtml";
import type CountryGuideType from "../../../interfaces/country-guide";

type Props = {
  guide: CountryGuideType;
  preview?: boolean;
};

export default function Guide({ guide, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !guide?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <GuideTitle>Loading…</GuideTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {guide.title} | Next.js Blog Example with {CMS_NAME}
                </title>
              </Head>
              <GuideHeader title={guide.title} country={guide.country} />
              <FactCards country={guide.country} />
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
  const guide = getCountryGuideBySlug(params.slug, [
    "title",
    "country",
    "slug",
    "content",
  ]);
  const content = await markdownToHtml(guide.content || "");

  return {
    props: {
      guide: {
        ...guide,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const guides = getAllCountryGuides(["slug"]);

  return {
    paths: guides.map((guide) => {
      return {
        params: {
          slug: guide.slug,
        },
      };
    }),
    fallback: false,
  };
}
