import React from 'react'
// import { Link, useStaticQuery, graphql  } from "gatsby";
// import { Link  } from "gatsby";

import { MDBContainer } from 'mdbreact';
// import Img from "gatsby-image";
import styles from './Footer.module.scss';

import nst from '../../images/v2/NST.png';
import astro from '../../images/v2/ASTROAWANI.png';
import wob from '../../images/v2/WOB.jpg';

const Footer = ({ experiencesRef, testimonialsRef, contactRef}) => {
    return (
        <>
            <div className={styles.container}>
                <MDBContainer className={styles.innerContainer}>
                    <div className={styles.linksContainer}>
                        <div className={styles.infoContainer}>
                            <p className={styles.infoTitle}>As featured on,</p>
                            <div className={styles.mediasContainer}>
                                <a className={styles.mediaLink} target="__blank" href={'https://www.worldofbuzz.com/you-can-actually-visit-an-orang-asli-village-hang-out-with-locals-via-this-activity-on-airbnb/'}>
                                    <img className={styles.mediaIcon} src={wob} alt={'news'} />
                                </a>
                                <a className={styles.mediaLink} target="__blank" href={'https://www.nst.com.my/lifestyle/sunday-vibes/2019/12/547875/native-social-enterprise-featuring-orang-aslis-thats-powered'}>
                                    <img className={styles.mediaIcon} src={nst} alt={'news'} />
                                </a>
                                <a className={styles.mediaLink} target="__blank" href={'https://www.youtube.com/watch?v=-MgjXRgCeXE'}>
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
                            <span className={styles.navLink} 
                                onClick={
                                    () =>{experiencesRef.current.scrollIntoView({ behavior: 'smooth' });}
                                }
                            >
                                <span className={styles.link} to="/about-us">Our Experiences</span>
                            </span>
                            <span className={styles.navLink}  
                                onClick={
                                    () =>{testimonialsRef.current.scrollIntoView({ behavior: 'smooth' });}
                                }
                            >
                                <span className={styles.link} to="/traveller-experiences">Testimonials</span>
                            </span>
                            <span className={styles.navLink}  
                                onClick={
                                    () =>{contactRef.current.scrollIntoView({ behavior: 'smooth' });}
                                }
                            >
                                <span className={styles.link} to="/impact">Contact</span>
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
