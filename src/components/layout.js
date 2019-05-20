import React from "react"
import { Link } from "gatsby"
//import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          //  maxWidth: rhythm(24),
          //padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>JWR Static Pages</header>
        <section>
          <nav>
            <ul>
              <li>
                <Link
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                  }}
                  to={`/page-1`}
                >
                  <a>Page 1</a>
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                  }}
                  to={`/page-2`}
                >
                  <a>Page 2</a>
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                  }}
                  to={`/page-3`}
                >
                  <a>Page 3</a>
                </Link>
              </li>
            </ul>
          </nav>

          <article>{children}</article>
        </section>

        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
