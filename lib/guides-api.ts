import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const guidesDirectory = join(process.cwd(), "_guides");

export function getGuideSlugs() {
  return fs.readdirSync(guidesDirectory).filter(function (file) {
    return !fs.statSync(join(guidesDirectory, `${file}`)).isDirectory();
  });
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

export function getAllGuides(fields: string[] = []) {
  const slugs = getGuideSlugs();
  const guides = slugs.map((slug) => getGuideBySlug(slug, fields));
  return guides;
}
