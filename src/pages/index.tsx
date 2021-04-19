import * as React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from "./home/aboutme/aboutme.component"
import HireMe from "./home/hireme/hireme.component"

const IndexPage = (props: PageProps) => (
  <Layout>
    <SEO title="Home" />
    <AboutMe />
    <HireMe />
  </Layout>
)

export default IndexPage
