import React from 'react';
import styles from './SectionTitle.module.scss';

const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>{title}</p>
            <span>___</span>
            <p className={styles.subtitle}>{subtitle}</p>
        </div>
    )
}

export default SectionTitle
