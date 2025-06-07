import React from "react";
import apartment from "../assets/apartment.jpeg";
import { Link } from "react-router-dom";
import landscape from "../assets/landscape.jpeg";

const Services = () => {
  return (
    <div className="bg-white ml-50 p-6 md:p-10 mx-auto max-w-screen-xl justify-center ">
      <h1 className="text-3xl md:text-4xl text-[rgb(27,38,59)] font-semibold ml-120">SERVICES</h1>
      
      <p className="text-3xl md:text-5xl font-bold text-[rgb(27,38,59)] leading-tight justify-items-center ml-108 mt-4">
        Your Path to <br /> Easy Lifestyle
      </p>
      
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mt-10">
        {/* Service Card 1 */}
        <div className="flex-1 bg-gray-100 rounded-2xl p-8 flex flex-col justify-between">
          <h2 className="text-3xl font-bold mb-4">Luxury Living & Lifestyle</h2>
          <p className="text-2xl mb-6">
            Step into a world of distinction with exclusive listings, premium residences, and personalized services for your dream home. Browse and discover residences crafted for elegance, comfort, and refined living.
          </p>
          <Link to="/Listings">
            <button className="bg-blue-600 text-white text-xl px-6 py-2 rounded-full hover:bg-blue-700 transition hover:animate-pulse">
              Learn more
            </button>
          </Link>
        </div>

        {/* Service Card 2 */}
        <div className="flex-1 bg-gray-100 rounded-2xl p-8 flex flex-col justify-between">
          <h2 className="text-3xl font-bold mb-4">Own a Piece of Paradise</h2>
          <p className="text-2xl mb-6">
            Escape the noise and embrace nature. Our lush, well-positioned plots offer the perfect blend of beauty, privacy, and potential — ideal for your dream home or countryside retreat.
          </p>
          <Link to="/Listings">
            <button className="bg-blue-600 text-white text-xl px-6 py-2 rounded-full hover:bg-blue-700 transition hover:animate-pulse">
              Learn more
            </button>
          </Link>
        </div>
      </div>

      {/* Wild Escape & Wonder Section */}
      <div className="mt-16 flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex-shrink-0 rounded-4xl overflow-hidden w-full md:w-1/2 max-w-md">
          <img src={landscape} alt="landscape" className="w-full h-auto rounded-3xl object-cover" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[rgb(27,38,59)]">
            Wild Escape & Wonder
          </h2>
          <p className="text-[rgba(21,44,70,0.84)] text-2xl leading-relaxed mb-10">
            Explore Kenya’s hidden gems through immersive land safaris, scenic getaways, and nature-rich adventures. From sunrise savannahs to tranquil forests — your journey into the wild begins here.
          </p>
          <Link to="/HiddenGems">
            <button className="bg-blue-600 text-white text-xl px-6 py-2 rounded-full hover:bg-blue-700 transition hover:animate-pulse">
              Learn more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
