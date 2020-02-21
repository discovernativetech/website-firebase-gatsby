import React from "react"
import Img from "gatsby-image"
import styles from "./ImageHighlightsBlock.module.scss"

import ArrowIcon from "../../images/v2/arrow.inline.svg"

export const ImageHighlightsBlock = ({
  coverImage,
  title,
  highlights,
  description,
  link
}) => {
  const icons = highlights.map((highlight, index) => {
    return (
      <span className={styles.iconHighlight} key={index}>
        <img
          className={styles.icon}
          src={highlight.icon.publicURL}
          alt={highlight.text}
        />
        {highlight.text}
      </span>
    )
  })
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Img fluid={coverImage.childImageSharp.fluid} />
        <span className={styles.imageTitle}>{title}</span>
        <a href={link} target="__blank">
          <div className={styles.hoverContainer}>
            <p className={styles.bookingTitle}>
              BOOK THIS EXPERIENCE NOW
              <ArrowIcon className={styles.arrowIcon} />
            </p>
            <p className={styles.bookingCaption}>
              This link will redirect you to our booking page.
            </p>
          </div>
        </a>
      </div>
      <div className={styles.highlightsContainer}>
        <div className={styles.iconContainer}>{icons}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  )
}
