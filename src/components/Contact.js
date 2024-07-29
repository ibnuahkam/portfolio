import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const templateParams = {
            name,
            email,
            message,
        };

        emailjs.send('service_snhmp8f', 'template_vmc10da', templateParams, 'W40Lc-_2YKl2Rl5K5')
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                // Reset form fields
                setName('');
                setEmail('');
                setMessage('');
                setIsLoading(false);
                toast.success('Email sent successfully!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }, (err) => {
                console.error('Failed to send email:', err);
                setIsLoading(false);
                toast.error('Failed to send email. Please try again later.', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };

    return (
        <div className="contact bg-gradient-to-r from-blue-50 via-gray-50 to-blue-100 min-h-screen p-10">
        <ToastContainer />
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-extrabold mb-8 text-gray-800 text-center">Contact Me</h1>
            <form className="space-y-6" onSubmit={sendEmail}>
            <div>
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                Name
                </label>
                <input 
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                id="name" 
                type="text" 
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
            </div>
            <div>
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                Email
                </label>
                <input 
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                id="email" 
                type="email" 
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>
            <div>
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="message">
                Message
                </label>
                <textarea 
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                id="message" 
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                />
            </div>
            <div className="flex justify-center">
                <button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                type="submit"
                disabled={isLoading}
                >
                {isLoading ? 'Sending...' : 'Send'}
                </button>
            </div>
            </form>
        </div>
        </div>

    );
};

export default Contact;
