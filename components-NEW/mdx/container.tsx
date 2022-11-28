import Body from "./body"
import TOC from "./toc"

const Container = ({ content, headings }) => {
  return (
    <article className="flex flex-col md:flex-row">
      <div className="w-1/3">
        <aside className="sticky top-0">
          <TOC headings={headings} />
        </aside>
      </div>
      <div className="w-2/3">
        <Body content={content} />
      </div>
    </article>
  )
}

export default Container
