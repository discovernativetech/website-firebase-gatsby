import React from 'react';
import styles from './FAQ.module.scss';

const FAQ = ({ data }) => {
    const QnAs = data && data.map((d, i) => {
        return <QnA key={i} question={d.question} answers={d.answers} />
    })
    return (
        <div>
            <div className={styles.container}>
                {QnAs}
            </div>
        </div>
    );
}

const QnA = ({question, answers}) => {
    const answersList = answers && answers.map((a, i) => <li key={i}>{a}</li>);
    return (
        <div className={styles.qnaContainer}>
            {/* <div className={styles.leftBlockContainer}>
                <p className={styles.question}>{question}</p>
                <div className={styles.iconContainer}>
                    <Img fixed={icon} />
                </div>
            </div> */}
            <div className={styles.rightBlockContainer}>
                <p className={styles.question}>{question}</p>
                <ul>
                    {answersList}
                </ul>
            </div>
        </div>
    );
}

export default FAQ
