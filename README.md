# 🚗 ELIMAT AUTO Bordeaux - Site Web Concession Automobile

Un site web moderne et premium pour la franchise ELIMAT AUTO Bordeaux, spécialisée dans l'achat et la vente de véhicules d'occasion.

![ELIMAT AUTO Bordeaux](https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200)

## ✨ Fonctionnalités

### Pages principales
- **Accueil** - Hero section, services, avantages, véhicules, témoignages
- **Acheter** - Liste des véhicules avec filtres avancés (marque, prix, année, kilométrage, carburant)
- **Vendre** - Formulaire d'estimation gratuite avec processus en 3 étapes
- **Détail véhicule** - Galerie photos, caractéristiques, équipements, véhicules similaires
- **L'agence** - Présentation, équipe, valeurs, localisation
- **Contact** - Formulaire, coordonnées, carte Google Maps, FAQ

### Design & UX
- 🎨 Design premium et moderne orienté automobile
- 📱 100% responsive (mobile-first)
- ⚡ Animations fluides avec Framer Motion
- 🌙 Palette de couleurs sobres et professionnelles
- 💎 Typographie moderne (Outfit + DM Sans)

### Fonctionnalités techniques
- 🔍 SEO optimisé pour le référencement local (Bordeaux, Gironde)
- 🏎️ Performance optimisée avec Next.js 16
- 🎯 Forte orientation conversion (CTAs stratégiques)
- 📊 Données mockées pour les véhicules et avis

## 🛠️ Stack Technique

- **Framework** : Next.js 16 (App Router)
- **Styling** : Tailwind CSS 4
- **Animations** : Framer Motion
- **Langage** : TypeScript
- **Linting** : ESLint

## 🚀 Installation

```bash
# Cloner le repository
git clone [url-repo]
cd ewigo-main

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du Projet

```
ewigo-main/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Page d'accueil
│   │   ├── acheter/              # Page véhicules
│   │   ├── vendre/               # Page vente
│   │   ├── vehicule/[id]/        # Page détail véhicule
│   │   ├── agence/               # Page agence
│   │   ├── contact/              # Page contact
│   │   ├── layout.tsx            # Layout principal
│   │   └── globals.css           # Styles globaux
│   ├── components/
│   │   ├── Header.tsx            # Navigation
│   │   ├── Footer.tsx            # Pied de page
│   │   ├── VehicleCard.tsx       # Carte véhicule
│   │   └── ReviewCard.tsx        # Carte avis
│   └── data/
│       ├── vehicles.ts           # Données véhicules mockées
│       └── reviews.ts            # Avis clients mockés
├── public/                        # Assets statiques
├── next.config.ts                 # Configuration Next.js
├── tailwind.config.ts             # Configuration Tailwind
└── package.json
```

## 🎨 Design System

### Couleurs principales
- **Primary** : `#1a365d` (Bleu marine)
- **Accent** : `#e53e3e` (Rouge ELIMAT AUTO)
- **Gold** : `#d69e2e` (Accents dorés)

### Composants réutilisables
- Boutons primaires et secondaires
- Cartes véhicules avec effets hover
- Formulaires stylisés
- Sections avec animations au scroll

## 📝 Personnalisation

### Modifier les véhicules
Éditez le fichier `src/data/vehicles.ts` pour ajouter/modifier les véhicules affichés.

### Modifier les avis
Éditez le fichier `src/data/reviews.ts` pour personnaliser les témoignages.

### Modifier les informations de contact
Les coordonnées sont présentes dans :
- `src/components/Footer.tsx`
- `src/app/contact/page.tsx`
- `src/app/agence/page.tsx`

## 🔧 Scripts disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Vérification ESLint
```

## 📈 SEO & Performance

Le site est optimisé pour :
- ✅ Core Web Vitals
- ✅ Référencement local (Bordeaux, Gironde)
- ✅ Balises meta optimisées
- ✅ Structure Hn sémantique
- ✅ Images optimisées avec Next/Image

## 📄 Licence

Projet développé pour ELIMAT AUTO Bordeaux. Tous droits réservés.

---

Développé avec ❤️ pour ELIMAT AUTO Bordeaux
