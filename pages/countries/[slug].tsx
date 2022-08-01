import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import GuideBody from "../../components/guide/guide-body";
import Header from "../../components/header";
import GuideHeader from "../../components/guide/country-guide-header";
import Layout from "../../components/layout";
import { getGuide, getSlugs } from "../../lib/api";
import { getCountryData } from "../../lib/geo-api";
import GuideTitle from "../../components/guide/guide-title";
import FactCards from "../../components/guide/fact-cards";
import Head from "next/head";
import type CountryGuideType from "../../interfaces/country-guide";

type Props = {
  guide: CountryGuideType;
};

export default function Guide({ guide }: Props) {
  const router = useRouter();
  if (!router.isFallback && !guide?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const country = getCountryData(guide.slug);

  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <GuideTitle title="Loading…" />
        ) : (
          <>
            {/* <aside className="sidebar">
              <div className="toc">
                <h1>Table of Contents</h1>
                {guide.headingAnchors.length > 0 && (
                  <ul>
                    {guide.headingAnchors.map((anchor) => {
                      return (
                        <li
                          id={`toc-${anchor.anchorId}`}
                          key={anchor.anchorId}
                          className={`ml${anchor.heading[1]} toc-anchor`}
                        >
                          <a href={`#${anchor.anchorId}`}>{anchor.title}</a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </aside> */}
            <article className="mb-32">
              <Head>
                <title>{country.name} | GeoGuide</title>
              </Head>
              <GuideHeader title={country.name} country={country} />
              <FactCards country={country} />
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
  const guide = await getGuide("country", slug);

  return {
    props: {
      guide,
    },
  };
}

export async function getStaticPaths() {
  const paths = getSlugs("country").map((slug) => {
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
