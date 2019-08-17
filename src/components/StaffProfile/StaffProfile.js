import React from 'react';
import Img from 'gatsby-image';

import styles from './StaffProfile.module.css';

const StaffProfile = ({ image, name, title, description}) => {
    return (
        <div className={styles.container}>
            <Img fixed={image} />
            <p className={styles.nameTitle}>{name}<br/>{title}</p>
            <p>{description}</p>
        </div>
    )
}

export default StaffProfile
