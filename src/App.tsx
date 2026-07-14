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

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Secure setter that also updates the browser's hash
  const changePage = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '#/' : `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <div id="app-root" className="min-h-screen flex flex-col bg-[#F0EAD6] text-[#22201D] selection:bg-[#2C3B2E] selection:text-[#F0EAD6]">
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
