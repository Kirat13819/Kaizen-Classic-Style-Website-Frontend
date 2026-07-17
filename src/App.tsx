/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import BookView from './components/BookView';
import CafeView from './components/CafeView';
import MerchView from './components/MerchView';
import { Page, CartItem } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Synchronize hash routing with React state for history navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/book') {
        setCurrentPage('book');
      } else if (hash === '#/cafe') {
        setCurrentPage('cafe');
      } else if (hash === '#/merch') {
        setCurrentPage('merch');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    // Check hash on initial mount
    handleHashChange();

    const bootTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1600);

    return () => {
      window.clearTimeout(bootTimer);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Secure setter that also updates the browser's hash
  const changePage = (page: Page) => {
    if (page === currentPage || isTransitioning) {
      return;
    }

    setIsTransitioning(true);

    window.setTimeout(() => {
      setCurrentPage(page);
      window.location.hash = page === 'home' ? '#/' : `#/${page}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });

      window.setTimeout(() => {
        setIsTransitioning(false);
      }, 450);
    }, 300);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const renderActiveView = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView setCurrentPage={changePage} />;
      case 'book':
        return <BookView />;
      case 'cafe':
        return <CafeView />;
      case 'merch':
        return (
          <MerchView
            cart={cart}
            setCart={setCart}
            isCartOpen={isCartOpen}
            setIsCartOpen={setIsCartOpen}
          />
        );
      default:
        return <HomeView setCurrentPage={changePage} />;
    }
  };

  return (
    <div id="app-root" className="min-h-screen flex flex-col bg-[#F0EAD6] text-[#22201D] selection:bg-[#2C3B2E] selection:text-[#F0EAD6] relative overflow-hidden">
      {isLoading && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden bg-[#050505] text-[#F3E8D2]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(176,141,87,0.22),_transparent_60%)]"></div>
          <div className="absolute inset-0 page-transition-curtain"></div>
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            <p className="text-[10px] tracking-[0.45em] uppercase text-[#B08D57] mb-4">
              Opening the clubhouse
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[0.28em] text-[#F3E8D2] font-serif">
              KAIZEN
            </h1>
            <div className="mt-6 h-px w-24 overflow-hidden bg-[#B08D57]/40">
              <div className="h-full bg-[#F3E8D2] loading-bar"></div>
            </div>
          </div>
        </div>
      )}

      {isTransitioning && (
        <div className="fixed inset-0 z-[110] pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[#F0EAD6] opacity-0 page-fade-overlay"></div>
        </div>
      )}

      {/* Dynamic Header */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={changePage}
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Main Sanctuary Frame */}
      <main className="flex-grow">
        {renderActiveView()}
      </main>

      {/* Global Symmetrical Footer */}
      <Footer setCurrentPage={changePage} />
    </div>
  );
}
