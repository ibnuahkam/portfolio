import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-blue-500 via-teal-500 to-cyan-500 shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo dan Nama */}
                    <div className="flex items-center">
                        <Link to="/" className="text-white text-xl font-bold flex items-center space-x-2">
                            <span className="shadow-md rounded-md p-2 bg-gray-900">
                                <svg
                                    className="h-6 w-6 text-gray-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </span>
                            <span>Ibnu Ahkam</span>
                        </Link>
                    </div>

                    {/* Tombol Hamburger untuk Mobile */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            {isOpen ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex space-x-4">
                        <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                        <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
                        <Link to="/projects" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</Link>
                        <Link to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                    </div>
                </div>
            </div>
            
            {/* Menu Mobile */}
            {isOpen && (
                <div className="md:hidden bg-gray-800 text-white space-y-2 py-2">
                    <Link to="/" className="block px-4 py-2 hover:bg-gray-700">Home</Link>
                    <Link to="/about" className="block px-4 py-2 hover:bg-gray-700">About</Link>
                    <Link to="/projects" className="block px-4 py-2 hover:bg-gray-700">Projects</Link>
                    <Link to="/contact" className="block px-4 py-2 hover:bg-gray-700">Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
