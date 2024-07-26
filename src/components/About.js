import React from 'react';

const About = () => {
    return (
        <div className="about bg-white min-h-screen p-10 flex items-center justify-center">
            <div className="max-w-3xl">
                <h1 className="text-3xl font-bold mb-4 text-center">About Me</h1>
                <p className="text-center">
                    Hello! Let me introduce myself, I am a programmer with experience since 2017 in the world of software development. I am very enthusiastic about creating creative and useful digital solutions for users. Here is a brief overview of my journey in the world of technology:
                </p>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
                    <p>
                        Since entering the world of programming in 2017, I have focused on developing various types of applications, especially in the web and mobile fields. Every project I work on is an opportunity to learn and develop new skills, as well as explore the latest technologies.
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Skills</h2>
                    <ul className="list-disc pl-5">
                        <li>
                            Web Development: Have experience in building frontend and backend using various technologies such as React.js, Laravel, and Express.js.
                        </li>
                        <li>
                            Mobile Application Development: I have developed mobile applications using Ionic Framework and Flutter (Basic), providing a responsive and intuitive user experience.
                        </li>
                        <li>
                            Database and Server: Using MySQL database.
                        </li>
                    </ul>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Programming Philosophy</h2>
                    <p>
                        I believe that programming is not just about writing code, but also about solving problems and adding value to users. Every project is an opportunity to create better experiences through technology.
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">My Vision</h2>
                    <p>
                        With the experience and knowledge that I have, I am committed to continuing to develop and innovate in the world of technology. My goal is to get involved in challenging, high-impact projects and be an active contributor in the developer community.
                    </p>
                </div>

                <p className="mt-8 text-center">
                    Thank you for visiting my About page. I am very excited to share my journey and passion in the world of technology with you.
                </p>
            </div>
        </div>
    );
};

export default About;
