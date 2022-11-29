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
