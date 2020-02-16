import React from "react"
import { graphql } from "gatsby"

import styles from "../pageStyles/index.module.scss"
import { Carousel } from "../components/Carousel/Carousel"
import MultiColumns from "../components/MultiColumns/MultiColumns"
import SimpleBlock from "../components/CardBlock/SimpleBlock"
import Button from "../components/Button/Button"
import { ImageHighlightsBlock } from "../components/CardBlock/ImageHighlightsBlock"

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
  const { aboutNative, whatWeOffer } = props.data.allIndexJson.edges[1].node
  console.log(whatWeOffer)
  return (
    <div className={styles.container}>
      <Carousel data={carouselData} />
      <MultiColumns
        title="Looking for things to do in KL?"
        subtitle="At Native, we provide"
      >
        {aboutNative.map((node, index) => (
          <SimpleBlock
            key={index}
            title={node.title}
            description={node.description}
            image={node.image.childImageSharp.fixed}
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
          <ImageHighlightsBlock
            key={index}
            title={node.title}
            description={node.description}
            highlights={node.highlights}
            coverImage={node.image}
          />
        ))}
      </MultiColumns>
    </div>
  )
}

export const query = graphql`
  query {
    allIndexJson {
      edges {
        node {
          whatWeOffer {
            title
            description
            highlights {
              icon {
                publicURL
              }
              text
            }
            image
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
