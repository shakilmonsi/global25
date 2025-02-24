const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 w-full">
      <div className="flex justify-between items-center py-12 px-24 md:px-32 lg:px-40 gap-16">
        {/* Logo Section */}
        <div className="w-1/4">
          <img
            src="https://via.placeholder.com/150"
            alt="Logo"
            className="w-24 mb-4"
          />
          <p className="text-sm">
            Your Company Name <br /> Providing reliable service since 2025.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-1/4">
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="/about"
                className="hover:text-white transition duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-white transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white transition duration-300"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="hover:text-white transition duration-300"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="w-1/4">
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <p className="text-sm">
            1234 Street Name <br /> City, State, ZIP Code
          </p>
          <p className="text-sm mt-4">
            Email:{" "}
            <a
              href="mailto:info@company.com"
              className="hover:text-white underline transition duration-300"
            >
              info@company.com
            </a>
          </p>
          <p className="text-sm">
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className="hover:text-white underline transition duration-300"
            >
              +123 456 7890
            </a>
          </p>
        </div>
      </div>
      <div className="bg-gray-900 py-6">
        <p className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
