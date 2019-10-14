import React from "react"
import Layout from "../components/layout"
import BackgroundSection from "../components/BackgroundSection/BackgroundSection"
import SEO from "../components/seo"

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

  const description = `Curated for changemakers and community leaders that are interested
  in the field of short-term learning-based travel. We offer
  programmes to develop a connection with local communities and
  support the preservation of their culture. Each programme is catered
  towards different learning objectives.`

  return (
    <Layout>
      <SEO title="Team's Experiences" description={description} />
      <BackgroundSection
        childrenPosition={{ left: "50%", top: "50%" }}
        image={data.fullImageHeader.childImageSharp.fluid}
        containerStyles={{ height: "550px" }}
      >
        <div className={styles.backgroundItemsBlock}>
          <span className={styles.backgroundHeaderText}>TEAMS</span>
          <p className={styles.headerDescriptionText}>{description}</p>
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
