import React from 'react'
import styles from './Timeline.module.css';

const TimelineContent = ({ title, description, isLeft = true }) => {
    return (
        <div className={`${styles.container} ${isLeft? styles.left : styles.right}`}>
            <div className={styles.content}>
                <h3>{title}</h3>
                <span>{description}</span>
            </div>
        </div>
    )
}

export default TimelineContent
