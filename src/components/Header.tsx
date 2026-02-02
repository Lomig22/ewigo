'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Acheter', href: '/acheter' },
  { name: 'Vendre', href: '/vendre' },
  { name: 'L\'agence', href: '/agence' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/elimat-auto-logo.svg"
              alt="ConcessAuto Bordeaux"
              width={240}
              height={75}
              className="h-14 w-auto transition-all duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium text-sm tracking-wide hover:text-[#e53e3e] transition-colors relative group ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e53e3e] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/vendre"
              className={`font-semibold text-sm px-5 py-2.5 rounded-lg transition-all ${
                isScrolled
                  ? 'text-[#1a365d] border-2 border-[#1a365d] hover:bg-[#1a365d] hover:text-white'
                  : 'text-white border-2 border-white/50 hover:bg-white hover:text-[#1a365d]'
              }`}
            >
              Vendre ma voiture
            </Link>
            <Link
              href="/acheter"
              className="font-semibold text-sm px-5 py-2.5 rounded-lg bg-[#FF6B00] text-white hover:bg-[#e65c00] transition-all shadow-lg shadow-orange-500/30"
            >
              Voir les véhicules
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg"
            aria-label="Menu"
          >
            <div className={`w-6 h-5 flex flex-col justify-between ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              <span className={`block h-0.5 rounded-full transition-all ${isScrolled ? 'bg-gray-800' : 'bg-white'} ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 rounded-full transition-all ${isScrolled ? 'bg-gray-800' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 rounded-full transition-all ${isScrolled ? 'bg-gray-800' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-4 pb-6 space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-2 font-medium ${
                      isScrolled ? 'text-gray-700' : 'text-white'
                    } hover:text-[#e53e3e]`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 flex flex-col gap-3">
                  <Link
                    href="/vendre"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-center font-semibold py-3 px-6 rounded-lg border-2 border-[#1a365d] text-[#1a365d] hover:bg-[#1a365d] hover:text-white transition-all"
                  >
                    Vendre ma voiture
                  </Link>
                  <Link
                    href="/acheter"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-center font-semibold py-3 px-6 rounded-lg bg-[#FF6B00] text-white hover:bg-[#e65c00] transition-all"
                  >
                    Voir les véhicules
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
