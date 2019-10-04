import React from 'react'
import Img from 'gatsby-image';
import styles from './Timeline.module.scss';

const TimelineContent = ({ title, description, isLeft = true, image }) => {
    return (
        <div className={`${styles.container} ${isLeft? styles.left : styles.right}`}>
            <div className={styles.content}>
                <div className={styles.imageContent}>
                    {
                        image && <Img fixed={image} />
                    }
                </div>
                <div className={styles.info}>
                    <p className={styles.contentTitle}>{title}</p>
                    <span>{description}</span>
                </div>
            </div>
        </div>
    )
}

export default TimelineContent
