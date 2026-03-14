import React from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Page Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2340&auto=format&fit=crop" 
          alt="Contact Us" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/60 backdrop-blur-[2px]" />
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight animate-slide-up">
            Get In <span className="text-blue-400">Touch</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium animate-slide-up [animation-delay:200ms]">
            We're here to discuss your next research challenge and find the best path forward.
          </p>
        </div>
      </section>

      <Contact />
      

      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}

export default ContactPage;