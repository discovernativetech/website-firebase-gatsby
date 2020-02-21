import React from "react"
import { Link } from "gatsby"
import ReactGA from "react-ga"
import styles from "./Button.module.scss"

const Button = ({
  type = "button",
  text,
  link,
  buttonStyle = "primary",
  newTab = true,
  onClick,
}) => {
  // const customStyle = {
  //   color: textColor,
  //   border: outlineColor ? `2px solid ${outlineColor}` : "none",
  //   backgroundColor,
  // }

  let styleClass;
  switch (buttonStyle) {
    case "tertiary":
      styleClass = styles.tertiary
      break
    case "secondary":
      styleClass = styles.secondary
      break
    default:
    case "primary":
      styleClass = styles.primary
  }

  const sendEvent = data => e => {
    ReactGA.event({
      category: data,
      action: "Button Click",
    })
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <ButtonWrapper link={link} newTab={newTab}>
      <button
        type={type}
        className={`${styles.button} ${styleClass}`}
        // style={customStyle}
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
