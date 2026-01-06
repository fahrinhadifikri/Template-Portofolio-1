import React from 'react';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Optimasi Query Database pada Aplikasi Laravel 11",
      date: "05 Jan 2026",
      category: "Backend Development",
      description: "Menghadapi masalah performa pada aplikasi web seringkali berakar pada query database yang tidak efisien. Dalam tulisan ini, saya membagikan teknik Eager Loading untuk mengatasi masalah N+1 query, serta bagaimana penggunaan Indexing yang tepat dapat mempercepat waktu respon API hingga 70%."
    },
    {
      id: 2,
      title: "Integrasi React.js dengan Tailwind CSS v4: Apa yang Berubah?",
      date: "02 Jan 2026",
      category: "Frontend Development",
      description: "Tailwind CSS v4 membawa perubahan besar dalam cara kita mendefinisikan tema dan variabel. Tidak ada lagi file konfigurasi JS yang rumit; kini semuanya berbasis CSS variabel. Saya merangkum langkah-langkah migrasi tercepat agar workflow styling kamu tetap efisien di tahun 2026."
    },
    {
      id: 3,
      title: "Membangun Sistem Absensi Berbasis QR Code",
      date: "28 Des 2025",
      category: "Fullstack Project",
      description: "Bagaimana cara memastikan keamanan data saat melakukan scan barcode? Proyek ini membahas implementasi JWT (JSON Web Token) dan enkripsi data real-time untuk sistem absensi karyawan. Saya juga membahas tantangan dalam menangani akurasi koordinat GPS saat proses check-in dilakukan."
    },
    {
      id: 4,
      title: "Pentingnya Desain Responsif dalam UI/UX Modern",
      date: "15 Des 2025",
      category: "Design System",
      description: "Desain bukan hanya tentang estetika, tapi tentang kegunaan di berbagai perangkat. Mengambil referensi dari proyek marketplace saya sebelumnya, saya menjelaskan mengapa pendekatan Mobile-First sangat krusial dan bagaimana mengimplementasikan grid sistem yang fleksibel menggunakan CSS Grid dan Flexbox."
    }
  ];

  return (
    <section className="px-6 md:px-14 py-12 max-w-3xl mx-auto">
      {/* Judul Halaman */}
      <h1 className="text-4xl font-black text-dark mb-12 tracking-tight">Blog</h1>
      
      <div className="flex flex-col">
        {posts.map((post) => (
          <div key={post.id} className="border-b border-gray-5 py-10 last:border-none group">
            {/* Judul Post dengan efek hover sesuai Figma */}
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4 group-hover:text-primary transition-colors duration-300 cursor-pointer">
              {post.title}
            </h2>
            
            {/* Meta Data: Tanggal dan Kategori */}
            <div className="flex items-center gap-4 mb-5 text-lg">
              <span className="text-dark font-medium">{post.date}</span>
              <span className="text-light">|</span>
              <span className="text-light italic">{post.category}</span>
            </div>
            
            {/* Deskripsi Detail */}
            <p className="text-dark leading-relaxed text-base md:text-lg opacity-85">
              {post.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}