import { MDXRemoteSerializeResult } from "next-mdx-remote"

type CountryGuideType = {
  slug: string
  content: MDXRemoteSerializeResult
  headings: {
    title: string
    link: string
    level: number
    isStarred: boolean
  }[]
}

export default CountryGuideType
