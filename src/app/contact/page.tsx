'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
            
            <h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                color: '#FFFFFF',
                textShadow: '0 2px 4px rgba(0,0,0,0.3), 0 4px 20px rgba(0,0,0,0.2)'
              }}
            >
              Contactez-<span 
                style={{
                  color: '#FF6B00',
                  textShadow: '0 0 30px rgba(255,107,0,0.5), 0 0 60px rgba(255,107,0,0.3)'
                }}
              >nous</span>
            </h1>
            <p 
              className="text-lg"
              style={{
                color: 'rgba(255,255,255,0.85)',
                textShadow: '0 1px 2px rgba(0,0,0,0.3)'
              }}
            >
              Une question ? Un projet ? Notre équipe est à votre disposition 
              pour vous accompagner dans tous vos projets automobiles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Quick Contact */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos coordonnées</h2>
                
                <div className="space-y-6">
                  <a
                    href="tel:0479320000"
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-[#e53e3e]/5 transition-colors group"
                  >
                    <div className="w-14 h-14 bg-[#e53e3e]/10 rounded-xl flex items-center justify-center group-hover:bg-[#e53e3e] transition-colors">
                      <svg className="w-6 h-6 text-[#e53e3e] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Téléphone</p>
                      <p className="font-bold text-gray-900 text-lg">04 79 32 00 00</p>
                    </div>
                  </a>

                  <a
                    href="mailto:bordeaux@elimatauto.com"
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-[#e53e3e]/5 transition-colors group"
                  >
                    <div className="w-14 h-14 bg-[#e53e3e]/10 rounded-xl flex items-center justify-center group-hover:bg-[#e53e3e] transition-colors">
                      <svg className="w-6 h-6 text-[#e53e3e] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-bold text-gray-900">bordeaux@elimatauto.com</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
                    <div className="w-14 h-14 bg-[#1a365d]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#1a365d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Adresse</p>
                      <p className="font-bold text-gray-900">123 Cours de la Marne</p>
                      <p className="text-gray-600">33000 Bordeaux</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
                    <div className="w-14 h-14 bg-[#1a365d]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#1a365d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Horaires</p>
                      <p className="font-semibold text-gray-900">Lun - Ven : 9h - 19h</p>
                      <p className="font-semibold text-gray-900">Sam : 9h - 18h</p>
                      <p className="text-gray-500">Dim : Fermé</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-[#1a365d] to-[#2c5282] rounded-3xl p-8 text-white">
                <h3 className="font-bold text-xl mb-6">Actions rapides</h3>
                <div className="space-y-4">
                  <Link
                    href="/acheter"
                    className="flex items-center gap-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="font-medium">Voir nos véhicules</span>
                    <svg className="w-5 h-5 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/vendre"
                    className="flex items-center gap-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">Estimer ma voiture</span>
                    <svg className="w-5 h-5 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/agence"
                    className="flex items-center gap-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="font-medium">Découvrir l&apos;agence</span>
                    <svg className="w-5 h-5 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg">
                {!isSubmitted ? (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Envoyez-nous un message
                      </h2>
                      <p className="text-gray-600">
                        Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
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
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="form-label">Téléphone</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="06 00 00 00 00"
                            className="form-input"
                          />
                        </div>
                        <div>
                          <label className="form-label">Sujet *</label>
                          <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="form-input"
                          >
                            <option value="">Sélectionnez un sujet</option>
                            <option value="achat">Achat d&apos;un véhicule</option>
                            <option value="vente">Vente de mon véhicule</option>
                            <option value="rdv">Prise de rendez-vous</option>
                            <option value="info">Demande d&apos;information</option>
                            <option value="autre">Autre</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="form-label">Message *</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          placeholder="Décrivez votre demande..."
                          className="form-input resize-none"
                        />
                      </div>

                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="consent"
                          required
                          className="mt-1 w-4 h-4 text-[#e53e3e] border-gray-300 rounded focus:ring-[#e53e3e]"
                        />
                        <label htmlFor="consent" className="text-sm text-gray-600">
                          J&apos;accepte que mes données soient utilisées pour répondre à ma demande. 
                          Consultez notre{' '}
                          <a href="#" className="text-[#1a365d] hover:underline">
                            politique de confidentialité
                          </a>
                          .
                        </label>
                      </div>

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
                            Envoyer le message
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </>
                        )}
                      </button>
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
                      Message envoyé !
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          subject: '',
                          message: '',
                        });
                      }}
                      className="btn-secondary"
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nous trouver</h2>
            <p className="text-gray-600">
              Notre agence est facilement accessible avec un parking gratuit à disposition
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-200 rounded-3xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.8547547547547!2d6.392!3d45.675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDQwJzMwLjAiTiA2wrAyMyczMy42IkU!5e0!3m2!1sfr!2sfr!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation ELIMAT AUTO Bordeaux"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus posées par nos clients
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'Comment fonctionne l\'estimation de mon véhicule ?',
                answer: 'L\'estimation est gratuite et sans engagement. Remplissez notre formulaire en ligne avec les informations de votre véhicule, et nous vous recontacterons sous 24h avec une proposition personnalisée.',
              },
              {
                question: 'Quelles sont les garanties sur les véhicules achetés ?',
                answer: 'Tous nos véhicules sont garantis minimum 12 mois (pièces et main d\'œuvre). Chaque véhicule est contrôlé sur 150 points avant mise en vente et dispose d\'un historique vérifié.',
              },
              {
                question: 'Puis-je échanger mon ancien véhicule ?',
                answer: 'Oui, nous proposons la reprise de votre ancien véhicule. Le montant de la reprise sera déduit du prix d\'achat de votre nouveau véhicule.',
              },
              {
                question: 'Proposez-vous des solutions de financement ?',
                answer: 'Oui, nous travaillons avec plusieurs partenaires bancaires pour vous proposer des solutions de financement adaptées à votre budget. Simulation gratuite en agence.',
              },
              {
                question: 'Combien de temps faut-il pour vendre mon véhicule ?',
                answer: 'En moyenne, nos véhicules se vendent en 48h grâce à notre large réseau d\'acheteurs qualifiés. Nous gérons toutes les démarches administratives pour vous.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
