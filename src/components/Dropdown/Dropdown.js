import React, { useState } from "react"
import styles from "./Dropdown.module.scss"
import { Link } from "gatsby"
import { MDBIcon } from "mdbreact"

const Dropdown = ({ options = [], defaultText }) => {
  const [hoverMenu, setHoverMenu] = useState(false)
  const menuStyles = hoverMenu
    ? { visibility: "visible", opacity: "1" }
    : { visibility: "hidden", opacity: "0" }

  const handleMouseEnter = e => {
    setHoverMenu(true)
  }

  const handleMouseLeave = e => {
    setHoverMenu(false)
  }

  const handleMouseClick = e => {
    setHoverMenu(!hoverMenu)
  }

  const optionsList = options.map((option, index) => {
    const spanText = (
      <div className={styles.menuDropdownButton}>{option.title}</div>
    )
    return (
      <div key={index} className={styles.optionContainer}>
        {option.link ? (
          <Link className={styles.link} to={option.link}>
            {spanText}
          </Link>
        ) : (
          spanText
        )}
      </div>
    )
  })

  return (
    <div
      className={styles.container}
      onClick={handleMouseClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.dropdownButton}>
        {defaultText}
        <MDBIcon icon="caret-down" className={styles.icon} />
      </div>
      <div className={styles.dropdownMenu} style={menuStyles}>
        {optionsList}
      </div>
    </div>
  )
}

export default Dropdown
