import React, { useState } from "react";
// other imports...

const faqs = [
  {
    question: "How do I create an account on your platform?",
    answer: "You can sign up by clicking the Sign Up button on the homepage and filling in your details.",
  },
  {
    question: "What types of properties are listed?",
    answer: "We list apartments, maisonettes, plots, and commercial properties across Kenya.",
  },
  // Add more as needed...
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 w-full md:w-[90%] mx-auto rounded-3xl ml-50">
      <div className="flex flex-col md:flex-row flex-1 p-4 md:p-10 m-20 gap-8 bg-gray-100">
        
        {/* Left Section */}
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold">NEED HELP?</h1>
          <h2 className="text-5xl font-bold mt-2">Frequently Asked Questions</h2>
          <p className="text-2xl mt-4">
            Find answers about services, plot purchases, rentals, travel and more.
          </p>
          <div className="rounded-3xl mt-8 w-80 h-80 overflow-hidden">
            <img src={sketch} alt="Illustration" className="w-full h-full object-cover rounded-3xl" />
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-3xl px-6 py-4">
              <div
                onClick={() => toggleFAQ(i)}
                className="flex justify-between items-center cursor-pointer text-xl md:text-2xl font-bold"
              >
                <span>{faq.question}</span>
                <img
                  src={plus}
                  alt="Toggle answer"
                  className={`w-8 h-8 transform transition-transform ${
                    openIndex === i ? "rotate-45" : "rotate-0"
                  }`}
                />
              </div>
              {openIndex === i && (
                <p className="text-lg mt-2 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
