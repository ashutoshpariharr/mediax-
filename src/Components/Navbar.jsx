import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = ({ currentSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: "courses", label: "Our Courses" },
    { id: "campus", label: "Our Recruiters" },
    { id: "success", label: "Success Stories" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 animate-fadeIn">
            <img
              src="https://s3-alpha-sig.figma.com/img/2331/5f7d/b5656099fb1acfb9ea01160bd55570a3?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LrDJhlDE4kEFfQPnuD-b6BTQp5yWFcNuOYlAzaHuL9f0OKdWKtT1T8bt8qvplVO4gYGwdrzPk-zv6xIF7vhr0OxNFBfCpUeAUcxqXBjW4wPei3D1JDI1Cxokjv4U1ZSto9eXuFRUETvA55cfugjX79d~RJKA4ywprCd9yx0Hkfa6XG6Y1rhT1y0eeMSyXXNFvzDM6Gtglsg979HyvgmPlzrWiBXp3R8TAeGQ55WMQm6c9Z8foa1ciLw~Q9PJkUxl7QootrLkePuWGnL8UlP8crbTgNM36-OFMIDFb64XC2NgjBss5iTmP~k6LdVtubQKyPJwbFG~mbKE88BOFvF7IQ__"
              alt="Logo"
              className="h-11"
            />
          </div>

          {/* large scren Menu */}
          <div className="hidden md:flex items-center space-x-8 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`navbar-link-hover ${currentSection === link.id ? "text-orange-500 font-bold" : ""
                  }`}
              >
                {link.label}
              </a>
            ))}
            <a href="#recruiters">
              <button className="bg-orange-500 text-white px-6 py-2 rounded-md button-hover">
                RESERVE YOUR SEAT
              </button>
            </a>
          </div>

          {/* Mobile screen menu */}
          <button
            className="md:hidden animate-fadeIn"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden animate-slideIn">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="block text-gray-800 navbar-link-hover"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full bg-orange-500 text-white px-4 py-2 rounded-md button-hover">
              RESERVE YOUR SEAT
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
