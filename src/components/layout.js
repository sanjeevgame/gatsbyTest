import React from "react"
import { Link } from "gatsby"
import Footer from "./footer"
import Header from "./header"
import SubMenu from "./sub-menu"
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
        <Header />
        <section>
          <SubMenu />
          <article>{children}</article>
        </section>
        <Footer />
      </div>
    )
  }
}

export default Layout
