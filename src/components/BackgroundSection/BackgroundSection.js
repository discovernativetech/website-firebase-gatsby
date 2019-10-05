import React from 'react'
import Img from "gatsby-image"

import styles from './BackgroundSection.module.scss';

const BackgroundSection = ({ image, imageStyles = {}, containerStyles = {}, title, children, childrenPosition }) => {
  const itemsPosition = childrenPosition || {
    left: '50%',
    top: '50%',
  };

  return (
    <div className={styles.background} style={containerStyles}>
      <Img fluid={image} style={imageStyles}/>
      <span style={itemsPosition} className={styles.children}>{children}</span>
      {/* <span className={styles.title}>{title}</span> */}
    </div>
  );
}

export default BackgroundSection;