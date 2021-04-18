/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header.component"
import "./layout.scss"
import { useState } from "react"
import NavMenu from "./navmenu/navmenu.component"

type LayoutProps = {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, toggleMenuOpen] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header isMenuOpen={isMenuOpen} toggleMenuOpen={toggleMenuOpen} />
      <NavMenu isOpen={isMenuOpen} toggleMenuOpen={toggleMenuOpen} />
      <main>{children}</main>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        {/* <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer> */}
      </div>
    </>
  )
}

export default Layout
