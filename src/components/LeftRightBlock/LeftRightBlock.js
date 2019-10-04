import React from "react"
import Img from "gatsby-image"

import styles from "./LeftRightBlock.module.scss"

const LeftRightBlock = ({
  image,
  title,
  description,
  children,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftBlockContainer}>
        <Img style={{ maxHeight: "100%" }} fluid={image} />
      </div>
      <div className={styles.rightBlockContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.children}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default LeftRightBlock
