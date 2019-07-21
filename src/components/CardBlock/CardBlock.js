import React from 'react';
import styles from './CardBlock.module.css'
import Img from 'gatsby-image';

const CardBlock = ({title, description, image, children}) => {
  return (
    <div className={styles.container}>
        { image &&
          <div className={styles.iconContainer}>
              <Img fixed={image} />
          </div>
        }
        <div className={styles.titleContainer}>
            <span className={styles.title}>{title}</span>
        </div>
        { description &&
          <div className={styles.descriptionContainer}>
              <p className={styles.description}>{description}</p>
          </div>
        }
        { children }
    </div>
  )
};

export default CardBlock;