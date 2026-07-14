/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Page } from '../types';
import Logo from './Logo';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#2C3B2E] text-[#F0EAD6] pt-16 pb-8 border-t border-[#B08D57]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Statement */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="text-[#F0EAD6] flex items-center">
              <button onClick={() => handleNavClick('home')} className="focus:outline-none text-left">
                <Logo className="h-7 text-[#F0EAD6]" />
              </button>
            </div>
            <p className="font-serif text-sm italic text-[#F0EAD6]/80 max-w-sm leading-relaxed">
              "Where sport meets community."
            </p>
            <p className="text-xs font-serif leading-relaxed text-[#F0EAD6]/60 max-w-sm">
              Kaizeñ is a sanctuary crafted for the modern sportsman. Understated, refined, and built around a genuine social spirit. We invite you to play, gather, and unwind.
            </p>
            
            {/* Social Icons (Line art, elegant) */}
            <div className="flex items-center space-x-5 pt-2">
              <a href="#instagram" className="text-[#F0EAD6]/60 hover:text-[#B08D57] transition-colors" aria-label="Kaizen Instagram">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#twitter" className="text-[#F0EAD6]/60 hover:text-[#B08D57] transition-colors" aria-label="Kaizen Twitter">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="#facebook" className="text-[#F0EAD6]/60 hover:text-[#B08D57] transition-colors" aria-label="Kaizen Facebook">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Details & Navigation Links */}
          <div className="lg:col-span-3 flex flex-col space-y-6">
            <h4 className="text-[11px] font-serif tracking-[0.25em] text-[#B08D57] uppercase font-semibold">
              THE CLUBHOUSE
            </h4>
            
            <div className="space-y-4 text-xs font-serif text-[#F0EAD6]/85 leading-relaxed">
              <div>
                <p className="font-semibold text-[#F0EAD6]">Hours of Gathering</p>
                <p className="text-[#F0EAD6]/70">Daily: 06:00 AM – 11:00 PM</p>
                <p className="text-[#F0EAD6]/50 italic">The Turf open till 10:00 PM</p>
              </div>

              <div>
                <p className="font-semibold text-[#F0EAD6]">Sanctuary Address</p>
                <p className="text-[#F0EAD6]/70">42, Heritage Court Road, Alkapuri,</p>
                <p className="text-[#F0EAD6]/70">Vadodara, Gujarat 390007</p>
              </div>

              <div>
                <p className="font-semibold text-[#F0EAD6]">Enquiries</p>
                <p className="text-[#F0EAD6]/70">P: +91 98765 43210</p>
                <p className="text-[#F0EAD6]/70">E: club@kaizen.com</p>
              </div>
            </div>
          </div>

          {/* Column 3: Elegant Embedded Map Placeholder */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <h4 className="text-[11px] font-serif tracking-[0.25em] text-[#B08D57] uppercase font-semibold">
              OUR SANCTUARY MAP
            </h4>
            
            <div className="relative h-44 w-full bg-[#1F2C21] border border-[#B08D57]/20 p-4 flex flex-col justify-between overflow-hidden">
              {/* Decorative Map Vector Lines */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                {/* Horizontal / Vertical Lines */}
                <div className="absolute top-1/4 left-0 right-0 h-px bg-[#F0EAD6]"></div>
                <div className="absolute top-2/3 left-0 right-0 h-px bg-[#F0EAD6]"></div>
                <div className="absolute left-1/3 top-0 bottom-0 w-px bg-[#F0EAD6]"></div>
                <div className="absolute left-3/4 top-0 bottom-0 w-px bg-[#F0EAD6]"></div>
                {/* Diagonal lines to represent organic streets */}
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="20" x2="300" y2="150" stroke="#F0EAD6" strokeWidth="1" />
                  <line x1="20" y1="0" x2="180" y2="200" stroke="#F0EAD6" strokeWidth="1" />
                  {/* Circular park outline */}
                  <circle cx="120" cy="80" r="40" stroke="#F0EAD6" strokeWidth="1" fill="none" />
                </svg>
              </div>

              {/* Pin Indicator */}
              <div className="absolute top-[80px] left-[120px] flex flex-col items-center pointer-events-none">
                <div className="w-2.5 h-2.5 bg-[#B08D57] rounded-full animate-pulse border border-[#F0EAD6]"></div>
                <span className="text-[9px] font-serif tracking-widest mt-1 text-[#F0EAD6] bg-[#2C3B2E] px-1.5 py-0.5 border border-[#B08D57]/30">
                  KAIZEÑ
                </span>
              </div>

              {/* Map Info */}
              <div className="relative z-10 mt-auto flex justify-between items-end">
                <span className="text-[10px] font-serif tracking-widest text-[#F0EAD6]/50">
                  22°18'N, 73°11'E
                </span>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[9px] font-serif tracking-widest text-[#B08D57] border-b border-[#B08D57] pb-0.5 hover:text-[#F0EAD6] hover:border-[#F0EAD6] transition-colors"
                >
                  GET DIRECTIONS →
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Fine Brass Hairline Divider */}
        <div className="border-t border-[#B08D57]/20 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] font-serif tracking-wider text-[#F0EAD6]/50">
          <p>© 2026 Kaizeñ Club. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="hover:text-[#B08D57] transition-colors">Privacy Charter</button>
            <button className="hover:text-[#B08D57] transition-colors">Club Rules</button>
            <button className="hover:text-[#B08D57] transition-colors">Terms of Sanctuary</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
