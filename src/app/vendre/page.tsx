'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function VendrePage() {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    mileage: '',
    fuel: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero */}
      <section className="hero-pattern pt-32 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto relative"
          >
            {/* Fond sombre pour meilleur contraste */}
            <div className="absolute -inset-8 bg-gradient-to-br from-[#0a1628]/70 via-[#0a1628]/50 to-transparent rounded-3xl -z-10 blur-sm" />
            
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6B00]/20 backdrop-blur-sm rounded-full text-white text-sm mb-6 border border-[#FF6B00]/30">
              <span className="w-2 h-2 bg-[#FF6B00] rounded-full animate-pulse" />
              Estimation gratuite en 24h
            </span>
            <h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                color: '#FFFFFF',
                textShadow: '0 2px 4px rgba(0,0,0,0.3), 0 4px 20px rgba(0,0,0,0.2)'
              }}
            >
              Vendez votre voiture{' '}
              <span 
                style={{
                  color: '#FF6B00',
                  textShadow: '0 0 30px rgba(255,107,0,0.5), 0 0 60px rgba(255,107,0,0.3)'
                }}
              >rapidement</span> et au{' '}
              <span 
                style={{
                  color: '#FF6B00',
                  textShadow: '0 0 30px rgba(255,107,0,0.5), 0 0 60px rgba(255,107,0,0.3)'
                }}
              >bon prix</span>
            </h1>
            <p 
              className="text-lg"
              style={{
                color: 'rgba(255,255,255,0.85)',
                textShadow: '0 1px 2px rgba(0,0,0,0.3)'
              }}
            >
              Obtenez une estimation gratuite de votre véhicule et vendez-le en toute sécurité 
              grâce à notre réseau d&apos;acheteurs qualifiés.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl">
                {!isSubmitted ? (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Demander une estimation gratuite
                      </h2>
                      <p className="text-gray-600">
                        Remplissez ce formulaire et nous vous recontacterons sous 24h avec une estimation personnalisée.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Vehicle Info */}
                      <div className="pb-6 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <span className="w-8 h-8 bg-[#1a365d] text-white rounded-full flex items-center justify-center text-sm">1</span>
                          Votre véhicule
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="form-label">Marque *</label>
                            <select
                              name="brand"
                              value={formData.brand}
                              onChange={handleChange}
                              required
                              className="form-input"
                            >
                              <option value="">Sélectionnez</option>
                              <option value="Peugeot">Peugeot</option>
                              <option value="Renault">Renault</option>
                              <option value="Citroën">Citroën</option>
                              <option value="Volkswagen">Volkswagen</option>
                              <option value="Audi">Audi</option>
                              <option value="BMW">BMW</option>
                              <option value="Mercedes">Mercedes</option>
                              <option value="Toyota">Toyota</option>
                              <option value="Autre">Autre</option>
                            </select>
                          </div>
                          <div>
                            <label className="form-label">Modèle *</label>
                            <input
                              type="text"
                              name="model"
                              value={formData.model}
                              onChange={handleChange}
                              required
                              placeholder="Ex: 308, Clio, Golf..."
                              className="form-input"
                            />
                          </div>
                          <div>
                            <label className="form-label">Année *</label>
                            <select
                              name="year"
                              value={formData.year}
                              onChange={handleChange}
                              required
                              className="form-input"
                            >
                              <option value="">Sélectionnez</option>
                              {Array.from({ length: 15 }, (_, i) => 2025 - i).map((year) => (
                                <option key={year} value={year}>{year}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="form-label">Kilométrage *</label>
                            <input
                              type="number"
                              name="mileage"
                              value={formData.mileage}
                              onChange={handleChange}
                              required
                              placeholder="Ex: 50000"
                              className="form-input"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="form-label">Carburant *</label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                              {['Essence', 'Diesel', 'Hybride', 'Électrique'].map((fuel) => (
                                <label
                                  key={fuel}
                                  className={`flex items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all ${
                                    formData.fuel === fuel
                                      ? 'border-[#1a365d] bg-[#1a365d]/5'
                                      : 'border-gray-200 hover:border-gray-300'
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    name="fuel"
                                    value={fuel}
                                    checked={formData.fuel === fuel}
                                    onChange={handleChange}
                                    className="sr-only"
                                  />
                                  <span className={`font-medium ${formData.fuel === fuel ? 'text-[#1a365d]' : 'text-gray-600'}`}>
                                    {fuel}
                                  </span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="pb-6 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <span className="w-8 h-8 bg-[#1a365d] text-white rounded-full flex items-center justify-center text-sm">2</span>
                          Vos coordonnées
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="md:col-span-2">
                            <label className="form-label">Nom complet *</label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              placeholder="Votre nom et prénom"
                              className="form-input"
                            />
                          </div>
                          <div>
                            <label className="form-label">Email *</label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              placeholder="votre@email.com"
                              className="form-input"
                            />
                          </div>
                          <div>
                            <label className="form-label">Téléphone *</label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              placeholder="06 00 00 00 00"
                              className="form-input"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="form-label">Message (optionnel)</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Informations supplémentaires sur votre véhicule (état, options, historique...)"
                          className="form-input resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            Obtenir une estimation gratuite
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </>
                        )}
                      </button>

                      <p className="text-center text-sm text-gray-500">
                        En soumettant ce formulaire, vous acceptez d&apos;être recontacté par notre équipe.
                      </p>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Demande envoyée !
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      Merci pour votre demande. Notre équipe vous recontactera dans les 24h 
                      avec une estimation personnalisée de votre véhicule.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          brand: '',
                          model: '',
                          year: '',
                          mileage: '',
                          fuel: '',
                          name: '',
                          email: '',
                          phone: '',
                          message: '',
                        });
                      }}
                      className="btn-secondary"
                    >
                      Faire une nouvelle demande
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Benefits Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <div className="sticky top-28 space-y-6">
                {/* Benefits Card */}
                <div className="bg-gradient-to-br from-[#1a365d] to-[#2c5282] rounded-3xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-6">Pourquoi vendre avec EWIGO ?</h3>
                  <ul className="space-y-4">
                    {[
                      { icon: '💰', text: 'Estimation gratuite et sans engagement' },
                      { icon: '⚡', text: 'Vente rapide grâce à notre réseau' },
                      { icon: '🔒', text: 'Transaction 100% sécurisée' },
                      { icon: '📋', text: 'Démarches administratives gérées' },
                      { icon: '🤝', text: 'Accompagnement personnalisé' },
                    ].map((item) => (
                      <li key={item.text} className="flex items-start gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-white/90">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-6">Nos résultats</h4>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { value: '48h', label: 'Délai moyen de vente' },
                      { value: '98%', label: 'Clients satisfaits' },
                      { value: '500+', label: 'Véhicules vendus' },
                      { value: '0€', label: 'Frais cachés' },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="text-2xl font-bold text-[#e53e3e]">{stat.value}</p>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-gray-100 rounded-3xl p-6 text-center">
                  <p className="text-gray-600 mb-3">Des questions ?</p>
                  <a
                    href="tel:0479320000"
                    className="inline-flex items-center gap-2 text-[#1a365d] font-bold text-lg hover:text-[#e53e3e] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    04 79 32 00 00
                  </a>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Comment vendre avec EWIGO ?</h2>
            <p className="section-subtitle">Un processus simple et rapide en 3 étapes</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Demandez votre estimation',
                description: 'Remplissez le formulaire ci-dessus avec les informations de votre véhicule. Nous vous recontactons sous 24h.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
              },
              {
                step: '2',
                title: 'Expertise en agence',
                description: 'Venez en agence pour une inspection gratuite de votre véhicule. Nous validons ensemble le prix de vente.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                step: '3',
                title: 'Vente sécurisée',
                description: 'Nous trouvons un acheteur et gérons toutes les démarches. Paiement garanti sous 48h.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                className="relative bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="absolute -top-4 left-8 w-8 h-8 bg-[#e53e3e] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div className="text-[#1a365d] mb-4 mt-2">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
