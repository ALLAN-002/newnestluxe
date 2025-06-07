import React from "react";
import expressway from "../assets/expressway.jpg";
import { Link } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Listings from "./Listings";
import Contacts from "./Contacts";
import HiddenGems from "./HiddenGems";
import Testimonials from "./Testimonials";
import Quiz from "./Quiz";
import Partners from "./Partners";

export default function Home() {
  return (
    <div>
      {/* ----------------------------- Hero Section ----------------------------- */}
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-4xl mb-10">
        {/* Background image */}
        <img
          src={expressway}
          alt="Nairobi Expressway skyline"
          className="absolute inset-0 -z-10 ml-50 mt-10 w-500 h-[500px] md:h-[600px] lg:h-[700px] object-cover rounded-4xl"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 -z-10 bg-black/40 ml-50 mt-10 rounded-4xl" />

        {/* Centered content */}
        <div className="flex h-full w-full pl-50 items-center justify-center px-4 text-center text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold drop-shadow-md">
              Find Your Dream Home
            </h1>
            <p className="mt-6 text-lg sm:text-xl lg:text-2xl font-medium drop-shadow-md">
              Discover rentals, plots & hidden gems — all in one place.
            </p>
            <Link
              to="/services"
              className="mt-10 inline-block rounded-full bg-[#071524] px-8 py-4 text-base font-semibold transition hover:bg-blue-700 sm:text-lg"
            >
              Browse Listings
            </Link>
          </div>
        </div>
      </section>

      {/* ----------------------------- Content Sections ----------------------------- */}
      
       
      <Section id="about">
        <About />
      </Section>

      <Section id="services" bg="bg-white">
        <Services />
      </Section>

      <Section id="testimonials">
        <Testimonials />
      </Section>

      <Section id="partners">
        <Partners />
      </Section>

      <Section id="listings" bg="bg-white">
        <Listings />
      </Section>

      <Section id="quiz">
        <Quiz />
      </Section>

      <Section id="contacts" bg="bg-white">
        <Contacts />
      </Section>

      <Section id="hidden-gems" bg="bg-white">
        <HiddenGems />
      </Section>
    </div>
  );
}


function Section({ id, bg, children }) {
  return (
    <section id={id} className={`${bg} py-16 px-4 sm:px-6 lg:px-8`}>
      <div className="container mx-auto w-full">{children}</div>
    </section>
  );
}
