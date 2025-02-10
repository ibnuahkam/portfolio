import React from 'react';

const About = () => {
    return (
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
                <li>Web Development: Have experience in building frontend and backend using various technologies such as React.js, Laravel,Adonis JS and Express.js.</li>
                <li>Mobile Application Development: I have developed mobile applications using Ionic Framework, Flutter and React Native providing a responsive and intuitive user experience.</li>
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
    );
};

export default About;
