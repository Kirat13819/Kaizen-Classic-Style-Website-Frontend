/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Clock, MapPin, Phone } from 'lucide-react';
import { Page } from '../types';
import { IMAGES, SPONSORS, REVIEWS } from '../data';
import { motion } from 'motion/react';
import Logo from './Logo';

interface HomeViewProps {
  setCurrentPage: (page: Page) => void;
}

export default function HomeView({ setCurrentPage }: HomeViewProps) {
  const marqueeReviews = [...REVIEWS, ...REVIEWS];

  return (
    <div id="home-view" className="bg-[#F0EAD6] text-[#22201D] font-serif overflow-x-hidden pt-0">
      
      {/* 1. Hero Section */}
      <section id="hero-section" className="relative bg-[#a65138] flex flex-col justify-center items-center w-full min-h-[75vh] sm:min-h-[90vh] pt-40 sm:pt-56 pb-24 sm:pb-36 overflow-hidden border-b-[6px] border-[#B08D57]/35 px-6">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#F0EAD6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-[#F0EAD6] animate-fade-in">
          <Logo className="w-full max-w-md sm:max-w-xl h-auto text-[#F0EAD6] py-4" />
        </div>
      </section>

      {/* Hero Tagline & Button Strip */}
      <section id="hero-tagline-strip" className="bg-[#F0EAD6] py-12 md:py-16 text-center px-6 border-b border-[#B08D57]/15">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-[10px] tracking-[0.3em] text-[#B08D57] uppercase font-semibold">
            ESTABLISHED IN THE VALE
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#2C3B2E] leading-tight font-medium">
            A Club for Sport. A Home for Community.
          </h2>
          <div className="h-px w-20 bg-[#B08D57]/30 mx-auto my-6"></div>
          <p className="font-sans text-sm md:text-base text-[#22201D]/75 max-w-xl mx-auto leading-relaxed">
            Where unhurried leisure meets sporting excellence. Join us on our pristine courts, multi-purpose turf, or in our quiet cafe sanctuary.
          </p>
          <div className="pt-4">
            <button
              id="hero-book-btn"
              onClick={() => {
                setCurrentPage('book');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 border border-[#2C3B2E] text-xs font-semibold tracking-[0.2em] uppercase text-[#2C3B2E] bg-transparent hover:bg-[#2C3B2E] hover:text-[#F0EAD6] transition-all duration-300 rounded-none cursor-pointer"
            >
              Book Your Slot
            </button>
          </div>
        </div>
      </section>

      {/* 2. About/Community Intro */}
      <section id="about-section" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] tracking-[0.25em] text-[#B08D57] uppercase font-semibold block">
              THE KAIZEÑ ETHOS
            </span>
            <h3 className="text-3xl md:text-4xl text-[#2C3B2E] font-medium leading-tight">
              A slower pace, a higher standard of gathering.
            </h3>
            <div className="h-px w-12 bg-[#B08D57]/40 my-4"></div>
          </div>
          <div className="lg:col-span-7 space-y-6 text-[#22201D]/85 text-sm md:text-base leading-relaxed font-serif">
            <p>
              We believe a club is defined not by the intensity of its competitive spirit, but by the warmth of its community. At <strong className="text-[#2C3B2E] font-medium">kaizeñ</strong>, we have distilled this ethos into a single sanctuary. It is a space where the bounce of the ball, the click of the paddle, and the hum of an espresso machine merge seamlessly.
            </p>
            <p>
              Our grounds host a pristine multi-purpose turf for football and cricket, alongside three premium, state-of-the-art pickleball courts. But the true heart of our club lies in the on-site luxury cafe, designed with dark woods, leather, and warm brass—serving as a social anchor before, during, and long after the match is won.
            </p>
            <p className="italic text-[#6B4A34]">
              Kaizeñ is not just a booking; it is a membership in a refined way of living.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Facilities Showcase */}
      <section id="facilities-section" className="py-20 bg-[#ECE5D0] border-t border-b border-[#B08D57]/20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-[10px] tracking-[0.3em] text-[#B08D57] uppercase font-semibold block">
              THE FACILITIES
            </span>
            <h3 className="text-3xl md:text-4xl text-[#2C3B2E] font-medium">
              Designed for Sport, Crafted for Leisure
            </h3>
            <div className="h-px w-16 bg-[#B08D57]/30 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* The Turf Card */}
            <div className="flex flex-col h-full bg-[#F0EAD6] border border-[#B08D57]/20 overflow-hidden shadow-sm hover:shadow-[0_18px_40px_rgba(43,36,22,0.15)] hover:-translate-y-2 transition-all duration-500 group">
              <div className="relative aspect-[4/3] overflow-hidden border-b border-[#B08D57]/15">
                <img
                  src={IMAGES.turf}
                  alt="The Turf at Kaizen"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-105 group-hover:contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C3B2E]/20 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow space-y-4">
                <h4 className="text-xl text-[#2C3B2E] font-medium tracking-wide">The Turf</h4>
                <p className="font-sans text-xs text-[#22201D]/75 leading-relaxed flex-grow">
                  A state-of-the-art, beautifully laid multi-purpose green tailored for football and cricket matches. Features specialized low-glare tournament illumination.
                </p>
                <button
                  onClick={() => {
                    setCurrentPage('book');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-serif tracking-widest text-[#6B4A34] hover:text-[#2C3B2E] flex items-center space-x-2 mt-4 font-semibold group-hover:translate-x-1 transition-transform self-start"
                >
                  <span>BOOK TURF</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Pickleball Courts Card */}
            <div className="flex flex-col h-full bg-[#F0EAD6] border border-[#B08D57]/20 overflow-hidden shadow-sm hover:shadow-[0_18px_40px_rgba(43,36,22,0.15)] hover:-translate-y-2 transition-all duration-500 group">
              <div className="relative aspect-[4/3] overflow-hidden border-b border-[#B08D57]/15">
                <img
                  src={IMAGES.pickleball}
                  alt="Pickleball Courts at Kaizen"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-105 group-hover:contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C3B2E]/20 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow space-y-4">
                <h4 className="text-xl text-[#2C3B2E] font-medium tracking-wide">Pickleball Courts</h4>
                <p className="font-sans text-xs text-[#22201D]/75 leading-relaxed flex-grow">
                  Three professional cushion-coated pickleball courts, framed by warm wooden spectator seating. Premium net posts and optimal ball bounce characteristics.
                </p>
                <button
                  onClick={() => {
                    setCurrentPage('book');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-serif tracking-widest text-[#6B4A34] hover:text-[#2C3B2E] flex items-center space-x-2 mt-4 font-semibold group-hover:translate-x-1 transition-transform self-start"
                >
                  <span>BOOK COURT</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* The Cafe Card */}
            <div className="flex flex-col h-full bg-[#F0EAD6] border border-[#B08D57]/20 overflow-hidden shadow-sm hover:shadow-[0_18px_40px_rgba(43,36,22,0.15)] hover:-translate-y-2 transition-all duration-500 group">
              <div className="relative aspect-[4/3] overflow-hidden border-b border-[#B08D57]/15">
                <img
                  src={IMAGES.cafe}
                  alt="The Cafe at Kaizen"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-105 group-hover:contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C3B2E]/20 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow space-y-4">
                <h4 className="text-xl text-[#2C3B2E] font-medium tracking-wide">The Kaizeñ Cafe</h4>
                <p className="font-sans text-xs text-[#22201D]/75 leading-relaxed flex-grow">
                  A bespoke indoor social space featuring rich oak panels, leather details, and specialty wood-fire coffee. The perfect post-game sanctuary.
                </p>
                <button
                  onClick={() => {
                    setCurrentPage('cafe');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-serif tracking-widest text-[#6B4A34] hover:text-[#2C3B2E] flex items-center space-x-2 mt-4 font-semibold group-hover:translate-x-1 transition-transform self-start"
                >
                  <span>EXPLORE MENU</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Sponsors & Collaborations (Expanded Wall of Partners) */}
      <section id="sponsors-section" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-[10px] tracking-[0.3em] text-[#B08D57] uppercase font-semibold block">
              COOPERATIONS & COLLABORATIONS
            </span>
            <h3 className="text-3xl text-[#2C3B2E] font-medium">
              Our Distinguished Partners
            </h3>
            <p className="font-sans text-xs text-[#22201D]/65 leading-relaxed">
              We collaborate exclusively with premium brands whose commitments to material quality, aesthetics, and artisanal excellence mirror our own.
            </p>
            <div className="h-px w-16 bg-[#B08D57]/30 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {SPONSORS.map((sponsor) => (
              <div
                key={sponsor.name}
                className="group relative flex flex-col p-6 bg-[#F0EAD6] border border-[#B08D57]/20 hover:border-[#6B4A34] hover:-translate-y-3 hover:shadow-[0_20px_42px_rgba(43,36,22,0.16)] hover:bg-[#F7F0E3] transition-all duration-400 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#B08D57]/10 via-transparent to-[#6B4A34]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#B08D57]/0 via-[#B08D57]/80 to-[#B08D57]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                {/* Fixed Size Plaque For Monochrome Logo */}
                <div className="relative h-16 w-full flex items-center justify-center border-b border-[#B08D57]/15 pb-4 mb-4">
                  <span className="text-base tracking-[0.25em] font-bold text-[#2C3B2E] opacity-75 group-hover:opacity-100 group-hover:text-[#6B4A34] group-hover:tracking-[0.35em] group-hover:scale-105 transition-all duration-400 font-serif">
                    {sponsor.logoText}
                  </span>
                </div>
                {/* One line description */}
                <p className="relative text-center text-xs font-serif text-[#22201D]/70 group-hover:text-[#22201D] transition-colors duration-400 leading-relaxed">
                  {sponsor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section id="testimonials-section" className="py-24 bg-[#ECE5D0] border-t border-[#B08D57]/15 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-[10px] tracking-[0.3em] text-[#B08D57] uppercase font-semibold block">
              CLUBHOUSE VOICES
            </span>
            <h3 className="text-3xl text-[#2C3B2E] font-medium">
              The Member Experience
            </h3>
            <div className="h-px w-16 bg-[#B08D57]/30 mx-auto"></div>
          </div>

          <div className="relative overflow-hidden rounded-[2px] border border-[#B08D57]/20 bg-[#EDE2C7]/70 py-4 md:py-6">
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#ECE5D0] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#ECE5D0] to-transparent z-10 pointer-events-none"></div>

            <div className="review-marquee-track flex w-max gap-4 md:gap-5">
              {marqueeReviews.map((review, index) => (
                <div
                  key={`${review.id}-${index}`}
                  className="w-[280px] sm:w-[320px] md:w-[340px] flex-shrink-0 bg-[#F0EAD6] border border-[#B08D57]/20 p-6 md:p-7 shadow-[0_8px_24px_rgba(43,36,22,0.06)] relative"
                >
                  <span className="text-[#B08D57]/20 text-5xl font-serif absolute top-3 left-3 select-none leading-none">
                    “
                  </span>

                  <div className="relative z-10 space-y-5 flex-grow flex flex-col justify-between">
                    <p className="text-sm italic leading-relaxed text-[#22201D]/80 font-serif pt-3">
                      {review.quote}
                    </p>

                    <div className="flex items-center space-x-3 pt-3 border-t border-[#B08D57]/15">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-9 h-9 rounded-full object-cover border border-[#B08D57]/20 grayscale"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h5 className="text-[11px] font-semibold text-[#2C3B2E] tracking-wide font-serif">
                          {review.name}
                        </h5>
                        <p className="text-[9px] text-[#6B4A34] tracking-[0.2em] uppercase">
                          {review.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Quick Info Strip */}
      <section id="info-strip" className="bg-[#2C3B2E] text-[#F0EAD6] py-12 px-6 border-b border-[#B08D57]/25">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-[#B08D57]/20">
          
          <div className="flex flex-col items-center md:items-start space-y-2 md:px-6 py-4 md:py-0">
            <div className="flex items-center space-x-2 text-[#B08D57]">
              <Clock size={16} />
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold">CLUB HOURS</span>
            </div>
            <p className="text-xs font-sans text-[#F0EAD6]/80">Daily: 06:00 AM – 11:00 PM</p>
            <p className="text-[10px] text-[#F0EAD6]/50">Turf bookings close at 10:00 PM</p>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-2 md:px-12 py-4 md:py-0">
            <div className="flex items-center space-x-2 text-[#B08D57]">
              <MapPin size={16} />
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold">LOCATION</span>
            </div>
            <p className="text-xs font-sans text-[#F0EAD6]/80">Alkapuri, Vadodara, Gujarat</p>
            <p className="text-[10px] text-[#F0EAD6]/50">42, Heritage Court Road</p>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-2 md:px-12 py-4 md:py-0">
            <div className="flex items-center space-x-2 text-[#B08D57]">
              <Phone size={16} />
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold">CONTACT ENQUIRIES</span>
            </div>
            <p className="text-xs font-sans text-[#F0EAD6]/80">+91 98765 43210</p>
            <p className="text-[10px] text-[#F0EAD6]/50">club@kaizen.com</p>
          </div>

        </div>
      </section>

    </div>
  );
}
