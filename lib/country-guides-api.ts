import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import geoData from "../public/world.geo.json";
import centroidData from "../public/centroids.geo.json";
import { getCountryData } from "./geo-api";

const countryGuidesDirectory = join(process.cwd(), "_guides/_countries");

export function getCountryGuideSlugs() {
  // return fs.readdirSync(countryGuidesDirectory);
  return geoData.features.map((feature) => {
    return feature.properties.adm0_a3 + ".md";
  });
}

export function getCountryGuideBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(countryGuidesDirectory, `${realSlug}.md`);

  let fileContents = "";

  if (fs.existsSync(fullPath)) {
    fileContents = fs.readFileSync(fullPath, "utf8");
  }

  const countryData = getCountryData(realSlug);
  const centroid = centroidData.features.find(
    (feature) => feature.properties.ISO === countryData.properties.iso_a2
  );

  const { data, content } = fs.existsSync(fullPath)
    ? matter(fileContents)
    : {
        data: {
          title: countryData.properties.admin,
          country: {
            code: countryData.properties.adm0_a3,
            coordinates: centroid ? centroid.geometry.coordinates : [0, 0],
            zoom: 300,
          },
        },
        content: `Looks like we don't have a page for ${countryData.properties.admin} yet. This may be because we haven't gotten around to it yet, or it doesn't have coverage altogether. Check back later!`,
      };

  data.country.coordinates =
    data.country.coordinates === [0, 0]
      ? centroid
        ? centroid.geometry.coordinates
        : data.country.coordinates
      : data.country.coordinates;

  const mdxSource = serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = mdxSource;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllCountryGuides(fields: string[] = []) {
  const slugs = getCountryGuideSlugs();
  const guides = slugs.map((slug) => getCountryGuideBySlug(slug, fields));
  return guides;
}
