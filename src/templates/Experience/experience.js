import React from "react"
import { graphql } from "gatsby"
import styles from "./experience.module.scss"
import { MDBContainer } from "mdbreact"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BackgroundSection from "../../components/BackgroundSection/BackgroundSection"
import SectionTitle from "../../components/SectionTitle/SectionTitle"
import Timeline from "../../components/Timeline/Timeline"
import TimelineContent from "../../components/Timeline/TimelineContent"
import Button from "../../components/Button/Button"
import Testimonials from "../../components/Testimonials/Testimonials"
import FAQ from "../../components/FAQ/FAQ"

const TravellersExperiences = ({ data }) => {
  const backgroundImageStyle = {
    maxHeight: "600px",
  }
  const {
    title,
    faq,
    testimonials,
    experienceSummary,
    itinerary,
    airbnbLink,
    summaryTitle,
    headerImage,
  } = data.allTravellersJson.edges[0].node
  const itineraryContents = itinerary.map((i, index) => {
    return (
      <TimelineContent
        key={index}
        title={i.title}
        description={i.description}
        isLeft={Boolean(index % 2)}
        image={i.image && i.image.childImageSharp.fixed}
      />
    )
  })

  return (
    <Layout>
      <SEO title="Travellers" description={experienceSummary} />
      <BackgroundSection
        childrenPosition={{ right: "-15%", bottom: "5%" }}
        image={headerImage.childImageSharp.fluid}
        containerStyles={{ height: '600px' }}
        imageStyles={{ height: '100%' }}
      >
        <span className={styles.backgroundHeader}>{title}</span>
      </BackgroundSection>
      <MDBContainer className={styles.container}>
        <SectionTitle title={summaryTitle} />
        <div className={styles.summaryInfoContainer}>
          <p>{experienceSummary}</p>
        </div>
        <SectionTitle title={"ITINERARY"} />
        <Timeline className={styles.itineraryTimeline}>
          {itineraryContents}
        </Timeline>
        <div className={styles.buttonContainer}>
          <Button
            text={"BOOK THIS EXPERIENCE"}
            backgroundColor={"#ED435D"}
            textColor={"#ffff"}
            link={airbnbLink}
            newTab={true}
          />
        </div>
        <Testimonials testimonials={testimonials} />
        <FAQ data={faq} />
      </MDBContainer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allTravellersJson(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          headerImage {
            childImageSharp {
              fluid(fit: CONTAIN) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          experienceSummary
          summaryTitle
          airbnbLink
          itinerary {
            title
            description
            image {
              childImageSharp {
                fixed(width: 450, height: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          testimonials {
            quoteText
            name
            userIcon
            location
          }
          faq {
            question
            answers
          }
        }
      }
    }
  }
`

export default TravellersExperiences
