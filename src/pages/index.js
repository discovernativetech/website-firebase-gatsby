import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import { MDBContainer } from 'mdbreact';

import SEO from "../components/seo";
import BackgroundSection from "../components/BackgroundSection/BackgroundSection";
import MultiColumns from "../components/MultiColumns/MultiColumns";
import CardBlock from "../components/CardBlock/CardBlock";
import TravellersTeamsTabs from "../components/TravellersTeamsTabs/travellersTeamsTabs";

import styles from '../pageStyles/index.module.css';

const IndexPage = ({ data }) => {
  console.log(data);
  const aboutNativeInfo = data.allIndexJson.edges[0].node.aboutNative;
  const nativeAffliatesInfo = data.allIndexJson.edges[0].node.nativeAffliates;
  const tabsTravellers = data.allIndexJson.edges[0].node.travellerSlides;
  const tabsTeams= data.allIndexJson.edges[0].node.teamSlides;

  return (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection image={data.fullImageHeader.childImageSharp.fluid} />
    <MDBContainer>
      <div className={styles.aboutNativeSection}>
        <h1 className={styles.sectionTitle}>Discover Malaysia The Native Way</h1>
        <div className={styles.sectionContent}>
          <span className={styles.sectionSub}>Vision</span>
          <p>Native strives to see a Malaysia where people from all walks of life are represented, protected and valued for their own unique sense of identity.</p>
          <span className={styles.sectionSub}>Mission</span>
          <p>To redefine what it means to be a native through community based travel opportunities.</p>
        </div>
      </div>
      <MultiColumns>
        {
          aboutNativeInfo.map((node, index) => (
              <CardBlock key={index} title={node.title} description={node.description} image={node.image.childImageSharp.fixed} />
          ))
        }
      </MultiColumns>
      <TravellersTeamsTabs teamsTab={tabsTeams} travellersTab={tabsTravellers}/>
      <MultiColumns className={styles.affliatesContainer}>
        {
          nativeAffliatesInfo.map((node, index) => (
              <CardBlock key={index} title={node.title} titleClass={styles.affliatesTitle}>
                <div className={styles.logoContainer}>
                 {
                    node.images.map((image, index) => {
                      return (<img key={index} src={image.childImageSharp.original.src} className={styles.logos} alt="test" />)
                    })
                 }
                 </div>
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
        fluid (fit: CONTAIN){
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
              fixed (width:128, height: 150) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        nativeAffliates {
          title
          images {
            childImageSharp {
              original {
                src
              }
            }
          }
        }
        travellerSlides {
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          link
          description
        }
        teamSlides {
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          link
          description
        }
      }
    }
  }
}
`

export default IndexPage