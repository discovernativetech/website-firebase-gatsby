import React from 'react'
import styles from './BackgroundSection.module.css'
import Img from "gatsby-image"

// import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ image }) => {
  // const backgroundStyles = {
  //   backgroundImage: `url(${image})`,
  //   height: '600px'
  // }
  return (
    <div className={styles.background}>
      <Img fluid={image}/>
    </div>
    // <div className={styles.container} style={backgroundStyles} />
  )
}

export default BackgroundSection;