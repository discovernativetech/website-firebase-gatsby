import React from 'react';
import Img from "gatsby-image"
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './FAQ.module.css';

const FAQ = ({ data }) => {
    const QnAs = data && data.map((d, i) => {
        return <QnA key={i} question={d.question} icon={d.icon.childImageSharp.fixed} answers={d.answers} />
    })
    return (
        <div>
            <SectionTitle title={'FAQ'} />
            {QnAs}
        </div>
    );
}

const QnA = ({question, icon, answers}) => {
    const answersList = answers && answers.map((a, i) => <li key={i}>{a}</li>);
    return (
        <div className={styles.qnaContainer}>
            <div className={styles.leftBlockContainer}>
                <p className={styles.question}>{question}</p>
                <div className={styles.iconContainer}>
                    <Img fixed={icon} />
                </div>
            </div>
            <div className={styles.rightBlockContainer}>
                <ul>
                    {answersList}
                </ul>
            </div>
        </div>
    );
}

export default FAQ
