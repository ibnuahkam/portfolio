import React from 'react';

const Projects = () => {
    return (
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

    );
};

export default Projects;
