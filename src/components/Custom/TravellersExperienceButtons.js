import React from "react"
import Button from "../Button/Button"

import styles from "./TravellersExperienceButtons.module.scss"

const TravellersExperienceButtons = ({ learnMoreLink, bookingLink }) => {
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <Button
          text={"LEARN MORE"}
          backgroundColor={"#ED435D"}
          textColor={"#ffff"}
          link={learnMoreLink}
          newTab={false}
        />
      </div>
      {bookingLink && (
        <div className={styles.button}>
          <Button
            text={"BOOK THIS EXPERIENCE"}
            backgroundColor={"#ED435D"}
            textColor={"#ffff"}
            link={bookingLink}
            newTab={false}
          />
        </div>
      )}
    </div>
  )
}

export default TravellersExperienceButtons
