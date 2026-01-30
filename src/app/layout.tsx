import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ELIMAT AUTO Bordeaux | Achat & Vente de Véhicules d\'Occasion',
  description: 'Achetez ou vendez votre voiture en toute confiance à Bordeaux. Expertise locale, sélection rigoureuse, transactions sécurisées. Estimation gratuite de votre véhicule.',
  keywords: 'voiture occasion Bordeaux, vendre voiture Bordeaux, acheter voiture Gironde, ELIMAT AUTO, concessionnaire Bordeaux',
  openGraph: {
    title: 'ELIMAT AUTO Bordeaux | Achat & Vente de Véhicules d\'Occasion',
    description: 'Votre partenaire de confiance pour l\'achat et la vente de véhicules d\'occasion à Bordeaux.',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Outfit:wght@100..900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
