const visionImg = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2340&auto=format&fit=crop";
const strategyImg = "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop";
const teamworkImg = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2340&auto=format&fit=crop";

const Vision = () => {
  const items = [
    {
      label: "Our Vision",
      img: visionImg,
      title: "Quality research, long-term partnerships.",
      text: "Our vision is to provide quality research for our clients through open and transparent relationships aimed at achieving common goals.",
    },
    {
      label: "Our Strategy",
      img: strategyImg,
      title: "Client goals first, always.",
      text: "We focus on understanding client needs and identifying the best solutions while maintaining an optimal cost-benefit ratio.",
    },
    {
      label: "Teamwork",
      img: teamworkImg,
      title: "Collaborative, expert-driven teams.",
      text: "We work with our clients on a team basis to enhance communication and flexibility. Our professionals collaborate for quality project management.",
    },
  ];

  return (
    <section className="py-24 bg-blue-950 text-white relative overflow-hidden">
        {/* Background texture or pattern can be added here */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                Our Vision & Approach
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto font-medium">
                Clear vision, focused strategy and collaborative teamwork guide how we partner with clients and deliver meaningful research outcomes.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, index) => (
            <div
              key={item.label}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[40px] overflow-hidden mb-8 shadow-2xl">
                <img 
                    src={item.img} 
                    alt={item.label} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent opacity-60" />
              </div>
              
              <span className="text-blue-400 font-bold uppercase tracking-[0.2em] text-xs mb-4">
                {item.label}
              </span>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-blue-100/70 leading-relaxed text-sm">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-blue-300 font-medium tracking-wide">
                APRB · Maintaining Quality & Timelines Since 2008
            </p>
            <div className="flex gap-4">
                <div className="w-12 h-1 bg-blue-500 rounded-full" />
                <div className="w-6 h-1 bg-blue-400 rounded-full opacity-50" />
                <div className="w-3 h-1 bg-blue-300 rounded-full opacity-30" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
