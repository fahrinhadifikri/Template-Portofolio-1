import React from 'react';
import { useParams } from 'react-router-dom';

export default function WorkDetail() {
  const { projectTitle } = useParams();

  // Ini adalah data yang kamu inginkan untuk tampil di halaman detail
  const projects = [
    {
      id: 1,
      title: "Barcode for Employee's Attendance Web",
      year: "2023",
      category: "Laravel 10",
      description: "Sistem absensi real-time menggunakan QR Code terenkripsi untuk mencegah manipulasi data. Dilengkapi dengan fitur geofencing berbasis koordinat GPS.",
      image: "/Rectangle30.png",
    }
  ];

  // Mencocokkan data berdasarkan parameter URL
  // decodeURIComponent digunakan untuk mengubah "Barcode%20for..." menjadi "Barcode for..."
  const project = projects.find(p => p.title === decodeURIComponent(projectTitle)) || projects[0];

  return (
    <section className="px-6 md:px-14 py-12 max-w-3xl mx-auto">
      {/* Judul dinamis dari data */}
      <h1 className="text-3xl md:text-5xl font-black text-dark mb-8 leading-tight">
        {project.title}
      </h1>

      <div className="flex items-center gap-4 mb-6">
        {/* Badge Tahun menggunakan warna Primary #FF6464 sesuai Figma */}
        <span className="bg-primary text-white px-3 py-0.5 rounded-full font-black text-sm">
          {project.year}
        </span>
        <span className="text-dark text-lg">
          {project.category}
        </span>
      </div>

      <p className="text-dark text-base leading-relaxed mb-10">
        {project.description}
      </p>

      {/* Gambar Utama menggunakan path yang kamu berikan */}
      <div className="rounded-lg overflow-hidden mb-12 shadow-sm">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Konten tambahan tetap mengikuti desain Figma */}
      <div className="prose max-w-none text-dark">
        <h2 className="text-3xl font-bold mb-4">Fitur Tambahan</h2>
        <h3 className="text-2xl font-bold mb-4">User Experience</h3>
        <p className="mb-10 leading-relaxed">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <img src="/Rectangle32.png" alt="Detail 1" className="w-full rounded-lg" />
        <img src="/Rectangle34.png" alt="Detail 2" className="w-full rounded-lg" />
      </div>
    </section>
  );
}