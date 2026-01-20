'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VehicleCard from '@/components/VehicleCard';
import { vehicles, brands, years, fuels } from '@/data/vehicles';

export default function AcheterPage() {
  const [filters, setFilters] = useState({
    brand: '',
    minPrice: '',
    maxPrice: '',
    minYear: '',
    maxMileage: '',
    fuel: '',
  });

  const [sortBy, setSortBy] = useState('recent');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredVehicles = useMemo(() => {
    let result = vehicles.filter((v) => v.available);

    if (filters.brand) {
      result = result.filter((v) => v.brand === filters.brand);
    }
    if (filters.minPrice) {
      result = result.filter((v) => v.price >= parseInt(filters.minPrice));
    }
    if (filters.maxPrice) {
      result = result.filter((v) => v.price <= parseInt(filters.maxPrice));
    }
    if (filters.minYear) {
      result = result.filter((v) => v.year >= parseInt(filters.minYear));
    }
    if (filters.maxMileage) {
      result = result.filter((v) => v.mileage <= parseInt(filters.maxMileage));
    }
    if (filters.fuel) {
      result = result.filter((v) => v.fuel === filters.fuel);
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'mileage':
        result.sort((a, b) => a.mileage - b.mileage);
        break;
      case 'year':
        result.sort((a, b) => b.year - a.year);
        break;
      default:
        // recent - keep original order
        break;
    }

    return result;
  }, [filters, sortBy]);

  const clearFilters = () => {
    setFilters({
      brand: '',
      minPrice: '',
      maxPrice: '',
      minYear: '',
      maxMileage: '',
      fuel: '',
    });
  };

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  return (
    <>
      {/* Hero */}
      <section className="hero-pattern pt-32 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nos véhicules <span className="text-[#e53e3e]">disponibles</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Découvrez notre sélection de véhicules d&apos;occasion contrôlés, 
              garantis et prêts à partir. Trouvez la voiture parfaite pour vous.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Results */}
      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-72 flex-shrink-0"
            >
              {/* Mobile filter toggle */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden w-full flex items-center justify-between bg-white rounded-xl p-4 shadow-sm mb-4"
              >
                <span className="font-semibold flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  Filtres
                  {activeFiltersCount > 0 && (
                    <span className="bg-[#e53e3e] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {activeFiltersCount}
                    </span>
                  )}
                </span>
                <svg className={`w-5 h-5 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Filter content */}
              <div className={`lg:block ${isFilterOpen ? 'block' : 'hidden'}`}>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-lg">Filtres</h3>
                    {activeFiltersCount > 0 && (
                      <button
                        onClick={clearFilters}
                        className="text-sm text-[#e53e3e] hover:underline"
                      >
                        Réinitialiser
                      </button>
                    )}
                  </div>

                  <div className="space-y-6">
                    {/* Brand */}
                    <div>
                      <label className="form-label">Marque</label>
                      <select
                        value={filters.brand}
                        onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
                        className="form-input"
                      >
                        <option value="">Toutes les marques</option>
                        {brands.map((brand) => (
                          <option key={brand} value={brand}>{brand}</option>
                        ))}
                      </select>
                    </div>

                    {/* Price Range */}
                    <div>
                      <label className="form-label">Budget</label>
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="number"
                          placeholder="Min €"
                          value={filters.minPrice}
                          onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                          className="form-input"
                        />
                        <input
                          type="number"
                          placeholder="Max €"
                          value={filters.maxPrice}
                          onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                          className="form-input"
                        />
                      </div>
                    </div>

                    {/* Year */}
                    <div>
                      <label className="form-label">Année minimum</label>
                      <select
                        value={filters.minYear}
                        onChange={(e) => setFilters({ ...filters, minYear: e.target.value })}
                        className="form-input"
                      >
                        <option value="">Toutes les années</option>
                        {years.map((year) => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>

                    {/* Mileage */}
                    <div>
                      <label className="form-label">Kilométrage max</label>
                      <select
                        value={filters.maxMileage}
                        onChange={(e) => setFilters({ ...filters, maxMileage: e.target.value })}
                        className="form-input"
                      >
                        <option value="">Tous kilométrages</option>
                        <option value="20000">20 000 km</option>
                        <option value="50000">50 000 km</option>
                        <option value="100000">100 000 km</option>
                        <option value="150000">150 000 km</option>
                      </select>
                    </div>

                    {/* Fuel */}
                    <div>
                      <label className="form-label">Carburant</label>
                      <select
                        value={filters.fuel}
                        onChange={(e) => setFilters({ ...filters, fuel: e.target.value })}
                        className="form-input"
                      >
                        <option value="">Tous carburants</option>
                        {fuels.map((fuel) => (
                          <option key={fuel} value={fuel}>{fuel}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="mt-6 bg-gradient-to-br from-[#1a365d] to-[#2c5282] rounded-2xl p-6 text-white">
                  <h4 className="font-bold mb-2">Vous ne trouvez pas ?</h4>
                  <p className="text-white/70 text-sm mb-4">
                    Contactez-nous, nous rechercherons le véhicule idéal pour vous.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-[#1a365d] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
                  >
                    Nous contacter
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.aside>

            {/* Results */}
            <div className="flex-1">
              {/* Sort & Results count */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">{filteredVehicles.length}</span> véhicule{filteredVehicles.length > 1 ? 's' : ''} trouvé{filteredVehicles.length > 1 ? 's' : ''}
                </p>
                <div className="flex items-center gap-3">
                  <label className="text-sm text-gray-600">Trier par :</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="form-input !py-2 !px-3 text-sm"
                  >
                    <option value="recent">Plus récents</option>
                    <option value="price-asc">Prix croissant</option>
                    <option value="price-desc">Prix décroissant</option>
                    <option value="mileage">Kilométrage</option>
                    <option value="year">Année</option>
                  </select>
                </div>
              </div>

              {/* Vehicle Grid */}
              <AnimatePresence mode="wait">
                {filteredVehicles.length > 0 ? (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
                  >
                    {filteredVehicles.map((vehicle, index) => (
                      <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="no-results"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-16 bg-white rounded-2xl"
                  >
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Aucun véhicule trouvé
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Essayez de modifier vos critères de recherche
                    </p>
                    <button
                      onClick={clearFilters}
                      className="btn-primary"
                    >
                      Réinitialiser les filtres
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
