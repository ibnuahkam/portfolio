import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white py-8">
            <div className="container mx-auto flex flex-col items-center justify-center md:flex-row md:justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                    <h2 className="text-xl font-bold text-white">Ibnu Ahkam</h2>
                </div>
                <div className="flex space-x-4">
                    <a href="/" className="text-gray-300 hover:text-white">Home</a>
                    <a href="/about" className="text-gray-300 hover:text-white">About</a>
                    <a href="/projects" className="text-gray-300 hover:text-white">Projects</a>
                    <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
                </div>
            </div>
            <div className="container mx-auto flex flex-col items-center justify-center md:flex-row md:justify-between">
                <p className="text-gray-300">&copy; 2024 Ibnu Ahkam. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
