/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Page = 'home' | 'book' | 'cafe' | 'merch';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  sizes?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}

export interface BookingSlot {
  time: string;
  available: boolean;
  courtsAvailable?: number; // For Pickleball (out of 3)
}

export interface BookingDetail {
  id: string;
  facility: 'turf' | 'pickleball';
  date: string;
  timeSlot: string;
  name: string;
  phone: string;
  email: string;
  courtNumber?: number;
  paymentOption: 'half' | 'full';
  amount: number;
}

export interface MenuItem {
  name: string;
  description: string;
  price: number;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface Review {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface Sponsor {
  name: string;
  logoText: string;
  description: string;
}
