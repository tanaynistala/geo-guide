import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import geoData from "../public/world.geo.json";
import centroidData from "../public/centroids.geo.json";
import { getCountryData } from "./geo-api";

const postsDirectory = join(process.cwd(), "_posts");
const guidesDirectory = join(process.cwd(), "_guides");
const countryGuidesDirectory = join(process.cwd(), "_guides/_countries");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getGuideSlugs() {
  return fs.readdirSync(guidesDirectory).filter(function (file) {
    return !fs.statSync(join(guidesDirectory, `${file}`)).isDirectory();
  });
}

export function getCountryGuideSlugs() {
  // return fs.readdirSync(countryGuidesDirectory);
  return geoData.features.map((feature) => {
    return feature.properties.adm0_a3 + ".md";
  });
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

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
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getGuideBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(guidesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

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
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
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
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getAllGuides(fields: string[] = []) {
  const slugs = getGuideSlugs();
  const guides = slugs.map((slug) => getGuideBySlug(slug, fields));
  return guides;
}

export function getAllCountryGuides(fields: string[] = []) {
  const slugs = getCountryGuideSlugs();
  const guides = slugs.map((slug) => getCountryGuideBySlug(slug, fields));
  return guides;
}
