import React from "react"
import { Link } from "gatsby"
import ReactGA from "react-ga"
import styles from "./Button.module.scss"

const Button = ({
  text,
  link,
  outlineColor,
  textColor,
  backgroundColor = "#ffff",
  newTab = true,
  onClick,
}) => {
  const customStyle = {
    color: textColor,
    border: outlineColor ? `2px solid ${outlineColor}` : "none",
    backgroundColor,
  }

  const sendEvent = data => e => {
    console.log("sending event.." + data)
    ReactGA.event({
      category: data,
      action: "Button Click",
    })
    if (onClick) {
      onClick(e);
    }
  }

  return (
    <ButtonWrapper link={link} newTab={newTab}>
      <button
        className={styles.button}
        style={customStyle}
        onClick={sendEvent(`${text} - ${link}`)}
      >
        {text}
      </button>
    </ButtonWrapper>
  )
}

const ButtonWrapper = ({ link, children, newTab }) => {
  if (!link) {
    return <>{children}</>
  }

  if (link.charAt(0) === "/") {
    return <Link to={link}>{children}</Link>
  }

  return (
    <a href={link} target={"_blank"}>
      {children}
    </a>
  )
}

export default Button
