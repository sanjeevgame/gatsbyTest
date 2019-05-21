import React from "react"
import { Link } from "gatsby"
import Footer from "./footer"
import Header from "./header"
import SubMenu from "./sub-menu"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props

    return (
      <div>
        <Header />
        <static-page>
          <div class="new-design">
            <div class="static-page-container clearfix">
              <SubMenu />
              <div class="static-page-content">
                <div id="newDesign" />
                {children}
              </div>
            </div>
          </div>
        </static-page>
        <Footer />
      </div>
    )
  }
}

export default Layout
