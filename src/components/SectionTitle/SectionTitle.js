import React from 'react';
import styles from './SectionTitle.module.css';

const SectionTitle = ({ title }) => {
    return (
        <div className={styles.container}>
            <span className={styles.title}>{title}</span>
        </div>
    )
}

export default SectionTitle
