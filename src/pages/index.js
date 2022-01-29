import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

//images
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'


//data pulls in query "data" from below
const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <div class="u-posRelativ">
      <div className="Grid--landing">
      {/* col 1 */}
      <div>        
          <Img 
              fluid={data.lauraBartyllaImage.childImageSharp.fluid}
              alt="laura bartylla"
              className=""
            />
        </div>
        {/* col 2 */}
        <div>
          <h1>Laura Bartylla</h1>
          <h3>Real Estate Agent</h3>
          <p>
            Laura Bartylla is an active real estate agent dedicated to helping interested buyers find the right home. 
            Currently active in Madison Wisconsin and the surrounding area.
          </p>
          <h2>lets connect!</h2>
          <p class="m-t-0">
            Ready to start looking for a new home? Check out our current <a href="https://laurabartylla.firstweber.com/">listings</a>.
            </p>
            <ul>
              <li>
                <a href="tel:+7154193817">715.419.3817</a>
              </li>
              <li>
                <a href="mailto:laurabartylla.firstweber.com">laurabartylla.firstweber.com</a>
              </li>
              <li>
              <a href="https://www.instagram.com/l.bartylla/" class="no-underline">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.facebook.com/firstweber" class="no-underline">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.linkedin.com/in/laura-bartylla-462a98196/" class="no-underline">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              </li>
            </ul>

            <h3 class="m-t-20">First Home? Check out these resources!</h3>
            <ul>
              <li>
                <a href="https://www.bankrate.com/calculators/mortgages/mortgage-calculator.aspx" target="_blank">Home Mortgage Calculator</a>
              </li>
              <li>
                <a href="https://www.nerdwallet.com/mortgages/how-much-house-can-i-afford/calculate-affordability" target="_blank">How Much House Can I Afford?</a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=xBtKMup3jVE" target="_blank">Ultimate First Time Home Buyers Guide</a>
              </li>
              <li>
                <a href="https://www.ncsha.org/"target="_blank">National Council of State Housing Agencies</a>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    lauraBartyllaImage: file(relativePath: {eq: "laura_bartylla.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
        }
      }
    }
  },
`