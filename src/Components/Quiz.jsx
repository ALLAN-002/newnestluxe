import React from 'react';
import plus from '../assets/plus.png';
import sketch from '../assets/sketch.jpg';

const faqs = [
  "How do I create an account on your platform?",
  "What are the payment options available?",
  "Can I list my property for rent or sale?",
  "How do I book a tour or travel package?",
  "What is the cancellation policy?",
  "How do I update my profile information?",
  "Is customer support available 24/7?"
];

export default function Quiz() {
  return (
    <div className="flex flex-col md:flex-row gap-12 p-6 bg-white max-w-7xl mx-auto ml-15">
      {/* Left Section */}
      <div className="md:flex-1">
        <h1 className="text-3xl font-bold mb-2">NEED HELP?</h1>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-lg mt-6 max-w-lg">
          Find answers to frequently asked questions about our services, plot purchase or purchase of property, rentals, apartments, travel and tours.
        </p>
        <div className="mt-10 bg-gray-100 rounded-3xl p-4 max-w-md">
          <img
            src={sketch}
            alt="Illustration"
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </div>

      {/* Right Section - FAQ List */}
      <div className="md:flex-1 flex flex-col gap-5">
        {faqs.map((question, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center bg-white shadow-md rounded-3xl p-5 cursor-pointer hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{question}</h3>
            <img
              src={plus}
              alt="Expand Icon"
              className="w-8 h-8"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
