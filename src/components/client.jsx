import React from "react";
import gpi from "../assets/clients/gpi.avif";
import IFAD from "../assets/clients/IFAD.jpg";
import Orient from "../assets/clients/Orient.jpg";
import Rdi from "../assets/clients/Rdi.webp";
import Unilever from "../assets/clients/Unilever-Logo.png";
import image from "../assets/clients/image.png";
import imrb from "../assets/clients/imrb.webp";
import newLogo from "../assets/clients/new.png";
import sfac from "../assets/clients/sfac.jpg";
import synergy from "../assets/clients/synergy.jpg";

const OurClients = () => {
  const clients = [
    gpi,
    IFAD,
    Orient,
    Rdi,
    Unilever,
    image,
    imrb,
    newLogo,
    sfac,
    synergy,
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent">
          Our Clients
        </h2>
        <p className="mt-3 text-center text-gray-600">
          Trusted by leading organizations across sectors.
        </p>

        <div className="relative mt-12">
          {/* Left gradient fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white via-white/70 to-transparent z-10" />
          {/* Right gradient fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white via-white/70 to-transparent z-10" />

          <div className="overflow-hidden whitespace-nowrap">
            <div className="flex w-max gap-16 py-4 animate-marquee hover:[animation-play-state:paused]">
              {[...clients, ...clients].map((logo, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={`Client Logo ${idx + 1}`}
                    className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-125 opacity-0 animate-logo-fade"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes logo-fade {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-logo-fade {
          animation: logo-fade 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default OurClients;
