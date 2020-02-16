import React from "react"

import styles from "./ImageHighlightsBlock.module.scss"

export const ImageHighlightsBlock = ({
  coverImage,
  title,
  highlights,
  description,
}) => {
  console.log(highlights[0].icon.publicURL)
  const icons = highlights.map((highlight, index) => {
    console.log(highlight.icon.publicURL)

    return (
    <span className={styles.iconHighlight} key={index}>
      <img src={highlight.icon.publicURL} alt={highlight.text} />
      {highlight.text}
    </span>
    )});
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}></div>
      <div className={styles.highlightsContainer}>
        <div className={styles.iconContainer}>{icons}</div>
        {description}
      </div>
    </div>
  )
}
