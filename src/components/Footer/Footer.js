import React from 'react'
// import { Link, useStaticQuery, graphql  } from "gatsby";
import { Link  } from "gatsby";

import { MDBContainer } from 'mdbreact';
// import Img from "gatsby-image";
import styles from './Footer.module.css';
import SocialMedias from '../SocialMedias/SocialMedias';

const Footer = () => {
    return (
        <div className={styles.container}>
            <MDBContainer className={styles.innerContainer}>
                <div className={styles.socialMediaContainer}>
                    <SocialMedias />
                </div>
                <div className={styles.linksContainer}>
                    <div className={styles.infoContainer}>
                        <p className={styles.infoTitle}>Native</p>
                        <span className={styles.border}>-</span>
                        <span className={styles.navLink}>
                            <Link className={styles.link} to="/about-us">About Us</Link>
                        </span>
                        <span className={styles.navLink}>
                            <Link className={styles.link} to="/coming-soon">The Experience</Link>
                        </span>
                        <span className={styles.navLink}>
                            <Link className={styles.link} to="/coming-soon">Testimonials</Link>
                        </span>
                        <span className={styles.navLink}>
                            <Link className={styles.link} to="/coming-soon">FAQ</Link>
                        </span>
                    </div>
                    <div className={styles.infoContainer}>
                        <p className={styles.infoTitle}>Contact</p>
                        <span className={styles.border}>-</span>
                        <p>info@discovernative.org</p>
                    </div>
                    <div className={styles.infoContainer}>
                        <p className={styles.infoTitle}>Address</p>
                        <span className={styles.border}>-</span>
                        <p>The Compass</p>
                    </div>
                </div>
            </MDBContainer>
        </div>
    )
}

export default Footer
