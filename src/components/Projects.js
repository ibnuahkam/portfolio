import React from 'react';

const Projects = () => {
    return (
        <div className="projects bg-gray-100 min-h-screen p-10">
            <h1 className="text-3xl font-bold mb-4">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
                    <h2 className="text-2xl font-bold">Project 1</h2>
                    <p className="mt-2">Description of project 1.</p>
                </div>
                <div className="bg-white p-4 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
                    <h2 className="text-2xl font-bold">Project 2</h2>
                    <p className="mt-2">Description of project 2.</p>
                </div>
                <div className="bg-white p-4 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
                    <h2 className="text-2xl font-bold">Project 3</h2>
                    <p className="mt-2">Description of project 3.</p>
                </div>
            </div>
        </div>
    );
};

export default Projects;
