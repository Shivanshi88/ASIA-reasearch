import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-xl text-blue-950 shadow-2xl fixed w-full z-50 border-b border-blue-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-6 group">
          <img 
            src={logo} 
            alt="APR Bureau" 
            className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight leading-none text-blue-950">APR Bureau</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600 mt-1">Research & Analytics</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10 font-bold uppercase tracking-widest text-xs">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `hover:text-blue-600 transition-colors duration-300 relative py-2 group ${
                    isActive ? "text-blue-600" : "text-gray-600"
                  }`
                }
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link 
          to="/contact" 
          className="hidden md:flex bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-xl font-bold text-sm transition-all shadow-xl shadow-blue-900/20 active:scale-95"
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-blue-950 p-2 focus:outline-none bg-blue-50 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-blue-50 px-6 py-10 animate-fade-in shadow-2xl">
          <ul className="flex flex-col gap-8 text-center font-black uppercase tracking-[0.2em] text-sm">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 ${isActive ? "text-blue-600 scale-110" : "text-gray-500 hover:text-blue-600"}`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
