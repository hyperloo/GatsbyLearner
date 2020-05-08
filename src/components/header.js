import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyle from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className={headerStyle.header}>
      <h1>
        <Link to="/" className={headerStyle.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyle.navList}>
          <li>
            <Link
              className={headerStyle.navItem}
              activeClassName={headerStyle.active}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyle.navItem}
              activeClassName={headerStyle.active}
              to="/about"
            >
              About ME
            </Link>
          </li>
          <li>
            <Link
              className={headerStyle.navItem}
              activeClassName={headerStyle.active}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={headerStyle.navItem}
              activeClassName={headerStyle.active}
              to="/contact"
            >
              Contact ME
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
