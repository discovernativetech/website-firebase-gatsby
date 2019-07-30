import React from 'react';
import styles from './MultiColumns.module.css'

const MultiColumns = ({ children, className = '' }) => {
  return (
    <div className={`${styles.container} ${className}`}>
        {children}
    </div>
  )
};

export default MultiColumns;