import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { MDBContainer, MDBIcon } from "mdbreact"
import Img from "gatsby-image"
import featureToggles from "../../config/featureToggle"
import styles from "./Navbar.module.scss"
import Button from "../Button/Button"

const { navbarBookNow } = featureToggles

const navItems = [
  {
    title: "About Us",
    path: "/about-us",
    menu: [],
  },
  {
    title: "Experiences",
    path: "",
    menu: [
      {
        title: "Travellers",
        path: "/travellers-experiences",
      },
      {
        title: "Teams",
        path: "/travellers-experiences",
      },
      {
        title: "School",
        path: "/travellers-experiences",
      },
    ],
  },
  {
    title: "Impact",
    path: "/coming-soon",
    menu: [],
  },
  {
    title: "Journal",
    path: "/coming-soon",
    menu: [],
  },
]

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const navBarItems = navItems.map((item, index) => (
    <NavBarItem
      key={index}
      title={item.title}
      path={item.path}
      menuItems={item.menu}
    />
  ))

  const handleToggle = e => setToggleMenu(!toggleMenu)

  return (
    <div className={styles.container}>
      <MDBContainer className={styles.innerContainer}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <Img fixed={data.logo.childImageSharp.fixed} />
          </Link>
          <span className={styles.menuIcon}>
            <MDBIcon
              icon="bars"
              className={styles.icon}
              onClick={handleToggle}
            />
          </span>
        </div>
        <div
          className={`${styles.linksContainer} ${
            toggleMenu ? styles.openMenu : styles.hideMenu
          }`}
        >
          <div
            className={`${styles.menuContainer} ${
              toggleMenu ? styles.openMenu : styles.hideMenu
            }`}
          >
            {navBarItems}
            {navbarBookNow && (
              <Button
                text={"BOOK NOW"}
                link={"https://www.airbnb.com/experiences/182216"}
                outlineColor={"#ED435D"}
                textColor={"#3A3A3C"}
              />
            )}
          </div>
        </div>
      </MDBContainer>
    </div>
  )
}

const NavBarItem = ({ title, path, menuItems }) => {
  const [hoverMenu, setHoverMenu] = useState(false)
  const menuStyles = hoverMenu ? { visibility: "visible", opacity: "1" } : { visibility: "hidden", opacity: "0" }

  const handleMouseEnter = e => {
    setHoverMenu(true)
  }

  const handleMouseLeave = e => {
    setHoverMenu(false)
  }

  const handleMouseClick = e => {
    setHoverMenu(!hoverMenu)
  }

  const items = menuItems.map((item, index) => (
    <Link className={styles.itemNavLink} key={index} to={item.path}>
      <span className={styles.itemLinkContainer}>
        {item.title}
        <MDBIcon
          icon="angle-right"
          className={`grey-text ${styles.menuRightArrow}`}
        />
      </span>
    </Link>
  ))

  return (
    <div
      className={styles.navItemContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleMouseClick}
    >
      <span className={styles.navLink}>
        {path === "" ? (
          <span className={styles.link}>{title}</span>
        ) : (
          <Link className={styles.link} to={path}>
            {title}
          </Link>
        )}
        {
          Boolean(items.length) && <MDBIcon icon="caret-down" className={styles.caretDownIcon} />
        }
      </span>
      {Boolean(items.length) && (
        <div style={menuStyles} className={styles.navItemMenuContainer}>
          {items}
        </div>
      )}
    </div>
  )
}

export default Navbar
