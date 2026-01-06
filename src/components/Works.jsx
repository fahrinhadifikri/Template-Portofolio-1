import React from 'react';
import { Link } from "react-router-dom";

export default function Works() {
  const allWorks = [
    {
      id: 1,
      title: "Barcode for Employee's Attendance Web",
      year: "2023",
      category: "Laravel 10",
      description: "Sistem absensi real-time menggunakan QR Code terenkripsi untuk mencegah manipulasi data. Dilengkapi dengan fitur geofencing berbasis koordinat GPS.",
      image: "/Rectangle 30.png",
    },
    {
      id: 2,
      title: "Online Marketplace Web & SEO",
      year: "2024",
      category: "Laravel 10 & SEO",
      description: "Pengembangan platform e-commerce dengan optimasi SEO on-page yang mendalam, menghasilkan peningkatan trafik organik sebesar 40% dalam 3 bulan pertama.",
      image: "/Rectangle 32.png",
    },
    {
      id: 3,
      title: "Company Profile with Laravel & React.js",
      year: "2024",
      category: "Laravel 11 & React.js",
      description: "Website profil perusahaan modern dengan integrasi headless CMS. Menggunakan React untuk frontend yang interaktif dan Laravel sebagai API backend.",
      image: "/Rectangle 34.png",
    }
  ];

  return (
    <section className="px-6 md:px-14 py-12 max-w-5xl mx-auto">
      {/* Judul Halaman Sesuai Desain Figma */}
      <h1 className="text-4xl font-black text-dark mb-12">Work</h1>
      
      <div className="flex flex-col gap-10">
        {allWorks.map((work) => (
          <div key={work.id} className="flex flex-col md:flex-row gap-8 border-b border-gray-5 pb-10">
            {/* Thumbnail Proyek */}
            <div className="md:w-[246px] shrink-0">
              <div className="rounded-md overflow-hidden bg-gray-100 aspect-video md:aspect-auto">
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Detail Proyek */}
            <div className="flex flex-col justify-start">
            <h2 className="text-2xl font-bold text-dark mb-4 hover:text-primary transition">
            <Link to={`/works/${encodeURIComponent(work.title)}`}>
                {work.title}
            </Link>
            </h2>
              <div className="flex items-center gap-5 mb-5">
                <span className="bg-dark-blue text-white px-4 py-0.5 rounded-full font-black text-sm">
                  {work.year}
                </span>
                <span className="text-light text-lg">
                  {work.category}
                </span>
              </div>
              
              <p className="text-dark leading-relaxed opacity-90">
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}