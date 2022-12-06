import fs from "fs"
import path from "path"
import matter from "gray-matter"

import { serialize } from "next-mdx-remote/serialize"

// Plugins
import remarkUnwrapImages from "remark-unwrap-images"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

export function getDirectory(postType: string) {
  switch (postType) {
    case "country":
      return path.resolve("content/countries")

    case "event":
      return path.resolve("content/events")

    default:
      return path.resolve("content/guides")
  }
}

export function getSlugs(postType: string) {
  if (postType === "country") {
    return require("./geo-data/geography.geo.json").features.map((feature) => {
      return feature.properties.adm0_a3
    })
  } else {
    return fs.readdirSync(getDirectory(postType)).map((filepath) => {
      return filepath.replace(/\.md$/, "")
    })
  }
}

export async function getGuide(postType: string, slug: string) {
  const withMDX = (content) =>
    serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkUnwrapImages],
        rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
      },
    })

  const getHeadings = (content: String) => {
    const hx: RegExp = /#{1,2} .+/g
    const matches = content.match(hx)

    return matches.map((match) => {
      const level = match.match(/#{2} .+/g) ? 2 : 1

      var title = match
        .replace("[", "")
        .replace("]", "")
        .replace(/ *\([^)]*\) */g, "")
        .replace(/ *`[^)]*` */g, "")
        .replace(/#{1,6} */g, "")

      const isStarred = title.endsWith("<Star />")

      title = title.replace(/<.*>/g, "")

      const link =
        "#" +
        title
          .replace(/ /g, "-")
          .replace(/[^a-zA-Z0-9_-]/g, "")
          .toLowerCase()

      return {
        title,
        link,
        level,
        isStarred,
      }
    })
  }

  const filepath = path.join(getDirectory(postType), `${slug}.md`)

  let fileContents = { data: {}, content: "" }

  if (postType === "country") {
    if (fs.existsSync(filepath)) {
      fileContents.content = fs.readFileSync(filepath, "utf8")
    } else {
      fileContents.content = `
					## Whoops!
					Looks like we don't have a page for ${
            require("./geo-api").getCountryData(slug).name
          } yet. This may be because we haven't gotten around to it yet, or it doesn't have coverage altogether. Check back later!`
    }
  } else {
    fileContents = matter(fs.readFileSync(filepath, "utf8"))
  }

  const mdxSource = await withMDX(fileContents.content)

  const headings = getHeadings(fileContents.content)

  const result = {
    slug,
    ...fileContents.data,
    content: mdxSource,
    headings,
  }

  return result
}

export function getGuides(postType: string) {
  const slugs = getSlugs(postType)
  const guides = slugs.map((slug) => getGuide(postType, slug))

  if (postType === "country") {
    return guides
  } else {
    return guides.sort((a, b) => {
      return a.date > b.date
    })
  }
}
