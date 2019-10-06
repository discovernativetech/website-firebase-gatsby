import React from "react"
import styles from "./Textarea.module.scss"

const Textarea = props => {
  const {
    labelText,
    cols = "50",
    rows = "5",
    direction = "row",
    handleChange,
    handleBlur,
    value,
    name,
    error,
    touched,
    placeholder,
  } = props

  const containerStyle =
    direction === "row" ? styles.rowContainer : styles.columnContainer

  return (
    <div className={containerStyle}>
      {labelText && (
        <label className={styles.label} htmlFor={name}>
          {labelText}
        </label>
      )}
      <textarea
        rows={rows}
        cols={cols}
        className={styles.textbox}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        placeholder={placeholder}
      />
      {(error || touched) && <span className={styles.message}>{error}</span>}
    </div>
  )
}

export default Textarea
