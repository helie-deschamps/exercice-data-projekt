import React from 'react';
import styles from './QuestionCard.module.css';
import Button from '../button/Button';
import { Question } from '../../types/Question';

interface QuestionCardProps {
  question: Question;
  style?: React.CSSProperties;
}

const QuestionCard = ({question, style}: QuestionCardProps) => {
  return (
    <div className={styles.card} style={style}>
      <span className={styles.category}>{question.groupId}</span>
      <h3 className={styles.title}>{question.question}</h3>
      <Button>Voir la réponse</Button>
    </div>
  );
};

export default QuestionCard;
