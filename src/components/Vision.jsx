const Vision = () => {
  const items = [
    {
      label: "Our Vision",
      emoji: "🔭",
      title: "Quality research, long-term partnerships.",
      text: "Our vision is to provide quality research for our clients through open and transparent relationships aimed at achieving common goals and establishing long-lasting cooperation.",
    },
    {
      label: "Our Strategy",
      emoji: "🎯",
      title: "Client goals first, always.",
      text: "We focus on understanding client needs and identifying the best solutions while maintaining an optimal cost-benefit ratio. The client's objective is our objective.",
    },
    {
      label: "Teamwork",
      emoji: "🤝",
      title: "Collaborative, expert-driven teams.",
      text: "We work with our clients on a team basis to enhance communication and flexibility. Our professionals from research, analysis, advertising and marketing collaborate to deliver quality, timely project management and solve complex research challenges.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-blue-50/40 to-white relative overflow-hidden">
      {/* Soft background shapes */}
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -top-20 left-4 w-60 h-60 bg-blue-200 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-6 w-64 h-64 bg-indigo-200 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent">
          Our Vision & Approach
        </h2>

        {/* Sub text */}
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Clear vision, focused strategy and collaborative teamwork guide how we partner with clients and deliver meaningful research outcomes.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {items.map((item, index) => (
            <div
              key={item.label}
              className="group relative bg-white/80 backdrop-blur-sm border border-blue-100 rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Badge */}
              <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-800">
                {item.label}
              </span>

              <div className="mt-4 flex items-start gap-4">
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {item.emoji}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-3 leading-relaxed text-sm">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p className="text-center mt-12 font-semibold text-blue-900 tracking-wide">
          APRB · Maintaining Quality & Timelines
        </p>
      </div>
    </section>
  );
};

export default Vision;
