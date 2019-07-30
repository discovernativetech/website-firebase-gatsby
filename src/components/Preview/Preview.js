import React from 'react'
import Img from "gatsby-image"

import styles from './Preview.module.css';
import Button from '../Button/Button';

const Preview = ({image, imageAlt, link, description, linkText}) => {

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Img fluid={image} alt={imageAlt}/>
            </div>
            <div className={styles.infoContainer}>
                <p className={styles.description}>{description}</p>
                <Button text={linkText} textColor={'#002445'} link={link} />
            </div>
        </div>
    )
}

export default Preview