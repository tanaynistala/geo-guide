import Meta from "./meta"
import Header from "./header"
import Footer from "./footer"

type Props = {
  preview?: boolean

  title: string
  description: string
  url: string

  children: React.ReactNode
}

const Layout = ({ title, description, url, children }: Props) => {
  return (
    <>
      <Meta title={title} description={description} url={url} />
      <Header />

      <div className="max-w-5xl mx-auto">
        <main>{children}</main>
      </div>

      <Footer />
    </>
  )
}

export default Layout
