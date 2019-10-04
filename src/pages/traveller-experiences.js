import React from "react"
import Layout from "../components/layout"
import BackgroundSection from "../components/BackgroundSection/BackgroundSection"

import styles from "../pageStyles/traveller-experiences.module.scss"
import LeftRightBlock from "../components/LeftRightBlock/LeftRightBlock"
import { MDBContainer } from "mdbreact"
import TravellersExperienceButtons from "../components/Custom/TravellersExperienceButtons"

const TravellerExperienceList = ({ data }) => {
  const experiences = data.allTravellersJson.edges
  const experienceBlocks = experiences.map(({ node }, i) => {
    const { title, listingThumbnail, airbnbLink, listingSummary, slug } = node
    return (
      <LeftRightBlock
        key={i}
        inverseBlock={Boolean(i % 2)}
        image={listingThumbnail.childImageSharp.fluid}
        title={title}
        description={listingSummary}
      >
        <TravellersExperienceButtons
          learnMoreLink={`/${slug}`}
          bookingLink={airbnbLink}
        />
      </LeftRightBlock>
    )
  })

  return (
    <Layout>
      <BackgroundSection
        childrenPosition={{ left: "50%", top: "50%" }}
        image={data.fullImageHeader.childImageSharp.fluid}
        containerStyles={{ height: "600px" }}
        imageStyles={{ height: "100%" }}
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
      <MDBContainer>{experienceBlocks}</MDBContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    fullImageHeader: file(
      relativePath: { eq: "travellers-listing-header.jpg" }
    ) {
      childImageSharp {
        fluid(maxHeight: 600,fit: CONTAIN, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allTravellersJson {
      edges {
        node {
          title
          listingThumbnail {
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
