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
  }

  return (
    <ButtonWrapper link={link}>
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

const ButtonWrapper = ({ link, children }) => {
  if (link && link.charAt(0) === "/") {
    return <Link to={link}>{children}</Link>
  }
  return (
    <a href={link} target={"_blank"}>
      {children}
    </a>
  )
}

export default Button
