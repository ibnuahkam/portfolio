import React, { useState } from 'react';
import './App.css';
import { motion } from 'framer-motion';
import profilePic from './foto/profile.png'; // Ganti dengan path gambar profil Anda
import swal from 'sweetalert';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './components/Contact';

function App() {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDownload = (e) => {
    e.preventDefault();  // Mencegah aksi default dari tautan
    const pdfHref = e.currentTarget.href;  // Simpan href ke variabel
    swal({
      title: "Do you want to open CV?",
      icon: "info",
      buttons: {
        cancel: "Open CV",
        download: {
          text: "Download CV",
          value: "download",
        },
      },
    }).then((value) => {
      if (value === "download") {
        // Download file
        const link = document.createElement('a');
        link.href = pdfHref;
        link.setAttribute('download', '');
        document.body.appendChild(link);
        link.click();
        link.remove();
      } else {
        // Buka di tab baru
        window.open(pdfHref, "_blank");
      }
    });
  };

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
          <div className="max-w-4xl mx-auto px-4">
            <motion.img
              src={profilePic}
              alt="Profile"
              className="rounded-full w-40 h-40 mx-auto mb-4 shadow-lg"
              style={{ border: "4px solid #fff", objectFit: "cover" }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />

            <motion.h1
              className="text-4xl font-bold mb-2 text-white"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              IBNU AHKAM SUBAGIO
            </motion.h1>
            <motion.p
              className="text-lg mt-2 text-white"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              I am a programmer.
            </motion.p>
            <div className="mt-6">
              <motion.a
                href="/ibnu-CV.pdf"
                className="bg-blue-500 text-white py-2 px-4 rounded-full mr-4 hover:bg-blue-700 transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleDownload}
                rel="noopener noreferrer"
              >
                Open CV
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ibnu-ahkam-subagio-870024131/"
                className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                target="_blank" rel="noopener noreferrer"
              >
                Hire Me
              </motion.a>
            </div>
          </div>
        </section>

     {/* Projects Section */}
      <section id="projects" className="w-full px-4 my-8">
          <div className="projects bg-gray-100 min-h-screen p-10">
            <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Portfolio Project</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                <a href="https://github.com/ibnuahkam/portfolio" target="_blank" rel="noopener noreferrer">
                  <img src="/portfolio.jpeg" alt="Project Portfolio" className="w-full h-60 object-cover" />
                </a>
                <div className="p-6">
                  <h2 className="text-3xl font-semibold mb-2 text-gray-800">Project Portfolio</h2>
                  <p className="text-gray-600">Tools: React JS, Tailwind CSS</p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                <img src="/path/to/your/image2.jpg" alt="Project 2" className="w-full h-60 object-cover" />
                <div className="p-6">
                  <h2 className="text-3xl font-semibold mb-2 text-gray-800">Project 2</h2>
                  <p className="text-gray-600">Description of project 2.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                <img src="/path/to/your/image3.jpg" alt="Project 3" className="w-full h-60 object-cover" />
                <div className="p-6">
                  <h2 className="text-3xl font-semibold mb-2 text-gray-800">Project 3</h2>
                  <p className="text-gray-600">Description of project 3.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

     {/* About Section */}
    <section id="about" className="w-full px-4 py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img src="/corak.png" alt="Background" className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
          <div className="relative p-8 text-center text-white">
            <h1 className="text-5xl font-extrabold mb-6">About Me</h1>
            <p className="text-lg mb-6">
              Hello! Let me introduce myself, I am a programmer with experience since 2017 in the world of software development. I am very enthusiastic about creating creative and useful digital solutions for users. Here is a brief overview of my journey in the world of technology:
            </p>
          </div>
        </div>
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-gray-800">Professional Experience</h2>
              <p className="text-gray-700">
                Since entering the world of programming in 2017, I have focused on developing various types of applications, especially in the web and mobile fields. Every project I work on is an opportunity to learn and develop new skills, as well as explore the latest technologies.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-gray-800">Skills</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Web Development: Have experience in building frontend and backend using various technologies such as React.js, Laravel, and Express.js.</li>
                <li>Mobile Application Development: I have developed mobile applications using Ionic Framework and Flutter (Basic), providing a responsive and intuitive user experience.</li>
                <li>Database and Server: Using MySQL database.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-gray-800">Programming Philosophy</h2>
              <p className="text-gray-700">
                I believe that programming is not just about writing code, but also about solving problems and adding value to users. Every project is an opportunity to create better experiences through technology.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-gray-800">My Vision</h2>
              <p className="text-gray-700">
                With the experience and knowledge that I have, I am committed to continuing to develop and innovate in the world of technology. My goal is to get involved in challenging, high-impact projects and be an active contributor in the developer community.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-64 h-64 bg-gray-200">
          <div className="w-full h-full overflow-hidden rounded-full">
            <img src="/logo.svg" alt="Profile" className="w-full h-full object-contain" />
          </div>
        </div>

        </div>
        <div className="p-8 text-center">
          <p className="text-lg text-gray-700">
            Thank you for visiting my About page. I am very excited to share my journey and passion in the world of technology with you.
          </p>
        </div>
      </div>
    </section>

        {/* Contact Section */}
        <section id="contact" className="w-full max-w-4xl px-4 my-8 text-center">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 p-4 text-white text-center" style={{ backgroundColor: '#1F2937' }}>
        <p>&copy; 2024 Ibnu Ahkam. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
