import React from 'react'
// import { Link, useStaticQuery, graphql  } from "gatsby";
import { Link  } from "gatsby";

import { MDBContainer } from 'mdbreact';
// import Img from "gatsby-image";
import styles from './Footer.module.scss';
import SocialMedias from '../SocialMedias/SocialMedias';

import nst from '../../images/v2/NST.png';
import astro from '../../images/v2/ASTROAWANI.png';
import wob from '../../images/v2/WOB.jpg';

const Footer = () => {
    return (
        <>
            <div className={styles.container}>
                <MDBContainer className={styles.innerContainer}>
                    <div className={styles.linksContainer}>
                        <div className={styles.infoContainer}>
                            <p className={styles.infoTitle}>As featured on,</p>
                            <div className={styles.mediasContainer}>
                                <a className={styles.mediaLink} href={'/'}>
                                    <img className={styles.mediaIcon} src={wob} alt={'news'} />
                                </a>
                                <a className={styles.mediaLink} href={'/'}>
                                    <img className={styles.mediaIcon} src={nst} alt={'news'} />
                                </a>
                                <a className={styles.mediaLink} href={'/'}>
                                    <img className={styles.mediaIcon} src={astro} alt={'news'} />
                                </a>
                            </div>
                        </div>
                        <div className={styles.infoContainer}>
                            <p className={styles.infoTitle}>Contact</p>
                            <p className={styles.p}><b>Email:</b> info@discovernative.org</p>
                            <p className={styles.p}><b>Tel:</b> +60 164113260</p>
                            <br/>
                            <p>Bandar Sunway, Petaling Jaya</p>
                        </div>
                        <div className={styles.infoContainer}>
                            <p className={styles.infoTitle}>Navigate</p>
                            <span className={styles.navLink}>
                                <Link className={styles.link} to="/about-us">Our Experiences</Link>
                            </span>
                            <span className={styles.navLink}>
                                <Link className={styles.link} to="/traveller-experiences">Testimonials</Link>
                            </span>
                            <span className={styles.navLink}>
                                <Link className={styles.link} to="/impact">Contact</Link>
                            </span>
                        </div>
                    </div>
                </MDBContainer>
            </div>
            {/* <div className={styles.copyrightContainer}>
                <p className={styles.p}>Copyright 2019 discovernative.org. All Right Reserved</p>
            </div> */}
        </>
    )
}

export default Footer
