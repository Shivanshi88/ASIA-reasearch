import React, { useEffect, useState } from "react";
import heroImage from "../assets/images/hero.jpg";
import heroImage2 from "../assets/images/hero2.jpg";
import heroImage3 from "../assets/images/hero3.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const slides = [heroImage, heroImage2, heroImage3];

  // Different rounded shapes (no hexagon)
  const shapes = [
    "ellipse(100% 110% at 50% -5%)", // tall oval
    "circle(55%)",                   // circle
    "ellipse(120% 95% at 50% 5%)",   // wide oval
  ];

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      3000
    );
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const timer = setTimeout(() => setImagesLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="pt-32 pb-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden"
    >
      {/* Floating gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl shadow-lg animate-float-slow opacity-75 blur-sm" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full shadow-md animate-float opacity-60 blur-sm" />
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-t from-purple-400 to-pink-500 rounded-xl shadow-lg animate-bob blur-sm" />
        <div className="absolute bottom-20 right-16 w-14 h-14 bg-gradient-to-b from-orange-400 to-red-500 rounded-2xl shadow-md animate-float-slow opacity-70 blur-sm" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div
          className={`space-y-6 ${
            imagesLoaded ? "animate-slide-in-left" : "opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent leading-tight">
            Asia Pacific Research Bureau
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
            A full service marketing and social research organization delivering
            accurate insights, demand forecasting and market analysis to help
            businesses make better decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group bg-gradient-to-r from-blue-900 to-blue-800 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Our Services
            </button>

            <button className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-xl hover:bg-blue-900 hover:text-white transition-all duration-300 hover:shadow-lg font-medium">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right slider with changing shape */}
        <div
          className={`flex justify-center ${
            imagesLoaded ? "animate-slide-in-right" : "opacity-0"
          }`}
        >
          <div className="relative w-full max-w-md group">
            <div
              className="hero-shape w-full h-80 md:h-96 mx-auto shadow-2xl hover:shadow-3xl transition-all duration-1000 rounded-3xl overflow-hidden"
              style={{
                clipPath: shapes[currentSlide],
                background: "linear-gradient(45deg, #3b82f6, #6366f1)",
              }}
            >
              <img
                src={slides[currentSlide]}
                alt="Market Research"
                className="w-full h-full object-cover transition-all duration-1000 hover:scale-110 cursor-pointer"
              />
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-6 justify-center">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-blue-900 w-8 scale-110 shadow-lg"
                      : "bg-gray-300 hover:bg-blue-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
