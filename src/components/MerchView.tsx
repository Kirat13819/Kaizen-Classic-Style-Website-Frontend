/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShoppingBag, X, Plus, Minus, CreditCard, ChevronRight, Check } from 'lucide-react';
import { Product, CartItem } from '../types';
import { PRODUCTS } from '../data';

interface MerchViewProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

export default function MerchView({
  cart,
  setCart,
  isCartOpen,
  setIsCartOpen,
}: MerchViewProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [detailSize, setDetailSize] = useState<string>('M');
  const [detailQty, setDetailQty] = useState<number>(1);
  
  // Checkout flow state
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [shippingName, setShippingName] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [shippingPhone, setShippingPhone] = useState('');
  const [orderConfirmation, setOrderConfirmation] = useState<{
    id: string;
    items: CartItem[];
    subtotal: number;
    name: string;
    address: string;
  } | null>(null);

  // Cart operations
  const addToCart = (product: Product, size?: string, qty: number = 1) => {
    const existingIndex = cart.findIndex(
      (item) => item.product.id === product.id && item.selectedSize === size
    );

    if (existingIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += qty;
      setCart(updatedCart);
    } else {
      setCart([...cart, { product, selectedSize: size, quantity: qty }]);
    }
    
    // Open cart drawer for feedback
    setIsCartOpen(true);
  };

  const updateQuantity = (index: number, delta: number) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += delta;
    if (updatedCart[index].quantity <= 0) {
      updatedCart.splice(index, 1);
    }
    setCart(updatedCart);
  };

  const removeFromCart = (index: number) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shippingName || !shippingAddress || !shippingPhone) return;

    const mockOrderId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderConfirmation({
      id: mockOrderId,
      items: [...cart],
      subtotal,
      name: shippingName,
      address: shippingAddress,
    });

    // Clear cart and close dialogs
    setCart([]);
    setIsCheckoutOpen(false);
    setIsCartOpen(false);
    
    // Reset forms
    setShippingName('');
    setShippingAddress('');
    setShippingPhone('');
  };

  return (
    <div id="merchandise-view" className="bg-[#F0EAD6] text-[#22201D] font-serif min-h-screen pt-28 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Title */}
        <div className="text-center space-y-4">
          <span className="text-[10px] tracking-[0.3em] text-[#B08D57] uppercase font-semibold block">
            THE ATHLETIC OUTFITTER
          </span>
          <h2 className="text-3xl md:text-4xl text-[#2C3B2E] font-medium">
            The Clubhouse Collection
          </h2>
          <p className="text-xs text-[#22201D]/75 font-sans max-w-sm mx-auto">
            Bespoke apparel and equipment designed for performance, comfort, and timeless club aesthetics.
          </p>
          <div className="h-px w-16 bg-[#B08D57]/30 mx-auto"></div>
        </div>

        {orderConfirmation ? (
          /* 6. Purchase Confirmation Receipt */
          <div id="order-receipt" className="border border-[#B08D57]/30 bg-[#ECE5D0] p-8 md:p-12 space-y-8 max-w-lg mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-repeating-zigzag bg-[#6B4A34]"></div>
            
            <div className="text-center space-y-3 pt-4">
              <div className="w-11 h-11 bg-[#2C3B2E] rounded-full flex items-center justify-center mx-auto shadow-sm">
                <Check className="text-[#F0EAD6]" size={22} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold tracking-wide text-[#2C3B2E]">ORDER PLACED SUCCESSFULLY</h3>
              <p className="text-xs font-sans text-[#22201D]/70 uppercase tracking-widest">
                Order ID: {orderConfirmation.id}
              </p>
            </div>

            <div className="border-t border-b border-[#B08D57]/20 py-6 space-y-4 font-serif text-xs">
              <div className="space-y-3">
                <p className="text-[10px] uppercase font-bold tracking-wider text-[#6B4A34]">Purchased Provisions</p>
                {orderConfirmation.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-baseline font-serif">
                    <span className="text-[#2C3B2E] font-medium max-w-[70%]">
                      {item.product.name} {item.selectedSize && `(${item.selectedSize})`} <span className="font-sans text-[10px] text-[#22201D]/60 font-bold">x {item.quantity}</span>
                    </span>
                    <span className="text-[#6B4A34] font-semibold">₹{item.product.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#B08D57]/10 pt-4 space-y-2">
                <p className="text-[10px] uppercase font-bold tracking-wider text-[#6B4A34]">Shipping Destinies</p>
                <p className="text-[#22201D] font-medium">{orderConfirmation.name}</p>
                <p className="text-[#22201D]/70">{orderConfirmation.address}</p>
              </div>

              <div className="flex justify-between border-t border-dashed border-[#B08D57]/30 pt-4">
                <span className="font-bold text-[#2C3B2E] uppercase text-[11px]">Total Transacted</span>
                <span className="font-extrabold text-base text-[#2C3B2E]">₹{orderConfirmation.subtotal}</span>
              </div>
            </div>

            <div className="text-center pt-2 space-y-4">
              <p className="text-[11px] text-[#22201D]/60 leading-relaxed font-sans max-w-xs mx-auto">
                Thank you for supporting the clubhouse craft. Your physical gear is being prepared by our outfitters and will ship within 48 hours.
              </p>
              <button
                id="order-done-btn"
                onClick={() => setOrderConfirmation(null)}
                className="w-full py-3 border border-[#2C3B2E] text-xs font-semibold tracking-widest uppercase text-[#F0EAD6] bg-[#2C3B2E] hover:bg-transparent hover:text-[#2C3B2E] transition-colors cursor-pointer"
              >
                Return to Store
              </button>
            </div>
          </div>
        ) : (
          /* 1. Product Grid */
          <div id="products-grid" className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="group flex flex-col h-full bg-[#F0EAD6] border border-[#B08D57]/20 p-4 transition-all duration-300 hover:border-[#6B4A34]"
              >
                {/* Image Frame */}
                <div
                  onClick={() => {
                    setSelectedProduct(product);
                    setDetailQty(1);
                    if (product.sizes) setDetailSize(product.sizes[0]);
                  }}
                  className="relative aspect-square overflow-hidden border border-[#B08D57]/15 bg-[#ECE5D0] cursor-pointer mb-4"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#2C3B2E]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Details */}
                <div className="flex flex-col flex-grow space-y-2 text-center">
                  <span className="text-[9px] uppercase tracking-widest text-[#B08D57] font-semibold font-sans">
                    {product.category}
                  </span>
                  <h4
                    onClick={() => {
                      setSelectedProduct(product);
                      setDetailQty(1);
                      if (product.sizes) setDetailSize(product.sizes[0]);
                    }}
                    className="text-sm font-semibold text-[#2C3B2E] group-hover:text-[#6B4A34] transition-colors cursor-pointer leading-tight"
                  >
                    {product.name}
                  </h4>
                  <p className="text-xs font-sans font-bold text-[#6B4A34] mt-auto">
                    ₹{product.price.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. Product Detail Modal/Drawer */}
        {selectedProduct && (
          <div id="detail-modal-overlay" className="fixed inset-0 bg-[#22201D]/70 z-50 flex items-center justify-center p-4">
            <div id="detail-modal" className="bg-[#F0EAD6] border border-[#B08D57]/30 max-w-2xl w-full p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 shadow-xl relative animate-fade-in">
              <button
                id="close-detail-btn"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-[#22201D]/60 hover:text-[#2C3B2E] text-xl font-bold focus:outline-none cursor-pointer"
              >
                ✕
              </button>

              {/* Detail Image */}
              <div className="md:col-span-5 aspect-square border border-[#B08D57]/20 bg-[#ECE5D0] overflow-hidden">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Detail Details */}
              <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#B08D57] font-bold font-sans">
                    {selectedProduct.category}
                  </span>
                  <h3 className="text-xl md:text-2xl text-[#2C3B2E] font-bold tracking-wide">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-sm font-sans font-bold text-[#6B4A34] text-lg">
                    ₹{selectedProduct.price.toLocaleString('en-IN')}
                  </p>
                  <p className="text-xs leading-relaxed text-[#22201D]/80 font-sans pr-2">
                    {selectedProduct.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-[#B08D57]/15">
                  {/* Size Selector for apparel */}
                  {selectedProduct.sizes && (
                    <div className="space-y-1.5">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#6B4A34]">
                        Select Fit (Size)
                      </span>
                      <div className="flex space-x-2">
                        {selectedProduct.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setDetailSize(size)}
                            className={`w-9 h-9 border text-xs font-sans font-bold flex items-center justify-center transition-all ${
                              detailSize === size
                                ? 'border-[#2C3B2E] bg-[#2C3B2E] text-[#F0EAD6]'
                                : 'border-[#B08D57]/20 text-[#22201D]/75 hover:border-[#2C3B2E]'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quantity Selector */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#6B4A34]">
                      Quantity
                    </span>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => setDetailQty(Math.max(1, detailQty - 1))}
                        className="w-8 h-8 border border-[#B08D57]/20 flex items-center justify-center text-[#22201D]/70 hover:border-[#2C3B2E] transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-sans text-sm font-bold text-[#2C3B2E]">{detailQty}</span>
                      <button
                        onClick={() => setDetailQty(detailQty + 1)}
                        className="w-8 h-8 border border-[#B08D57]/20 flex items-center justify-center text-[#22201D]/70 hover:border-[#2C3B2E] transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    id="add-to-cart-btn"
                    onClick={() => {
                      addToCart(selectedProduct, selectedProduct.sizes ? detailSize : undefined, detailQty);
                      setSelectedProduct(null);
                    }}
                    className="w-full py-3.5 border border-[#2C3B2E] text-xs font-semibold tracking-[0.25em] uppercase text-[#F0EAD6] bg-[#2C3B2E] hover:bg-transparent hover:text-[#2C3B2E] transition-colors cursor-pointer"
                  >
                    ADD TO BAG
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3 & 4. Cart Drawer Overlay */}
        {isCartOpen && (
          <div id="cart-drawer-overlay" className="fixed inset-0 bg-[#22201D]/70 z-50 flex justify-end">
            <div id="cart-drawer" className="bg-[#F0EAD6] border-l border-[#B08D57]/25 w-full max-w-md h-full flex flex-col shadow-2xl relative animate-slide-left">
              
              {/* Drawer Header */}
              <div className="p-6 border-b border-[#B08D57]/20 flex justify-between items-center bg-[#ECE5D0]">
                <div className="flex items-center space-x-2">
                  <ShoppingBag size={18} className="text-[#2C3B2E]" />
                  <h3 className="text-sm font-bold tracking-widest text-[#2C3B2E] uppercase">YOUR BAG</h3>
                  {cart.length > 0 && (
                    <span className="text-[10px] font-sans font-bold bg-[#6B4A34] text-[#F0EAD6] px-1.5 py-0.5 rounded-full">
                      {cart.reduce((s, i) => s + i.quantity, 0)}
                    </span>
                  )}
                </div>
                <button
                  id="close-cart-drawer"
                  onClick={() => setIsCartOpen(false)}
                  className="text-[#22201D]/60 hover:text-[#2C3B2E] focus:outline-none cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-grow overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="text-center py-20 space-y-4">
                    <p className="italic text-sm text-[#22201D]/60">Your outfit bag is currently empty.</p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="text-xs tracking-wider uppercase border-b border-[#2C3B2E] pb-0.5 font-bold"
                    >
                      BROWSE GEAR →
                    </button>
                  </div>
                ) : (
                  <div className="divide-y divide-[#B08D57]/15">
                    {cart.map((item, idx) => (
                      <div key={idx} className="flex space-x-4 py-4 first:pt-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-16 h-16 object-cover border border-[#B08D57]/15 bg-[#ECE5D0]"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-grow flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start">
                              <h4 className="text-xs font-semibold text-[#2C3B2E] leading-snug">
                                {item.product.name}
                              </h4>
                              <button
                                onClick={() => removeFromCart(idx)}
                                className="text-[#22201D]/40 hover:text-[#2C3B2E] text-[10px] uppercase tracking-wider font-semibold"
                              >
                                Remove
                              </button>
                            </div>
                            {item.selectedSize && (
                              <p className="text-[10px] text-[#6B4A34] tracking-wider uppercase">
                                Fit: {item.selectedSize}
                              </p>
                            )}
                          </div>

                          <div className="flex justify-between items-center pt-2">
                            <div className="flex items-center space-x-2 border border-[#B08D57]/20 p-1 bg-[#F0EAD6]">
                              <button
                                onClick={() => updateQuantity(idx, -1)}
                                className="text-neutral-500 hover:text-[#2C3B2E]"
                              >
                                <Minus size={10} />
                              </button>
                              <span className="font-sans text-xs font-bold text-[#2C3B2E] px-1">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(idx, 1)}
                                className="text-neutral-500 hover:text-[#2C3B2E]"
                              >
                                <Plus size={10} />
                              </button>
                            </div>
                            <span className="text-xs font-sans font-bold text-[#6B4A34]">
                              ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Drawer Footer (Subtotal and Checkout Action) */}
              {cart.length > 0 && (
                <div className="p-6 bg-[#ECE5D0] border-t border-[#B08D57]/20 space-y-4">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#2C3B2E]">SUBTOTAL</span>
                    <span className="text-base font-sans font-bold text-[#6B4A34]">
                      ₹{subtotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <p className="text-[10px] text-[#22201D]/60 font-sans leading-tight">
                    Shipping and packaging are curated in-house. Taxes calculated at settlement.
                  </p>
                  <button
                    id="merch-checkout-btn"
                    onClick={() => setIsCheckoutOpen(true)}
                    className="w-full py-3.5 border border-[#2C3B2E] text-xs font-semibold tracking-[0.25em] uppercase text-[#F0EAD6] bg-[#2C3B2E] hover:bg-transparent hover:text-[#2C3B2E] transition-colors cursor-pointer"
                  >
                    PROCEED TO CHECKOUT
                  </button>
                </div>
              )}

            </div>
          </div>
        )}

        {/* 5. Mock Checkout Form Modal */}
        {isCheckoutOpen && (
          <div id="checkout-modal-overlay" className="fixed inset-0 bg-[#22201D]/70 z-50 flex items-center justify-center p-4">
            <div id="checkout-modal" className="bg-[#F0EAD6] border border-[#B08D57]/30 max-w-md w-full p-8 space-y-6 shadow-xl relative animate-fade-in">
              
              <div className="flex justify-between items-start border-b border-[#B08D57]/20 pb-4">
                <div>
                  <span className="text-[9px] tracking-widest text-[#B08D57] uppercase font-bold block">
                    THE COMMERCE GATHER
                  </span>
                  <h3 className="text-lg font-bold text-[#2C3B2E]">PROVISIONS SETTLEMENT</h3>
                </div>
                <button
                  id="close-checkout"
                  onClick={() => setIsCheckoutOpen(false)}
                  className="text-[#22201D]/60 hover:text-[#2C3B2E] text-xl font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Subtotal summary */}
              <div className="p-3 bg-[#ECE5D0] border border-[#B08D57]/15 flex justify-between items-center text-xs font-serif text-[#2C3B2E]">
                <span>Total Due:</span>
                <span className="font-bold font-sans text-sm">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>

              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                
                <div className="space-y-3 font-serif">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#6B4A34] font-semibold mb-1">
                      Recipient Name
                    </label>
                    <input
                      id="shipping-name"
                      type="text"
                      required
                      placeholder="e.g. Vikram Seth"
                      value={shippingName}
                      onChange={(e) => setShippingName(e.target.value)}
                      className="w-full px-4 py-2 border border-[#B08D57]/30 bg-[#F0EAD6] text-[#22201D] text-xs focus:outline-none focus:border-[#2C3B2E]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#6B4A34] font-semibold mb-1">
                      Shipping Address
                    </label>
                    <textarea
                      id="shipping-address"
                      required
                      rows={3}
                      placeholder="Enter full physical address for delivery"
                      value={shippingAddress}
                      onChange={(e) => setShippingAddress(e.target.value)}
                      className="w-full px-4 py-2 border border-[#B08D57]/30 bg-[#F0EAD6] text-[#22201D] text-xs focus:outline-none focus:border-[#2C3B2E] font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#6B4A34] font-semibold mb-1">
                      Phone Number
                    </label>
                    <input
                      id="shipping-phone"
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={shippingPhone}
                      onChange={(e) => setShippingPhone(e.target.value)}
                      className="w-full px-4 py-2 border border-[#B08D57]/30 bg-[#F0EAD6] text-[#22201D] text-xs focus:outline-none focus:border-[#2C3B2E] font-sans"
                    />
                  </div>
                </div>

                <div className="pt-4 flex space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsCheckoutOpen(false)}
                    className="flex-1 py-2.5 border border-[#B08D57]/30 text-xs tracking-wider uppercase text-[#22201D]/60 hover:text-[#22201D] transition-colors cursor-pointer"
                  >
                    Back to Bag
                  </button>
                  <button
                    type="submit"
                    id="checkout-pay-btn"
                    className="flex-1 py-2.5 border border-[#2C3B2E] bg-[#2C3B2E] text-xs font-semibold tracking-wider uppercase text-[#F0EAD6] hover:bg-transparent hover:text-[#2C3B2E] transition-colors cursor-pointer"
                  >
                    PAY NOW (MOCK)
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
