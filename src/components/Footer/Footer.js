import React from 'react'
// import { Link, useStaticQuery, graphql  } from "gatsby";
import { Link  } from "gatsby";

import { MDBContainer } from 'mdbreact';
// import Img from "gatsby-image";
import styles from './Footer.module.scss';
import SocialMedias from '../SocialMedias/SocialMedias';
// import Newsletter from '../Newsletter/Newsletter';

const Footer = () => {
    return (
        <>
            <div className={styles.container}>
                <MDBContainer className={styles.innerContainer}>
                    <div className={styles.socialMediaContainer}>
                        <SocialMedias />
                    </div>
                    <div className={styles.linksContainer}>
                        <div className={styles.infoContainer}>
                            <p className={styles.infoTitle}>Stay Connected</p>
                            <p className={styles.p}>Join us and receive our bi-weekly newsletters.</p>
                            <div className={styles.newsletterContainer}>
                            </div>
                        </div>
                        <div className={styles.infoContainer}>
                            <p className={styles.infoTitle}>Navigate</p>
                            <span className={styles.navLink}>
                                <Link className={styles.link} to="/about-us">About Us</Link>
                            </span>
                            <span className={styles.navLink}>
                                <Link className={styles.link} to="/traveller-experiences">The Experience</Link>
                            </span>
                            <span className={styles.navLink}>
                                <Link className={styles.link} to="/impact">Impact</Link>
                            </span>
                            <span className={styles.navLink}>
                                <Link className={styles.link} to="/coming-soon">Journal</Link>
                            </span>
                        </div>
                        <div className={styles.infoContainer}>
                            <p className={styles.infoTitle}>Contact</p>
                            <p className={styles.p}><b>Email:</b> info@discovernative.org</p>
                            <p className={styles.p}><b>Tel:</b> +60 164113260</p>
                            <br/>
                            <p>Bandar Sunway, Petaling Jaya</p>
                        </div>
                    </div>
                </MDBContainer>
            </div>
            <div className={styles.copyrightContainer}>
                <p className={styles.p}>Copyright 2019 discovernative.org. All Right Reserved</p>
            </div>
        </>
    )
}

export default Footer
