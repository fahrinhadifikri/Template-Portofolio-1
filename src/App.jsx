import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RecentPosts from "./components/RecentPosts";
import FeaturedWorks from "./components/FeaturedWorks";
import Blog from "./components/Blog";
import Works from "./components/Works";
import WorkDetail from "./components/WorkDetail";
import Contact from "./components/Contact";
import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

// Kita buat komponen Home untuk mengelompokkan section Hero, Recent, dan Works
const Home = () => (
  <>
    <Hero />
    <RecentPosts />
    <FeaturedWorks />
  </>
);

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-white">
      <Navbar />
      
      {/* Area konten yang akan berganti-ganti */}
      <main className="max-w-5xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works/:projectTitle" element={<WorkDetail />} />
        </Routes>
      </main>
      
      <footer className="py-12 flex flex-col items-center gap-6">
        <div className="flex gap-8 text-3xl text-dark">
          <a href="#"><FaFacebookSquare /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
        <p className="text-sm text-dark font-medium">Copyright ©2026 All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;