import Link from "next/link"

const TOC = ({ headings }) => {
  return (
    <div className="p-8 h-screen overflow-y-scroll">
      <h1 className="text-2xl font-medium mb-2">Table of Contents</h1>
      <ol>
        {headings.map((heading) => (
          <li className={heading.level === 2 ? "ml-4 mt-3" : "mt-4"}>
            <Link href={heading.link}>
              <a>{heading.title}</a>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default TOC
