import React from 'react'
import Img from "gatsby-image"

import styles from './BackgroundSection.module.css';

// import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ image, imageStyles = {}, containerStyles = {}, title }) => {
  return (
    <div className={styles.background} style={containerStyles}>
      <Img fluid={image} imgStyle={imageStyles}/>
      <span className={styles.title}>{title}</span>
    </div>
  );
}

export default BackgroundSection;