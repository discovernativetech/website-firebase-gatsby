import React from "react"
import styles from "./MultiColumns.module.scss"
import SectionTitle from "../SectionTitle/SectionTitle"

const MultiColumns = ({ children, className = "", title, subtitle, useBorder }) => {
  return (
    <div className={styles.container}>
      {title && <SectionTitle title={title} subtitle={subtitle} useBorder={useBorder} />}
      <div className={`${styles.itemsContainer} ${className}`}>{children}</div>
    </div>
  )
}

export default MultiColumns
