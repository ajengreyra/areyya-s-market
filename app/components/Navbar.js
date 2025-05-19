'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-10">
      <Link href="/" className="text-2xl font-bold text-pink-600 hover:text-pink-700">
        🌸 Arreya's Market
      </Link>
      <div className="space-x-4">
        <Link href="/" className="text-gray-700 hover:text-pink-500 transition">
          Home
        </Link>
        <Link href="/products" className="text-gray-700 hover:text-pink-500 transition">
          📦 Products
        </Link>
        <Link href="/Cart" className="text-gray-700 hover:text-pink-500 transition">
          🛒 Cart
        </Link>
      </div>
    </nav>
  );
}
