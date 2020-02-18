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

const carouselData = [
  {
    id: "experienceOffers",
    title: "DISCOVER MALAYSIA THROUGH A NATIVE ADVENTURE",
    caption: "Connecting through shared stories across place and time",
    linkText: "Find An Experience",
  },
  {
    id: "experienceOffers",
    title: "RESTORING ORANG ASLI",
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
  } = props.data.allIndexJson.edges[1].node
  console.log(whyWeDoIt)
  return (
    <div className={styles.container}>
      <Carousel data={carouselData} />
      <MDBContainer>
        <MultiColumns
          title="Looking for things to do in KL?"
          subtitle="At Native, we provide"
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
        <SectionTitle
          title={"Testimonials"}
          subtitle={
            "Connecting through shared stories across time and place. Read our guests’ stories."
          }
        />
        <Testimonials testimonials={testimonials} />
      </MDBContainer>
    </div>
  )
}

export const query = graphql`
  query {
    allIndexJson {
      edges {
        node {
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
                fixed(width: 260, height: 201) {
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
                fluid {
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
                fixed(width: 100, height: 100) {
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
