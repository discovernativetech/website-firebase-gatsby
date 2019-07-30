import React from 'react'
import Layout from "../components/layout";
import Img from "gatsby-image";

const ComingSoon = ({data}) => {
    return (
        <Layout>
            <Img fluid={data.image.childImageSharp.fluid} />
        </Layout>
        
    )
}

export const query = graphql`
query {
  image: file(relativePath: { eq: "coming-soon.png" }) {
    childImageSharp {
        fluid{
            ...GatsbyImageSharpFluid
        }
    }
  }
}
`

export default ComingSoon;
