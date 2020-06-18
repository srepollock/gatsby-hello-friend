import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ copyrights }) => (
  <footer>
    {copyrights ? (
      <div
        dangerouslySetInnerHTML={{
          __html: copyrights,
        }}
      />
    ) : (
      <>
        <span className="footerCopyrights">
          © 2020 Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </span>
        <span className="footerCopyrights">
          Starter created by <a herf="https://radoslawkoziel.pl/">panr</a>
        </span>
        <span className="footerCopyrights">
          Hosted with love from <a href="https://www.netlify.com">Netlify</a>
        </span>
      </>
    )}
  </footer>
)

Footer.propTypes = {
  copyrights: PropTypes.string,
}

export default Footer
