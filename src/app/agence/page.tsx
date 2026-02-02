'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const team = [
  {
    name: 'Jean-Marc Dupont',
    role: 'Directeur d\'agence',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    description: '15 ans d\'expérience dans l\'automobile',
  },
  {
    name: 'Sophie Martin',
    role: 'Conseillère commerciale',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    description: 'Spécialiste de l\'accompagnement client',
  },
  {
    name: 'Lucas Bernard',
    role: 'Expert technique',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    description: 'Certification mécanique automobile',
  },
];

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Transparence',
    description: 'Prix clairs, historique vérifié, aucune mauvaise surprise. Nous vous disons tout sur chaque véhicule.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Proximité',
    description: 'Une équipe locale qui vous accompagne personnellement du premier contact jusqu\'à la livraison.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Expertise',
    description: 'Chaque véhicule est inspecté selon 150 points de contrôle par nos techniciens certifiés.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Prix justes',
    description: 'Des tarifs compétitifs basés sur une analyse précise du marché. Pas de sur-cotation ni de mauvaise surprise.',
  },
];

export default function AgencePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-pattern pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto relative"
          >
            {/* Fond sombre pour meilleur contraste */}
            <div className="absolute -inset-8 bg-gradient-to-br from-[#0a1628]/70 via-[#0a1628]/50 to-transparent rounded-3xl -z-10 blur-sm" />
            
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6B00]/20 backdrop-blur-sm rounded-full text-white text-sm mb-6 border border-[#FF6B00]/30">
              <span className="w-2 h-2 bg-[#FF6B00] rounded-full" />
              Votre concessionnaire local
            </span>
            <h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{
                color: '#FFFFFF',
                textShadow: '0 2px 4px rgba(0,0,0,0.3), 0 4px 20px rgba(0,0,0,0.2)'
              }}
            >
              L&apos;agence <span 
                style={{
                  color: '#FF6B00',
                  textShadow: '0 0 30px rgba(255,107,0,0.5), 0 0 60px rgba(255,107,0,0.3)'
                }}
>ConcessAuto</span> Bordeaux
            </h1>
            <p 
              className="text-lg"
              style={{
                color: 'rgba(255,255,255,0.85)',
                textShadow: '0 1px 2px rgba(0,0,0,0.3)'
              }}
            >
              Depuis plus de 10 ans, nous accompagnons les habitants de la Gironde 
              dans l&apos;achat et la vente de véhicules d&apos;occasion en toute confiance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-[#1a365d]/10 text-[#1a365d] rounded-full text-sm font-medium mb-4">
                Notre histoire
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Une passion pour l&apos;automobile,
                <br />
                <span className="text-[#e53e3e]">un engagement local</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Fondée en 2014, ConcessAuto Bordeaux est née d&apos;une volonté simple : 
                  offrir aux habitants de la région bordelaise un service de qualité pour 
                  l&apos;achat et la vente de véhicules d&apos;occasion.
                </p>
                <p>
                  Notre équipe, composée de passionnés de l&apos;automobile, met son 
                  expertise au service de vos projets. Que vous souhaitiez vendre 
                  votre véhicule rapidement ou trouver la voiture parfaite, nous 
                  vous accompagnons à chaque étape.
                </p>
                <p>
                  Membre du réseau ConcessAuto, nous bénéficions de l&apos;expertise d&apos;un 
                  groupe national tout en conservant notre ancrage local et notre 
                  approche personnalisée.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-10">
                {[
                  { value: '10+', label: 'Années d\'expérience' },
                  { value: '500+', label: 'Véhicules vendus' },
                  { value: '98%', label: 'Clients satisfaits' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-3xl font-bold text-[#1a365d]">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800"
                  alt="Showroom ConcessAuto Bordeaux"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-2xl"
                />
                
                {/* Floating card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#e53e3e]/10 rounded-full flex items-center justify-center">
                      <svg className="w-7 h-7 text-[#e53e3e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Bordeaux, Gironde</p>
                      <p className="text-sm text-gray-500">123 Cours de la Marne</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-[#e53e3e]/10 text-[#e53e3e] rounded-full text-sm font-medium mb-4">
              Nos valeurs
            </span>
            <h2 className="section-title">Ce qui nous différencie</h2>
            <p className="section-subtitle">
              Des engagements forts pour vous garantir une expérience d&apos;achat ou de vente sereine
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#1a365d] to-[#2c5282] text-white rounded-2xl flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-[#d69e2e]/10 text-[#d69e2e] rounded-full text-sm font-medium mb-4">
              Notre équipe
            </span>
            <h2 className="section-title">Des experts à votre service</h2>
            <p className="section-subtitle">
              Une équipe passionnée et expérimentée pour vous accompagner dans votre projet
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#e53e3e] font-medium mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-[#1a365d]/10 text-[#1a365d] rounded-full text-sm font-medium mb-4">
                Nous trouver
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Venez nous rencontrer
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Notre agence est située en plein cœur de Bordeaux, facilement accessible 
                avec un parking gratuit à disposition. Notre équipe vous accueille du lundi 
                au samedi pour tous vos projets automobiles.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e53e3e]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#e53e3e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                    <p className="text-gray-600">123 Cours de la Marne<br />33000 Bordeaux</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e53e3e]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#e53e3e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Horaires d&apos;ouverture</h4>
                    <p className="text-gray-600">
                      123 Cours de la Marne<br />
                      33000 Bordeaux : 9h00 - 18h00<br />
                      Dimanche : Fermé
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e53e3e]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#e53e3e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Contact</h4>
                    <p className="text-gray-600">
                      <a href="tel:0479320000" className="hover:text-[#e53e3e]">04 79 32 00 00</a><br />
                      <a href="mailto:bordeaux@concessauto.com" className="hover:text-[#e53e3e]">bordeaux@concessauto.com</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Nous contacter
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-200 rounded-3xl overflow-hidden aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.8547547547547!2d6.392!3d45.675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDQwJzMwLjAiTiA2wrAyMyczMy42IkU!5e0!3m2!1sfr!2sfr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation ConcessAuto Bordeaux"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-pattern">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à démarrer votre projet automobile ?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Que vous souhaitiez acheter ou vendre, notre équipe est là pour vous accompagner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/acheter" className="btn-primary">
                Voir nos véhicules
              </Link>
              <Link
                href="/vendre"
                className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-[#1a365d]"
              >
                Vendre ma voiture
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
