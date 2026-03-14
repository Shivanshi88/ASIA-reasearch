const Footer = () => {
  return (
    <footer className="bg-blue-950 text-blue-100 pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 border-b border-blue-800 pb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white">
              Asia Pacific Research Bureau
            </h3>
            <p className="mt-3 text-sm text-blue-200 max-w-md">
              A full service marketing and social research organization
              delivering reliable insights, demand forecasting and
              market analysis for better business decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-blue-300">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Home</li>
              <li className="hover:text-white cursor-pointer transition-colors">About</li>
              <li className="hover:text-white cursor-pointer transition-colors">Services</li>
              <li className="hover:text-white cursor-pointer transition-colors">Vision & Approach</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-blue-300">
              Contact
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Delhi, India</li>
              <li>Phone: +91-9310445512</li>
              <li>
                Email:{" "}
                <a
                  href="mailto:aprbdel.2008@gmail.com"
                  className="underline hover:text-white"
                >
                  aprbdel.2008@gmail.com
                </a>
              </li>
              <li>
                Alternate:{" "}
                <a
                  href="mailto:aprb.2008@rediffmail.com"
                  className="underline hover:text-white"
                >
                  aprb.2008@rediffmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-4 gap-2 text-xs text-blue-300">
          <p>© {new Date().getFullYear()} Asia Pacific Research Bureau. All rights reserved.</p>
          <p className="opacity-80">
            APRB · Maintaining Quality & Timelines
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
