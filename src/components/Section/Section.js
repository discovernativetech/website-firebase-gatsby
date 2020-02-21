import React from "react"
import styles from "./Section.module.scss"
// import { MDBContainer } from "mdbreact"

export const Section = ({ children, useBorder = true, id = "" }) => {
  const borderStyle = useBorder ? styles.border : ""

  return (
    <div id={id} className={`${styles.container} ${borderStyle}`}>
      {children}
    </div>
  )
}
