import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

//images
import Img from 'gatsby-image'


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
          <h1>Laura Bartylla <span>Real Estate Agent</span></h1>
          <p>Laura Bartylla active real estate agent currently helping interested buyers find the right homes. 
          Currently active Madison Wisconsin and the surrounding area</p>
          <h2>Contact</h2>
            <ul>
              <li>
                <a href="tel:+7154193817">715.419.3817</a>
              </li>
              <li>
                <a href="mailto:laurabartylla.firstweber.com">laurabartylla.firstweber.com</a>
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