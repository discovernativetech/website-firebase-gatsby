import React from "react"
import Img from "gatsby-image"

import styles from "./Preview.module.scss"
import Button from "../Button/Button"

const Preview = ({
  image,
  imageAlt,
  link,
  description,
  linkText,
  newTab,
  title,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Img fluid={image} alt={imageAlt} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
        </div>
        <Button
          text={linkText}
          backgroundColor={"#ED435D"}
          textColor={"#ffff"}
          link={link}
          newTab={newTab}
        />
      </div>
    </div>
  )
}

export default Preview
