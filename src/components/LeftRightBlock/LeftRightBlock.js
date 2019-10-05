import React from "react"
import Img from "gatsby-image"

import styles from "./LeftRightBlock.module.scss"

const LeftRightBlock = ({
  inverseBlock = false,
  image,
  title,
  description,
  children,
}) => {
  return (
    <div className={`${styles.container} ${inverseBlock && styles.invertedContainer}`}>
      <div className={styles.leftBlockContainer}>
        <Img style={{ maxHeight: "100%" }} fluid={image} />
      </div>
      <div className={styles.rightBlockContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description} dangerouslySetInnerHTML={{__html: description}}></p>
        <div className={styles.children}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default LeftRightBlock
