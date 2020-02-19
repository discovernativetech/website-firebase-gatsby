import React from "react"
import Img from "gatsby-image"
import Button from "../Button/Button"
import styles from "./ArticlePreview.module.scss"

export const ArticlePreview = ({ image, title, text, link }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.fullWidth}>
          <Img fluid={image} alt="test" className={styles.coverImage} />
        </div>
      </div>
      <div className={styles.articleContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />
        <div className={styles.buttonContainer}>
          <Button
            text={"READ MORE"}
            backgroundColor={"#ED435D"}
            textColor={"#ffff"}
            link={link}
            newTab={true}
          />
        </div>
      </div>
    </div>
  )
}
