import React from 'react';
import { Link } from 'react-router-dom';
import Mydiv from '../assets/Mydiv.jpg';

export default function About() {
  return (
    <div className='bg-gray-100 w-screen py-16 px-4 sm:px-6 lg:px-8'>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-10 max-w-7xl mx-auto bg-white rounded-3xl shadow-lg">
      {/* Text Content */}
      <div className="flex-1 max-w-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-2">
          We Are a Way To Get You Luxury
        </h2>
        <h3 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          By Just A Click
        </h3>

        <p className="text-lg md:text-xl mb-8 text-gray-800 leading-relaxed">
          With us, we provide a simplified house hunting journey — move seamlessly from one residential area or apartment to another in a modernized way where you find vacant listed apartments.
          Discover aesthetic places for your vacation and holiday treats as well. By just a click, you can own property from trusted agents, from apartments to land ownership.
        </p>

        <div className="flex flex-wrap gap-6">
          <Link to="/Listings">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition hover:animate-pulse font-semibold text-lg">
              Find Your Home
            </button>
          </Link>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition hover:animate-pulse font-semibold text-lg">
            Get to Vacation
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="flex-1">
        <img
          src={Mydiv}
          alt="Resort"
          className="rounded-3xl shadow-lg w-full max-w-md object-cover"
        />
      </div>
    </div>
    </div>
  );
}
