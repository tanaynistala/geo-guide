import fs from "fs"
import { getSlugs } from "../lib/api"

const Sitemap = () => {
  return null
}

export async function getServerSideProps ( { res } ) {
  const BASE_URL = "https://geo-guide.vercel.app"

  const staticPaths = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "api",
        "_app.tsx",
        "_document.tsx",
        "sitemap.xml.tsx",
        "robots.txt.tsx",
        "index.tsx"
      ].includes(staticPage);
  });

  const allGuides = await Promise.all(getSlugs("other").map(slug => `guides/${slug}`))
  const allEvents = await Promise.all(getSlugs("event").map(slug => `events/${slug}`))
  const allCountries = await Promise.all(getSlugs("country").map(slug => `countries/${slug}`))
  const allPaths = [...staticPaths, ...allGuides, ...allEvents, ...allCountries]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${BASE_URL}/</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
    ${allPaths
      .map((url) => {
        return `
      <url>
        <loc>${BASE_URL}/${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
    `;
    }).join("")}
  </urlset>
`
  res.setHeader("Content-Type", "text/xml")
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default Sitemap