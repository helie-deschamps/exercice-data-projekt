import React from 'react';
import styles from './SearchSection.module.css';
import Toast from '../toast/Toast';

interface SearchSectionProps {
  style?: React.CSSProperties;
}

const SearchSection: React.FC<SearchSectionProps> = ({ style }) => {
  return (
    <div className={styles.container} style={style}>
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
        />
      </div>
    </div>
  );
};

export default SearchSection;
