import React from 'react';
import styles from './MultiColumns.module.css'

const MultiColumns = ({ children }) => {
  return (
    <div className={styles.container}>
        {children}
    </div>
  )
};

export default MultiColumns;