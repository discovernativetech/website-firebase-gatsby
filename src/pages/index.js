import React from "react"
import { graphql } from "gatsby"

import styles from "../pageStyles/index.module.scss"
import { Carousel } from "../components/Carousel/Carousel"
import MultiColumns from "../components/MultiColumns/MultiColumns"
import SimpleBlock from "../components/CardBlock/SimpleBlock"
import { ImageHighlightsBlock } from "../components/CardBlock/ImageHighlightsBlock"
import Testimonials from "../components/Testimonials/Testimonials"
import SectionTitle from "../components/SectionTitle/SectionTitle"
import { ArticlePreview } from "../components/ArticlePreview/ArticlePreview"
import { Section } from "../components/Section/Section"
import Navbar from "../components/Navbar/Navbar"
import SocialMedias from "../components/SocialMedias/SocialMedias"
import Footer from "../components/Footer/Footer"

import video from "../images/v2/video.mp4"
import giaCover from "../images/v2/GIA.png"
import ttCover from "../images/v2/TVT.png"
import { ContactForm } from "../components/ContactForm/ContactForm"
import SEO from '../components/seo';

const carouselData = [
  {
    id: "experienceOffers",
    title: "DISCOVER MALAYSIA <br/> THROUGH A NATIVE <br/> EXPERIENCE",
    caption: "Travel with a purpose",
    linkText: "Find An Experience",
    video: video,
    style: "primary",
  },
  {
    id: "experienceOffers",
    title: "RESTORING <br/> AN INDIGENOUS <br/> VILLAGE’S CAMPSITE",
    caption: "",
    image: giaCover,
    linkText: "READ MORE",
    style: "secondary",
    link: "https://abnb.me/blL7ZcmFf4",
  },
  {
    id: "experienceOffers",
    title: "TRAIL THROUGH <br/> A PROTECTED <br/> RAINFOREST",
    caption: "",
    image: ttCover,
    linkText: "READ MORE",
    style: "secondary",
    link: "https://www.airbnb.com/experiences/182216",
  },
]

export const LandingPage = props => {
  const experiencesRef = React.createRef();
  const testimonialsRef = React.createRef()
  const contactRef = React.createRef();

  carouselData[0].buttonRef = experiencesRef;

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
  const metaDescription = "We create community-based experiences hosted by natives in Malaysia for world explorers to immerse themselves in colourful local cultures. Catered to both soul-seeking individuals and organisations, we offer different travel experiences to match your expectations.";
  return (
    <div className={styles.container}>
      <SEO
        title="Native"
        description={metaDescription}
      />
      <Navbar experiencesRef={experiencesRef} testimonialsRef={testimonialsRef} contactRef={contactRef} />
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
      <Section ref={experiencesRef}>
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
                textContainerClass={styles.borderedText}
                // descriptionClass={styles.borderedText}
                imageSharp={node.image.childImageSharp}
              />
            </div>
          ))}
        </MultiColumns>
      </Section>
      <Section ref={testimonialsRef}>
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
            <p className={styles.impactDescription}>{impact.description}</p>
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
      <Section ref={contactRef}>
        <SectionTitle title={'Get In Touch'} subtitle={'Interested to organise a private Native experience? Submit your enquiries in the form below and we will get back to you as soon as possible.'} />
        <ContactForm />
      </Section>
      <SocialMedias />
      <Footer experiencesRef={experiencesRef} testimonialsRef={testimonialsRef} contactRef={contactRef} />
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
                  fixed(width: 80, height: 80) {
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
                fixed(width: 160, height: 160) {
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
