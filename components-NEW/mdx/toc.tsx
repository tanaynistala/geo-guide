import Link from "next/link"
import { useState } from "react"

const TOC = ({ headings }) => {
  const [showStarred, setFilter] = useState(false)

  return (
    <div className="p-8 pt-0 mb-24">
      <button
        className="px-2 py-1 mb-4 rounded-md hover:bg-black/5"
        onClick={() => setFilter(!showStarred)}
      >
        Show Starred Only
      </button>

      <ol className="">
        {headings
          .filter((head) => head.isStarred || !showStarred)
          .map((heading) => (
            <li className={heading.level === 2 ? "ml-4 mt-3" : "mt-4"}>
              <Link href={heading.link}>
                <a className="flex justify-between px-2 py-1 -my-2 hover:bg-black/5 rounded-md text-black/50">
                  {heading.title}
                  {heading.isStarred && (
                    <svg
                      className="inline-block h-6 align-text-bottom"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="100" height="100" rx="50" fill="#E6EBE7" />
                      <path
                        d="M48.4425 26.1149C49.1761 24.6284 51.2958 24.6284 52.0294 26.1149L58.5874 39.4028C58.8787 39.9931 59.4418 40.4022 60.0933 40.4968L74.7573 42.6277C76.3978 42.866 77.0528 44.882 75.8658 46.039L65.2547 56.3822C64.7834 56.8417 64.5683 57.5037 64.6795 58.1525L67.1845 72.7573C67.4647 74.3911 65.7498 75.637 64.2826 74.8656L51.1666 67.9702C50.584 67.6639 49.8879 67.6639 49.3053 67.9702L36.1893 74.8656C34.7221 75.637 33.0072 74.3911 33.2874 72.7573L35.7924 58.1525C35.9036 57.5037 35.6885 56.8417 35.2172 56.3822L24.6062 46.039C23.4191 44.882 24.0741 42.866 25.7146 42.6277L40.3786 40.4968C41.0301 40.4022 41.5932 39.993 41.8845 39.4028L48.4425 26.1149Z"
                        fill="#A9BDAD"
                      />
                    </svg>
                  )}
                </a>
              </Link>
            </li>
          ))}
      </ol>
    </div>
  )
}

export default TOC
