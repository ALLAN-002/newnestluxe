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
      <section className="relative w-full overflow-hidden rounded-4xl mb-10 h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px] m-20 mt-10">
        {/* Background image */}
        <img
          src={expressway}
          alt="Nairobi skyline showing the Expressway"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Centered content */}
        <div className="relative flex h-full w-full items-center justify-center px-4 sm:px-6 text-center text-white">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold drop-shadow-md leading-tight">
              Find&nbsp;Your&nbsp;Dream&nbsp;Home
            </h1>
            <p className="mt-6 text-base sm:text-lg lg:text-2xl font-medium drop-shadow-md">
              Discover rentals, plots &amp; hidden gems — all in one place.
            </p>
            <Link
              to="/services"
              className="mt-10 inline-block rounded-full bg-[#071524] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold transition-colors duration-300 hover:bg-blue-700"
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

function Section({ id, bg = "", children }) {
  return (
    <section
      id={id}
      className={`py-16 px-4 sm:px-6 lg:px-8 ${bg}`}
    >
      <div className="max-w-7xl mx-auto w-full">{children}</div>
    </section>
  );
}
