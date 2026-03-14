import { useState, useEffect } from "react";
import demandImg from "../assets/images/ui/demand_forecasting.png";
import retailImg from "../assets/images/ui/retail_tracking.png";
import productImg from "../assets/images/ui/product_research.png";

// Using professional photography URLs for remaining images due to quota limits
const marketImg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop";

const About = () => {
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStatsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    { title: "Demand Forecasting", desc: "Predicting market demand to support better planning.", img: demandImg },
    { title: "Retail Tracking", desc: "Monitoring retail performance and consumer behavior.", img: retailImg },
    { title: "Product Research", desc: "Understanding product potential before market launch.", img: productImg },
    { title: "Market Analysis", desc: "Providing accurate insights for business growth.", img: marketImg }
  ];

  const stats = [
    { num: "500+", label: "Projects Completed" },
    { num: "10+", label: "Years Experience" },
    { num: "50+", label: "Happy Clients" },
    { num: "98%", label: "Accuracy Rate" }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-bl-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-6 tracking-tight">
            About Asia Pacific Research Bureau
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            A full-service marketing and social research organization. 
            We pioneer demand forecasting, retail tracking, and product development strategy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative h-72 rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <img 
                  src={service.img} 
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-white text-xl font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="text-blue-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Content + Stats */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-900 uppercase tracking-widest text-sm">Our Strength</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We provide reliable research insights and market intelligence to help businesses 
                make informed strategic decisions and understand market realities. Our expertise 
                lies in merging traditional research methods with modern data analytics.
              </p>
            </div>
              
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`relative ${
                    statsVisible ? `animate-slide-up` : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-5xl font-black text-blue-900 mb-1">
                    {stat.num}
                  </div>
                  <div className="text-sm text-blue-600 font-bold uppercase tracking-wider">{stat.label}</div>
                  <div className="absolute -left-4 top-2 w-1 h-12 bg-blue-100" />
                </div>
              ))}
            </div>

            <button className="bg-blue-900 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20">
              Read Our Full Story
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default About;
