import React from 'react';
import { Link } from "react-router-dom";

export default function FeaturedWorks() {
  // Data disesuaikan persis dengan teks di Figma kamu
  const projects = [
    {
      id: 1,
      title: "Barcode for Employee's Attendance Web",
      year: "2023",
      category: "Laravel 10",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      image: "/public/Rectangle 30.png", // Path menuju folder public
    },
    {
      id: 2,
      title: "Online Marketplace Web & SEO",
      year: "2024",
      category: "Laravel 10 & SEO",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      image: "/public/Rectangle 32.png",
    },
    {
      id: 3,
      title: "Company Profile with Laravel & React.js",
      year: "2024",
      category: "Laravel 11 & React.js",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      image: "/public/Rectangle 34.png",
    },
  ];

  return (
    <section className="px-6 md:px-14 py-12 max-w-5xl mx-auto">
      <h3 className="text-xl text-dark mb-8">Featured works</h3>
      
      <div className="flex flex-col gap-12">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="flex flex-col md:flex-row gap-6 border-b border-gray-5 pb-10 last:border-none"
          >
            {/* Bagian Gambar */}
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden bg-gray-100 md:aspect-auto">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  // Fallback jika gambar belum ada
                  onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=Upload+to+Public+Folder" }}
                />
              </div>
            </div>
            
            {/* Bagian Teks */}
            <div className="md:w-2/3 flex flex-col justify-start">
              <h4 className="text-2xl md:text-3xl font-bold text-dark mb-4 leading-tight">
                {project.title}
              </h4>
              
              <div className="flex items-center gap-4 mb-5">
                <span className="bg-dark-blue text-white px-4 py-0.5 rounded-full font-black text-sm uppercase tracking-wider">
                  {project.year}
                </span>
                <span className="text-light text-lg">
                  {project.category}
                </span>
              </div>
              
              <p className="text-dark text-base md:text-lg leading-relaxed opacity-90">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}