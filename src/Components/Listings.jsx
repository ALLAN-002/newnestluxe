import React from "react";
import apartment1 from "../assets/apartment.jpeg";
import apartment2 from "../assets/apartment2.jpg";
import apartment3 from "../assets/apartment3.jpg";
import plots from "../assets/plots.png";
import { Link } from "react-router-dom";

export default function Listings() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 ml-15">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-[rgb(27,38,59)] text-center mb-10">
          All Property Listings
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              src: apartment1,
              title: "2BR in Westlands",
              location: "Nairobi · KES 55,000/month",
            },
            {
              src: apartment2,
              title: "Studio in Ruiru",
              location: "Kiambu · KES 22,000/month",
            },
            {
              src: apartment3,
              title: "4BR Maisonette in Karen",
              location: "Nairobi · KES 95,000/month",
            },
          ].map((listing, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={listing.src}
                alt={listing.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-[rgb(26,43,94)]">
                  {listing.title}
                </h3>
                <p className="text-lg font-semibold text-[rgb(26,43,94)]">
                  {listing.location}
                </p>
                <Link>
                  <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition hover:animate-pulse">
                    Get in touch
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl shadow-xl p-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">
              Residential Plots
            </h2>
            <p className="text-xl text-gray-800 font-semibold mb-2">
              With Ready Title Deeds
            </p>
            <p className="text-gray-600 text-lg mb-6">
              Juja, 500 metres from SuperHighway
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-800 transition transform hover:scale-105 font-semibold"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src={plots}
              alt="Residential Plots"
              className="rounded-xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
