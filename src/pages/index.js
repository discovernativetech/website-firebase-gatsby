import React from "react"
import { graphql } from "gatsby"

import styles from "../pageStyles/index.module.scss"
import { Carousel } from "../components/Carousel/Carousel"
import MultiColumns from "../components/MultiColumns/MultiColumns"
import SimpleBlock from "../components/CardBlock/SimpleBlock"
import Button from "../components/Button/Button"
import { ImageHighlightsBlock } from "../components/CardBlock/ImageHighlightsBlock"
import Testimonials from "../components/Testimonials/Testimonials"
import SectionTitle from "../components/SectionTitle/SectionTitle"
import { ArticlePreview } from "../components/ArticlePreview/ArticlePreview"
import { Section } from "../components/Section/Section"
import Navbar from "../components/Navbar/Navbar"
import { MDBContainer } from "mdbreact"
import SocialMedias from "../components/SocialMedias/SocialMedias"
import Footer from "../components/Footer/Footer"

import video from '../images/v2/video.mp4';
import giaCover from '../images/v2/GIA.png';
import ttCover from '../images/v2/TVT.png';

const carouselData = [
  {
    id: "experienceOffers",
    title: "DISCOVER MALAYSIA THROUGH A NATIVE ADVENTURE",
    caption: "Travel with a purpose",
    linkText: "Find An Experience",
    video: video,
    style: 'primary'
  },
  {
    id: "experienceOffers",
    title: "RESTORING AN INDIGENOUS VILLAGE’S CAMPSITE",
    caption: "",
    image: giaCover,
    linkText: "READ MORE",
    style: 'secondary',
    link: "https://abnb.me/blL7ZcmFf4"
  },
  {
    id: "experienceOffers",
    title: "TRAIL THROUGH A PROTECTED RAINFOREST",
    caption: "",
    image: ttCover,
    linkText: "READ MORE",
    style: 'secondary',
    link: "https://www.airbnb.com/experiences/182216"
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

        {/* <div className={styles.downloadButton}>
          <Button
            text={"Download Native Guide Book"}
            backgroundColor={"#ED435D"}
            textColor={"#ffff"}
            link={"/download-file"}
            newTab={false}
          />
        </div> */}
      </Section>

      <Section id="offerExperiences">
        <MultiColumns
          title="What we offer"
          subtitle="Native currently provides two immersive cultural experiences led by the Orang Asli, who are known as the indigenous communities in Malaysia."
        >
          {whatWeOffer.map((node, index) => (
            <div className={styles.highlightBlock} key={index}>
              <ImageHighlightsBlock
                title={node.title}
                description={node.description}
                link={node.link}
                highlights={node.highlights}
                coverImage={node.image}
              />
            </div>
          ))}
        </MultiColumns>
      </Section>
      <Section>
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
      </Section>
      <Section>
        <SectionTitle
          title={"Testimonials"}
          subtitle={
            "Connecting through shared stories across time and place. Read our guests’ stories."
          }
        />
        <Testimonials testimonials={testimonials} />
      </Section>
      <Section useBorder={false}>
        <ArticlePreview
          title={articlePreview.title}
          text={articlePreview.text}
          image={articlePreview.image.childImageSharp.fluid}
          link={articlePreview.link}
        />
      </Section>
      {/* <Section useBorder={false}> */}
        <div className={styles.impactSection} style={impactBackgroundStyle}>
          <SectionTitle
            className={styles.whiteSectionTitle}
            useBorder={false}
            title={"Our Impact"}
            subtitle={
              "Our Native Hosts have had the opportunity to host hundreds of guests from all over the world."
            }
          />
          <Section useBorder={false}>
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
          </Section>
        </div>
      {/* </Section> */}
      <SocialMedias />
      <Footer />
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
                fixed(width: 80, height: 80) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            countryIcon {
              childImageSharp {
                fixed(width: 80, height: 80) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          whyWeDoIt {
            description
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          whatWeOffer {
            title
            link
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
                fixed(width: 200, height: 200) {
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
