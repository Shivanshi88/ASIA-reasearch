import { useState, useEffect } from "react";

const About = () => {
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStatsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    { title: "Demand Forecasting", desc: "Predicting market demand to support better planning.", icon: "📈" },
    { title: "Retail Tracking", desc: "Monitoring retail performance and consumer behavior.", icon: "🏪" },
    { title: "Product Research", desc: "Understanding product potential before market launch.", icon: "🔬" },
    { title: "Market Analysis", desc: "Providing accurate insights for business growth.", icon: "📊" }
  ];

  const stats = [
    { num: "500+", label: "Projects Completed" },
    { num: "10+", label: "Years Experience" },
    { num: "50+", label: "Happy Clients" },
    { num: "98%", label: "Accuracy Rate" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent),radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent)]" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6">
            About Asia Pacific Research Bureau
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A full service marketing and social research organization headquartered in Delhi. 
            Pioneering work in demand forecasting, retail performance tracking, and new product development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content + Stats */}
          <div className="space-y-8 lg:order-2">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-blue-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We provide reliable research insights and market intelligence to help businesses 
                make informed strategic decisions and understand market realities.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label}
                    className={`group p-6 rounded-2xl bg-gradient-to-b from-white to-blue-50 hover:from-blue-50 hover:to-indigo-50 transition-all duration-500 border hover:shadow-2xl cursor-default ${
                      statsVisible ? `animate-slide-up delay-${index * 100}` : 'opacity-0'
                    }`}
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                      {stat.num}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Services Grid */}
          <div className="lg:order-1 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-100 hover:border-blue-200 cursor-pointer h-full"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        .delay-0 { animation-delay: 0s; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </section>
  );
};

export default About;
