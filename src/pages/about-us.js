import React from 'react';
import { MDBContainer } from 'mdbreact';

import styles from '../pageStyles/aboutUs.module.css';

import SEO from "../components/seo";
import Layout from '../components/layout';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import BackgroundSection from '../components/BackgroundSection/BackgroundSection';
import StaffProfile from '../components/StaffProfile/StaffProfile';

const AboutUs = ({data}) => {
    const { summaryP1, summaryP2, summaryP3, summaryP4, mainImage, team, hosts } = data.allAboutusJson.edges[0].node;
    const teamProfiles = team.map((staff, i) => {
      return <StaffProfile key={i} image={staff.image.childImageSharp.fixed} name={staff.name} title={staff.title} description={staff.description} />
    });
    const hostProfiles = hosts.map((staff, i) => {
      return <StaffProfile key={i} image={staff.image.childImageSharp.fixed} name={staff.name} description={staff.description} />
    });
    const maxHeaderHeight = '800px';
    return (
        <Layout> 
            <SEO title="About Us" description={summaryP1}/>
            <BackgroundSection image={mainImage.childImageSharp.fluid} imageStyles={{maxHeight: maxHeaderHeight}} containerStyles={{maxHeight: maxHeaderHeight}} title={'ABOUT US'} />
            <MDBContainer className={styles.summaryContainer}>
              <p className={styles.content}>{summaryP1}</p>
              <p className={styles.content}>{summaryP2}</p>
              <p className={styles.content}>{summaryP3}</p>
              <p className={styles.content}>{summaryP4}</p>
              <div className={styles.titleContainer}>
                <SectionTitle title={'MEET OUR TEAM'} />
              </div>
              <div className={styles.staffContainer}>
                {
                  teamProfiles
                }
              </div>
              <div className={styles.titleContainer}>
                <SectionTitle title={'MEET OUR EXPERIENCE HOSTS'} />
              </div>
              <div className={styles.staffContainer}>
                {
                  hostProfiles
                }
              </div>
            </MDBContainer>
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
                fluid (fit: CONTAIN, cropFocus: NORTH){
                  ...GatsbyImageSharpFluid
                }
            }
        }
        team {
            name
            title
            description
            image {
              childImageSharp {
                fixed (width:275, height: 303) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
        }
        hosts {
            name
            description
            image {
              childImageSharp {
                fixed (width:275, height: 303) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
        }
      }
    }
  }
}`

export default AboutUs
