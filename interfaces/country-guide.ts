import { MDXRemoteSerializeResult } from "next-mdx-remote";

type CountryGuideType = {
  slug: string;
  content: MDXRemoteSerializeResult;
};

export default CountryGuideType;
