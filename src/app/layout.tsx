import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ELIMAT AUTO Albertville | Achat & Vente de Véhicules d\'Occasion',
  description: 'Achetez ou vendez votre voiture en toute confiance à Albertville. Expertise locale, sélection rigoureuse, transactions sécurisées. Estimation gratuite de votre véhicule.',
  keywords: 'voiture occasion Albertville, vendre voiture Albertville, acheter voiture Savoie, ELIMAT AUTO, concessionnaire Albertville',
  openGraph: {
    title: 'ELIMAT AUTO Albertville | Achat & Vente de Véhicules d\'Occasion',
    description: 'Votre partenaire de confiance pour l\'achat et la vente de véhicules d\'occasion à Albertville.',
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
