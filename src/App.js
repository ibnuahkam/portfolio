import React, { useState,useEffect } from 'react';
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
import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.title = 'Ibnu - Portfolio'; // Ganti dengan title yang Anda inginkan
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="w-full p-4 text-white flex justify-between items-center bg-gradient-to-r from-blue-500 via-teal-500 to-cyan-500 fixed top-0 z-50" style={{ backgroundColor: '#0EB8AC' }}>
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:underline text-white">Home</a></li>
            <li><a href="#projects" className="hover:underline text-white">Projects</a></li>
            <li><a href="#about" className="hover:underline text-white">About</a></li>
            <li><a href="#contact" className="hover:underline text-white">Contact</a></li>
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
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
