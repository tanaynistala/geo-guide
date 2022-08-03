import { MDXRemoteSerializeResult } from "next-mdx-remote";

type GuideType = {
  slug: string;
  title: string;
  content: MDXRemoteSerializeResult;
};

export default GuideType;
