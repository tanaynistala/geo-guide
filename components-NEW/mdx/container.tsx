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
        className={`flex w-screen flex-row-reverse justify-between md:flex-row p-8 gap-8 ${
          visibility ? "fixed md:sticky" : "sticky"
        } top-0 bg-white z-20`}
      >
        <div className="md:w-1/3 xl:w-1/4">
          <button
            className="h-10 flex gap-2 px-2 py-1 hover:bg-black/5 rounded-md"
            onClick={() => setVisibility(!visibility)}
          >
            <h1 className="text-2xl font-medium">Table of Contents</h1>
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
        <div className="md:w-2/3 xl:w-3/4">{children}</div>
      </div>
      <article className="flex flex-col md:flex-row">
        {visibility && (
          <div className="md:w-1/3 xl:w-1/4">
            <aside className="bg-white fixed w-screen z-10 md:sticky md:w-auto top-24 bottom-0 md:bottom-auto overflow-y-auto overscroll-contain">
              <TOC headings={headings} />
            </aside>
          </div>
        )}
        <div className={visibility ? "md:w-2/3 xl:w-3/4" : "w-full"}>
          <Body content={content} />
        </div>
      </article>
    </div>
  )
}

export default Container

/*
<article className="flex flex-col md:flex-row">
  <div className="md:w-1/3 xl:w-1/4">
    <aside className="sticky top-0 overflow-y-scroll md:h-screen">
      <TOC headings={headings} />
    </aside>
  </div>
  <div className="md:w-2/3 xl:w-3/4">
    <Body content={content} />
  </div>
</article>
*/
