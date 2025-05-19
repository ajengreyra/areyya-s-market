'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../components/Cart';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const { addItem } = useCart();
  const router = useRouter();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(setProducts)
      .catch((err) => console.error("Gagal mengambil data produk:", err));
  }, []);

  const handleAddToCart = (product) => {
    addItem({
      id: product.id,
      name: product.title,
      price: product.price,
      quantity: 1
    });
    alert(`${product.title} telah ditambahkan ke keranjang.`);
  };

  const goToCart = () => {
    router.push('/Cart');
  };

  return (
    <div className="p-4 bg-white min-h-screen">
      <div className="flex justify-between items-center mb-6 flex-col sm:flex-row gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center sm:text-left">🛍️ Daftar Produk</h1>
        <button
          onClick={goToCart}
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
        >
          Lihat Keranjang
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-gray-50 p-4 rounded-xl shadow hover:shadow-md transition duration-200">
            <img src={product.image} alt={product.title} className="h-36 w-full object-contain mb-3" />
            <h2 className="text-md font-semibold text-gray-700 mb-1 line-clamp-2">{product.title}</h2>
            <p className="text-sm text-gray-500 mb-1 capitalize">{product.category}</p>
            <p className="text-blue-700 font-bold text-lg mb-3">${product.price}</p>
            <button 
              onClick={() => handleAddToCart(product)} 
              className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
            >
              + Tambah ke Keranjang
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
