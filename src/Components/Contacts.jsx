import React from 'react';
import fb from '../assets/fb.png';
import linked from '../assets/linked.png';
import instagram from '../assets/instagram.png';
import whatsapp from '../assets/whatsapp.png';

export default function Contacts() {
  return (
    <div className="bg-white text-[rgb(27,38,59)] w-full py-16 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="text-xl md:text-2xl font-semibold">We're Here to Support You</p>
        <p className="text-base md:text-lg mt-2 max-w-xl mx-auto">
          Whether you have questions, need help getting started, or want more information — reach out anytime.
        </p>
      </div>

      {/* Main Card */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 max-w-6xl mx-auto bg-gray-100 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg">
        {/* Contact Details */}
        <div className="flex-1 max-w-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Details</h2>

          <div className="text-lg md:text-xl mb-4">
            <p className="font-semibold">Email:</p>
            <p>support@nestluxury.com</p>
          </div>

          <div className="text-lg md:text-xl mb-4">
            <p className="font-semibold">Phone:</p>
            <p>+254 (712) 345‑678</p>
          </div>

          <div className="text-lg md:text-xl mb-6">
            <p className="font-semibold">Address:</p>
            <p>105 Waiyaki Way, Nairobi, 00100</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 sm:gap-5 bg-white rounded-full p-3 w-fit">
            <img src={linked} alt="LinkedIn" className="w-7 h-7 sm:w-8 sm:h-8" />
            <img src={fb} alt="Facebook" className="w-7 h-7 sm:w-8 sm:h-8" />
            <img src={instagram} alt="Instagram" className="w-7 h-7 sm:w-8 sm:h-8" />
            <img src={whatsapp} alt="WhatsApp" className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>

          <p className="mt-6 text-lg md:text-xl font-medium">We typically respond within 12 hours</p>
        </div>

        {/* Message Form */}
        <div className="flex-1 max-w-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Send Us a Message</h2>
          <form className="bg-[rgb(224,225,221)] text-black rounded-3xl p-4 sm:p-6 flex flex-col gap-4 sm:gap-6">
            <label className="block text-lg md:text-xl font-semibold">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
              required
            />

            <label className="block text-lg md:text-xl font-semibold">Message</label>
            <textarea
              className="w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Type your message here"
              rows="4"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-[rgb(13,27,42)] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 font-semibold text-base sm:text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
