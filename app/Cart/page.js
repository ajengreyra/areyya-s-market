'use client';

import { useCart } from '../components/Cart'; // Pastikan path benar
import { useState } from 'react';

const CartPage = () => {
  const { items, removeItem, calculateTotal, clearCart } = useCart();
  const [isPaid, setIsPaid] = useState(false);

  const handlePayment = () => {
    if (items.length === 0) {
      alert('Keranjang kosong!');
      return;
    }
    setIsPaid(true);
    clearCart();
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">🛒 Keranjang Belanja</h1>

      {isPaid ? (
        <div className="text-center mt-10">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">✅ Pembayaran Berhasil</h2>
          <p className="text-gray-700">Terima kasih telah berbelanja di toko kami!</p>
        </div>
      ) : items.length === 0 ? (
        <p className="text-center text-gray-600">Keranjang Anda kosong.</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map(item => (
              <div key={item.id} className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">Harga: ${item.price}</p>
                <p className="text-sm text-gray-600">Jumlah: {item.quantity}</p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="mt-2 bg-red-600 text-white py-1 px-2 rounded hover:bg-red-700"
                >
                  Hapus
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="text-xl font-semibold">Total: ${calculateTotal().toFixed(2)}</p>
            <button
              onClick={clearCart}
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Bersihkan Keranjang
            </button>
            <button
              onClick={handlePayment}
              className="mt-4 ml-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
            >
              Bayar Sekarang
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
