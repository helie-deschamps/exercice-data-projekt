# Exercice Data Projekt

Ce projet est une application fullstack composée d'une API mockée et d'un frontend React.

## Structure du projet

- **api/** : Fournit une API REST simulée avec json-server (port 3001)
- **frontend/** : Application React (Vite) pour consommer l'API

La structure que j'ai suivie pour le frontend est la suivante :
- **assets/** : pour les images et autres ressources statiques (ne contient que la font du figma - j'évite d'utiliser Google Fonts pour éviter les requêtes externes)
- **components/** : pour les composants réutilisables (boutons, tuiles de catégories, etc.)
- **pages/** : pour les composants de page (la page d'accueil, la page de visualisation)
- **types/** : pour les types TypeScript partagés dans l'application (essentiellement les types de données venant de l'API)
- **utils/** : pour les fonctions utilitaires (essentiellement les fonctions d'appel à l'API)

---

## Prérequis

- Node.js
- Yarn

---

## Installation

1. Cloner le dépôt :
   ```sh
   git clone https://github.com/helie-deschamps/exercice-data-projekt.git
   cd exercice-data-projekt
   ```

2. Installer les dépendances (depuis la racine du projet) :
```sh
yarn install --immutable
```
3. Build du frontend :
```sh
yarn run frontend:build
```

---

## Démarrage du projet

Dans deux terminaux séparés (depuis la racine du projet) :

- Pour démarrer l'API (disponible sur http://localhost:3001) :
```sh
yarn run api:preview
```

- Pour démarrer le site web (disponible sur http://localhost:4173) :
```sh
yarn run frontend:preview
```

L'accordéon des groupes de questions est accessible sur http://localhost:4173/visualisation/1 (ou http://localhost:5173/visualisation/1 en mode dev).

---

## 🎯 Choix techniques

### React sans Next.js

**Pourquoi ce choix ?**

J'ai choisi React pur avec Vite plutôt que Next.js pour la simplicité et la rapidité de développement pour ce projet.

**Problème identifié :**

React seul ne permet pas d'utiliser la directive `"use server"` pour faire du Server-Side Rendering (SSR). Les fetches à l'API doivent donc être effectués côté client avec `useEffect`.

**Conséquence :**

- Les pages se chargent d'abord avec leur structure HTML vide
- Puis les fetches sont exécutés séparément
- Les éléments apparaissent progressivement après réception des données

Cela crée un "flash" de contenu vide au chargement initial. Avec Next.js et SSR, les données seraient récupérées côté serveur avant le rendu HTML.



### React Router DOM

J'ai aussi pas pu utiliser le routing de Next.js.
Navigation entre la page d'accueil `/` et les pages de visualisation `/visualisation/:categoryId`.

### Debouncing de la recherche (300ms)

Pour éviter trop de requêtes API pendant la frappe de l'utilisateur.

---

## ⚠️ Difficultés rencontrées

### 1. Dimensions non spécifiées

Certaines dimensions (espacements, tailles de police, paddings) n'étaient pas précisées dans la maquette Figma. J'ai dû estimer visuellement les proportions et tester sur différentes résolutions.

### 3. Cohérence linguistique

Mélange français/anglais dans le code (fichiers en anglais comme `VisualizationPage.tsx`, variables mixtes). J'aurais dû choisir de devlopper entièrement en français pour plus de cohérence.

---

## 🚀 Améliorations possibles avec plus de temps

1. Tests unitaires des fonctions dans `utils` avec Jest
2. Server-Side Rendering (SSR)
3. Configuration ESLint stricte
4. Pagination de l'autocomplete (eviter a l'autocomplete de charger toutes les questions d'un coup)
5. Ajouter des états de chargement (spinners) et des messages d'erreur pour améliorer l'UX en cas de problème réseau.

---

## ⏱️ Temps passé

**Total : un peut plus de 5h (sans l'hébergement)**

L'exercice demandait 3-4h mais j'ai légèrement dépassé. Le projet n'est pas totalement terminé.
