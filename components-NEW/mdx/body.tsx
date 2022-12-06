import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"

import Link from "next/link"
import Image from "next/image"

import { CountryMap } from "../map"

import LicensePlate from "../inline/license-plate"
import RoadNumber from "../inline/road-numbering"
import { RoadMarkings, RoadLane, RoadLine } from "../inline/road-markings"

import RoadShield from "../../components/page-components/road-shield"

const StyledLink = ({ href, className, ...rest }) => {
  return (
    <Link href={href}>
      <a
        className="no-underline hover:underline decoration-2 underline-offset-2 text-blue-500"
        {...rest}
        target={`${href.startsWith("#") ? "" : "_blank"}`}
      ></a>
    </Link>
  )
}

const StyledCode = ({ ...props }) => {
  return (
    <span
      className="px-1.5 py-0.5 text-sm font-mono font-semibold bg-black/5 rounded"
      {...props}
    />
  )
}

const StyledImage = ({ alt, ...props }) => {
  console.log(alt.match(/{h=[1-9]*, w=[1-9]*}/g))

  if (alt.match(/\(h=[1-9]*, w=[1-9]*\)/g)) {
    const height = alt.match(/h=[1-9]*/g)[0].substring(2)
    const width = alt.match(/w=[1-9]*/g)[0].substring(2)

    return <img alt={alt} height={height} width={width} {...props} />
  } else {
    return <img alt={alt} {...props} />
  }
}

const Star = () => {
  return (
    <svg
      className="inline-block h-6 ml-2 align-baseline"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" rx="50" fill="#E6EBE7" />
      <path
        d="M48.4425 26.1149C49.1761 24.6284 51.2958 24.6284 52.0294 26.1149L58.5874 39.4028C58.8787 39.9931 59.4418 40.4022 60.0933 40.4968L74.7573 42.6277C76.3978 42.866 77.0528 44.882 75.8658 46.039L65.2547 56.3822C64.7834 56.8417 64.5683 57.5037 64.6795 58.1525L67.1845 72.7573C67.4647 74.3911 65.7498 75.637 64.2826 74.8656L51.1666 67.9702C50.584 67.6639 49.8879 67.6639 49.3053 67.9702L36.1893 74.8656C34.7221 75.637 33.0072 74.3911 33.2874 72.7573L35.7924 58.1525C35.9036 57.5037 35.6885 56.8417 35.2172 56.3822L24.6062 46.039C23.4191 44.882 24.0741 42.866 25.7146 42.6277L40.3786 40.4968C41.0301 40.4022 41.5932 39.993 41.8845 39.4028L48.4425 26.1149Z"
        fill="#A9BDAD"
      />
    </svg>
  )
}

const components = {
  Link,
  Image,
  CountryMap,
  LicensePlate,
  RoadNumber,
  RoadShield,
  RoadMarkings,
  RoadLane,
  RoadLine,
  Star,
  img: StyledImage,
  a: StyledLink,
  code: StyledCode,
}

type Props = {
  content: MDXRemoteSerializeResult
}

const Body = ({ content }: Props) => {
  return (
    <div className="m-8 mb-24 prose max-w-full">
      <MDXRemote {...content} components={components} />
    </div>
  )
}

export default Body
