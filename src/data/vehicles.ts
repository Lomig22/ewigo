// Données mockées des véhicules ConcessAuto Bordeaux
export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  price: number;
  fuel: 'Essence' | 'Diesel' | 'Hybride' | 'Électrique';
  transmission: 'Manuelle' | 'Automatique';
  power: string;
  color: string;
  doors: number;
  seats: number;
  images: string[];
  features: string[];
  description: string;
  warranty: string;
  available: boolean;
}

export const vehicles: Vehicle[] = [
  {
    id: 'v001',
    brand: 'Peugeot',
    model: '3008 GT',
    year: 2022,
    mileage: 35000,
    price: 32900,
    fuel: 'Hybride',
    transmission: 'Automatique',
    power: '225 ch',
    color: 'Gris Platinium',
    doors: 5,
    seats: 5,
    images: [
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
    ],
    features: ['GPS', 'Caméra de recul', 'Toit panoramique', 'Sièges chauffants', 'Apple CarPlay'],
    description: 'Superbe Peugeot 3008 GT en excellent état, premier propriétaire, entretien complet chez Peugeot.',
    warranty: '12 mois',
    available: true,
  },
  {
    id: 'v002',
    brand: 'Audi',
    model: 'A4 Avant S-Line',
    year: 2021,
    mileage: 48000,
    price: 35900,
    fuel: 'Diesel',
    transmission: 'Automatique',
    power: '190 ch',
    color: 'Noir Mythos',
    doors: 5,
    seats: 5,
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
      'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=800',
    ],
    features: ['Virtual Cockpit', 'LED Matrix', 'Régulateur adaptatif', 'Aide au stationnement', 'Bang & Olufsen'],
    description: 'Audi A4 Avant finition S-Line, parfait état, carnet entretien à jour.',
    warranty: '12 mois',
    available: true,
  },
  {
    id: 'v003',
    brand: 'BMW',
    model: 'X3 xDrive30d',
    year: 2020,
    mileage: 62000,
    price: 42500,
    fuel: 'Diesel',
    transmission: 'Automatique',
    power: '265 ch',
    color: 'Blanc Alpin',
    doors: 5,
    seats: 5,
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
      'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800',
    ],
    features: ['Toit ouvrant', 'Affichage tête haute', 'Harman Kardon', 'Pack M Sport', 'Cuir Dakota'],
    description: 'BMW X3 xDrive30d, version très bien équipée, véhicule en parfait état mécanique et esthétique.',
    warranty: '12 mois',
    available: true,
  },
  {
    id: 'v004',
    brand: 'Mercedes',
    model: 'Classe C 200 AMG Line',
    year: 2023,
    mileage: 15000,
    price: 48900,
    fuel: 'Essence',
    transmission: 'Automatique',
    power: '204 ch',
    color: 'Gris Sélenite',
    doors: 4,
    seats: 5,
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800',
    ],
    features: ['MBUX', 'Burmester', 'Pack Night', 'Keyless-Go', 'Sièges ventilés'],
    description: 'Mercedes Classe C dernière génération, véhicule comme neuf avec garantie constructeur.',
    warranty: '24 mois',
    available: true,
  },
  {
    id: 'v005',
    brand: 'Volkswagen',
    model: 'Golf 8 GTI',
    year: 2022,
    mileage: 28000,
    price: 38500,
    fuel: 'Essence',
    transmission: 'Automatique',
    power: '245 ch',
    color: 'Rouge Tornado',
    doors: 5,
    seats: 5,
    images: [
      'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800',
    ],
    features: ['Digital Cockpit Pro', 'DCC adaptatif', 'Phares IQ.Light', 'Harman Kardon', 'Jantes 19"'],
    description: 'Golf 8 GTI, sportive et polyvalente, entretien complet VW.',
    warranty: '12 mois',
    available: true,
  },
  {
    id: 'v006',
    brand: 'Renault',
    model: 'Arkana E-Tech',
    year: 2023,
    mileage: 12000,
    price: 29900,
    fuel: 'Hybride',
    transmission: 'Automatique',
    power: '145 ch',
    color: 'Bleu Zanzibar',
    doors: 5,
    seats: 5,
    images: [
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800',
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800',
    ],
    features: ['Easy Link 9.3"', 'Aide au stationnement 360°', 'Multi-Sense', 'Bose', 'Pack Techno'],
    description: 'Renault Arkana hybride, économique et design, état impeccable.',
    warranty: '24 mois',
    available: true,
  },
  {
    id: 'v007',
    brand: 'Toyota',
    model: 'RAV4 Hybride',
    year: 2021,
    mileage: 45000,
    price: 35500,
    fuel: 'Hybride',
    transmission: 'Automatique',
    power: '218 ch',
    color: 'Gris Manhattan',
    doors: 5,
    seats: 5,
    images: [
      'https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=800',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800',
    ],
    features: ['Toyota Safety Sense', 'JBL Premium', 'Hayon électrique', 'AWD-i', 'Cuir intégral'],
    description: 'RAV4 Hybride AWD, fiabilité légendaire Toyota, véhicule révisé.',
    warranty: '12 mois',
    available: true,
  },
  {
    id: 'v008',
    brand: 'Citroën',
    model: 'C5 X Shine',
    year: 2023,
    mileage: 8000,
    price: 41900,
    fuel: 'Hybride',
    transmission: 'Automatique',
    power: '225 ch',
    color: 'Blanc Nacré',
    doors: 5,
    seats: 5,
    images: [
      'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
    ],
    features: ['Suspensions actives', 'Pack Drive Assist Plus', 'Focal', 'Cuir Nappa', 'Toit panoramique'],
    description: 'Citroën C5 X, confort exceptionnel, véhicule quasi-neuf avec toutes options.',
    warranty: '24 mois',
    available: true,
  },
];

export const brands = [...new Set(vehicles.map(v => v.brand))];
export const years = [...new Set(vehicles.map(v => v.year))].sort((a, b) => b - a);
export const fuels = ['Essence', 'Diesel', 'Hybride', 'Électrique'];
