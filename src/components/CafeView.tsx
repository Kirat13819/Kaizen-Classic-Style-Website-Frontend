/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, Clock, Coffee, Sparkles, Users } from 'lucide-react';
import { CAFE_MENU, IMAGES } from '../data';

export default function CafeView() {
  const [resName, setResName] = useState('');
  const [resDate, setResDate] = useState('');
  const [resTime, setResTime] = useState('');
  const [resGuests, setResGuests] = useState('2');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resName || !resDate || !resTime) return;
    setIsSubmitted(true);
  };

  const ambiancePhotos = [
    { src: 'https://picsum.photos/seed/espresso_bar/600/400', alt: 'The Espresso Bar' },
    { src: 'https://picsum.photos/seed/leather_chairs/600/400', alt: 'Leather Seating Area' },
    { src: 'https://picsum.photos/seed/pour_over/600/400', alt: 'Artisanal Pour-Over Coffee' },
    { src: 'https://picsum.photos/seed/warm_bakery/600/400', alt: 'Fresh Morning Sourdough' },
  ];

  return (
    <div id="cafe-view" className="bg-[#F0EAD6] text-[#22201D] font-serif min-h-screen pt-[68px] pb-20 overflow-x-hidden">
      
      {/* 1. Cafe Hero */}
      <section id="cafe-hero" className="relative w-full h-[60vh] flex flex-col justify-center items-center text-center overflow-hidden border-b border-[#B08D57]/20">
        <div className="absolute inset-0 bg-[#22201D]/45 z-10"></div>
        <img
          src={IMAGES.cafe}
          alt="The Kaizeñ Cafe Interior"
          className="absolute inset-0 w-full h-full object-cover select-none"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20 max-w-3xl px-6 space-y-4">
          <span className="text-[10px] tracking-[0.35em] text-[#F0EAD6] uppercase font-semibold block">
            THE REFUGE
          </span>
          <h2 className="text-4xl md:text-6xl text-[#F0EAD6] tracking-wide font-medium">
            The Kaizeñ Cafe
          </h2>
          <div className="h-px w-20 bg-[#B08D57] mx-auto my-3"></div>
          <p className="font-serif text-sm md:text-lg text-[#F0EAD6]/90 italic max-w-xl mx-auto leading-relaxed">
            Specialty micro-roasted coffee, slow-fermented grains, and a quiet, unhurried space to unwind before or after playing.
          </p>
        </div>
      </section>

      {/* 2. Menu Section (Styled like an authentic printed menu card) */}
      <section id="cafe-menu-section" className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="border border-[#B08D57]/25 p-8 md:p-16 bg-[#ECE5D0] shadow-sm relative">
          
          {/* Header decorative details */}
          <div className="text-center space-y-3 mb-16">
            <span className="text-[9px] tracking-[0.3em] text-[#6B4A34] uppercase font-bold block">
              ESTD. 2024 • CLUBHOUSE EXCLUSIVE
            </span>
            <h3 className="text-3xl text-[#2C3B2E] uppercase tracking-widest font-medium">
              DAILY PROVISIONS
            </h3>
            <p className="text-xs italic text-[#22201D]/60 max-w-xs mx-auto">
              Sourced organically, prepared meticulously. Items and infusions rotate with the season.
            </p>
            <div className="h-px w-24 bg-[#B08D57]/30 mx-auto pt-2"></div>
          </div>

          {/* Grid of Menu Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-16 md:gap-y-16">
            {CAFE_MENU.map((category, idx) => (
              <div key={idx} className="space-y-6">
                
                {/* Category Title */}
                <h4 className="text-[11px] font-semibold tracking-[0.2em] text-[#B08D57] uppercase border-b border-[#B08D57]/20 pb-2">
                  {category.title}
                </h4>

                {/* Items */}
                <div className="space-y-6">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="space-y-1 group">
                      <div className="flex justify-between items-baseline">
                        <span className="text-sm font-semibold tracking-wide text-[#2C3B2E] group-hover:text-[#6B4A34] transition-colors">
                          {item.name}
                        </span>
                        <span className="h-px border-b border-dashed border-[#B08D57]/30 flex-grow mx-4"></span>
                        <span className="text-xs font-sans font-bold text-[#6B4A34]">
                          ₹{item.price}
                        </span>
                      </div>
                      <p className="text-xs text-[#22201D]/70 font-sans leading-relaxed pr-8">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

          <div className="text-center pt-12 mt-12 border-t border-[#B08D57]/20">
            <span className="text-[10px] tracking-widest text-[#6B4A34]/60 font-sans">
              PLEASE INFORM OUR BARISTAS OF ANY DIETARY RESTRICTIONS OR ALLERGIES.
            </span>
          </div>
        </div>
      </section>

      {/* 3. Ambiance Gallery */}
      <section id="cafe-ambiance-section" className="py-20 bg-[#ECE5D0] border-t border-b border-[#B08D57]/20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-[10px] tracking-[0.3em] text-[#B08D57] uppercase font-semibold block">
              THE EXPERIENCE
            </span>
            <h3 className="text-2xl md:text-3xl text-[#2C3B2E] font-medium">
              A Glimpse of the Sanctuary
            </h3>
            <div className="h-px w-12 bg-[#B08D57]/30 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ambiancePhotos.map((photo, index) => (
              <div key={index} className="relative aspect-[3/2] overflow-hidden border border-[#B08D57]/20 shadow-sm group">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale opacity-90 hover:grayscale-0 hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Seating/Reservation Note & Form */}
      <section id="cafe-reservation-section" className="py-24 px-6 md:px-12 max-w-xl mx-auto">
        <div className="border border-[#B08D57]/20 p-8 md:p-10 bg-[#F0EAD6] space-y-6">
          <div className="text-center space-y-2">
            <h4 className="text-xl text-[#2C3B2E] font-semibold">Clubhouse Table Request</h4>
            <p className="text-xs text-[#22201D]/75 font-sans">
              Seating is primarily reserved for members and playing guests. If you wish to guarantee a library table, please request below.
            </p>
          </div>

          {isSubmitted ? (
            <div id="reservation-success" className="text-center p-6 bg-[#ECE5D0] border border-[#2C3B2E]/20 space-y-4">
              <Sparkles className="text-[#B08D57] mx-auto animate-pulse" size={32} />
              <h5 className="font-bold text-[#2C3B2E] uppercase text-xs tracking-widest">REQUEST RECEIVED</h5>
              <p className="text-xs leading-relaxed text-[#22201D]/80">
                Thank you, <strong className="text-[#2C3B2E]">{resName}</strong>. We have provisioned a tentative table for <strong className="text-[#2C3B2E]">{resGuests} guests</strong> on <strong className="text-[#2C3B2E]">{resDate}</strong> around <strong className="text-[#2C3B2E]">{resTime}</strong>. We look forward to hosting you.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setResName('');
                  setResDate('');
                  setResTime('');
                }}
                className="text-[10px] tracking-widest uppercase border-b border-[#2C3B2E] pb-0.5 font-bold hover:text-[#6B4A34] transition-colors"
              >
                REQUEST ANOTHER TABLE
              </button>
            </div>
          ) : (
            <form onSubmit={handleReservation} className="space-y-4 font-serif">
              
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#6B4A34] font-semibold mb-1">
                  Name
                </label>
                <input
                  id="res-name"
                  type="text"
                  required
                  placeholder="e.g. Vikram Seth"
                  value={resName}
                  onChange={(e) => setResName(e.target.value)}
                  className="w-full px-4 py-2 border border-[#B08D57]/30 bg-[#F0EAD6] text-[#22201D] text-xs focus:outline-none focus:border-[#2C3B2E]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#6B4A34] font-semibold mb-1">
                    Date
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-[#6B4A34]/50"><Calendar size={12} /></span>
                    <input
                      id="res-date"
                      type="date"
                      required
                      value={resDate}
                      onChange={(e) => setResDate(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 border border-[#B08D57]/30 bg-[#F0EAD6] text-[#22201D] text-xs focus:outline-none focus:border-[#2C3B2E] font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#6B4A34] font-semibold mb-1">
                    Time Slot
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-[#6B4A34]/50"><Clock size={12} /></span>
                    <input
                      id="res-time"
                      type="text"
                      required
                      placeholder="e.g. 05:00 PM"
                      value={resTime}
                      onChange={(e) => setResTime(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 border border-[#B08D57]/30 bg-[#F0EAD6] text-[#22201D] text-xs focus:outline-none focus:border-[#2C3B2E]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#6B4A34] font-semibold mb-1">
                  Number of Guests
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-[#6B4A34]/50"><Users size={12} /></span>
                  <select
                    id="res-guests"
                    value={resGuests}
                    onChange={(e) => setResGuests(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 border border-[#B08D57]/30 bg-[#F0EAD6] text-[#22201D] text-xs focus:outline-none focus:border-[#2C3B2E] appearance-none"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="8">8 Guests (Large Library Table)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  id="request-table-btn"
                  className="w-full py-3 border border-[#2C3B2E] text-xs font-semibold tracking-widest uppercase text-[#F0EAD6] bg-[#2C3B2E] hover:bg-transparent hover:text-[#2C3B2E] transition-colors cursor-pointer"
                >
                  Request a Table
                </button>
              </div>

            </form>
          )}
        </div>
      </section>

      {/* 5. Closing Signature line */}
      <section id="cafe-closing-sig" className="text-center py-8">
        <p className="font-serif italic text-lg text-[#6B4A34] tracking-wide animate-pulse">
          "Best enjoyed after a match."
        </p>
      </section>

    </div>
  );
}
