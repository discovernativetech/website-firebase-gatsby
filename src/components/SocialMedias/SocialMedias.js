import React from "react";
import { MDBIcon } from 'mdbreact';
import styles from './SocialMedias.module.css';

const SocialMedias = ({ size = "2x" }) => {

    return (
        <div className={styles.socialMedias}>
            <a rel="noopener noreferrer" className={styles.link} target="_blank" href="https://www.facebook.com/nativexperiences/">
                <MDBIcon fab className={styles.icon} icon="facebook-square" size={size}/>
            </a>
            <a rel="noopener noreferrer" className={styles.link} target="_blank" href="https://www.instagram.com/nativexperiences/">
                <MDBIcon fab className={styles.icon} icon="instagram" size={size}/>
            </a>
            <a rel="noopener noreferrer" className={styles.link} target="_blank" href="https://www.linkedin.com/company/native-experiences/about/">
                <MDBIcon fab className={styles.icon} icon="linkedin" size={size} />
            </a>
        </div>
    );
}

export default SocialMedias;