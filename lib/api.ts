import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { remark } from "remark";
import html from "remark-html";
import jsdom from "jsdom";

import geographies from "./geo-data/geography.geo.json";
import { getCountryData } from "./geo-api";

export function getSlugs(postType: string) {
  if (postType === "country") {
    return geographies.features.map((feature) => {
      return feature.properties.adm0_a3;
    });
  } else {
    return fs.readdirSync(getDirectory(postType)).map((filepath) => {
      return filepath.replace(/\.md$/, "");
    });
  }
}

export function getGuides(postType: string) {
  const slugs = getSlugs(postType);
  const guides = slugs.map((slug) => getGuide(postType, slug));
  return guides;
}

export async function getGuide(postType: string, slug: string) {
  const fullPath = path.join(getDirectory(postType), `${slug}.md`);

  // read file contents
  let content = "";
  if (fs.existsSync(fullPath)) {
    content = fs.readFileSync(fullPath, { encoding: "utf8" });
  }

  const matterObject =
    !fs.existsSync(fullPath) && postType === "country"
      ? {
          data: {
            code: slug,
          },
          content: `Looks like we don't have a page for ${
            getCountryData(slug).name
          } yet. This may be because we haven't gotten around to it yet, or it doesn't have coverage altogether. Check back later!`,
        }
      : matter(content);

  const processedContent = await remark()
    .use(html)
    .process(matterObject.content);

  const contentHtml = processedContent.toString();
  const { headingAnchors, contentHtmlWithAnchors } =
    getHeadingAnchors(contentHtml);

  const result = {
    slug,
    headingAnchors,
    content: matterObject.content,
    ...matterObject.data,
  };

  return result;
}

function getHeadingAnchors(str: string) {
  const headingAnchors = [];
  const dom = new jsdom.JSDOM(`<div id="headinganchors">${str}</div>`);
  dom.window.document.querySelectorAll("h1, h2, h3").forEach((hx) => {
    const id = hx.textContent.toLowerCase().replace(/\s+|[^a-z0-9]/g, "_");
    const anchor = dom.window.document.createElement("a");
    anchor.id = id;
    hx.insertBefore(anchor, null);

    headingAnchors.push({
      heading: hx.nodeName.toLowerCase(),
      title: hx.textContent,
      anchorId: id,
    });
  });
  const contentHtmlWithAnchors =
    dom.window.document.getElementById("headinganchors").innerHTML;
  return {
    headingAnchors,
    contentHtmlWithAnchors,
  };
}

function getDirectory(postType: string) {
  return path.resolve(postType === "country" ? "_country-guides" : "_guides");
}
