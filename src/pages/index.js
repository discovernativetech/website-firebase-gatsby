import React from "react"
import { graphql } from "gatsby"

import styles from "../pageStyles/index.module.scss"
import { Carousel } from "../components/Carousel/Carousel"
import MultiColumns from "../components/MultiColumns/MultiColumns"
import SimpleBlock from "../components/CardBlock/SimpleBlock"
import Button from "../components/Button/Button"
import { ImageHighlightsBlock } from "../components/CardBlock/ImageHighlightsBlock"
import { MDBContainer } from "mdbreact"
import Testimonials from "../components/Testimonials/Testimonials"
import SectionTitle from "../components/SectionTitle/SectionTitle"
import { ArticlePreview } from "../components/ArticlePreview/ArticlePreview"
import { Section } from "../components/Section/Section"
import Navbar from "../components/Navbar/Navbar"

const carouselData = [
  {
    id: "experienceOffers",
    title: "DISCOVER MALAYSIA THROUGH A NATIVE ADVENTURE",
    caption: "Connecting through shared stories across place and time",
    linkText: "Find An Experience",
  },
  {
    id: "experienceOffers",
    title: "RESTORING AN INDIGENOUS VILLAGE’S CAMPSITE",
    caption: "",
    linkText: "READ MORE",
  },
]

export const LandingPage = props => {
  const {
    aboutNative,
    whatWeOffer,
    whyWeDoIt,
    testimonials,
    articlePreview,
    impact,
  } = props.data.allIndexJson.edges[1].node
  const { impactBackgroundImage } = props.data
  const impactBackgroundStyle = {
    backgroundImage: `url("${impactBackgroundImage.childImageSharp.original.src}")`,
  }
  return (
    <div className={styles.container}>
      <Navbar />
      <Carousel data={carouselData} />
      <Section>
        <MDBContainer>
          <MultiColumns
            title="Looking for things to do in KL?"
            subtitle="At Native, we provide"
            useBorder={false}
          >
            {aboutNative.map((node, index) => (
              <SimpleBlock
                key={index}
                title={node.title}
                description={node.description}
                descriptionClass={styles.plainText}
                imageSharp={node.image.childImageSharp}
              />
            ))}
          </MultiColumns>

          <div className={styles.downloadButton}>
            <Button
              text={"Download Native Guide Book"}
              backgroundColor={"#ED435D"}
              textColor={"#ffff"}
              link={"/download-file"}
              newTab={false}
            />
          </div>
        </MDBContainer>
      </Section>

      <Section>
        <MDBContainer>
          <MultiColumns
            title="What we offer"
            subtitle="Native currently provides two immersive cultural experiences led by the Orang Asli, who are known as the indigenous communities in Malaysia."
          >
            {whatWeOffer.map((node, index) => (
              <div className={styles.highlightBlock} key={index}>
                <ImageHighlightsBlock
                  title={node.title}
                  description={node.description}
                  highlights={node.highlights}
                  coverImage={node.image}
                />
              </div>
            ))}
          </MultiColumns>
        </MDBContainer>
      </Section>
      <Section>
        <MDBContainer>
          <MultiColumns
            title="Why We Do It"
            subtitle="Native works with two Orang Asli communities in Peninsular Malaysia, the Temuan and Semai tribe, in order to:"
          >
            {whyWeDoIt.map((node, index) => (
              <div className={styles.blockContainer} key={index}>
                <SimpleBlock
                  title=""
                  description={node.description}
                  descriptionClass={styles.borderedText}
                  imageSharp={node.image.childImageSharp}
                />
              </div>
            ))}
          </MultiColumns>
        </MDBContainer>
      </Section>
      <Section>
        <MDBContainer>
          <SectionTitle
            title={"Testimonials"}
            subtitle={
              "Connecting through shared stories across time and place. Read our guests’ stories."
            }
          />
          <Testimonials testimonials={testimonials} />
        </MDBContainer>
      </Section>
      <Section useBorder={false}>
        <MDBContainer>
          <ArticlePreview
            title={articlePreview.title}
            text={articlePreview.text}
            image={articlePreview.image.childImageSharp.fluid}
            link={articlePreview.link}
          />
        </MDBContainer>
      </Section>
      <Section useBorder={false}>
        <div className={styles.impactSection} style={impactBackgroundStyle}>
          <SectionTitle
            className={styles.whiteSectionTitle}
            useBorder={false}
            title={"Our Impact"}
            subtitle={
              "Our Native Hosts have had the opportunity to host hundreds of guests from all over the world."
            }
          />
          <MDBContainer>
            <div className={styles.impactContainer}>
              <p>{impact.description}</p>
              <MultiColumns useBorder={false}>
                {impact.impacts.map((data, index) => {
                  return (
                    <SimpleBlock
                      key={index}
                      title={""}
                      description={data.title}
                      descriptionClass={styles.impactTitle}
                      imageSharp={data.icon.childImageSharp}
                    />
                  )
                })}
              </MultiColumns>
            </div>
          </MDBContainer>
        </div>
      </Section>
    </div>
  )
}

export const query = graphql`
  query {
    impactBackgroundImage: file(relativePath: { eq: "v2/impactImage.jpg" }) {
      childImageSharp {
        original {
          src
        }
      }
    }
    allIndexJson {
      edges {
        node {
          impact {
            description
            impacts {
              title
              icon {
                childImageSharp {
                  fixed(width: 90, height: 90) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
          articlePreview {
            title
            text
            link
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          testimonials {
            name
            quoteText
            userIcon {
              childImageSharp {
                fixed(width: 60, height: 60) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            countryIcon {
              childImageSharp {
                fixed(width: 60, height: 60) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          whyWeDoIt {
            description
            image {
              childImageSharp {
                fixed(width: 300, height: 232) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          whatWeOffer {
            title
            description
            highlights {
              icon {
                publicURL
              }
              text
            }
            image {
              childImageSharp {
                fluid(maxHeight: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          aboutNative {
            title
            description
            image {
              childImageSharp {
                fixed(width: 140, height: 140) {
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

export default LandingPage
