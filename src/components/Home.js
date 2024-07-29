import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../foto/profile.png'; // Ganti dengan path gambar profil Anda
import swal from 'sweetalert';

const Home = () => {
    const handleDownload = (e) => {
        e.preventDefault();  // Mencegah aksi default dari tautan
        const pdfHref = e.currentTarget.href;  // Simpan href ke variabel
        swal({
        title: "Do you want to open CV ?",
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
    );
};

export default Home;
