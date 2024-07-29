import React, { useState } from 'react';

const Portfolio = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    // Array of image objects with description
    const images = [
        { src: '/portfolio.jpeg', description: 'Portfolio project using React and Tailwind CSS' },
        { src: '/wfm.jpeg', description: 'Workforce Management Mobile app Telkominfra' },
        { src: '/asset.jpeg', description: 'Asset Management using Express JS + Mysql' },
        { src: '/enom.jpeg', description: 'WFM ENOM Mobile app Telkominfra' },
        { src: '/bookm.jpeg', description: 'Book Meeting Room Mobile app Telkominfra' },
        { src: '/presensi.jpeg', description: 'Presensi Mobile app Telkominfra' },
        { src: '/tagging.jpeg', description: 'Asset Tagging Mobile app Telkominfra' },
        { src: '/kepo.jpeg', description: 'Event Mobile app Telkominfra' },
        { src: '/presensi_BE.jpeg', description: 'Presensi Backend using Laravel' }
    ];

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className="projects bg-gray-100 min-h-screen p-10">
            <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Portfolio Project</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
                        onClick={() => openModal(image)}
                    >
                        <div className="relative w-full h-60 flex items-center justify-center p-4">
                            <img src={image.src} alt={`Project ${index + 1}`} className="max-w-full max-h-full object-contain" />
                        </div>
                        <div className="p-6 bg-gradient-to-r from-blue-500 via-teal-500 to-cyan-500">
                            <h2 className="text-3xl font-semibold mb-2 text-white">Project {index + 1}</h2>
                            <p className="text-gray-200">{image.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={closeModal}>
                    <div className="relative bg-white p-4 rounded-lg flex items-center justify-center" style={{ width: '90vw', height: '90vh' }} onClick={(e) => e.stopPropagation()}>
                        <button className="absolute top-2 right-2 text-gray-800" onClick={closeModal}>
                            ×
                        </button>
                        <img src={selectedImage.src} alt="Selected" className="max-w-full max-h-full object-contain" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;
