import React from "react"
import Button from "../Button/Button"

import styles from "./CarouselItem.module.scss"

export const CarouselItem = ({
  title,
  caption,
  image,
  linkText,
  buttonStyle,
  video,
  link
}) => {
  const itemStyles = image ? { backgroundImage: `url(${image})` } : {}

  return (
    <>
      {video && (
        <div className={styles.videoContainer}>
          <video className={styles.video} autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      )}
      <div className={styles.itemContainer} style={itemStyles}>
        <p className={styles.title} dangerouslySetInnerHTML={{__html: title}} />
        <p className={styles.caption}>{caption}</p>
        <br />
        <Button
         className={styles.carouselButton}
          buttonStyle={buttonStyle}
          text={linkText}
          link={link}
          newTab={false}
        />
      </div>
    </>
  )
}
