import React, { useState } from 'react';
import styles from './SearchSection.module.css';
import Toast from '../toast/Toast';
import QuestionForAutocomplete from '../question_for_autocomplete/QuestionForAutocomplete';
import { Question } from '../../types/Question';

interface SearchSectionProps {
  style?: React.CSSProperties;
}

const SearchSection: React.FC<SearchSectionProps> = ({ style }) => {
  const [searchValue, setSearchValue] = useState('');
  const [autocompleteQuestions] = useState<Question[]>([
    {
      "id": 1,
      "groupId": 1,
      "question": "Comment est organisée l'interface de Data Game ?",
      "answer": "L'interface de Data Game est organisée autour de plusieurs zones principales :\n\n**📌 Barre de navigation principale**\nVous y retrouvez les rubriques clés :\n- **Tableau de bord** : Vue d'ensemble de vos opérations\n- **Opérations** : Liste et gestion de vos jeux-concours\n- **Statistiques** : Données globales de toutes vos opérations\n- **Listes** : Utilisateurs, Clients & Partenaires\n- **Compte** : Abonnement, crédits, intégrations\n\n**👤 Zone \"Profil & Compte\" (en haut à droite)**\nAccès à :\n- Vos informations personnelles\n- Les paramètres du compte\n- L'abonnement et les factures\n- Le suivi des crédits\n\n**⚡ Zone \"Accès rapide / notifications\"**\nVous y voyez :\n- Les notifications (succès, alertes, informations)\n- Le bouton pour relancer la visite guidée (walktour)\n- Un résumé des crédits restants\n\n**🎮 Bloc \"Opérations en cours\" (sur le tableau de bord)**\nUn carrousel qui permet d'accéder en un clic à vos jeux actifs.\n\n**📊 Bloc \"Statistiques globales\"**\nVue synthétique des opérations, du nombre total de participations, de gagnants, etc.",
      "tags": ["interface", "navigation", "tableau de bord", "menu", "organisation"],
      "order": 1,
      "createdAt": "2025-01-15T10:00:00Z",
      "updatedAt": "2025-01-15T10:00:00Z"
    },
    {
      "id": 2,
      "groupId": 1,
      "question": "Comment est organisée l'interface de Data Game ?",
      "answer": "L'interface de Data Game est organisée autour de plusieurs zones principales :\n\n**📌 Barre de navigation principale**\nVous y retrouvez les rubriques clés :\n- **Tableau de bord** : Vue d'ensemble de vos opérations\n- **Opérations** : Liste et gestion de vos jeux-concours\n- **Statistiques** : Données globales de toutes vos opérations\n- **Listes** : Utilisateurs, Clients & Partenaires\n- **Compte** : Abonnement, crédits, intégrations\n\n**👤 Zone \"Profil & Compte\" (en haut à droite)**\nAccès à :\n- Vos informations personnelles\n- Les paramètres du compte\n- L'abonnement et les factures\n- Le suivi des crédits\n\n**⚡ Zone \"Accès rapide / notifications\"**\nVous y voyez :\n- Les notifications (succès, alertes, informations)\n- Le bouton pour relancer la visite guidée (walktour)\n- Un résumé des crédits restants\n\n**🎮 Bloc \"Opérations en cours\" (sur le tableau de bord)**\nUn carrousel qui permet d'accéder en un clic à vos jeux actifs.\n\n**📊 Bloc \"Statistiques globales\"**\nVue synthétique des opérations, du nombre total de participations, de gagnants, etc.",
      "tags": ["interface", "navigation", "tableau de bord", "menu", "organisation"],
      "order": 1,
      "createdAt": "2025-01-15T10:00:00Z",
      "updatedAt": "2025-01-15T10:00:00Z"
    },
    {
      "id": 3,
      "groupId": 1,
      "question": "Comment est organisée l'interface de Data Game ?",
      "answer": "L'interface de Data Game est organisée autour de plusieurs zones principales :\n\n**📌 Barre de navigation principale**\nVous y retrouvez les rubriques clés :\n- **Tableau de bord** : Vue d'ensemble de vos opérations\n- **Opérations** : Liste et gestion de vos jeux-concours\n- **Statistiques** : Données globales de toutes vos opérations\n- **Listes** : Utilisateurs, Clients & Partenaires\n- **Compte** : Abonnement, crédits, intégrations\n\n**👤 Zone \"Profil & Compte\" (en haut à droite)**\nAccès à :\n- Vos informations personnelles\n- Les paramètres du compte\n- L'abonnement et les factures\n- Le suivi des crédits\n\n**⚡ Zone \"Accès rapide / notifications\"**\nVous y voyez :\n- Les notifications (succès, alertes, informations)\n- Le bouton pour relancer la visite guidée (walktour)\n- Un résumé des crédits restants\n\n**🎮 Bloc \"Opérations en cours\" (sur le tableau de bord)**\nUn carrousel qui permet d'accéder en un clic à vos jeux actifs.\n\n**📊 Bloc \"Statistiques globales\"**\nVue synthétique des opérations, du nombre total de participations, de gagnants, etc.",
      "tags": ["interface", "navigation", "tableau de bord", "menu", "organisation"],
      "order": 1,
      "createdAt": "2025-01-15T10:00:00Z",
      "updatedAt": "2025-01-15T10:00:00Z"
    }
  ]);

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
