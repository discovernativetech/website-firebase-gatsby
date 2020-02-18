import React from "react"
import styles from "./TestimonialItem.module.scss"

import Img from "gatsby-image"

const TestimonialItem = ({ quote, name, countryIcon, userIcon }) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconsContainer}>
        <Img className={styles.icon} fixed={countryIcon} />
        <Img className={styles.icon} fixed={userIcon} />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.name}>{name}</p>
        <p className={styles.text}>{quote}</p>
      </div>
    </div>
  )
}

export default TestimonialItem
