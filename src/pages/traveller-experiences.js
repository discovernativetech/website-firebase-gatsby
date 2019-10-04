import React from "react"
import Layout from "../components/layout"
import BackgroundSection from "../components/BackgroundSection/BackgroundSection"

import styles from "../pageStyles/traveller-experiences.module.scss"
import LeftRightBlock from "../components/LeftRightBlock/LeftRightBlock"
import { MDBContainer } from "mdbreact"

const TravellerExperienceList = ({ data }) => {
  const experiences = data.allTravellersJson.edges
  const experienceBlocks = experiences.map(({ node }, i) => {
    const { title, headerImage, airbnbLink, listingSummary, slug } = node;
    return <LeftRightBlock 
      image={headerImage.childImageSharp.fluid} 
      title={title} 
      description={listingSummary} 
      learnMoreLink={slug}
      bookingLink={airbnbLink}
      />
  })

  return (
    <Layout>
      <BackgroundSection
        childrenPosition={{ left: "50%", top: "50%" }}
        image={data.fullImageHeader.childImageSharp.fluid}
        containerStyles={{ maxHeight: "600px" }}
        imageStyles={{ maxHeight: "600px" }}
      >
        <div className={styles.backgroundItemsBlock}>
          <span className={styles.backgroundHeaderText}>TRAVELLERS</span>
          <p className={styles.headerDescriptionText}>
            Curated for travellers who are interested to travel with a purpose.{" "}
            <br /> Immerse yourself in a Native experience and benefit the
            communities you visit. We offer multiple experiences, each embarking
            on an adventure with different Orang Asli Tribes in Malaysia.
          </p>
        </div>
      </BackgroundSection>
      <MDBContainer>
        {experienceBlocks}
      </MDBContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    fullImageHeader: file(
      relativePath: { eq: "travellers-listing-header.jpg" }
    ) {
      childImageSharp {
        fluid(fit: CONTAIN, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allTravellersJson {
      edges {
        node {
          title
          headerImage {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          airbnbLink
          listingSummary
          slug
        }
      }
    }
  }
`

export default TravellerExperienceList
