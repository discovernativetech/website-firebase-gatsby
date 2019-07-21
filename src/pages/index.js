import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import { MDBContainer } from 'mdbreact';
import Img from "gatsby-image"

import SEO from "../components/seo"
import BackgroundSection from "../components/BackgroundSection/BackgroundSection";
import MultiColumns from "../components/MultiColumns/MultiColumns";
import CardBlock from "../components/CardBlock/CardBlock";
import Tabs from "../components/Tabs/Tabs";

const IndexPage = ({ data }) => {
  console.log(data);
  const aboutNativeInfo = data.allIndexJson.edges[0].node.aboutNative;
  const nativeAffliatesInfo = data.allIndexJson.edges[0].node.nativeAffliates;

  return (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection image={data.fullImageHeader.childImageSharp.fluid.src} />
    <MDBContainer>
      <h1>Discover Malaysia The Native Way</h1>
      <p>Vision</p>
      <p>Native strives to see a Malaysia where people from all walks of life are represented, protected and valued for their own unique sense of identity.</p>
      <p>Mission</p>
      <p>To redefine what it means to be a native through community based travel opportunities.</p>
      <MultiColumns>
        {
          aboutNativeInfo.map((node, index) => (
              <CardBlock key={index} title={node.title} description={node.description} image={node.image.childImageSharp.fixed} />
          ))
        }
      </MultiColumns>
      <Tabs />
      <MultiColumns>
        {
          nativeAffliatesInfo.map((node, index) => (
              <CardBlock key={index} title={node.title}>
                 {
                    node.images.map((image, index) => {
                      console.log(image);
                      return (<Img key={index} fixed={image.childImageSharp.fixed} />)
                    })
                 }
              </CardBlock>
          ))
        }
      </MultiColumns>
    </MDBContainer>
  </Layout>
)}

export const query = graphql`
query {
  fullImageHeader: file(relativePath: { eq: "asliBackground.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
  },
  allIndexJson {
    edges {
      node {
        aboutNative {
          title
          description
          image {
            childImageSharp {
              fixed (width:200, height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        nativeAffliates {
          title
          images {
            childImageSharp {
              fixed(width: 100, height:100) {
              	...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
}
`

export default IndexPage
