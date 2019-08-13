import React from 'react';
import { MDBContainer } from 'mdbreact';

import styles from '../pageStyles/aboutUs.module.css';

import SEO from "../components/seo";
import Layout from '../components/layout';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import BackgroundSection from '../components/BackgroundSection/BackgroundSection';

const AboutUs = ({data}) => {
    const { summaryP1, summaryP2, summaryP3, summaryP4, mainImage } = data.allAboutusJson.edges[0].node;

    return (
        <Layout> 
            <SEO title="About Us" />
            <MDBContainer className={styles.summaryContainer}>
                <SectionTitle title={'ABOUT US'} />
                <p>{summaryP1}</p>
                <p>{summaryP2}</p>
            </MDBContainer>
            <BackgroundSection image={mainImage.childImageSharp.fluid} imageStyles={{maxHeight: '600px'}} containerStyles={{maxHeight: '600px'}} />
           
        </Layout>
    )
}

export const query = graphql`
query {
  allAboutusJson {
    edges {
      node {
        summaryP1
        summaryP2
        summaryP3
        summaryP4
        mainImage {
            childImageSharp {
                fluid (fit: CONTAIN){
                  ...GatsbyImageSharpFluid
                }
            }
        }
        team {
            name
            description
            image
        }
        hosts {
            name
            description
            image
        }
      }
    }
  }
}`

export default AboutUs
