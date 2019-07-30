import React from 'react';


import styles from './Button.module.css';

const Button = ({text, link, outlineColor = '#49CCDD', textColor}) => {
    const customStyle = {
        color: textColor,
        border: `2px solid ${outlineColor}`
    }
    return (
        <a href={link} target={'_blank'}>
            <button
                className={styles.button}
                style={customStyle}
            >
                {text}
            </button>
        </a>
    )
}

export default Button
