// Avis clients mockés
export interface Review {
  id: string;
  name: string;
  city: string;
  rating: number;
  comment: string;
  date: string;
  type: 'achat' | 'vente';
}

export const reviews: Review[] = [
  {
    id: 'r001',
    name: 'Laurent M.',
    city: 'Bordeaux',
    rating: 5,
    comment: 'Service impeccable ! J\'ai vendu ma voiture en moins d\'une semaine. Équipe professionnelle et transparente sur tout le processus.',
    date: '2025-11-15',
    type: 'vente',
  },
  {
    id: 'r002',
    name: 'Sophie D.',
    city: 'Ugine',
    rating: 5,
    comment: 'Achat d\'une Peugeot 3008, très satisfaite. Le véhicule était exactement comme décrit, aucune mauvaise surprise.',
    date: '2025-10-28',
    type: 'achat',
  },
  {
    id: 'r003',
    name: 'Marc P.',
    city: 'Moutiers',
    rating: 5,
    comment: 'Excellente expérience, l\'équipe m\'a accompagné de A à Z pour la reprise de mon ancien véhicule et l\'achat du nouveau.',
    date: '2025-10-10',
    type: 'achat',
  },
  {
    id: 'r004',
    name: 'Christine L.',
    city: 'Bordeaux',
    rating: 4,
    comment: 'Bonne estimation de ma voiture, vente rapide. Je recommande ConcessAuto Bordeaux pour leur sérieux.',
    date: '2025-09-22',
    type: 'vente',
  },
  {
    id: 'r005',
    name: 'Jean-Pierre R.',
    city: 'Grignon',
    rating: 5,
    comment: 'Professionnalisme remarquable. Toutes les démarches administratives ont été gérées par l\'agence. Un vrai gain de temps !',
    date: '2025-09-05',
    type: 'achat',
  },
  {
    id: 'r006',
    name: 'Marie T.',
    city: 'Frontenex',
    rating: 5,
    comment: 'Super accueil, conseils pertinents et pas de pression commerciale. J\'ai trouvé la voiture parfaite pour ma famille.',
    date: '2025-08-18',
    type: 'achat',
  },
];
