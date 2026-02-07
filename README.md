# Exercice Data Projekt

Ce projet est une application fullstack composée d'une API mockée et d'un frontend React.

## Structure du projet

- **api/** : Fournit une API REST simulée avec json-server (port 3001)
- **frontend/** : Application React (Vite) pour consommer l'API

## Prérequis

- Node.js
- Yarn

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
