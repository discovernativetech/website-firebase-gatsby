import React from "react"
import Img from "gatsby-image"

import styles from "./LeftRightBlock.module.scss"
import Button from "../Button/Button"

const LeftRightBlock = ({
  image,
  title,
  description,
  learnMoreLink,
  bookingLink,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftBlockContainer}>
        <Img fluid={image} />
      </div>
      <div className={styles.rightBlockContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.buttons}>
          <Button
            text={"LEARN MORE"}
            backgroundColor={"#ED435D"}
            textColor={"#ffff"}
            link={learnMoreLink}
            newTab={true}
          />
          <Button
            text={"BOOK THIS EXPERIENCE"}
            backgroundColor={"#ED435D"}
            textColor={"#ffff"}
            link={bookingLink}
            newTab={true}
          />
        </div>
      </div>
    </div>
  )
}

export default LeftRightBlock
