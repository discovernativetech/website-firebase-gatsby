import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { MDBContainer } from "mdbreact"

import SEO from "../components/seo"
import BackgroundSection from "../components/BackgroundSection/BackgroundSection"
import MultiColumns from "../components/MultiColumns/MultiColumns"
import CardBlock from "../components/CardBlock/CardBlock"
import TravellersTeamsTabs from "../components/TravellersTeamsTabs/TravellersTeamsTabs"

import styles from "../pageStyles/index.module.scss"
import Dropdown from "../components/Dropdown/Dropdown"
import SimpleBlock from "../components/CardBlock/SimpleBlock"
import TextBanner from "../components/TextBanner/TextBanner"

const IndexPage = ({ data }) => {
  const aboutNativeInfo = data.allIndexJson.edges[0].node.aboutNative
  const nativeAffliatesInfo = data.allIndexJson.edges[0].node.nativeAffliates
  const tabsTravellers = data.allIndexJson.edges[0].node.travellerSlides
  const tabsTeams = data.allIndexJson.edges[0].node.teamSlides
  const visionMissionImage =
    data.visionBannerBackground.childImageSharp.original.src

  const dropDownOptions = [
    {
      title: "Traveller",
      link: "/traveller-experiences",
    },
    {
      title: "Company",
      link: "/team-experiences",
    },
    {
      title: "School",
      link: "/team-experiences",
    },
  ]

  return (
    <Layout>
      <SEO
        title="Home"
        description={data.allAboutusJson.edges[0].node.summaryP1}
      />
      <BackgroundSection
        childrenPosition={{ left: "25%", top: "45%" }}
        image={data.fullImageHeader.childImageSharp.fluid}
        containerStyles={{ height: "600px" }}
        imageStyles={{ height: "100%" }}
      >
        <div className={styles.backgroundItemsBlock}>
          <span className={styles.backgroundHeaderText}>
            Discover Malaysia <br /> the Native way
          </span>
          <Dropdown options={dropDownOptions} defaultText={"I am a"} />
        </div>
      </BackgroundSection>
      <div className={styles.aboutNativeSection}>
        <MDBContainer>
          <div className={styles.secondaryBackgroundBlock}>
            <h1 className={styles.sectionTitle}>
              Discover Malaysia The Native Way
            </h1>
            <Dropdown options={dropDownOptions} defaultText={"I am a"} />
          </div>
        </MDBContainer>
        <TextBanner
          containerStyle={styles.textBanner}
          text={
            "Rewrite the narrative through your travels. <br/> Be part of the Native story."
          }
        />
        <TextBanner
          image={visionMissionImage}
          containerStyle={styles.visionMissionStyle}
          text={
            "Native strives to see a Malaysia where people from all walks of life are represented, protected and valued for their own unique sense of identity."
          }
          altText={"Native vision and mission image"}
        />
      </div>
      <MDBContainer>
        <MultiColumns>
          {aboutNativeInfo.map((node, index) => (
            <div className={styles.oneThirdWidth} key={index}>
              <SimpleBlock
                key={index}
                title={node.title}
                description={node.description}
                image={node.image.childImageSharp.fixed}
              />
            </div>
          ))}
        </MultiColumns>
        <TravellersTeamsTabs
          teamsTab={tabsTeams}
          travellersTab={tabsTravellers}
        />
        <MultiColumns className={styles.affliatesContainer}>
          {nativeAffliatesInfo.map((node, index) => (
            <CardBlock
              key={index}
              title={node.title}
              titleClass={styles.affliatesTitle}
            >
              <div className={styles.logoContainer}>
                {node.images.map((image, index) => {
                  return (
                    <img
                      key={index}
                      src={image.childImageSharp.original.src}
                      className={styles.logos}
                      alt={node.title}
                    />
                  )
                })}
              </div>
            </CardBlock>
          ))}
        </MultiColumns>
      </MDBContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    fullImageHeader: file(relativePath: { eq: "asliBackground.png" }) {
      childImageSharp {
        fluid(fit: CONTAIN, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    visionBannerBackground: file(relativePath: { eq: "vision-mission.jpg" }) {
      childImageSharp {
        original {
          src
        }
      }
    }
    allAboutusJson {
      edges {
        node {
          summaryP1
        }
      }
    }
    allIndexJson {
      edges {
        node {
          aboutNative {
            title
            description
            image {
              childImageSharp {
                fixed(width: 300, height: 300) {
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
