import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold cursor-pointer">
          APR Bureau
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-blue-100">
          <li className="cursor-pointer hover:text-white">
            <Link
              to="hero"
              smooth={true}
              duration={600}
              offset={-80}
            >
              Home
            </Link>
          </li>

          <li className="cursor-pointer hover:text-white">
            <Link
              to="about"
              smooth={true}
              duration={600}
              offset={-80}
            >
              About
            </Link>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setServiceOpen(true)}
            onMouseLeave={() => setServiceOpen(false)}
          >
            <span>Services</span>
            {serviceOpen && (
              <ul className="absolute top-8 left-0 bg-white text-gray-800 shadow-xl rounded-md p-3 w-56 border border-blue-100">
                <li className="py-1.5 hover:text-blue-700 cursor-pointer">
                  <Link
                    to="services"
                    smooth={true}
                    duration={600}
                    offset={-80}
                    onClick={() => setServiceOpen(false)}
                  >
                    All Services
                  </Link>
                </li>
                <li className="py-1.5 hover:text-blue-700 cursor-default">
                  Demand Forecasting
                </li>
                <li className="py-1.5 hover:text-blue-700 cursor-default">
                  Retail Performance
                </li>
                <li className="py-1.5 hover:text-blue-700 cursor-default">
                  Product Research
                </li>
                <li className="py-1.5 hover:text-blue-700 cursor-default">
                  Market Analysis
                </li>
              </ul>
            )}
          </li>

          <li className="cursor-pointer hover:text-white">
            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-80}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-800 text-white px-6 pb-4">
          <ul className="flex flex-col gap-3 text-blue-100">
            <li className="py-2 hover:text-white">
              <Link
                to="hero"
                smooth={true}
                duration={600}
                offset={-80}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="py-2 hover:text-white">
              <Link
                to="about"
                smooth={true}
                duration={600}
                offset={-80}
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="py-2 hover:text-white">
              <Link
                to="services"
                smooth={true}
                duration={600}
                offset={-80}
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li className="py-2 hover:text-white">
              <Link
                to="contact"
                smooth={true}
                duration={600}
                offset={-80}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
