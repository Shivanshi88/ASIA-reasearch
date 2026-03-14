import React from 'react';
import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2340&auto=format&fit=crop" 
          alt="Our Services" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/60 backdrop-blur-[2px]" />
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight animate-slide-up">
            Expert <span className="text-blue-400">Solutions</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium animate-slide-up [animation-delay:200ms]">
            Comprehensive research tools designed to drive growth and strategic clarity.
          </p>
        </div>
      </section>

      <Services />

      {/* Extra Content Section */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl font-bold text-blue-950 mb-6">Why Choose Our Research?</h2>
                <div className="space-y-4">
                    {[
                        "Standardized & Precise Methodologies",
                        "In-depth Market Segmentation",
                        "Strategic Actionable Intelligence",
                        "Real-time Data Processing"
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-900 flex items-center justify-center text-white text-xs">✓</div>
                            <span className="text-gray-700 font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-white p-8 rounded-[40px] shadow-2xl border border-blue-100">
                <p className="text-xl text-blue-900 font-bold mb-4">"Our goal is not just to provide data, but to provide the clarity needed to make defining business decisions."</p>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100" />
                    <div>
                        <p className="font-bold text-gray-900">Research Board</p>
                        <p className="text-sm text-gray-500">APRB Leadership</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

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

export default ServicesPage;