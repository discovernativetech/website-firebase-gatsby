import React from 'react';
import styles from './TestimonialItem.module.css'
import quoteIcon from '../../images/quote-icon.png';

const TestimonialItem = ({quote, name, location = "", userIcon}) => {
  return (
      <div className={styles.container}>
        <span className={styles.iconContainer}>
          <img className={styles.icon} src={quoteIcon} alt="quote"/>
        </span>
        <div className={styles.quoteContainer}>
          <p className={styles.quoteText}>{quote}</p>
          <img src={userIcon} className={styles.userIcon} alt="user_pic"/>
          <p className={styles.nameText}>{name}</p>
          <p className={styles.locationText}>{location}</p>
        </div>
      </div>
  )
};

export default TestimonialItem;