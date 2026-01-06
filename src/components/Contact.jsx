import React from 'react';

export default function Contact() {
  return (
    <section className="px-6 md:px-14 py-12 max-w-3xl mx-auto">
      {/* Judul Halaman sesuai tipografi Blog/Works */}
      <h1 className="text-4xl font-black text-dark mb-12 tracking-tight">Contact Me</h1>
      
      <div className="bg-white">
        <p className="text-dark text-lg mb-8 leading-relaxed">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>

        <form className="flex flex-col gap-6">
          {/* Input Name */}
          <div className="flex flex-col gap-2">
            <label className="font-bold text-dark">Full Name</label>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="border-b-2 border-gray-5 py-2 focus:border-primary outline-none transition-colors"
            />
          </div>

          {/* Input Email */}
          <div className="flex flex-col gap-2">
            <label className="font-bold text-dark">Email Address</label>
            <input 
              type="email" 
              placeholder="email@example.com" 
              className="border-b-2 border-gray-5 py-2 focus:border-primary outline-none transition-colors"
            />
          </div>

          {/* Input Message */}
          <div className="flex flex-col gap-2">
            <label className="font-bold text-dark">Message</label>
            <textarea 
              rows="4" 
              placeholder="Tell me about your project" 
              className="border-b-2 border-gray-5 py-2 focus:border-primary outline-none transition-colors resize-none"
            ></textarea>
          </div>

          {/* Tombol Kirim menggunakan warna Primary #FF6464 */}
          <button 
            type="submit" 
            className="bg-primary text-white font-bold py-3 px-8 rounded-sm w-fit mt-4 hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}