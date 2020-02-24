import React from "react"
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem } from "mdbreact"

import styles from "./Carousel.module.scss"
import { CarouselItem } from "./CarouselItem"

export const Carousel = ({ data }) => {
  if (data.length < 1) return

  const items = data.map((slide, index) => {
    return (
      <MDBCarouselItem itemId={index + 1}>
        <CarouselItem
          image={slide.image}
          video={slide.video}
          title={slide.title}
          caption={slide.caption}
          link={slide.link}
          linkText={slide.linkText}
          buttonStyle={slide.style}
        />
      </MDBCarouselItem>
    )
  })

  return (
    <MDBCarousel
      interval={8000}
      activeItem={1}
      length={data.length}
      showControls={true}
      showIndicators={true}
      className={styles.carouselContainer}
    >
      <MDBCarouselInner>{items}</MDBCarouselInner>
    </MDBCarousel>
  )
}
