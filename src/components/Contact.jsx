const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Soft background */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-10 right-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-200 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent">
          Contact Us
        </h2>

        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Reach out for research collaborations, consulting services, or project inquiries.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-8">
          {/* Contact Person */}
          <div className="flex items-start gap-3 bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-md border border-blue-100">
            <span className="mt-1 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-xl">
              👤
            </span>
            <div>
              <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
                Contact Person
              </p>
              <p className="text-gray-900 font-semibold">
                Sh. Alok Kumar Pandey
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3 bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-md border border-blue-100">
            <span className="mt-1 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-xl">
              📞
            </span>
            <div>
              <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
                Phone
              </p>
              <p className="text-gray-900 font-semibold">
                +91-9310445512
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3 bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-md border border-blue-100">
            <span className="mt-1 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-xl">
              ✉️
            </span>
            <div className="text-gray-900">
              <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
                Email
              </p>
              <p>
                <span className="font-semibold">Primary: </span>
                <a
                  href="mailto:aprbdel.2008@gmail.com"
                  className="text-blue-800 underline"
                >
                  aprbdel.2008@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Alternate: </span>
                <a
                  href="mailto:aprb.2008@rediffmail.com"
                  className="text-blue-800 underline"
                >
                  aprb.2008@rediffmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3 bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-md border border-blue-100">
            <span className="mt-1 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-xl">
              📍
            </span>
            <div>
              <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
                Location
              </p>
              <p className="text-gray-900 font-semibold">
                Delhi, India
              </p>
            </div>
          </div>
        </div>

        <p className="text-center mt-10 text-xs text-gray-500">
          APRB · Maintaining Quality & Timelines
        </p>
      </div>
    </section>
  );
};

export default Contact;
