import React from "react";
import { MDBCarousel, MDBCarouselInner } from "mdbreact";

import styles from './Slider.module.css';

/*
    item sample: 
    <MDBCarouselItem itemId={index+1} key={index}>
        <MDBView>
            <div className={styles.slideImage} style={{backgroundImage: `url(${image.src})`}}/>
        </MDBView>
    </MDBCarouselItem>
*/
const Slider = ({items, title, showControls = false, showIndicators = false}) => {
  return (
      <MDBCarousel
        activeItem={1}
        length={items.length}
        showControls={showControls}
        showIndicators={showIndicators}
        className={styles.carouselContainer}
      >
        <p className={styles.titleCaption}> 
            {title || ""} 
        </p>
        <MDBCarouselInner>
          { items }
        </MDBCarouselInner>
      </MDBCarousel>
  );
}

export default Slider;