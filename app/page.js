// app/selamat-datang/page.js

'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const SelamatDatang = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        router.push('/products');
      }, 2000);
    }
  }, [router]);

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '50px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#fff0f5', // latar belakang pink pastel
        padding: '20px',
        minHeight: '100vh',
      }}
    >
      <h1
        style={{
          fontSize: '36px',
          color: '#f6a5c0', // judul pink pastel
          fontWeight: 'bold',
        }}
      >
        Selamat Datang di Toko Kami!
      </h1>
      <p
        style={{
          fontSize: '18px',
          color: '#e89bb5', // teks deskripsi pink pastel
          maxWidth: '600px',
          margin: '20px auto',
        }}
      >
        Terima kasih telah mengunjungi toko kami. Kami dengan senang hati siap membantu Anda
        menemukan produk dan layanan terbaik yang kami tawarkan. Jelajahi kategori kami dan
        temukan penawaran menarik yang sudah kami siapkan untuk Anda!
      </p>
      <div
        style={{
          marginTop: '40px',
          color: '#e28fb1', // warna teks info pink pastel
          fontSize: '20px',
        }}
      >
        <p>Anda akan segera diarahkan ke halaman produk dalam beberapa detik...</p>
        <div
          style={{
            border: '4px solid #f8c8dc', // border loader pink pastel
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            margin: '0 auto',
            animation: 'spin 2s infinite linear',
            borderTop: '4px solid #f6a5c0', // variasi warna pada sisi atas untuk efek animasi
          }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default SelamatDatang;
