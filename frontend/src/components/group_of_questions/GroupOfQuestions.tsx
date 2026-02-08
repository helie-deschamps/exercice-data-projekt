import React, { useState } from 'react';
import styles from './GroupOfQuestions.module.css';
import QuestionForAutocomplete from '../question_for_autocomplete/QuestionForAutocomplete';
import { QuestionGroup } from '../../types/QuestionGroup';
import { Question } from '../../types/Question';

interface GroupOfQuestionsProps {
  group: QuestionGroup;
  questions: Question[];
  style?: React.CSSProperties;
}

const GroupOfQuestions: React.FC<GroupOfQuestionsProps> = ({ group, questions, style }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container} style={style}>
      <button 
        className={styles.header}
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-label={`${group.name}, ${questions.length} question${questions.length > 1 ? 's' : ''}, ${isOpen ? 'ouvert' : 'fermé'}`}
      >
        <div className={styles.headerLeft}>
          <svg className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M19.5 23.1C19.5 19.989 19.5 18.4335 20.4885 17.466C21.477 16.5 23.0685 16.5 26.25 16.5C29.4315 16.5 31.023 16.5 32.0115 17.466C33 18.435 33 19.989 33 23.1V26.4C33 29.511 33 31.0665 32.0115 32.034C31.023 33 29.4315 33 26.25 33C23.0685 33 21.477 33 20.4885 32.034C19.5 31.065 19.5 29.511 19.5 26.4V23.1Z" fill="currentColor"/>
            <path d="M3 12.9C3 16.011 3 17.5665 3.9885 18.534C4.977 19.5 6.5685 19.5 9.75 19.5C12.9315 19.5 14.523 19.5 15.5115 18.534C16.5 17.565 16.5 16.011 16.5 12.9V9.6C16.5 6.489 16.5 4.9335 15.5115 3.966C14.523 3 12.9315 3 9.75 3C6.5685 3 4.977 3 3.9885 3.966C3 4.935 3 6.489 3 9.6V12.9ZM19.5 8.25C19.5 6.6195 19.5 5.805 19.7565 5.16C20.0906 4.31182 20.7477 3.63095 21.5835 3.267C22.203 3 22.9905 3 24.5625 3L27.9375 3C29.5095 3 30.297 3 30.9165 3.267C31.743 3.621 32.4015 4.302 32.7435 5.16C33 5.805 33 6.6195 33 8.25C33 9.8805 33 10.695 32.7435 11.34C32.4094 12.1882 31.7523 12.869 30.9165 13.233C30.297 13.5 29.5095 13.5 27.9375 13.5H24.5625C22.9905 13.5 22.203 13.5 21.5835 13.233C20.7477 12.869 20.0906 12.1882 19.7565 11.34C19.5 10.695 19.5 9.8805 19.5 8.25Z" fill="currentColor"/>
            <path opacity="0.5" d="M3 27.75C3 29.3805 3 30.195 3.2565 30.84C3.59058 31.6882 4.2477 32.369 5.0835 32.733C5.703 33 6.4905 33 8.0625 33H11.4375C13.0095 33 13.797 33 14.4165 32.733C15.243 32.379 15.9015 31.698 16.2435 30.84C16.5 30.195 16.5 29.3805 16.5 27.75C16.5 26.1195 16.5 25.305 16.2435 24.66C15.9094 23.8118 15.2523 23.131 14.4165 22.767C13.797 22.5 13.0095 22.5 11.4375 22.5H8.0625C6.4905 22.5 5.703 22.5 5.0835 22.767C4.257 23.121 3.5985 23.802 3.2565 24.66C3 25.305 3 26.1195 3 27.75Z" fill="currentColor"/>
          </svg>
          <span className={styles.name}>{group.name}</span>
          <span className={`${styles.badge} ${isOpen ? styles.badgeOpen : ''}`}>{questions.length}</span>
        </div>
        <svg 
          className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
        >
          <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <div 
        className={`${styles.content} ${isOpen ? styles.contentOpen : ''}`}
        aria-hidden={!isOpen}
      >
        <div className={styles.questionsContainer}>
          {questions.map((question, index) => (
            <React.Fragment key={question.id}>
              {index > 0 && <hr className={styles.separator} />}
              <QuestionForAutocomplete 
                question={question}
                style={{
                  marginTop: index === 0 ? 0 : '.25em',
                  marginBottom: index === questions.length - 1 ? 0 : '.25em'
                }}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupOfQuestions;
