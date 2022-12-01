import { MDXRemoteSerializeResult } from "next-mdx-remote"
import { useState } from "react"

import Body from "./body"
import TOC from "./toc"

type Props = {
  content: MDXRemoteSerializeResult
  headings: Array<any>
  children: React.ReactNode
}

const Container = ({ content, headings, children }: Props) => {
  const [visibility, setVisibility] = useState(false)

  return (
    <div>
      <div
        className={`flex flex-row-reverse w-full justify-between md:flex-row ${
          visibility ? "fixed md:sticky" : "sticky"
        } top-0 bg-white z-20`}
      >
        <div className="w-1/2 md:w-1/3 xl:w-1/4 p-8">
          <button
            className="h-10 flex ml-auto md:ml-0 gap-2 px-2 py-1 hover:bg-black/5 rounded-md"
            onClick={() => setVisibility(!visibility)}
          >
            <h1 className="text-xl font-medium my-auto">Table of Contents</h1>
            <svg
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 24 24"
              className={`${
                visibility ? "rotate-0" : "-rotate-90"
              } transition-transform hidden md:inline-block my-auto`}
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.25 10.75L12 14.25L8.75 10.75"
              ></path>
            </svg>
          </button>
        </div>
        <div className="w-1/2 md:w-2/3 xl:w-3/4 p-8">{children}</div>
      </div>
      <article className="flex flex-col md:flex-row">
        <div
          className={`transition-all mr-auto ${
            visibility ? "md:w-1/3 xl:w-1/4" : "w-0"
          }`}
        >
          {visibility && (
            <aside className="bg-white fixed w-screen z-10 md:sticky md:w-auto top-24 bottom-0 md:bottom-auto overflow-y-auto overscroll-contain">
              <TOC headings={headings} />
            </aside>
          )}
        </div>
        <div
          className={`transition-all ml-auto ${
            visibility ? "md:w-2/3 xl:w-3/4" : "w-full"
          }`}
        >
          <Body content={content} />
        </div>
      </article>
    </div>
  )
}

export default Container
