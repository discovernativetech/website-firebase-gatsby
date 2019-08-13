import React, { useState }  from 'react';
import { Link, useStaticQuery, graphql  } from "gatsby";
import { MDBContainer, MDBIcon } from 'mdbreact';
import Img from "gatsby-image";
import styles from './Navbar.module.css';
import Button from '../Button/Button';

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

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
    `);

    const handleToggle = e => setToggleMenu(!toggleMenu);

    return (
            <div className={styles.container}>
                <MDBContainer className={styles.innerContainer}>
                    <div className={styles.logoContainer}>
                        <Link to="/">
                            <Img fixed={data.logo.childImageSharp.fixed} />
                        </Link>
                        <span className={styles.menuIcon}>
                            <MDBIcon icon="bars" className={styles.icon} onClick={handleToggle}/>
                        </span>
                    </div>
                    <div className={`${styles.linksContainer} ${toggleMenu ? styles.openMenu : styles.hideMenu}`} >
                        <div className={`${styles.menuContainer} ${toggleMenu ? styles.openMenu : styles.hideMenu}`}>
                            <span className={styles.navLink}>
                                <Link className={styles.link} to="/about-us">About Us</Link>
                            </span>
                            <span className={styles.navLink}>
                                <Link className={styles.link} to="/travellers">The Experiences</Link>
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
