'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import VehicleCard from '@/components/VehicleCard';
import ReviewCard from '@/components/ReviewCard';
import { vehicles } from '@/data/vehicles';
import { reviews } from '@/data/reviews';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center hero-automotive overflow-hidden">
        {/* Background automotive elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Orange glow on right side - EWIGO style */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FF6B00]/20 via-[#FF6B00]/5 to-transparent" />
          
          {/* Speed lines effect */}
          <div className="speed-lines" />
          
          {/* Diagonal accent line */}
          <div className="absolute top-0 right-[30%] w-[2px] h-full bg-gradient-to-b from-transparent via-[#FF6B00]/30 to-transparent transform rotate-12 origin-top" />
          <div className="absolute top-0 right-[35%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#FF6B00]/20 to-transparent transform rotate-12 origin-top" />
          
          {/* Grid pattern - subtle asphalt feel */}
          <div className="absolute inset-0 opacity-[0.02]" 
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} 
          />
          
          {/* Ambient circles */}
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-[100px]" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-[#1a365d]/50 rounded-full blur-[80px]" />
          
          {/* Road horizon line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent" />
          
          {/* Tire track pattern at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-20 opacity-5"
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,255,255,0.5) 10px, rgba(255,255,255,0.5) 12px)',
            }}
          />
        </div>

        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6B00]/20 backdrop-blur-sm rounded-full text-white text-sm mb-6 border border-[#FF6B00]/30"
              >
                <span className="w-2 h-2 bg-[#FF6B00] rounded-full animate-pulse" />
                Votre concessionnaire à Albertville
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                Achetez ou vendez votre voiture{' '}
                <span className="text-[#FF6B00] drop-shadow-[0_0_30px_rgba(255,107,0,0.3)]">simplement</span>{' '}
                à Albertville
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0"
              >
                <span className="text-[#FF6B00] font-semibold">Expertise locale</span> · Sécurité ·{' '}
                <span className="text-[#FF6B00] font-semibold">Prix justes</span>
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  href="/vendre"
                  className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white hover:text-[#1a365d] transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Vendre ma voiture
                </Link>
                <Link
                  href="/acheter"
                  className="group relative px-8 py-4 bg-[#FF6B00] text-white font-semibold rounded-xl hover:bg-[#FF8533] transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,107,0,0.4)] hover:shadow-[0_0_40px_rgba(255,107,0,0.6)]"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Voir les véhicules
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20"
              >
                {[
                  { value: '500+', label: 'Véhicules vendus' },
                  { value: '98%', label: 'Clients satisfaits' },
                  { value: '10 ans', label: 'd\'expertise' },
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <p className="text-2xl md:text-3xl font-bold text-white">
                      <span className="text-[#FF6B00]">{stat.value.charAt(0)}</span>
                      {stat.value.slice(1)}
                    </p>
                    <p className="text-sm text-white/70">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Glow effect behind car */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/30 via-[#FF6B00]/10 to-transparent rounded-3xl blur-[60px] scale-110" />
                
                {/* Car showcase frame */}
                <div className="relative p-2 rounded-3xl bg-gradient-to-br from-[#FF6B00]/20 to-transparent">
        <Image
                    src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800"
                    alt="Voiture premium BMW"
                    width={600}
                    height={400}
                    className="relative rounded-2xl shadow-2xl"
          priority
        />
                  
                  {/* Orange accent line on image */}
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-[#FF6B00] via-[#FF6B00]/50 to-transparent rounded-full" />
                </div>
                
                {/* Floating Card - Estimation */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B00] to-[#FF8533] rounded-xl flex items-center justify-center shadow-lg shadow-[#FF6B00]/30">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Estimation gratuite</p>
                      <p className="text-sm text-gray-500">En moins de 24h</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Badge - Vehicles count */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-gradient-to-br from-[#FF6B00] to-[#e65c00] text-white rounded-2xl px-5 py-4 shadow-2xl shadow-[#FF6B00]/40"
                >
                  <p className="font-bold text-2xl">8</p>
                  <p className="text-sm opacity-90">véhicules</p>
                </motion.div>

                {/* Speed indicator badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white rounded-xl px-4 py-2 flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Disponible immédiatement</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-8 h-12 border-2 border-[#FF6B00]/50 rounded-full flex justify-center pt-2 bg-black/20 backdrop-blur-sm"
          >
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-3 bg-[#FF6B00] rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-[#1a365d]/10 text-[#1a365d] rounded-full text-sm font-medium mb-4">
              Nos services
            </span>
            <h2 className="section-title">Tout pour votre projet automobile</h2>
            <p className="section-subtitle">
              Un accompagnement complet pour acheter ou vendre votre véhicule en toute sérénité
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
                title: 'Acheter un véhicule',
                description: 'Découvrez notre sélection de véhicules d\'occasion contrôlés et garantis.',
                href: '/acheter',
                color: 'from-blue-500 to-blue-600',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Vendre son véhicule',
                description: 'Vendez rapidement au meilleur prix grâce à notre réseau d\'acheteurs.',
                href: '/vendre',
                color: 'from-green-500 to-green-600',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Estimation gratuite',
                description: 'Obtenez une estimation précise de votre véhicule en quelques minutes.',
                href: '/vendre',
                color: 'from-amber-500 to-orange-500',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: 'Accompagnement administratif',
                description: 'Nous gérons toutes les démarches : carte grise, assurance, financement.',
                href: '/agence',
                color: 'from-purple-500 to-purple-600',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="block h-full bg-gray-50 hover:bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all group"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-[#1a365d]">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY EWIGO SECTION ===== */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-[#e53e3e]/10 text-[#e53e3e] rounded-full text-sm font-medium mb-4">
                Pourquoi nous choisir
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pourquoi choisir{' '}
                <span className="text-[#e53e3e]">EWIGO Albertville</span> ?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Depuis plus de 10 ans, nous accompagnons les habitants d&apos;Albertville 
                et de la Savoie dans leurs projets automobiles avec professionnalisme et transparence.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: '🎯',
                    title: 'Expertise locale',
                    description: 'Une équipe implantée localement qui connaît vos besoins et le marché régional.',
                  },
                  {
                    icon: '✓',
                    title: 'Sélection rigoureuse',
                    description: 'Chaque véhicule est contrôlé selon 150 points avant mise en vente.',
                  },
                  {
                    icon: '🔒',
                    title: 'Sécurité des transactions',
                    description: 'Paiement sécurisé, garanties incluses, transfert de propriété géré.',
                  },
                  {
                    icon: '💎',
                    title: 'Simplicité & transparence',
                    description: 'Pas de mauvaises surprises : prix clairs, historique vérifié, garantie incluse.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400"
                      alt="Showroom"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400"
                      alt="Véhicule"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=400"
                      alt="Inspection"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400"
                      alt="Livraison"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating stat */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#1a365d] text-white px-6 py-4 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-sm opacity-80">
                    <div>Clients</div>
                    <div>satisfaits</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== VEHICLES SECTION ===== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          >
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#1a365d]/10 text-[#1a365d] rounded-full text-sm font-medium mb-4">
                Notre sélection
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Véhicules disponibles
              </h2>
              <p className="text-gray-600 mt-2">
                Découvrez notre sélection de véhicules d&apos;occasion de qualité
              </p>
            </div>
            <Link
              href="/acheter"
              className="inline-flex items-center gap-2 text-[#e53e3e] font-semibold hover:gap-3 transition-all"
            >
              Voir tous les véhicules
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {vehicles.slice(0, 4).map((vehicle, index) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS SECTION ===== */}
      <section className="py-20 hero-pattern">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
              Simple et rapide
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Un processus simplifié pour acheter ou vendre votre véhicule en toute sérénité
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Estimation',
                description: 'Remplissez notre formulaire en ligne et recevez une estimation gratuite de votre véhicule sous 24h.',
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                step: '02',
                title: 'Validation',
                description: 'Venez en agence pour une inspection gratuite. Nous validons ensemble les conditions de vente.',
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                step: '03',
                title: 'Transaction sécurisée',
                description: 'Nous gérons toutes les démarches administratives. Paiement sécurisé garanti.',
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-colors h-full">
                  {/* Step number */}
                  <div className="absolute -top-4 left-8 bg-[#e53e3e] text-white px-4 py-1 rounded-full text-sm font-bold">
                    Étape {item.step}
                  </div>
                  
                  <div className="text-[#d69e2e] mb-6 mt-2">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">{item.description}</p>
                </div>

                {/* Connector line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-white/20" />
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/vendre"
              className="inline-flex items-center gap-2 btn-primary"
            >
              Commencer maintenant
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== REVIEWS SECTION ===== */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-[#d69e2e]/10 text-[#d69e2e] rounded-full text-sm font-medium mb-4">
              Témoignages
            </span>
            <h2 className="section-title">Ce que disent nos clients</h2>
            <p className="section-subtitle">
              Découvrez les avis de nos clients satisfaits à Albertville et ses environs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 6).map((review, index) => (
              <ReviewCard key={review.id} review={review} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a365d] via-[#2c5282] to-[#1a365d] p-12 md:p-16"
          >
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#e53e3e]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d69e2e]/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Prêt à acheter ou vendre votre véhicule{' '}
                <span className="text-[#d69e2e]">en toute sérénité</span> ?
              </h2>
              <p className="text-white/70 text-lg mb-10">
                Notre équipe vous accompagne à chaque étape de votre projet automobile.
                Contactez-nous dès maintenant pour une estimation gratuite.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/vendre"
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Vendre ma voiture
                </Link>
                <Link
                  href="/acheter"
                  className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-[#1a365d] flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Voir les véhicules
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 text-white hover:text-[#d69e2e] font-semibold transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Nous contacter
                </Link>
              </div>
            </div>
          </motion.div>
    </div>
      </section>
    </>
  );
}
