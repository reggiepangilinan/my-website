import * as React from "react"
import { Link, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from "./home/aboutme/aboutme.component"
import HireMe from "./home/hireme/hireme.component"

const IndexPage = (props: PageProps) => (
  <Layout>
    <SEO title="Reggie Pangilinan | Software Engineer" />
    <AboutMe />
    <HireMe />
    {/* <h1>Hi people</h1>
    <h2>{props.path}</h2>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
