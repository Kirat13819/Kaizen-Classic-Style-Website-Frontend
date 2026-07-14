/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Page } from '../types';
import Logo from './Logo';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  cartCount: number;
  onCartClick: () => void;
}

export default function Navbar({
  currentPage,
  setCurrentPage,
  cartCount,
  onCartClick,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On subpages, we want the navbar to always be solid cream for legibility
  const isAlwaysSolid = currentPage !== 'home';
  const displaySolid = isAlwaysSolid || isScrolled;

  const navLinksLeft = [
    { label: 'HOME', page: 'home' as Page },
    { label: 'BOOK NOW', page: 'book' as Page },
  ];

  const navLinksRight = [
    { label: 'CAFE', page: 'cafe' as Page },
    { label: 'MERCHANDISE', page: 'merch' as Page },
  ];

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        displaySolid
          ? 'bg-[#F0EAD6] border-b border-[#B08D57]/25 py-3 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="flex items-center justify-between min-h-10 relative">
          
          {/* Mobile menu button (Left on mobile) */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors focus:outline-none ${
                displaySolid ? 'text-[#22201D] hover:text-[#2C3B2E]' : 'text-white hover:text-[#F0EAD6]'
              }`}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Symmetrical Desktop Layout (Left Side) */}
          <div className="hidden md:flex flex-1 justify-end items-center space-x-20 pr-24">
            {navLinksLeft.map((link) => (
              <button
                key={link.label}
                id={`nav-${link.page}`}
                onClick={() => handleNavClick(link.page)}
                className={`text-xs font-serif tracking-[0.2em] font-medium transition-all duration-300 ${
                  currentPage === link.page
                    ? 'text-[#B08D57]'
                    : displaySolid
                    ? 'text-[#22201D] hover:text-[#2C3B2E]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Centered Logo (Absolute Centering for perfect alignment) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center shrink-0">
            <button
              id="nav-logo"
              onClick={() => handleNavClick('home')}
              className="focus:outline-none flex items-center justify-center"
            >
              <Logo
                className={`h-7 transition-all duration-500 ${
                  displaySolid ? 'text-[#2C3B2E]' : 'text-white'
                }`}
              />
            </button>
          </div>

          {/* Symmetrical Desktop Layout (Right Side) */}
          <div className="hidden md:flex flex-1 justify-start items-center space-x-20 pl-24">
            {navLinksRight.map((link) => (
              <button
                key={link.label}
                id={`nav-${link.page}`}
                onClick={() => handleNavClick(link.page)}
                className={`text-xs font-serif tracking-[0.2em] font-medium transition-colors duration-300 ${
                  currentPage === link.page
                    ? 'text-[#B08D57]'
                    : displaySolid
                    ? 'text-[#22201D] hover:text-[#2C3B2E]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Cart Icon on the Right (Absolutely positioned so it doesn't push links) */}
          <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 flex items-center">
            <button
              id="navbar-cart-btn"
              onClick={onCartClick}
              className={`relative p-2 transition-colors duration-300 focus:outline-none ${
                displaySolid
                  ? 'text-[#22201D] hover:text-[#2C3B2E]'
                  : 'text-white hover:text-[#F0EAD6]'
              }`}
              aria-label="Open merchandise cart"
            >
              <ShoppingBag size={20} strokeWidth={1.8} />
              {cartCount > 0 && (
                <span
                  id="cart-count-badge"
                  className="absolute -top-1 -right-1 bg-[#6B4A34] text-[#F0EAD6] text-[9px] font-serif w-4.5 h-4.5 flex items-center justify-center rounded-full border border-[#F0EAD6]"
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="md:hidden fixed inset-0 top-[60px] bg-[#F0EAD6] z-40 flex flex-col px-8 py-12 space-y-8 border-t border-[#B08D57]/20"
        >
          {/* Main Mobile Navigation links */}
          <button
            id="mobile-nav-home"
            onClick={() => handleNavClick('home')}
            className={`text-left text-lg font-serif tracking-widest py-2 border-b border-[#2C3B2E]/10 ${
              currentPage === 'home' ? 'text-[#B08D57] font-semibold' : 'text-[#22201D]'
            }`}
          >
            HOME
          </button>
          
          <button
            id="mobile-nav-book"
            onClick={() => handleNavClick('book')}
            className={`text-left text-lg font-serif tracking-widest py-2 border-b border-[#2C3B2E]/10 ${
              currentPage === 'book' ? 'text-[#B08D57] font-semibold' : 'text-[#22201D]'
            }`}
          >
            BOOK NOW (SLOTS)
          </button>

          <button
            id="mobile-nav-cafe"
            onClick={() => handleNavClick('cafe')}
            className={`text-left text-lg font-serif tracking-widest py-2 border-b border-[#2C3B2E]/10 ${
              currentPage === 'cafe' ? 'text-[#B08D57] font-semibold' : 'text-[#22201D]'
            }`}
          >
            THE CAFE
          </button>

          <button
            id="mobile-nav-merch"
            onClick={() => handleNavClick('merch')}
            className={`text-left text-lg font-serif tracking-widest py-2 border-b border-[#2C3B2E]/10 ${
              currentPage === 'merch' ? 'text-[#B08D57] font-semibold' : 'text-[#22201D]'
            }`}
          >
            MERCHANDISE
          </button>

          <div className="pt-8 text-center text-[10px] font-serif tracking-[0.2em] text-[#6B4A34]">
            KAIZEÑ CLUB • EST. 2024
          </div>
        </div>
      )}
    </nav>
  );
}
