import React from "react";
import sketch from "../assets/sketch.jpg"; // Update path if needed
import plus from "../assets/plus.png";     // Update path if needed

export default function FAQSection() {
  return (
    <div className="bg-gray-100 w-full md:w-[90%] mx-auto rounded-3xl ml-50">
      <div className="flex flex-col md:flex-row flex-1 p-4 md:p-10 m-20 gap-8 bg-gray-100">
        
        {/* Left Section */}
        <div className="md:w-1/2">
          <div className="md:mr-10">
            <h1 className="text-2xl font-bold pl-4 pt-4 md:pl-0 md:pt-0">NEED HELP?</h1>
            <h1 className="font-bold pl-4 pt-4 text-3xl md:text-5xl md:pl-0 md:pt-0">Frequently</h1>
            <h1 className="text-3xl md:text-5xl font-bold pl-4 pt-2 md:pl-0 md:pt-1">Asked Questions</h1>
            <p className="text-2xl pl-4 pt-4 md:pl-0 md:pt-2">
              Find answers to frequently asked questions about our services, plot purchase or purchase of property, rentals, apartments, travel and tours.
            </p>
            <div className="bg-gray-100 rounded-3xl mt-8 mx-auto md:mx-0 w-40 h-40 sm:w-52 sm:h-52 md:w-80 md:h-80 overflow-hidden">
              <img src={sketch} alt="Illustration" className="w-full h-full object-cover rounded-3xl" />
            </div>
          </div>
        </div>

        {/* Right Section - FAQ Items */}
        <div className="md:w-1/2 flex flex-col gap-4">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between text-xl md:text-2xl font-bold bg-white w-full h-20 gap-4 rounded-3xl px-6"
            >
              <span className="flex-1">How do I create an account on your platform?</span>
              <img src={plus} alt="Expand icon" className="w-8 h-8 md:w-10 md:h-10 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
