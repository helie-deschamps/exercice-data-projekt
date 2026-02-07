# 📋 Exercice de recrutement - Développeur Fullstack

## 🎯 Objectif

Développer une interface web interactive de **Foire Aux Questions (FAQ)** avec un système de recherche par mots-clés et de filtrage par catégories.

**Durée estimée :** 3-4 heures

---

## 🎨 Maquette Figma

Une maquette Figma vous a été fournie par email. **Vous devez suivre cette maquette** pour le design de votre interface.

**📐 Lien Figma :** [Fourni dans l'email]

---

## 📦 Prérequis techniques

- **Node.js** version 18 ou supérieure
- **npm** ou **yarn**
- Un éditeur de code (VS Code recommandé)
- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- **Compte Vercel** (gratuit) pour le déploiement

---

## 🚀 Installation et démarrage

### 1. Installation de l'API mock

```bash
cd api
npm install
npm start
```

L'API sera disponible sur **http://localhost:3001**

### 2. Création de votre application React

Vous êtes libre d'utiliser l'outil de votre choix. Nous recommandons **Vite** pour sa rapidité :

```bash
# À la racine du projet
npm create vite@latest frontend -- --template react
cd frontend
npm install
npm run dev
```

---

## 📊 Structure des données

L'API expose 3 endpoints principaux :

### **GET /categories**
Liste toutes les catégories de la FAQ

```json
[
  {
    "id": 1,
    "name": "Questions Techniques",
    "slug": "technique",
    "icon": "🔧",
    "description": "...",
    "order": 1
  }
]
```

### **GET /groups**
Liste tous les groupes de questions

```json
[
  {
    "id": 1,
    "categoryId": 1,
    "name": "Installation et Configuration",
    "description": "...",
    "order": 1
  }
]
```

### **GET /questions**
Liste toutes les questions

```json
[
  {
    "id": 1,
    "groupId": 1,
    "question": "Comment installer l'application ?",
    "answer": "...",
    "tags": ["installation", "setup"],
    "order": 1
  }
]
```

### Filtrage et recherche

JSON Server supporte nativement le filtrage et la recherche :

- **Filtrer par catégorie :** `GET /groups?categoryId=1`
- **Filtrer par groupe :** `GET /questions?groupId=1`
- **Recherche full-text :** `GET /questions?q=installation`
- **Relations imbriquées :** `GET /categories?_embed=groups`

📚 Documentation complète : https://github.com/typicode/json-server

---

## ✅ Fonctionnalités attendues

### 🔴 **Obligatoires**

1. **Affichage hiérarchique des données**
   - Catégories → Groupes → Questions/Réponses
   - Respect de l'ordre défini par le champ `order`

2. **Système de recherche en temps réel**
   - Barre de recherche visible
   - Filtrage des questions par mots-clés
   - Recherche dans les questions ET les réponses
   - Mise à jour instantanée des résultats pendant la frappe

3. **Filtrage par catégorie**
   - Boutons ou onglets pour filtrer par catégorie
   - Possibilité d'afficher "Toutes les catégories"
   - Indicateur visuel de la catégorie active

4. **Système d'accordéon**
   - Les réponses sont masquées par défaut
   - Clic sur une question pour afficher/masquer la réponse
   - Animation de transition fluide
   - Possibilité d'ouvrir plusieurs questions simultanément OU une seule à la fois (au choix)

5. **Design responsive**
   - Adaptation parfaite sur mobile (< 768px)
   - Adaptation tablette (768px - 1024px)
   - Adaptation desktop (> 1024px)

### 🟢 **Fonctionnalités bonus (optionnelles)**

- Animation des transitions (expand/collapse, apparition des résultats)
- Highlight des termes recherchés dans les résultats
- Gestion des états de chargement (loading spinner)
- Gestion des erreurs réseau
- Compteur de résultats ("X questions trouvées")
- Breadcrumb de navigation (Catégorie > Groupe > Question)
- Tests unitaires (Jest, React Testing Library)
- Accessibilité ARIA
- Mode sombre / clair

---

## 🎨 Contraintes techniques

### **Obligatoires**
- ✅ Utiliser **React** (ou Next.js si vous préférez)
- ✅ Utiliser des **hooks React** (useState, useEffect, etc.)
- ✅ Faire des appels API avec **fetch** ou **axios**
- ✅ **Respecter la maquette Figma fournie**
- ✅ Code propre et commenté
- ✅ Composants réutilisables
- ✅ **Déployer l'application sur Vercel**

### **Recommandées**
- Utiliser un système de composants clairs (Header, SearchBar, CategoryFilter, QuestionList, QuestionItem, etc.)
- Gérer l'état de manière centralisée (Context API, Zustand, ou Redux si vous le souhaitez)
- Utiliser CSS modules, Styled-components, Tailwind CSS, ou toute autre solution CSS que vous maîtrisez

### **Interdites**
- ❌ Ne pas utiliser de template ou librairie FAQ toute faite
- ❌ Ne pas modifier les fixtures JSON (sauf si vraiment nécessaire)

---

## 📝 Livrables attendus

1. **Code source complet**
   - Dossier `frontend/` avec votre application React
   - Fichier `package.json` avec toutes les dépendances
   - Fichier `.gitignore` approprié
   - Dépôt Git (GitHub, GitLab, etc.) accessible

2. **Documentation**
   - `README.md` dans le dossier frontend avec :
     - Instructions d'installation
     - Instructions pour lancer le projet
     - Choix techniques effectués (et pourquoi)
     - Difficultés rencontrées (le cas échéant)
     - Améliorations possibles si vous aviez plus de temps
     - **Lien vers l'application déployée sur Vercel**

3. **Application fonctionnelle**
   - L'application doit démarrer sans erreur (en local)
   - Toutes les fonctionnalités obligatoires doivent fonctionner
   - **Application déployée et accessible sur Vercel**

4. **Déploiement sur Vercel**
   - Application hébergée sur [vercel.com](https://vercel.com) (gratuit)
   - Lien de démo fonctionnel à fournir
   - Note : L'API mock n'a pas besoin d'être déployée (vous pouvez utiliser des données statiques ou mock pour la version déployée)

---

## 🎯 Critères d'évaluation

Votre travail sera évalué selon les critères suivants :

### **Fonctionnalités (40 points)**
- Affichage hiérarchique correct
- Recherche fonctionnelle et performante
- Filtrage par catégorie
- Accordéon fonctionnel
- Responsive design

### **Qualité du code (30 points)**
- Architecture React propre (composants, hooks, props)
- Lisibilité et maintenabilité du code
- Gestion des états et des effets de bord
- Réutilisabilité des composants

### **UX/UI (20 points)**
- Design agréable et cohérent
- Interface intuitive
- Feedback visuel pour les interactions
- Fluidité de navigation

### **Technique (10 points)**
- Appels API correctement gérés
- Gestion des erreurs et états de chargement
- Optimisation des performances

### **Bonus (10 points)**
- Fonctionnalités supplémentaires
- Tests unitaires
- Attention aux détails
- Créativité

**Total : 100 points** (+ 10 points bonus)

---

## 💡 Conseils

1. **Commencez simple** : Faites d'abord fonctionner les fonctionnalités de base avant d'ajouter des bonus
2. **Testez régulièrement** : Vérifiez que tout fonctionne après chaque ajout de fonctionnalité
3. **Pensez mobile first** : Commencez par le design mobile, puis adaptez pour desktop
4. **Documentez vos choix** : Si vous faites un choix technique particulier, expliquez pourquoi
5. **Gérez votre temps** :
   - 1h : Setup + Affichage des données
   - 1h : Recherche + Filtrage
   - 1h : Accordéon + Responsive
   - 30min : Déploiement Vercel
   - 30min : Polish + Bonus

---

## 🚀 Déploiement sur Vercel

### Pourquoi Vercel ?

Vercel est une plateforme de déploiement gratuite, simple et rapide, particulièrement adaptée aux applications React. Le déploiement nous permet de voir votre travail en conditions réelles.

### Comment déployer ?

1. **Créez un compte Vercel**
   - Rendez-vous sur [vercel.com](https://vercel.com)
   - Inscrivez-vous gratuitement (vous pouvez utiliser votre compte GitHub)

2. **Préparez votre projet**
   - Assurez-vous que votre projet fonctionne en local
   - Commitez et poussez votre code sur GitHub/GitLab

3. **Déployez depuis Vercel**
   - Cliquez sur "Add New Project"
   - Importez votre repository
   - Vercel détectera automatiquement votre configuration React/Vite
   - Cliquez sur "Deploy"

4. **Récupérez le lien**
   - Une fois déployé, Vercel vous fournira une URL (ex: `votre-faq.vercel.app`)
   - Ajoutez ce lien dans votre README.md

### Note importante sur l'API

L'API mock (JSON Server) tourne en local et ne sera pas disponible sur Vercel. Vous avez **deux options** :

**Option A - Données statiques (recommandé pour cet exercice)**
```javascript
// Importez directement les données
import data from './data/db.json'
```

**Option B - API déployée séparément**
- Déployez JSON Server sur un service comme Railway, Render ou Heroku
- Mettez à jour l'URL de l'API dans votre code

**Pour cet exercice, l'option A est suffisante.**

### Vérification avant envoi

✅ L'application se charge sans erreur
✅ Les fonctionnalités principales fonctionnent
✅ Le design est responsive
✅ L'URL est accessible publiquement

---

## ❓ Questions

Si vous avez des questions sur l'exercice, n'hésitez pas à nous contacter par email.

**Bonne chance ! 🚀**
