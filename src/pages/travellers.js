import React from 'react'
import { graphql } from "gatsby";
import Img from "gatsby-image"
import styles from '../pageStyles/travellers.module.css';
import { MDBContainer } from 'mdbreact';
import Layout from '../components/layout';
import SEO from "../components/seo";
import BackgroundSection from '../components/BackgroundSection/BackgroundSection';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import MultiColumns from '../components/MultiColumns/MultiColumns';
import Timeline from '../components/Timeline/Timeline';
import TimelineContent from '../components/Timeline/TimelineContent';
import Button from '../components/Button/Button';
import Testimonials from '../components/Testimonials/Testimonials';
import FAQ from '../components/FAQ/FAQ';

const Travellers = ({ data }) => {
    const backgroundImage = data.fullImageHeader.childImageSharp.fluid;
    const backgroundImageStyle = {
        maxHeight: '700px'
    };
    const { faq, testimonials, experienceSummary, showcaseImage1, showcaseImage2, itinerary } = data.allTravellersJson.edges[0].node;
    const itineraryContents = itinerary.map((i, index) => {
      return <TimelineContent  key={index} title={i.title} description={i.description} isLeft={Boolean(index % 2)} />
    });

    return (
        <Layout>
            <SEO title="Travellers" />
            <BackgroundSection title={'TRAVELLERS'} image={backgroundImage} containerStyles={backgroundImageStyle} imageStyles={backgroundImageStyle} />
            <MDBContainer className={styles.container}>
                <SectionTitle title={'THE NATIVE EXPERIENCE'} />
                <div className={styles.summaryInfoContainer}>
                    <p>{experienceSummary}</p>
                    <MultiColumns className={styles.showcaseImages}>
                        <div className={styles.imageBox}>
                            <Img fluid={showcaseImage1.childImageSharp.fluid} imgStyle={{maxHeight: "424px", maxWidth: "700px"}}/>
                        </div>
                        <div className={styles.imageBox}>
                            <Img fluid={showcaseImage2.childImageSharp.fluid} imgStyle={{maxHeight: "424px", maxWidth: "700px"}}/>
                        </div>
                    </MultiColumns>
                </div>
                <SectionTitle title={'ITINERARY'} />
                <Timeline className={styles.itineraryTimeline}>
                  {itineraryContents}
                </Timeline>
                <div className={styles.buttonContainer}>
                  <Button text={'BOOK THIS EXPERIENCE'} textColor={'#002445'} link={'https://www.airbnb.com/experiences/182216'} />
                </div>
                <Testimonials testimonials={testimonials} />
                <FAQ data={faq}/>
            </MDBContainer>
        </Layout>
    )
};

export const query = graphql`
query {
  fullImageHeader: file(relativePath: { eq: "travellersHeader-min.jpg" }) {
      childImageSharp {
        fluid (fit: CONTAIN){
          ...GatsbyImageSharpFluid
        }
      }
  },
  allTravellersJson {
    edges {
      node {
        experienceSummary
        itinerary {
            title
            description
        }
        testimonials {
          quoteText
          name
          userIcon
          location
        }
        faq {
          question
          icon {
            childImageSharp {
              fixed (width:100, height: 113) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          answers
        }
        showcaseImage1 {
            childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
            }
        }
        showcaseImage2 {
            childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
            }
        }
      }
    }
  }
}`

export default Travellers
