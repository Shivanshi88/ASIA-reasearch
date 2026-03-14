import demandImg from "../assets/images/ui/demand_forecasting.png";
import retailImg from "../assets/images/ui/retail_tracking.png";
import productImg from "../assets/images/ui/product_research.png";

const marketImg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop";

const Services = () => {
  const services = [
    {
      title: "Demand Forecasting",
      desc: "Predict market demand trends to support strategic planning and business growth.",
      tag: "Forecasting",
      img: demandImg,
    },
    {
      title: "Retail Performance Tracking",
      desc: "Analyze retail performance and consumer behavior across different markets.",
      tag: "Retail",
      img: retailImg,
    },
    {
      title: "Product Development Research",
      desc: "Evaluate product ideas and understand customer response before launch.",
      tag: "Product R&D",
      img: productImg,
    },
    {
      title: "Market Analysis",
      desc: "Deliver accurate and up-to-date market insights for better decision making.",
      tag: "Analytics",
      img: marketImg,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold text-blue-950 tracking-tight">
              Our Core Services
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              We provide comprehensive research and consulting services to help organizations
              understand market dynamics and make informed strategic decisions.
            </p>
          </div>
          <button className="text-blue-900 font-bold border-b-2 border-blue-900 pb-1 hover:text-blue-700 hover:border-blue-700 transition-all">
            View All Services
          </button>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white border border-gray-100 rounded-[24px] p-2 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 rounded-[18px] overflow-hidden mb-6">
                 <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                 />
                 <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-white/90 backdrop-blur-sm text-blue-900 shadow-sm">
                        {service.tag}
                    </span>
                 </div>
              </div>

              <div className="px-4 pb-6">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-900 transition-colors mb-3">
                    {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.desc}
                </p>
                <button className="text-sm font-bold text-blue-900 inline-flex items-center gap-2 group/btn">
                    Learn more 
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
