import React from "react"
import Button from "../Button/Button"

import styles from "./CarouselItem.module.scss"

export const CarouselItem = ({ title, caption, backgroundImage, linkText }) => {
  const itemStyles = backgroundImage ? { backgroundImage } : {}

  return (
    <>
    <div className={styles.videoContainer}>
      <video className={styles.video} autoPlay loop muted>
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <div className={styles.itemContainer} styles={itemStyles}>
      <p className={styles.title}>{title}</p>
      <p>{caption}</p>
      <Button
        text={"LEARN MORE"}
        backgroundColor={"#ED435D"}
        textColor={"#ffff"}
        link={"/test"}
        newTab={false}
      />
    </div>
    </>
  )
}
