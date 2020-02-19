import React from 'react'
import styles from './Section.module.scss';

export const Section = ({ children, useBorder = true }) => {

  const borderStyle = useBorder ? styles.border : ""

  return (
    <div className={`${styles.container} ${borderStyle}`}>
      {children}
    </div>
  )
}
