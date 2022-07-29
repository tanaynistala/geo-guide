import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex items-center font-mono justify-between py-16 mx-auto">
      <Link href="/">
        <a className="bg-blue-400 hover:bg-orange-400 transition-all rounded text-white font-mono font-bold text-sm pl-1 pr-4 pt-4">
          G<span className="hidden md:inline">eoGuide.</span>
        </a>
      </Link>

      <ul className="flex items-center space-x-8 text-sm font-medium text-gray-500">
        <Link href="/" passHref>
          <li className="hidden lg:block hover:text-blue-400 py-2 px-3 hover:bg-gray-100 hover:cursor-pointer rounded-lg">
            Home
          </li>
        </Link>

        <Link href="/guides" passHref>
          <li className="hover:text-blue-400 py-2 px-3 hover:bg-gray-100 hover:cursor-pointer rounded-lg">
            Guides
          </li>
        </Link>

        <Link href="/competitive" passHref>
          <li className="hover:text-blue-400 py-2 px-3 hover:bg-gray-100 hover:cursor-pointer rounded-lg">
            Competitive
          </li>
        </Link>

        <Link href="/about" passHref>
          <li className="hover:text-blue-400 py-2 px-3 hover:bg-gray-100 hover:cursor-pointer rounded-lg">
            About
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
