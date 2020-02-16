import React from "react"
import styles from "./MultiColumns.module.scss"

const MultiColumns = ({ children, className = "", title, subtitle }) => {
  return (
    <div className={styles.container}>
      <div className={styles.headline}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div className={`${styles.itemsContainer} ${className}`}>{children}</div>
    </div>
  )
}

export default MultiColumns
