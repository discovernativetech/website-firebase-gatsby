import React from 'react'
import Button from '../Button/Button';

import styles from './CarouselItem.module.scss';

export const CarouselItem = ({ title, caption, backgroundImage, linkText }) => {

  const itemStyles = backgroundImage ? { backgroundImage } : {};

  return (
    <div className={styles.itemContainer} styles={itemStyles}>
      <p className={styles.title}>{title}</p>
      <p>{caption}</p>
      <Button
          text={"LEARN MORE"}
          backgroundColor={"#ED435D"}
          textColor={"#ffff"}
          link={"/test"}
          newTab={false}
        />
    </div>
  )
}
