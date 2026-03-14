import React, { useEffect, useState } from "react";
import heroImage from "../assets/images/hero2.jpg";// yet to added if client send real resume

const Hero = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setImagesLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-6 relative overflow-hidden"
    >
      {/* Subtle floating geometric elements for unique depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-b from-emerald-200/20 to-teal-200/20 rounded-2xl mix-blend-soft-light filter blur-lg animate-float-slow" />
        <div className="absolute -bottom-20 left-1/2 w-32 h-32 bg-gradient-to-t from-purple-200/30 to-pink-200/30 rounded-xl mix-blend-multiply filter blur-xl animate-bob-slow" />
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        {/* Left: Clean typography-focused content */}
        <div className={`space-y-8 ${imagesLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
          <div>
            <h1 className="text-5xl lg:text-7xl font-light text-slate-900 leading-[1.05] tracking-tight mb-4">
              Asia Pacific
            </h1>
            <h1 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent leading-[1.05]">
              Research Bureau
            </h1>
          </div>

          <p className="text-xl text-slate-600 leading-relaxed max-w-md">
            Delivering precise insights, demand forecasting, and market analysis to empower smarter business decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button className="group bg-slate-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-slate-800 hover:shadow-xl transition-all duration-300 shadow-lg">
              Our Services →
            </button>
            <button className="border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-xl font-medium hover:bg-slate-900 hover:text-white transition-all duration-300 hover:shadow-lg">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right: Single image with unique subtle parallax container */}
        <div className={`relative ${imagesLoaded ? "animate-fade-in-right delay-200" : "opacity-0"}`}>
          <div className="relative w-full h-80 lg:h-96 mx-auto group cursor-pointer">
            {/* Inner ring for unique focus glow */}
            <div className="absolute inset-0 w-full h-full rounded-3xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-xl group-hover:scale-105 transition-all duration-500 -z-10" />
            <img
              src={heroImage}
              alt="Asia Pacific Research Bureau insights"
              className="w-full h-full object-cover rounded-3xl shadow-2xl group-hover:scale-105 group-hover:rotate-1 transition-all duration-700 shadow-blue-200/50 hover:shadow-blue-300/70"
            />
            {/* Subtle accent line */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-md" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes bob-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float-slow { animation: float-slow 20s ease-in-out infinite; }
        .animate-bob-slow { animation: bob-slow 16s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-fade-in-right { animation: fade-in-up 0.8s ease-out 0.2s forwards; }
      `}</style>
    </section>
  );
};

export default Hero;
