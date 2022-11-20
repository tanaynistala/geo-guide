import Container from "../components/container"
import Header from "../components/header"
import Layout from "../components/layout"
import Head from "next/head"
import Link from "next/link"
import { getSheetDirs } from "../lib/api"
import GuideType from "../interfaces/guide"

type Props = {
  dirPaths
}

export default function Index({ dirPaths }: Props) {
  const dirs = dirPaths
  console.log(dirs)

  return (
    <>
      <Layout>
        <Head>
          <title>GeoGuide</title>
        </Head>
        <Container>
          <Header />

          <div>
            {dirs.map((dir) => (
              <div className="mb-8">
                <h1 className="text-lg font-bold font-mono">
                  {dir.dirName.toUpperCase()}
                </h1>
                <div>
                  <ul>
                    {dir.files.map((file) => (
                      <li>
                        <Link href={`/datasheets/${dir.dir}/${file}`}>
                          <a className="text-sm font-mono">{file}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const dirPaths = getSheetDirs()

  return {
    props: {
      dirPaths,
    },
  }
}
