'use client';

import { useState, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { vehicles } from '@/data/vehicles';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function VehicleDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const vehicle = vehicles.find((v) => v.id === resolvedParams.id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);

  if (!vehicle) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 pt-28 pb-4">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#1a365d]">Accueil</Link>
            <span>/</span>
            <Link href="/acheter" className="hover:text-[#1a365d]">Véhicules</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{vehicle.brand} {vehicle.model}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                {/* Main Image */}
                <div className="relative aspect-[16/10]">
                  <Image
                    src={vehicle.images[currentImageIndex]}
                    alt={`${vehicle.brand} ${vehicle.model}`}
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Navigation arrows */}
                  {vehicle.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setCurrentImageIndex((i) => (i === 0 ? vehicle.images.length - 1 : i - 1))}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                      >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => setCurrentImageIndex((i) => (i === vehicle.images.length - 1 ? 0 : i + 1))}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                      >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-4 py-2 bg-[#e53e3e] text-white text-sm font-semibold rounded-full shadow-lg">
                      {vehicle.fuel}
                    </span>
                    <span className="px-4 py-2 bg-[#d69e2e] text-white text-sm font-semibold rounded-full shadow-lg">
                      Garantie {vehicle.warranty}
                    </span>
                  </div>
                </div>

                {/* Thumbnails */}
                {vehicle.images.length > 1 && (
                  <div className="p-4 flex gap-3 overflow-x-auto">
                    {vehicle.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative w-24 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                          currentImageIndex === index ? 'border-[#e53e3e]' : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        <Image src={img} alt="" fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mt-8 bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
                <p className="text-gray-600 leading-relaxed">{vehicle.description}</p>

                {/* Features */}
                <div className="mt-8">
                  <h3 className="font-semibold text-gray-900 mb-4">Équipements</h3>
                  <div className="flex flex-wrap gap-2">
                    {vehicle.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Info Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <div className="sticky top-28 space-y-6">
                {/* Main Info Card */}
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <div className="mb-6">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {vehicle.brand} {vehicle.model}
                    </h1>
                    <p className="text-gray-500">{vehicle.year} • {vehicle.transmission}</p>
                  </div>

                  <div className="text-4xl font-bold text-[#1a365d] mb-6">
                    {vehicle.price.toLocaleString('fr-FR')} €
                  </div>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      { label: 'Kilométrage', value: `${vehicle.mileage.toLocaleString('fr-FR')} km` },
                      { label: 'Puissance', value: vehicle.power },
                      { label: 'Carburant', value: vehicle.fuel },
                      { label: 'Boîte', value: vehicle.transmission },
                      { label: 'Couleur', value: vehicle.color },
                      { label: 'Portes', value: `${vehicle.doors} portes` },
                    ].map((spec) => (
                      <div key={spec.label} className="bg-gray-50 rounded-xl p-4">
                        <p className="text-sm text-gray-500 mb-1">{spec.label}</p>
                        <p className="font-semibold text-gray-900">{spec.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="space-y-3">
                    <button
                      onClick={() => setShowContactForm(true)}
                      className="w-full btn-primary flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Contacter l&apos;agence
                    </button>
                    <a
                      href="tel:0479320000"
                      className="w-full btn-secondary flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      04 79 32 00 00
                    </a>
                  </div>
                </div>

                {/* Guarantee Card */}
                <div className="bg-gradient-to-br from-[#1a365d] to-[#2c5282] rounded-3xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Garantie {vehicle.warranty}</h4>
                      <p className="text-white/70 text-sm">Pièces et main d&apos;œuvre</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Véhicule contrôlé sur 150 points
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Historique vérifié
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Satisfait ou échangé 7 jours
                    </li>
                  </ul>
                </div>

                {/* Agency Card */}
                <div className="bg-gray-100 rounded-3xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                      <span className="text-[#e53e3e] font-bold text-lg">EW</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">EWIGO Albertville</h4>
                      <p className="text-sm text-gray-500">123 Avenue de la Gare</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>📍 73200 Albertville</p>
                    <p>🕐 Lun-Ven: 9h-19h | Sam: 9h-18h</p>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Similar Vehicles */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Véhicules similaires</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles
              .filter((v) => v.id !== vehicle.id)
              .slice(0, 4)
              .map((v, index) => (
                <motion.div
                  key={v.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/vehicule/${v.id}`} className="block vehicle-card">
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={v.images[0]}
                        alt={`${v.brand} ${v.model}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900">{v.brand} {v.model}</h3>
                      <p className="text-sm text-gray-500">{v.year} • {v.mileage.toLocaleString('fr-FR')} km</p>
                      <p className="text-xl font-bold text-[#1a365d] mt-2">{v.price.toLocaleString('fr-FR')} €</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContactForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowContactForm(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Contacter l&apos;agence</h3>
                <button
                  onClick={() => setShowContactForm(false)}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <p className="text-gray-600 mb-6">
                Intéressé par ce <strong>{vehicle.brand} {vehicle.model}</strong> ? 
                Laissez-nous vos coordonnées et nous vous recontacterons rapidement.
              </p>

              <form className="space-y-4">
                <div>
                  <label className="form-label">Nom complet *</label>
                  <input type="text" required className="form-input" placeholder="Votre nom" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Email *</label>
                    <input type="email" required className="form-input" placeholder="votre@email.com" />
                  </div>
                  <div>
                    <label className="form-label">Téléphone *</label>
                    <input type="tel" required className="form-input" placeholder="06 00 00 00 00" />
                  </div>
                </div>
                <div>
                  <label className="form-label">Message</label>
                  <textarea
                    rows={3}
                    className="form-input resize-none"
                    placeholder="Votre message..."
                    defaultValue={`Bonjour, je suis intéressé par le ${vehicle.brand} ${vehicle.model} (${vehicle.year}).`}
                  />
                </div>
                <button type="submit" className="w-full btn-primary">
                  Envoyer ma demande
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
