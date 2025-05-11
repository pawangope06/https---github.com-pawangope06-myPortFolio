import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-gray-100 py-16 px-4" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">Get In Touch</h2>
        <div className="h-1 w-20 bg-teal-500 mx-auto mb-10 rounded"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="flex items-center gap-3 text-gray-700">
                <FaEnvelope className="text-teal-500" /> pawanyaduvanshi4340@gmail.com
              </p>
              <p className="flex items-center gap-3 text-gray-700">
                <FaPhone className="text-teal-500" /> 7488621327
              </p>
              <p className="flex items-center gap-3 text-gray-700">
                <FaMapMarkerAlt className="text-teal-500" /> Koderma, Jharkhand
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Connect With Me</h3>
              <p className="mb-3 text-gray-600">Follow me on social media or check out my profiles:</p>
              <div className="flex gap-4 text-teal-600 text-xl">
                <a href="https://github.com/pawangope06" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/pawangope06/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  placeholder="Message Subject"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  placeholder="Your message here..."
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
