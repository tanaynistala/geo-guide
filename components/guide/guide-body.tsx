import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import TOC from "./toc";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.

const Nav = ({ ...props }) => {
  return (
    <TOC>
      <div {...props} />
    </TOC>
  );
};

const TextLink = ({ href, ...rest }) => {
  if (href) {
    return (
      <Link href={href}>
        <a
          className="inline-block px-1 -mx-0.5 hover:bg-blue-500 text-blue-500 hover:text-white rounded no-underline after:content-['_↗']"
          {...rest}
          target={`${href.startsWith("#") ? "" : "_blank"}`}
        />
      </Link>
    );
  }
  return <a {...rest} />;
};

const components = {
  Head,
  Image,
  Link,
  a: TextLink,
  nav: Nav,
};

type Props = {
  content: MDXRemoteSerializeResult;
};

const GuideBody = ({ content }: Props) => {
  return (
    <div className="my-32 prose lg:prose-lg max-w-full lg:max-w-3xl mx-auto">
      <MDXRemote {...content} components={components} />
    </div>
  );
};

export default GuideBody;
