import React from "react"
import { MDBContainer } from "mdbreact"
import Layout from "../components/layout"
import InfoBlock from "../components/InfoBlock/InfoBlock"
import SEO from "../components/seo"

import styles from "../pageStyles/impact.module.scss"
import BackgroundSection from "../components/BackgroundSection/BackgroundSection"

const Impact = ({ data }) => {
  const facts = data.allImpactJson.edges.map(({ node }, i) => {
    return (
      <InfoBlock
        key={i}
        fact={node.fact}
        title={node.title}
        image={node.image.childImageSharp.fixed}
      />
    )
  })

  return (
    <Layout>
      <SEO
        title="Our Impact"
        description="We believe all communities can and should be empowered to create
        value through their cultures"
      />
      <BackgroundSection
        image={data.fullImageHeader.childImageSharp.fluid}
        containerStyles={{ height: "550px" }}
        childrenFullWidth
      >
        <p className={styles.headerTitle}>
          We believe all communities can and should be empowered to create value
          through their cultures
        </p>
      </BackgroundSection>
      <MDBContainer>
        <div className={styles.content}>
          <p>
            The Orang Asli are some of the most culturally rich but economically
            disadvantaged communities in Malaysia. Native supports Orang Asli
            communities in rediscovering their cultural strengths while creating
            a societal climate where their cultures are a pillar of dignity,
            recognition, and opportunity.
          </p>
          <p>
            We work closely with the Orang Asli through our Native Hosts
            programme where we build sustainable livelihoods for the community
            by sharing the best of their culture with the world. Together, we
            create unique avenues for travellers to experience Malaysia from a
            different perspective while creating a positive impact with their
            travel footprint.
          </p>
        </div>
        <div className={styles.infoContainer}>{facts}</div>
      </MDBContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    fullImageHeader: file(relativePath: { eq: "impact-header.jpg" }) {
      childImageSharp {
        fluid(fit: CONTAIN, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allImpactJson {
      edges {
        node {
          fact
          title
          image {
            childImageSharp {
              fixed(width: 150, height: 150) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`

export default Impact
