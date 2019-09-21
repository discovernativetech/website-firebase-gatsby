import React from "react"
import { Parallax } from "react-parallax"

import styles from "./TextBanner.module.scss"

const TextBanner = ({ text, image, altText = "", containerStyle }) => {
  if (image) {
    return (
      <Parallax blur={0} bgImage={image} bgImageAlt="the cat" strength={300}>
        <div className={styles.textContainer}>
          <div className={`${styles.container} ${containerStyle}`} dangerouslySetInnerHTML={{__html: text}}></div>
        </div>
      </Parallax>
    )
  }

  return (
    <div className={styles.textContainer}>
      <div className={`${styles.container} ${containerStyle}`}  dangerouslySetInnerHTML={{__html: text}}></div>
    </div>
  )
}

export default TextBanner
