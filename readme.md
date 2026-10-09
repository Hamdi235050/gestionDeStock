# 📱 Gestion De Stock

Une brève description de ce que fait l'application

---

## 🛠 Tech Stack

- **Frontend Mobile:** React Native, TypeScript, Expo
- **Routage & Navigation:** Expo Router (File-based routing)
- **Gestion d'état & Data Fetching:** React Query TanStack Query, `useReducer`, `useState`
- **UI & Styling:** NativeWind
- **Backend:** NestJS TypeScript, TypeORM
- **Base de données:** PostgreSQL

---

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js:** `>= 18`
- **Package Manager:** `npm` / `pnpm` / `yarn`
- **Environnement Mobile:**
  - **Android:** Android Studio avec SDK Android (`Android SDK Platform-Tools`) & un émulateur ou appareil physique en mode

---

## 🚀 Installation & Démarrage

### 1. Cloner le projet

```bash
git clone https://github.com/Hamdi235050/gestionDeStock.git
cd gestionDeStock
```

1. Renommez le fichier .env.example présent dans le dossier racine en .env
   cp .env.example .env
2. Renommez le fichier .env.example présent dans le dossier backend en .env
   cd backend
   cp .env.example .env
3. Base de données PostgreSQL
   L'application nécessite une instance PostgreSQL active.
   docker run --name postgres-stock -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=postgres -p 5432:5432 -d postgres # docker
4. Démarrer le Backend NestJS
   cd backend
   pnpm install
   pnpm run start:dev

5. Démarrer l'application React Native avec Expo
   pnpm install
   pnpm start

### 2. Choix techniques & Architecture

```markdown
## 💡 Choix Techniques & Architecture

### Pourquoi NestJS pour le Backend ?

Le choix de **NestJS** s'impose pour une application de gestion de stock pour plusieurs raisons clés :

- **Architecture modulaire et structurée :** Basé sur TypeScript, NestJS fournit une structure claire (Controllers, Services, Modules) ce qui garantit la maintenabilité et l'évolutivité du projet à mesure que la logique métier grandit.
- **Typage de bout en bout :** L'utilisation du même langage (TypeScript) sur le frontend React Native et le backend NestJS permet de partager des interfaces et types de données, réduisant considérablement les erreurs d'intégration.
- **Écosystème robuste :** Intégration fluide et sécurisée avec TypeORM pour interagir avec **PostgreSQL** de la validation des données `class-validator`

---

### `useReducer` pour la Gestion d'État

Pour cette application mobile, la gestion d'état est divisée intelligemment :

1. **React Query pour l'état distant Server State :** Il prend en charge la mise en cache, la synchronisation, le rafraîchissement et la gestion des chargements/erreurs des données provenant de l'API NestJS (produits, catégories, mouvements de stock).
2. **`useReducer` pour l'état local complexe Client State :**
   - **Gestion des flux complexes :** Dans la gestion de stock certaines actions nécessitent des étapes multiples ou des formulaires à états complexes. `useReducer` permet de centraliser l'etat

## 💡 Choix technique : Expo vs React Native CLI

Nous avons opté pour **Expo** pour les raisons suivantes :

1. **Productivité accrue :** Configuration initiale minime et développement accéléré.
2. **Expo Router :** Gestion intuitive des routes basée sur l'arborescence des fichiers (`src/app/`).
3. **Builds Cloud (EAS) :** Simplification des builds et du déploiement sans dépendance stricte à l'environnement natif local.
```

## 🗺️ Routage et Navigation (Expo Router)

Ce projet utilise **Expo Router** un système de routage basé sur le système de fichiers (_file-based routing_). Les routes sont automatiquement générées en fonction de la structure des fichiers sous le dossier `src/app/`.

### 📁 Structure des Routes

```text
src/app/
├── _layout.tsx         # Layout racine
├── index.tsx           # Page d'accueil ('/')
├── create-product.tsx  # Écran de création d'un produit ('/create-product')
├── modify-product.tsx  # Écran de modification d'un produit ('/modify-product')
└── stock.tsx           # Écran de gestion du stock ('/stock')
```

### Pourquoi PostgreSQL pour la Base de Données ?

Pour ce projet, **PostgreSQL** a été retenu comme base de données relationnelle bien qu'il s'agisse d'une application de taille modeste ce choix permet d'assurer une **cohérence stricte des données** tout en profitant d'une intégration parfaite avec l'écosystème **NestJS** . De plus, son déploiement rapide via **Docker** simplifie l'installation en local sans alourdir le développement.
![Texte alternatif](images\modfier Produit.png)
