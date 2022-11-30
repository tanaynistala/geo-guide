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
    <div>
      <div className="max-w-5xl xl:max-w-7xl mx-auto">
        <Meta title={title} description={description} url={url} />
        <Header />

        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
