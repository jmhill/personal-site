import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import NavBar from '../components/NavBar'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        { rel: 'stylesheet', href: '/css/pure-min.css' },
        { rel: 'stylesheet', href: '/css/grids-responsive-min.css' },
        { rel: 'stylesheet', href: '/css/blog.css' },
        { rel: 'stylesheet', href: '/css/font-awesome/font-awesome-4.6.1/css/font-awesome.min.css' },
      ]}
    />
    <div className="layout pure-g">

      {/* Navbar has style info held internally for now, hangs out on left side of the screen
      when in medium sized or higher iewports, shoots up to the top on small/phone size */}
      <NavBar />

      {/* The rest of the area to the right/below the navbar (depending on media query) goes here */}
      <div className="content pure-u-1 pure-u-md-3-4">

        <div className="pure-g">

          {/* Main view area of page */}
          <div className="pure-u-1 pure-u-md-2-3">
            <div className="reading-area">
              {children()}
            </div>
          </div>

          <div className="pure-u-1 pure-u-md-1-3">
            {/* Right-hand side bar stuff goes here */}
          </div>

        </div>

      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
