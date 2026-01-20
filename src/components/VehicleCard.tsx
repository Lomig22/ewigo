'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Vehicle } from '@/data/vehicles';

interface VehicleCardProps {
  vehicle: Vehicle;
  index?: number;
}

export default function VehicleCard({ vehicle, index = 0 }: VehicleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="vehicle-card group"
    >
      <Link href={`/vehicule/${vehicle.id}`}>
        {/* Image Container */}
        <div className="relative h-52 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
          <Image
            src={vehicle.images[0]}
            alt={`${vehicle.brand} ${vehicle.model}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 z-20 flex gap-2">
            <span className="px-3 py-1 bg-[#e53e3e] text-white text-xs font-semibold rounded-full">
              {vehicle.fuel}
            </span>
            {vehicle.year >= 2023 && (
              <span className="px-3 py-1 bg-[#d69e2e] text-white text-xs font-semibold rounded-full">
                Récent
              </span>
            )}
          </div>
          
          {/* Warranty Badge */}
          <div className="absolute bottom-3 right-3 z-20">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#1a365d] text-xs font-semibold rounded-full">
              Garantie {vehicle.warranty}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Title */}
          <div className="mb-3">
            <h3 className="font-bold text-lg text-gray-900 group-hover:text-[#e53e3e] transition-colors">
              {vehicle.brand} {vehicle.model}
            </h3>
            <p className="text-sm text-gray-500">{vehicle.year} • {vehicle.transmission}</p>
          </div>

          {/* Specs */}
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>{vehicle.power}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{vehicle.mileage.toLocaleString('fr-FR')} km</span>
            </div>
          </div>

          {/* Price & CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div>
              <p className="text-2xl font-bold text-[#1a365d]">
                {vehicle.price.toLocaleString('fr-FR')} €
              </p>
            </div>
            <div className="flex items-center gap-2 text-[#e53e3e] font-semibold text-sm group-hover:gap-3 transition-all">
              Voir le détail
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
