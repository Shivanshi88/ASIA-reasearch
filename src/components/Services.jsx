const Services = () => {
  const services = [
    {
      title: "Demand Forecasting",
      desc: "Predict market demand trends to support strategic planning and business growth.",
      tag: "Forecasting",
      icon: "📈",
    },
    {
      title: "Retail Performance Tracking",
      desc: "Analyze retail performance and consumer behavior across different markets.",
      tag: "Retail",
      icon: "🏪",
    },
    {
      title: "Product Development Research",
      desc: "Evaluate product ideas and understand customer response before launch.",
      tag: "Product R&D",
      icon: "🔬",
    },
    {
      title: "Market Analysis",
      desc: "Deliver accurate and up-to-date market insights for better decision making.",
      tag: "Analytics",
      icon: "📊",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
      {/* Soft background shapes */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-24 -right-16 w-72 h-72 bg-blue-200 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-indigo-200 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-600 mt-4">
            We provide comprehensive research and consulting services to help organizations
            understand market dynamics and make informed strategic decisions.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Accent gradient line */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Glow circle */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-2xl mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              {/* Tag */}
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-800 mb-3">
                {service.tag}
              </span>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* CTA link */}
              <button className="mt-4 inline-flex items-center text-sm font-medium text-blue-800 group-hover:text-blue-900">
                Learn more
                <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
