import React from "react"
import Img from "gatsby-image"

import styles from "./BackgroundSection.module.scss"

const BackgroundSection = ({
  image,
  imageStyles = { height: "100%" },
  containerStyles = {},
  title,
  children,
  childrenPosition,
  childrenFullWidth = false,
}) => {
  const itemsPosition = childrenPosition || {
    left: "50%",
    top: "50%",
    width: childrenFullWidth ? '100%' : 'initial'
  }

  return (
    <div className={styles.background} style={containerStyles}>
      <Img fluid={image} style={imageStyles} />
      <span style={itemsPosition} className={styles.children}>
        {children}
      </span>
      {/* <span className={styles.title}>{title}</span> */}
    </div>
  )
}

export default BackgroundSection
