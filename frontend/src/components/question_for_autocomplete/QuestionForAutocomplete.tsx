import React from 'react';
import styles from './QuestionForAutocomplete.module.css';
import Button from '../button/Button';
import { Question } from '../../types/Question';

interface QuestionForAutocompleteProps {
  question: Question;
  highlightTerm?: string;
  style?: React.CSSProperties;
}

const QuestionForAutocomplete = ({ 
  question,
  highlightTerm = '',
  style
}: QuestionForAutocompleteProps) => {
  
  const highlightText = (text: string) => {
    if (!highlightTerm || highlightTerm.length === 0) {
      return text;
    }

    const regex = new RegExp(`(${highlightTerm})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) => {
      const isHighlighted = part.toLowerCase() === highlightTerm.toLowerCase();
      return isHighlighted ? (
        <span key={index} className={styles.highlight}>{part}</span>
      ) : (
        part
      );
    });
  };

  const getDescription = () => {
    const firstSentence = question.answer.split('\n')[0];
    if (firstSentence.length > 100) {
      return firstSentence.substring(0, 100) + '...';
    }
    return firstSentence;
  };

  return (
    <div className={styles.container} style={style}>
      <div className={styles.content}>
        <span className={styles.category}>{question.groupId}</span>
        <h3 className={styles.question}>
          {highlightText(question.question)}
        </h3>
        <p className={styles.description}>
          {getDescription()}
        </p>
      </div>
      <Button isBlack={true}>
        Voir la réponse
      </Button>
    </div>
  );
};

export default QuestionForAutocomplete;
