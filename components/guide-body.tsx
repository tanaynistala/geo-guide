import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import TOC from "./toc";
import CountryMap from "./country-map";
import SubdivisionMap from "./subdivision-map/subdivision-map";
import LicensePlate from "./page-components/license-plate";

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

const TextLink = ({ href, className, ...rest }) => {
  if (className === "toc-link") {
    return (
      <Link href={href}>
        <a className="hover:text-blue-500" {...rest} />
      </Link>
    );
  } else if (href) {
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

const Code = ({ ...props }) => {
  return (
    <span
      className="px-1 py-0.5 mx-0.5 text-sm font-mono font-semibold bg-black/5 rounded"
      {...props}
    />
  );
};

const Img = (props) => (
  // height and width are part of the props, so they get automatically passed here with {...props}
  <Image {...props} layout="responsive" loading="lazy" />
);

const components = {
  Head,
  Image,
  Link,
  CountryMap,
  SubdivisionMap,
  LicensePlate,
  a: TextLink,
  nav: Nav,
  img: Img,
  code: Code,
};

type Props = {
  content: MDXRemoteSerializeResult;
};

const GuideBody = ({ content }: Props) => {
  return (
    <div className="mb-32 prose lg:prose-lg max-w-full lg:max-w-3xl mx-auto">
      <MDXRemote {...content} components={components} />
    </div>
  );
};

export default GuideBody;
