'use client';

import { useState, useEffect, useRef } from 'react';

// Class Cart
class Cart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    const existingItem = this.items.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity || 1;
    } else {
      this.items.push({ ...item, quantity: item.quantity || 1 });
    }
  }

  removeItem(itemId) {
    this.items = this.items.filter(item => item.id !== itemId);
  }

  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  clearCart() {
    this.items = [];
  }

  loadFromLocalStorage() {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('cart');
      this.items = stored ? JSON.parse(stored) : [];
    }
  }

  updateLocalStorage() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(this.items));
    }
  }

  getItems() {
    return this.items;
  }
}

// Hook useCart
export const useCart = () => {
  const cartRef = useRef(null);

  if (!cartRef.current) {
    cartRef.current = new Cart();
    cartRef.current.loadFromLocalStorage();
  }

  const [items, setItems] = useState(cartRef.current.getItems());

  const addItem = (item) => {
    cartRef.current.addItem(item);
    setItems([...cartRef.current.getItems()]);
    cartRef.current.updateLocalStorage();
  };

  const removeItem = (itemId) => {
    cartRef.current.removeItem(itemId);
    setItems([...cartRef.current.getItems()]);
    cartRef.current.updateLocalStorage();
  };

  const calculateTotal = () => cartRef.current.calculateTotal();

  const clearCart = () => {
    cartRef.current.clearCart();
    setItems([]);
    cartRef.current.updateLocalStorage();
  };

  return {
    items,
    addItem,
    removeItem,
    calculateTotal,
    clearCart
  };
};
