import Link from "next/link"

const Footer = ({}) => {
  return (
    <div className="bg-gray-100">
      <nav className="max-w-5xl xl:max-w-7xl sm:grid grid-cols-4 p-8 items-start justify-between gap-4 mx-auto">
        <div className="flex flex-col">
          <Link href="/">
            <a className="w-12 p-1 bg-gray-800 hover:bg-emerald-700 transition-colors rounded-xl">
              <img src="/logo.png" />
            </a>
          </Link>
          <a className="text text-black/50 font-medium mt-2">GeoGuide</a>
        </div>

        <ul className="flex flex-col gap-1">
          <h3 className="font-medium p-2">Guides</h3>
          <NavLink href="/link1" title="Link 1" />
          <NavLink href="/link1" title="Link 1" />
          <NavLink href="/link1" title="Link 1" />
          <NavLink href="/link1" title="Link 1" />
        </ul>
        <ul className="flex flex-col gap-1">
          <h3 className="font-medium p-2">Continents</h3>
          <NavLink href="/continent/north-america" title="North America" />
          <NavLink href="/continent/south-america" title="South America" />
          <NavLink href="/continent/europe" title="Europe" />
          <NavLink href="/continent/africa" title="Africa" />
          <NavLink href="/continent/asia" title="Asia" />
          <NavLink href="/continent/oceania" title="Oceania" />
        </ul>
        <ul className="flex flex-col gap-1">
          <h3 className="font-medium p-2">Events</h3>
          <NavLink href="/link1" title="Link 1" />
          <NavLink href="/link1" title="Link 1" />
          <NavLink href="/link1" title="Link 1" />
          <NavLink href="/link1" title="Link 1" />
        </ul>
      </nav>
    </div>
  )
}

const NavLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link href={href} passHref>
      <a className="py-1 px-2 hover:bg-black/5 rounded-lg text-black/50">
        <li>{title}</li>
      </a>
    </Link>
  )
}

export default Footer
