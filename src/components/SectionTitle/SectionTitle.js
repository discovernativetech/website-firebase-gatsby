import React from 'react';
import styles from './SectionTitle.module.scss';

const SectionTitle = ({ title }) => {
    return (
        <div className={styles.container}>
            <span className={styles.title}>{title}</span>
        </div>
    )
}

export default SectionTitle
