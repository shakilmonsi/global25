
const Footer = () => {
  return (
   
    
       <footer className="bg-gray-800 text-gray-300">
      <div className=" justify-center items-center
        NNB mx-auto py-10 px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo Section */}
        <div>
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
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-white">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <p className="text-sm">
            1234 Street Name <br /> City, State, ZIP Code
          </p>
          <p className="text-sm mt-4">
            Email:{" "}
            <a
              href="mailto:info@company.com"
              className="hover:text-white underline"
            >
              info@company.com
            </a>
          </p>
          <p className="text-sm">
            Phone:{" "}
            <a href="tel:+1234567890" className="hover:text-white underline">
              +123 456 7890
            </a>
          </p>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
