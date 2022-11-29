const Robots = () => {
  return null
}

export async function getServerSideProps({ res }) {
  const robots = `Sitemap: https://geo-guide.vercel.app/sitemap.xml
User-agent: *
Allow: /
  `

  res.setHeader("Content-Type", "text/plain")
  res.write(robots)
  res.end()

  return {
    props: {}
  }
}

export default Robots