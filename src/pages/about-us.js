import React from "react"
import { MDBContainer } from "mdbreact"

import styles from "../pageStyles/aboutUs.module.scss"

import SEO from "../components/seo"
import Layout from "../components/layout"
import SectionTitle from "../components/SectionTitle/SectionTitle"
import BackgroundSection from "../components/BackgroundSection/BackgroundSection"
import StaffProfile from "../components/StaffProfile/StaffProfile"
import TextBanner from "../components/TextBanner/TextBanner"

const AboutUs = ({ data }) => {
  const {
    summaryP1,
    summaryP2,
    parallaxImage,
    mainImage,
    team,
    hosts,
  } = data.allAboutusJson.edges[0].node
  const descriptionImage = parallaxImage.childImageSharp.original.src;
  const teamProfiles = team.map((staff, i) => {
    return (
      <StaffProfile
        key={i}
        image={staff.image.childImageSharp.fixed}
        name={staff.name}
        title={staff.title}
        description={staff.description}
      />
    )
  })
  const hostProfiles = hosts.map((staff, i) => {
    return (
      <StaffProfile
        key={i}
        image={staff.image.childImageSharp.fixed}
        name={staff.name}
        description={staff.description}
      />
    )
  })
  const maxHeaderHeight = "600px"
  const description =
    'Native, a travel-based social enterprise, aimed to rewrite the narrative of what it means to be a "native" person by creating opportunities for anyone to share their inherent skills and stories. Founded in 2018, we started off on Airbnb as a social impact experience and just a year later, we evolved into a small business.'
  return (
    <Layout>
      <SEO title="About Us" description={description} />
      <BackgroundSection
        image={mainImage.childImageSharp.fluid}
        imageStyles={{ maxHeight: maxHeaderHeight }}
        containerStyles={{ maxHeight: maxHeaderHeight }}
      >
        <span className={styles.backgroundHeader}>ABOUT US</span>
      </BackgroundSection>
      <TextBanner
        containerStyle={styles.textBanner}
        text={
          "All of us share something in common - <br/> that is we are all natives somewhere."
        }
      />
      <TextBanner
        image={descriptionImage}
        containerStyle={styles.descriptionBanner}
        text={description}
        altText={"Native vision and mission image"}
      />
      <MDBContainer className={styles.summaryContainer}>
        <p className={styles.content}>{summaryP1}</p>
        <p className={styles.content}>{summaryP2}</p>
        <div className={styles.titleContainer}>
          <SectionTitle title={"MEET OUR TEAM"} />
        </div>
        <div className={styles.staffContainer}>{teamProfiles}</div>
        <div className={styles.titleContainer}>
          <SectionTitle title={"MEET OUR EXPERIENCE HOSTS"} />
        </div>
        <div className={styles.staffContainer}>{hostProfiles}</div>
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
          mainImage {
            childImageSharp {
              fluid(fit: CONTAIN, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          parallaxImage {
            childImageSharp {
              original {
                src
              }
            }
          }
          team {
            name
            title
            description
            image {
              childImageSharp {
                fixed(cropFocus: CENTER, width: 275, height: 303) {
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
                fixed(cropFocus: CENTER, width: 275, height: 303) {
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

export default AboutUs
