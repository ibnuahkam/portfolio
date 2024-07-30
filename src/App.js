import React, { useState, useEffect } from 'react';
import './App.css';
import { motion } from 'framer-motion';
import profilePic from './foto/profile.png'; // Ganti dengan path gambar profil Anda
import swal from 'sweetalert';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import Home from './components/Home';
import Footer from './components/Footer';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink dari react-scroll
import BackToTop from './components/BackToTop';
import './components/BackToTop.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Nama item dalam localStorage
    const localStorageKey = 'visitorCount';

    // Ambil data dari localStorage
    let storedCount = localStorage.getItem(localStorageKey);

    // Jika tidak ada data di localStorage, inisialisasi dengan 0
    if (storedCount === null) {
      storedCount = 0;
    }

    // Konversi string ke integer
    storedCount = parseInt(storedCount, 10);

    // Cek apakah pengunjung baru
    if (!localStorage.getItem('hasVisited')) {
      // Jika pengunjung baru, tambahkan count
      storedCount += 1;
      localStorage.setItem(localStorageKey, storedCount);
      localStorage.setItem('hasVisited', 'true');
    }

    // Update state dengan count terbaru
    setVisitorCount(storedCount);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <BackToTop />
      {/* Header */}
      <header className="w-full p-4 text-white flex justify-between items-center bg-gradient-to-r from-blue-500 via-teal-500 to-cyan-500 fixed top-0 z-50" style={{ backgroundColor: '#0EB8AC' }}>
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:underline hover:text-teal-300 text-white transition duration-300 ease-in-out transform hover:scale-105"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:underline hover:text-teal-300 text-white transition duration-300 ease-in-out transform hover:scale-105"
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:underline hover:text-teal-300 text-white transition duration-300 ease-in-out transform hover:scale-105"
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:underline hover:text-teal-300 text-white transition duration-300 ease-in-out transform hover:scale-105"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center mt-16">
        {/* Hero Section */}
        <section id="home" className="text-center w-full bg-gradient-to-r from-blue-500 via-teal-500 to-cyan-500 py-20" style={{ backgroundColor: '#1F2937' }}>
          <Home />
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full px-4 my-8">
          <Projects />
        </section>

        {/* About Section */}
        <section id="about" className="w-full px-4 py-16 bg-gray-50">
          <About />
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full max-w-4xl px-4 my-8 text-center">
          <Contact />
        </section>

        {/* Visitor Counter Card */}
        <section id="visitor-counter" className="w-full max-w-md mx-auto my-8 p-6 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-2xl font-bold text-white mb-4">Visitor Count</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-4xl font-semibold text-gray-800">{visitorCount}</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
