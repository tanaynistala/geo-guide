import Link from "next/link"

const Header = ({}) => {
  return (
    <nav className="sm:flex m-8 items-center justify-between gap-4">
      <Link href="/">
        <a>
          <img
            src="/logo.png"
            className="w-12 p-1 bg-gray-800 hover:bg-emerald-700 transition-colors rounded-xl mx-auto"
          />
        </a>
      </Link>

      <ul className="grid grid-cols-3 sm:grid-cols-4 gap-4">
        <span className="hidden sm:flex">
          <NavLink href="/" title="Home" />
        </span>
        <NavLink href="/guides" title="Guides" />
        <NavLink href="/events" title="Events" />
        <NavLink href="/about" title="About" />
      </ul>
    </nav>
  )
}

const NavLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link href={href} passHref>
      <a className="py-2 px-4 text-center hover:bg-gray-100 rounded-xl font-medium text-black/50">
        <li>{title}</li>
      </a>
    </Link>
  )
}

export default Header
