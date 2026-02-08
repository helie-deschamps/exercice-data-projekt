import React, { useState, useEffect } from 'react';
import styles from './SearchSection.module.css';
import Toast from '../toast/Toast';
import QuestionForAutocomplete from '../question_for_autocomplete/QuestionForAutocomplete';
import { Question } from '../../types/Question';
import searchQuestions from '../../utils/api_fetch/searchQuestions';

interface SearchSectionProps {
  style?: React.CSSProperties;
  className?: string;
}

const SearchSection: React.FC<SearchSectionProps> = ({ style, className }) => {
  const [searchValue, setSearchValue] = useState('');
  const [autocompleteQuestions, setAutocompleteQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      if (searchValue.trim().length === 0) {
        setAutocompleteQuestions([]);
        return;
      }

      try {
        const results = await searchQuestions(searchValue);
        setAutocompleteQuestions(results);
      } catch (error) {
        console.error('Error searching questions:', error);
        setAutocompleteQuestions([]);
      }
    };

    // le systeme de timeout evite de faire une requete à chaque frappe
    const timeoutId = setTimeout(() => {
      fetchQuestions();
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [searchValue]);

  return (
    <div className={`${styles.container} ${className || ''}`} style={style}>
      <div>
        <h2 className={styles.title}>Comment pouvons-nous vous aider ?</h2>
        <p className={styles.subtitle}>
          Vous avez une question sur la création d'un jeu, l'activation d'une opération, la gestion des lots, ou la lecture des statistiques ?<br />
          Découvrez les deux grandes familles et parcourez les thématiques associées, pour trouver rapidement la réponse à votre besoin ou utilisez la barre de recherche.
        </p>
      </div>
      <Toast 
        type="info" 
        message="Exemples : créer opération, activer, QR Code, lots, règlement, tirage au sort, statistiques, crédits, formulaire, gagnants..."
      />
      <div className={styles.searchBar}>
        <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="11" cy="11" r="8" strokeWidth="2"/>
          <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <input 
          type="text" 
          className={styles.searchInput}
          placeholder="Rechercher avec un mot-clé..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {autocompleteQuestions.map((question, index) => (
        <React.Fragment key={question.id}>
          {index > 0 && <hr className={styles.separator} />}
          <QuestionForAutocomplete 
            question={question} 
            highlightTerm={searchValue}
            style={{
              marginTop: index === 0 ? 0 : '.25em',
              marginBottom: index === autocompleteQuestions.length - 1 ? 0 : '.25em'
            }}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default SearchSection;
