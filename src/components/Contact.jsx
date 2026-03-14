const Contact = () => {
  return (
    <section className="py-16 bg-blue-50/30 relative overflow-hidden">
      {/* Soft background elements */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 mb-4">Get In Touch</h2>
          <h3 className="text-3xl md:text-5xl font-black text-blue-950 tracking-tight">
            Ready to Start Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Next Project?</span>
          </h3>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Our experts are standing by to help you unlock the power of precision research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Phone", value: "+91-9310445512", icon: "📞", sub: "Available Mon-Sat" },
            { label: "Email", value: "aprbdel.2008@gmail.com", icon: "✉️", sub: "Primary Support" },
            { label: "Location", value: "Delhi, India", icon: "📍", sub: "Operating Hub" },
            { label: "Contact", value: "Alok Kumar Pandey", icon: "👤", sub: "Lead Researcher" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[32px] shadow-sm border border-blue-100 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 group">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 mb-6">
                {item.icon}
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-2">{item.label}</p>
              <p className="text-blue-950 font-bold mb-1 break-words leading-tight">{item.value}</p>
              <p className="text-xs text-gray-500 font-medium">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
