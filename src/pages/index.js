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

    <div className="Grid--landing">
      <div>
      <h1>Laura Bartylla</h1>
      <Img 
          fluid={data.lauraBartyllaImage.childImageSharp.fluid}
          alt="laura bartylla"
          className=""
        />
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