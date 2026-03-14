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
    { logo: gpi, name: "GPI" },
    { logo: IFAD, name: "IFAD" },
    { logo: Orient, name: "Orient" },
    { logo: Rdi, name: "RDI" },
    { logo: Unilever, name: "Unilever" },
    { logo: image, name: "Market Research" },
    { logo: imrb, name: "IMRB" },
    { logo: newLogo, name: "New Client" },
    { logo: sfac, name: "SFAC" },
    { logo: synergy, name: "Synergy" },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 mb-4">Our Network</h2>
          <h3 className="text-3xl md:text-5xl font-black text-blue-950 tracking-tight">
            Trusted by the <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Industry Leaders</span>
          </h3>
        </div>

        <div className="relative">
          {/* Edge Fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="overflow-hidden">
            <div className="flex w-max gap-10 py-6 animate-marquee hover:[animation-play-state:paused]">
              {[...clients, ...clients].map((client, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center bg-blue-50/30 backdrop-blur-sm border border-blue-100/50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-700 w-44 md:w-64 h-36 group cursor-default"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
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
          animation: marquee 50s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default OurClients;
