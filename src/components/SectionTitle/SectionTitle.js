import React from 'react';
import styles from './SectionTitle.module.scss';

const SectionTitle = ({ title, subtitle, className = "", useBorder = true }) => {
    return (
        <div className={`${styles.container} ${className}`}>
            <p className={styles.title}>{title}</p>
            {useBorder && <div className={styles.border} />}
            <p className={styles.subtitle}>{subtitle}</p>
        </div>
    )
}

export default SectionTitle
