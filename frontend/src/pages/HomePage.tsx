import React, { useEffect, useState } from 'react';
import CategoryTile from "../components/category_tile/CategoryTile";
import ContactTile from "../components/contact_tile/ContactTile";
import PageTitle from "../components/page_title/PageTitle";
import QuestionCard from "../components/question_card/QuestionCard";
import SearchSection from "../components/search_section/SearchSection";
import fetchAllQuestionCategories from '../utils/api_fetch/fetchAllQuestionCategories';
import { QuestionCategory } from '../types/QuestionCategory';
import styles from './HomePage.module.css';

function HomePage() {
  const [categories, setCategories] = useState<QuestionCategory[]>([]);

  useEffect(() => {
    const loadCategories = async () => {
      setCategories(await fetchAllQuestionCategories());
    };
    loadCategories();
  }, []);

  return (
    <div className={styles.container}>
      <PageTitle className={styles.pageTitle} title="Centre d'aide" subtitle="Bienvenue dans le centre de support officiel. Vous trouverez ici toutes les réponses aux questions les plus fréquentes, classées par thématiques."/>
      <QuestionCard className={styles.questionCard} question={{
        "id": 1,
        "groupId": 1,
        "question": "Comment est organisée l'interface de Data Game ?",
        "answer": "L'interface de Data Game est organisée autour de plusieurs zones principales :\n\n**📌 Barre de navigation principale**\nVous y retrouvez les rubriques clés :\n- **Tableau de bord** : Vue d'ensemble de vos opérations\n- **Opérations** : Liste et gestion de vos jeux-concours\n- **Statistiques** : Données globales de toutes vos opérations\n- **Listes** : Utilisateurs, Clients & Partenaires\n- **Compte** : Abonnement, crédits, intégrations\n\n**👤 Zone \"Profil & Compte\" (en haut à droite)**\nAccès à :\n- Vos informations personnelles\n- Les paramètres du compte\n- L'abonnement et les factures\n- Le suivi des crédits\n\n**⚡ Zone \"Accès rapide / notifications\"**\nVous y voyez :\n- Les notifications (succès, alertes, informations)\n- Le bouton pour relancer la visite guidée (walktour)\n- Un résumé des crédits restants\n\n**🎮 Bloc \"Opérations en cours\" (sur le tableau de bord)**\nUn carrousel qui permet d'accéder en un clic à vos jeux actifs.\n\n**📊 Bloc \"Statistiques globales\"**\nVue synthétique des opérations, du nombre total de participations, de gagnants, etc.",
        "tags": ["interface", "navigation", "tableau de bord", "menu", "organisation"],
        "order": 1,
        "createdAt": "2025-01-15T10:00:00Z",
        "updatedAt": "2025-01-15T10:00:00Z"
      }} />
      <SearchSection className={styles.searchSection} />
      <div className={styles.categoriesGrid}>
        {categories.map((category, index) => (
          <CategoryTile 
            key={category.id} 
            category={category}
            style={categories.length % 2 === 1 && index === categories.length - 1 ? { gridColumn: '1 / span 2' } : undefined}
          />
        ))}
      </div>
      <ContactTile className={styles.contactTile} />
    </div>
  );
}

export default HomePage;
