import React from "react"
import Img from "gatsby-image"
import styles from "./SimpleBlock.module.scss"

const SimpleBlock = ({
  title,
  titleClass = "",
  description,
  image,
  children,
}) => {
  return (
    <div className={styles.container}>
      {image && (
        <div className={styles.iconContainer}>
          <Img fixed={image} />
        </div>
      )}
      <div className={styles.titleContainer}>
        <span className={`${styles.title} ${titleClass}`}>{title}</span>
      </div>
      {description && (
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>{description}</p>
        </div>
      )}
      {children}
    </div>
  )
}

export default SimpleBlock
