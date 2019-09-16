import React from "react";
import { Parallax } from "react-parallax";

import styles from "./TextBanner.module.scss"
import { MDBContainer } from "mdbreact"

const TextBanner = ({ text, image, altText = "", containerStyle }) => {
  if (image) {
    return (
      <Parallax blur={0} bgImage={image} bgImageAlt="the cat" strength={300}>
        <MDBContainer>
          <div className={`${styles.container} ${containerStyle}`}>{text}</div>
        </MDBContainer>
      </Parallax>
    )
  }

  return (
    <MDBContainer>
      <div className={`${styles.container} ${containerStyle}`}>{text}</div>
    </MDBContainer>
  )
}

export default TextBanner
