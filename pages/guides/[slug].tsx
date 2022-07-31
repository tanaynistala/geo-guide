import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import GuideBody from "../../components/guide/guide-body";
import Header from "../../components/header";
import GuideHeader from "../../components/guide/guide-header";
import Layout from "../../components/layout";
import { getGuideBySlug, getAllGuides } from "../../lib/guides-api";
import GuideTitle from "../../components/guide/guide-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import type GuideType from "../../interfaces/guide";

type Props = {
  guide: GuideType;
  moreGuides: GuideType[];
  preview?: boolean;
};

export default function Guide({ guide, moreGuides, preview }: Props) {
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
  const guide = getGuideBySlug(params.slug, ["title", "slug", "content"]);
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
  const guides = getAllGuides(["slug"]);

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
