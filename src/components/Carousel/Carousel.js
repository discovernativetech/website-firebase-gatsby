import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem } from "mdbreact";

import styles from './Carousel.module.scss';
import { CarouselItem } from "./CarouselItem";

export const Carousel = ({ data }) => {

  if (data.length < 1) return;

  const items = data.map(((slide, index) => {
    return (
      <MDBCarouselItem itemId={index + 1}>
        <CarouselItem title={slide.title} caption={slide.caption} />
      </MDBCarouselItem>
    )
  }))

  return (
    <MDBCarousel
      activeItem={1}
      length={data.length}
      showControls={true}
      showIndicators={true}
      className={styles.carouselContainer}
    >
      <MDBCarouselInner>
        {items}
      </MDBCarouselInner>
    </MDBCarousel>
  )
}
