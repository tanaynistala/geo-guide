import Link from "next/link";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight bg-blue-400 hover:bg-orange-400 transition-all rounded-lg md:rounded-xl text-white font-mono text-sm pl-1 md:pl-4 pr-4 md:pr-12 pt-4 md:pt-8 select-none">
        G<span className="hidden xl:inline">eoGuide.</span>
      </h1>

      <ul className="flex items-center space-x-8 font-medium text-gray-500 text-center md:text-left text-lg mt-5 md:pl-8">
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
    </section>
  );
};

export default Intro;
