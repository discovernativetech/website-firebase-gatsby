import React from 'react'
import styles from './BackgroundSection.module.css'

// import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ image }) => {
  const backgroundStyles = {
    backgroundImage: `url(${image})`,
    height: '600px'
  }
  return (
    <div style={backgroundStyles} className={styles.container} style={backgroundStyles} />
  )
}

export default BackgroundSection;