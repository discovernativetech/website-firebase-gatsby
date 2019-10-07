import React from "react"
import Layout from "../components/layout"
import BackgroundSection from "../components/BackgroundSection/BackgroundSection"

import styles from "../pageStyles/team-experiences.module.scss"
import LeftRightBlock from "../components/LeftRightBlock/LeftRightBlock"
import { MDBContainer } from "mdbreact"
import TeamsExperienceButtons from "../components/Custom/TeamsExperienceButtons"

const TeamExperiencesList = ({ data }) => {
  const experiences = data.allTeamsJson.edges
  const experienceBlocks = experiences.map(({ node }, i) => {
    const { title, listingThumbnail, listingSummary } = node
    return (
      <LeftRightBlock
        key={i}
        inverseBlock={Boolean(i % 2)}
        image={listingThumbnail.childImageSharp.fluid}
        title={title}
        description={listingSummary}
      >
        <TeamsExperienceButtons />
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
          <span className={styles.backgroundHeaderText}>TEAMS</span>
          <p className={styles.headerDescriptionText}>
            Curated for changemakers and community leaders that are interested
            in the field of short-term learning-based travel. We offer
            programmes to develop a connection with local communities and
            support the preservation of their culture. Each programme is catered
            towards different learning objectives.
          </p>
        </div>
      </BackgroundSection>
      <MDBContainer>{experienceBlocks}</MDBContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    fullImageHeader: file(relativePath: { eq: "teams-listing-header.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 600, fit: CONTAIN, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allTeamsJson {
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
          listingSummary
        }
      }
    }
  }
`

export default TeamExperiencesList
