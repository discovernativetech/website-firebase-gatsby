import React from 'react';
import { Link, useStaticQuery, graphql  } from "gatsby";
import { MDBContainer } from 'mdbreact';
import Img from "gatsby-image";
import styles from './Navbar.module.css';
import Button from '../Button/Button';

const Navbar = () => {
    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                    fixed(width: 100, height: 100) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return (
            <div className={styles.container}>
                <MDBContainer className={styles.innerContainer}>
                    <div className={styles.logoContainer}>
                        <Link to="/">
                            <Img fixed={data.logo.childImageSharp.fixed} />
                        </Link>
                    </div>
                    <div className={styles.linksContainer}>
                        <div className={styles.menuContainer}>
                            <span className={styles.navLink}>
                                <Link className={styles.link} to="/coming-soon">About Us</Link>
                            </span>
                            <span className={styles.navLink}>
                                <Link className={styles.link} to="/coming-soon">The Experiences</Link>
                            </span>
                            <span className={styles.navLink}>
                                <Link className={styles.link} to="/coming-soon">Impact</Link>
                            </span>
                            <span className={styles.navLink}>
                                <Link className={styles.link} to="/coming-soon">Journal</Link>
                            </span>
                            <Button text={'BOOK NOW'} link={'https://www.airbnb.com/experiences/182216'} outlineColor={'#ED435D'} textColor={'#3A3A3C'}/>
                        </div>
                    </div>
                </MDBContainer>
            </div>
    )
}

export default Navbar
