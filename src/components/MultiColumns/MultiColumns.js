import React from "react"
import styles from "./MultiColumns.module.scss"
import SectionTitle from "../SectionTitle/SectionTitle"

const MultiColumns = ({ children, className = "", title, subtitle }) => {
  return (
    <div className={styles.container}>
      <SectionTitle title={title} subtitle={subtitle} />
      <div className={`${styles.itemsContainer} ${className}`}>{children}</div>
    </div>
  )
}

export default MultiColumns
