import Link from "next/link"

const Footer = ({}) => {
  return (
    <nav className="sm:grid grid-cols-4 p-8 items-start justify-between gap-4 bg-gray-100">
      <Link href="/">
        <a className="w-12 p-1 bg-gray-800 hover:bg-emerald-700 transition-colors rounded-xl">
          <img src="/logo.png" />
        </a>
      </Link>

      <ul className="flex flex-col">
        <h3 className="font-medium px-4 py-2">Title 1</h3>
        <NavLink href="/link1" title="Link 1" />
        <NavLink href="/link1" title="Link 1" />
        <NavLink href="/link1" title="Link 1" />
        <NavLink href="/link1" title="Link 1" />
      </ul>
      <ul className="flex flex-col">
        <h3 className="font-medium px-4 py-2">Title 1</h3>
        <NavLink href="/link1" title="Link 1" />
        <NavLink href="/link1" title="Link 1" />
        <NavLink href="/link1" title="Link 1" />
        <NavLink href="/link1" title="Link 1" />
      </ul>
      <ul className="flex flex-col">
        <h3 className="font-medium px-4 py-2">Title 1</h3>
        <NavLink href="/link1" title="Link 1" />
        <NavLink href="/link1" title="Link 1" />
        <NavLink href="/link1" title="Link 1" />
        <NavLink href="/link1" title="Link 1" />
      </ul>
    </nav>
  )
}

const NavLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link href={href} passHref>
      <a className="py-2 px-4 hover:bg-gray-100 rounded-xl text-black/50">
        <li>{title}</li>
      </a>
    </Link>
  )
}

export default Footer
