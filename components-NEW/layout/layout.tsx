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
    <div className="max-w-5xl mx-auto">
      <Meta title={title} description={description} url={url} />
      <Header />

      <div>
        <main>{children}</main>
      </div>

      <Footer />
    </div>
  )
}

export default Layout
