import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../foto/profile.png'; // Ganti dengan path gambar profil Anda

const Home = () => {
    const whatsappNumber = '081281186734'; // Ganti dengan nomor WhatsApp Anda (tanpa tanda +)

    return (
        <div className="home min-h-screen flex items-center justify-center text-center bg-gradient-to-r from-blue-500 via-teal-500 to-cyan-500">
            <div className="max-w-4xl mx-auto px-4">
                <motion.img 
                        src={profilePic} 
                        alt="Profile" 
                        className="rounded-full w-40 h-40 mx-auto mb-4 shadow-lg" 
                        style={{ marginTop: "-2rem", border: "1px solid bg-gradient-to-r from-blue-500 via-teal-500 to-cyan-500", objectFit: "cover" }}
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
                        href="/path/to/cv.pdf" 
                        className="bg-blue-500 text-white py-2 px-4 rounded-full mr-4 hover:bg-blue-700 transition duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        target="_blank" rel="noopener noreferrer"
                    >
                        Download CV
                    </motion.a>
                    <motion.a 
                        href={`https://www.linkedin.com/in/ibnu-ahkam-subagio-870024131/`} 
                        className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        target="_blank" rel="noopener noreferrer"
                    >
                        Hire Me
                    </motion.a>
                </div>
            </div>
        </div>
    );
};

export default Home;
