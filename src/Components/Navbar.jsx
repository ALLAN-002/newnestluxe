import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/nestluxe-logo.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-gray-100 shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Desktop Nav */}
          <ul className="hidden lg:flex gap-8 items-center text-[#5e17eb] font-semibold text-lg lg:text-xl xl:text-2xl w-full justify-between">
            {/* Left Nav Items */}
            <div className="flex gap-8">
              <CustomLink to="/home">Home</CustomLink>
              <CustomLink to="/about">About</CustomLink>
              <CustomLink to="/services">Services</CustomLink>
            </div>

            {/* Logo Center */}
            <div className="flex items-center gap-3">
              <img src={logo} alt="NestLuxe logo" className="h-10 w-10" />
              <h1 className="text-[#5e17eb] font-extrabold text-2xl md:text-3xl lg:text-4xl">
                NestLuxe
              </h1>
            </div>

            {/* Right Nav Items */}
            <div className="flex gap-8">
              <CustomLink to="/listings">Listings</CustomLink>
              <CustomLink to="/hiddengems">Hidden Gems</CustomLink>
              <CustomLink to="/contacts">Contacts</CustomLink>
            </div>
          </ul>

          {/* Mobile Button */}
          <button
            className="lg:hidden p-2 text-[#5e17eb]"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-gray-100 shadow-md px-6 py-4">
          <ul className="flex flex-col gap-4 text-[#5e17eb] font-semibold text-lg">
            <CustomLink to="/home" onClick={() => setMobileOpen(false)}>Home</CustomLink>
            <CustomLink to="/about" onClick={() => setMobileOpen(false)}>About</CustomLink>
            <CustomLink to="/services" onClick={() => setMobileOpen(false)}>Services</CustomLink>
            <CustomLink to="/listings" onClick={() => setMobileOpen(false)}>Listings</CustomLink>
            <CustomLink to="/hiddengems" onClick={() => setMobileOpen(false)}>Hidden Gems</CustomLink>
            <CustomLink to="/contacts" onClick={() => setMobileOpen(false)}>Contacts</CustomLink>
          </ul>
        </div>
      )}
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={`transition hover:text-yellow-400 ${isActive ? "font-bold underline" : ""}`}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  );
}
