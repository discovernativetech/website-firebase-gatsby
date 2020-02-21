import React from "react"
import styles from "./Section.module.scss"
// import { MDBContainer } from "mdbreact"

export const Section = React.forwardRef(({ children, useBorder = true }, ref) => {
  const borderStyle = useBorder ? styles.border : ""

  return (
    <div ref={ref} className={`${styles.container} ${borderStyle}`}>
      {children}
    </div>
  )
})
