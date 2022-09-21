import { MDXRemoteSerializeResult } from "next-mdx-remote"
import type Author from "./author"

type EventType = {
  slug: string
  title: string
  date: string
  coverImage: string
  organizer: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: MDXRemoteSerializeResult
}

export default EventType
