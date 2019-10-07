import React, { Component } from "react"
import Img from "gatsby-image"

import styles from "./InfoBlock.module.scss"

class InfoBlock extends Component {
  state = {
    responsiveMode: false,
  }

  componentDidMount() {
    const documentWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    if (documentWidth < 600) {
      this.toggleResponsive()
    }
  }

  toggleResponsive = () => {
    this.setState({
      responsiveMode: !this.state.responsiveMode,
    })
  }

  render() {
    const { fact, image, title } = this.props

    if (this.state.responsiveMode) {
      return (
        <div className={styles.container}>
          <Img fixed={image} />
          <div className={styles.info}>
            <p className={styles.fact}>{fact}</p>
            <p className={styles.title}>{title}</p>
          </div>
        </div>
      )
    }

    return (
      <div className={styles.container}>
        <p className={styles.fact}>{fact}</p>
        <Img fixed={image} />
        <p className={styles.title}>{title}</p>
      </div>
    )
  }
}

export default InfoBlock
