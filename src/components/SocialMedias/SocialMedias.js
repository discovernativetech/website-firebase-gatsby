import React from "react"
import { MDBIcon } from "mdbreact"
import styles from "./SocialMedias.module.scss"

const SocialMedias = ({ size = "2x" }) => {
  return (
    <>
        <p className={styles.title}>YOU CAN ALSO FIND US HERE:</p>
      <div className={styles.socialMedias}>
        <a
          rel="noopener noreferrer"
          className={styles.link}
          target="_blank"
          href="https://www.facebook.com/discovernative/"
        >
          <MDBIcon
            fab
            className={styles.icon}
            icon="facebook-square"
            size={size}
          />{" "}
          <p className={styles.mediaName}>Facebook</p>
        </a>
        <a
          rel="noopener noreferrer"
          className={styles.link}
          target="_blank"
          href="https://www.instagram.com/discovernative/"
        >
          <MDBIcon fab className={styles.icon} icon="instagram" size={size} />{" "}
          <p className={styles.mediaName}>Instagram</p>
        </a>
      </div>
    </>
  )
}

export default SocialMedias
