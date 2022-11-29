import Body from "./body"
import TOC from "./toc"

const Container = ({ content, headings }) => {
  return (
    <article className="flex flex-col md:flex-row">
      <div className="md:w-1/3 xl:w-1/5">
        <aside className="sticky top-0 overflow-y-scroll h-screen">
          <TOC headings={headings} />
        </aside>
      </div>
      <div className="md:w-2/3 xl:w-4/5">
        <Body content={content} />
      </div>
    </article>
  )
}

export default Container
