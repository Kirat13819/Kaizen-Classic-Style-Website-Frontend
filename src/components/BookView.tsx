/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar as CalendarIcon, CheckCircle, Clock, CreditCard, Landmark, User } from 'lucide-react';
import { BookingSlot, BookingDetail } from '../types';
import { TURF_SLOTS, PICKLEBALL_SLOTS } from '../data';

export default function BookView() {
  const [selectedFacility, setSelectedFacility] = useState<'turf' | 'pickleball'>('turf');
  
  // Custom Date Picker State (defaulting to today/current local time info)
  const today = new Date(2026, 6, 9); // July 9, 2026 based on metadata
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  
  const [selectedSlot, setSelectedSlot] = useState<BookingSlot | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [paymentOption, setPaymentOption] = useState<'half' | 'full'>('full');
  
  const [confirmedBooking, setConfirmedBooking] = useState<BookingDetail | null>(null);

  // Generate simple day list of current week for our custom calendar
  const getDaysInWeek = () => {
    const days = [];
    const startDate = new Date(today);
    // Let's offer a selection of 14 days starting today
    for (let i = 0; i < 14; i++) {
      const nextDay = new Date(startDate);
      nextDay.setDate(startDate.getDate() + i);
      days.push(nextDay);
    }
    return days;
  };

  const daysList = getDaysInWeek();

  // Format date helper
  const formatDateString = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleSlotClick = (slot: BookingSlot) => {
    if (!slot.available) return;
    setSelectedSlot(slot);
    setShowModal(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingPhone || !bookingEmail || !selectedSlot) return;

    // Calculate auto-assigned court for pickleball (e.g. Court #1, #2, or #3)
    let assignedCourt = undefined;
    if (selectedFacility === 'pickleball' && selectedSlot.courtsAvailable) {
      // 1-based index based on availability
      assignedCourt = 4 - selectedSlot.courtsAvailable; 
    }

    const price = selectedFacility === 'turf' ? 1200 : 800;
    const amount = paymentOption === 'half' ? price / 2 : price;

    const mockId = `KZN-${selectedFacility.toUpperCase().slice(0, 3)}-${Math.floor(
      100000 + Math.random() * 900000
    )}`;

    const newBooking: BookingDetail = {
      id: mockId,
      facility: selectedFacility,
      date: formatDateString(selectedDate),
      timeSlot: selectedSlot.time,
      name: bookingName,
      phone: bookingPhone,
      email: bookingEmail,
      courtNumber: assignedCourt,
      paymentOption,
      amount,
    };

    setConfirmedBooking(newBooking);
    setShowModal(false);
    setSelectedSlot(null);
    // Reset form
    setBookingName('');
    setBookingPhone('');
    setBookingEmail('');
  };

  const activeSlots = selectedFacility === 'turf' ? TURF_SLOTS : PICKLEBALL_SLOTS;

  return (
    <div id="booking-view" className="bg-[#F0EAD6] text-[#22201D] font-serif min-h-screen pt-28 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Title */}
        <div className="text-center space-y-4">
          <span className="text-[10px] tracking-[0.3em] text-[#B08D57] uppercase font-semibold block">
            RESERVE A SLOT
          </span>
          <h2 className="text-3xl md:text-4xl text-[#2C3B2E] font-medium">
            Court & Turf Scheduling
          </h2>
          <div className="h-px w-16 bg-[#B08D57]/30 mx-auto"></div>
        </div>

        {confirmedBooking ? (
          /* 5. Booking Confirmation Screen (Receipt-style) */
          <div id="confirmation-receipt" className="border border-[#B08D57]/30 bg-[#ECE5D0] p-8 md:p-12 space-y-8 max-w-lg mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-repeating-zigzag bg-[#2C3B2E]"></div>
            
            <div className="text-center space-y-3 pt-4">
              <CheckCircle className="text-[#2C3B2E] mx-auto" size={44} strokeWidth={1.5} />
              <h3 className="text-xl font-bold tracking-wide text-[#2C3B2E]">RESERVATION CONFIRMED</h3>
              <p className="text-xs font-sans text-[#22201D]/70 uppercase tracking-widest">
                Booking ID: {confirmedBooking.id}
              </p>
            </div>

            <div className="border-t border-b border-[#B08D57]/20 py-6 space-y-4 font-serif text-sm">
              <div className="flex justify-between">
                <span className="text-[#22201D]/60 uppercase text-[11px] tracking-wider">Facility</span>
                <span className="font-semibold text-[#2C3B2E] uppercase tracking-wide">
                  {confirmedBooking.facility === 'turf' ? 'The Multi-Purpose Turf' : 'Pickleball Court'}
                </span>
              </div>
              
              {confirmedBooking.courtNumber && (
                <div className="flex justify-between">
                  <span className="text-[#22201D]/60 uppercase text-[11px] tracking-wider">Assigned Court</span>
                  <span className="font-semibold text-[#2C3B2E]">Court #{confirmedBooking.courtNumber}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span className="text-[#22201D]/60 uppercase text-[11px] tracking-wider">Date</span>
                <span className="font-medium text-right text-[#22201D]">{confirmedBooking.date}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#22201D]/60 uppercase text-[11px] tracking-wider">Time Slot</span>
                <span className="font-semibold text-[#2C3B2E]">{confirmedBooking.timeSlot}</span>
              </div>

              <div className="flex justify-between border-t border-[#B08D57]/10 pt-4">
                <span className="text-[#22201D]/60 uppercase text-[11px] tracking-wider">Guest Name</span>
                <span className="font-medium text-[#22201D]">{confirmedBooking.name}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#22201D]/60 uppercase text-[11px] tracking-wider">Contact Phone</span>
                <span className="font-sans text-xs text-[#22201D]">{confirmedBooking.phone}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#22201D]/60 uppercase text-[11px] tracking-wider">Payment Status</span>
                <span className="font-semibold text-[#6B4A34] uppercase tracking-wider text-xs">
                  {confirmedBooking.paymentOption === 'half' ? 'Deposit Paid (50%)' : 'Fully Paid'}
                </span>
              </div>

              <div className="flex justify-between border-t border-dashed border-[#B08D57]/30 pt-4">
                <span className="font-semibold text-[#2C3B2E] uppercase text-[12px]">Amount Paid</span>
                <span className="font-bold text-base text-[#2C3B2E]">₹{confirmedBooking.amount}</span>
              </div>
            </div>

            <div className="text-center pt-2 space-y-4">
              <p className="text-[11px] text-[#22201D]/60 leading-relaxed font-sans max-w-xs mx-auto">
                A digital confirmation has been registered. Please present this receipt screen or booking ID upon arrival at the clubhouse front desk.
              </p>
              <button
                id="conf-done-btn"
                onClick={() => setConfirmedBooking(null)}
                className="w-full py-3 border border-[#2C3B2E] text-xs font-semibold tracking-widest uppercase text-[#F0EAD6] bg-[#2C3B2E] hover:bg-transparent hover:text-[#2C3B2E] transition-colors cursor-pointer"
              >
                Book Another Slot
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            
            {/* 1. Facility Selector (Toggle button with brass underline active state) */}
            <div id="facility-selector-tabs" className="flex justify-center border-b border-[#B08D57]/20 pb-0.5">
              <div className="flex space-x-12">
                <button
                  id="tab-turf"
                  onClick={() => setSelectedFacility('turf')}
                  className={`pb-4 text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 relative focus:outline-none ${
                    selectedFacility === 'turf'
                      ? 'text-[#2C3B2E]'
                      : 'text-[#22201D]/50 hover:text-[#2C3B2E]'
                  }`}
                >
                  THE TURF
                  {selectedFacility === 'turf' && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B08D57]"></span>
                  )}
                </button>
                <button
                  id="tab-pickleball"
                  onClick={() => setSelectedFacility('pickleball')}
                  className={`pb-4 text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 relative focus:outline-none ${
                    selectedFacility === 'pickleball'
                      ? 'text-[#2C3B2E]'
                      : 'text-[#22201D]/50 hover:text-[#2C3B2E]'
                  }`}
                >
                  PICKLEBALL COURTS
                  {selectedFacility === 'pickleball' && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B08D57]"></span>
                  )}
                </button>
              </div>
            </div>

            {/* Layout: Date on Left, Slots on Right */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              
              {/* 2. Date Picker (Calendar with cream background, forest green selected-date highlight, serif numerals) */}
              <div id="date-picker-section" className="md:col-span-5 space-y-4">
                <div className="flex items-center space-x-2 text-[#6B4A34] pb-2 border-b border-[#B08D57]/15">
                  <CalendarIcon size={16} />
                  <h4 className="text-xs font-semibold tracking-wider uppercase">SELECT GATHERING DATE</h4>
                </div>
                
                <div className="bg-[#ECE5D0] border border-[#B08D57]/25 p-4 shadow-inner">
                  <div className="flex justify-between items-center mb-4 text-xs font-semibold tracking-wider uppercase text-[#2C3B2E] border-b border-[#B08D57]/15 pb-2">
                    <span>JULY 2026</span>
                    <span className="text-[10px] text-[#6B4A34]">HERITAGE CALENDAR</span>
                  </div>
                  
                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-2 text-center text-xs">
                    {/* Days Headings */}
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
                      <span key={idx} className="text-[10px] font-sans font-bold text-[#6B4A34]/50">
                        {day}
                      </span>
                    ))}
                    
                    {/* Empty cells or pre-date spacers for alignment (since July 2026 starts on a Wednesday, 3 empty cells) */}
                    {[...Array(3)].map((_, idx) => (
                      <span key={`empty-${idx}`} className="py-2 text-[#22201D]/20 font-sans">
                        •
                      </span>
                    ))}

                    {/* Render days in July 2026 starting from July 1 to 14, but we can display the days active based on availability */}
                    {daysList.map((date, idx) => {
                      const isSelected = date.getDate() === selectedDate.getDate();
                      return (
                        <button
                          key={idx}
                          id={`date-cell-${date.getDate()}`}
                          onClick={() => setSelectedDate(date)}
                          className={`py-2 text-sm font-medium transition-all focus:outline-none rounded-none font-serif ${
                            isSelected
                              ? 'bg-[#2C3B2E] text-[#F0EAD6] font-bold shadow-sm'
                              : 'text-[#22201D] hover:bg-[#B08D57]/10'
                          }`}
                        >
                          {date.getDate()}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="p-4 border border-[#B08D57]/15 bg-[#F0EAD6] space-y-1">
                  <p className="text-[11px] text-[#6B4A34] uppercase tracking-widest font-semibold">SELECTED DATE</p>
                  <p className="text-sm font-medium text-[#2C3B2E]">{formatDateString(selectedDate)}</p>
                </div>
              </div>

              {/* 3. Slot Grid */}
              <div id="slots-grid-section" className="md:col-span-7 space-y-4">
                <div className="flex items-center space-x-2 text-[#6B4A34] pb-2 border-b border-[#B08D57]/15">
                  <Clock size={16} />
                  <h4 className="text-xs font-semibold tracking-wider uppercase">AVAILABLE SLOTS</h4>
                </div>

                <div className="grid grid-cols-1 gap-3 max-h-[420px] overflow-y-auto pr-2">
                  {activeSlots.map((slot, idx) => (
                    <button
                      key={idx}
                      id={`slot-btn-${idx}`}
                      onClick={() => handleSlotClick(slot)}
                      disabled={!slot.available}
                      className={`flex items-center justify-between p-4 border text-left transition-all rounded-none ${
                        slot.available
                          ? 'border-[#2C3B2E] hover:bg-[#2C3B2E] hover:text-[#F0EAD6] text-[#22201D] bg-transparent cursor-pointer'
                          : 'border-[#B08D57]/15 bg-neutral-200/50 text-neutral-400 cursor-not-allowed'
                      }`}
                    >
                      <div className="space-y-1">
                        <span className="text-sm font-semibold tracking-wide block">{slot.time}</span>
                        {selectedFacility === 'pickleball' && (
                          <span className="text-[10px] uppercase font-sans tracking-widest block opacity-85">
                            {slot.available ? `${slot.courtsAvailable} of 3 courts available` : 'All courts booked'}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center space-x-3">
                        <span className="text-[11px] uppercase tracking-[0.15em] font-medium font-sans">
                          {slot.available ? 'Reserve →' : 'Booked'}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 4. Booking Modal */}
        {showModal && selectedSlot && (
          <div id="booking-modal-overlay" className="fixed inset-0 bg-[#22201D]/70 z-50 flex items-center justify-center p-4">
            <div id="booking-modal" className="bg-[#F0EAD6] border border-[#B08D57]/30 max-w-md w-full p-8 space-y-6 shadow-xl relative animate-fade-in">
              
              <div className="flex justify-between items-start border-b border-[#B08D57]/20 pb-4">
                <div>
                  <span className="text-[9px] tracking-widest text-[#B08D57] uppercase font-bold block">
                    {selectedFacility === 'turf' ? 'MULTI-PURPOSE TURF' : 'PICKLEBALL COURT'}
                  </span>
                  <h3 className="text-lg font-bold text-[#2C3B2E]">RESERVATION INITIATION</h3>
                </div>
                <button
                  id="close-modal-btn"
                  onClick={() => {
                    setShowModal(false);
                    setSelectedSlot(null);
                  }}
                  className="text-[#22201D]/60 hover:text-[#2C3B2E] text-xl font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="p-3 bg-[#ECE5D0] border border-[#B08D57]/15 text-xs text-[#22201D]/80 leading-relaxed font-serif">
                <p className="font-semibold text-[#2C3B2E]">Selected Slot:</p>
                <p>{formatDateString(selectedDate)}</p>
                <p className="font-bold text-[#2C3B2E]">{selectedSlot.time}</p>
                {selectedFacility === 'pickleball' && selectedSlot.courtsAvailable && (
                  <p className="text-[#6B4A34] font-medium italic mt-1">
                    Auto-assigning Court #{4 - selectedSlot.courtsAvailable}
                  </p>
                )}
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                
                {/* Inputs */}
                <div className="space-y-3 font-serif">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#6B4A34] font-semibold mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-[#6B4A34]/50"><User size={14} /></span>
                      <input
                        id="form-name"
                        type="text"
                        required
                        placeholder="e.g. Vikram Seth"
                        value={bookingName}
                        onChange={(e) => setBookingName(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 border border-[#B08D57]/30 bg-[#F0EAD6] text-[#22201D] text-xs focus:outline-none focus:border-[#2C3B2E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#6B4A34] font-semibold mb-1">
                      Contact Phone
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={bookingPhone}
                      onChange={(e) => setBookingPhone(e.target.value)}
                      className="w-full px-4 py-2 border border-[#B08D57]/30 bg-[#F0EAD6] text-[#22201D] text-xs focus:outline-none focus:border-[#2C3B2E] font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#6B4A34] font-semibold mb-1">
                      Email Address
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      placeholder="e.g. guest@kaizen.com"
                      value={bookingEmail}
                      onChange={(e) => setBookingEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-[#B08D57]/30 bg-[#F0EAD6] text-[#22201D] text-xs focus:outline-none focus:border-[#2C3B2E]"
                    />
                  </div>
                </div>

                {/* Payment Option Cards */}
                <div className="space-y-2">
                  <label className="block text-[11px] uppercase tracking-wider text-[#6B4A34] font-semibold">
                    Payment Preference
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    
                    {/* Option 1: Half */}
                    <button
                      type="button"
                      id="pay-half-card"
                      onClick={() => setPaymentOption('half')}
                      className={`p-4 border text-center transition-all flex flex-col items-center justify-center space-y-1 cursor-pointer ${
                        paymentOption === 'half'
                          ? 'border-[#2C3B2E] bg-[#2C3B2E]/5 text-[#2C3B2E] font-bold'
                          : 'border-[#B08D57]/20 bg-transparent text-[#22201D]/75'
                      }`}
                    >
                      <Landmark size={16} />
                      <span className="text-xs uppercase tracking-wider block">Half Payment</span>
                      <span className="text-sm font-sans font-semibold text-[#6B4A34]">
                        ₹{selectedFacility === 'turf' ? '600' : '400'}
                      </span>
                    </button>

                    {/* Option 2: Full */}
                    <button
                      type="button"
                      id="pay-full-card"
                      onClick={() => setPaymentOption('full')}
                      className={`p-4 border text-center transition-all flex flex-col items-center justify-center space-y-1 cursor-pointer ${
                        paymentOption === 'full'
                          ? 'border-[#2C3B2E] bg-[#2C3B2E]/5 text-[#2C3B2E] font-bold'
                          : 'border-[#B08D57]/20 bg-transparent text-[#22201D]/75'
                      }`}
                    >
                      <CreditCard size={16} />
                      <span className="text-xs uppercase tracking-wider block">Full Payment</span>
                      <span className="text-sm font-sans font-semibold text-[#6B4A34]">
                        ₹{selectedFacility === 'turf' ? '1200' : '800'}
                      </span>
                    </button>

                  </div>
                </div>

                <div className="pt-4 flex space-x-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setSelectedSlot(null);
                    }}
                    className="flex-1 py-2.5 border border-[#B08D57]/30 text-xs tracking-wider uppercase text-[#22201D]/60 hover:text-[#22201D] transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    id="submit-booking-btn"
                    className="flex-1 py-2.5 border border-[#2C3B2E] bg-[#2C3B2E] text-xs font-semibold tracking-wider uppercase text-[#F0EAD6] hover:bg-transparent hover:text-[#2C3B2E] transition-colors cursor-pointer"
                  >
                    Confirm Reservation
                  </button>
                </div>

              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
