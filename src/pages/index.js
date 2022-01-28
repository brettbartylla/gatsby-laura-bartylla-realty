import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

//images
// import cardGif from '../images/cards.gif'


//data pulls in query "data" from below
const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />

    <div className="Grid--landing">
      <div></div>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    cardGatsbyImage: file(relativePath: {eq: "laura_bartylla.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
        }
      }
    }
  },
`