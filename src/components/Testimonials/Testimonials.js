import React from 'react';
import { MDBCarouselItem } from 'mdbreact';
import styles from './Testimonials.module.css'
import TestimonialItem from '../TestimonialItem/TestimonialItem';
import Slider from '../Slider/Slider';

const Testimonials = ({testimonials, useSlider = false}) => {
  let testimonialsItems;
  if (useSlider) {
    testimonialsItems = testimonials.map((t, index) => (
      <MDBCarouselItem itemId={index+1} key={index}>
        <TestimonialItem key={index} quote={t.quoteText} location={t.location} name={t.name} userIcon={t.userIcon}/>
      </MDBCarouselItem>
    ));
  } else {
    testimonialsItems = testimonials.map((t, index) => 
      <TestimonialItem key={index} quote={t.quoteText} location={t.location} name={t.name} userIcon={t.userIcon}/>
    );
  }
  return (
    <div className={styles.container}>
      {useSlider ? 
        (
          <Slider items={testimonialsItems} showControls={true} />
        ) : (
          <div className={styles.itemsContainer}>
            {testimonialsItems}
          </div>
        )
      }
    </div>
  );
};

export default Testimonials;