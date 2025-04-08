import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion"; // Added motion
import { GoMail } from "react-icons/go";
import { HiOutlinePhone } from "react-icons/hi";
import { SlSocialFacebook } from "react-icons/sl";
import { TfiTwitter } from "react-icons/tfi";
import { RxInstagramLogo } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

const Navbar = () => {
  // Cart state
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: "$10",
      image: "/img/products/1_1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$20",
      image: "/img/products/1_1.jpg",
    },
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Toggle the cart visibility
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = () => {
    const newItem = {
      id: cartItems.length + 1,
      name: "Product 3",
      price: "$30",
      image: "/img/products/1_1.jpg",
    };
    setCartItems([...cartItems, newItem]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Scroll effect for header
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white py-0 shadow" : "bg-white py-4 shadow"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top bar with contact and social info */}
        <div className="mb-4 hidden items-center justify-between border-b border-gray-200 pb-2 text-lg lg:flex">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-gray-600">
              <GoMail size={20} /> contact@maktechsolution.com
            </span>
            <span className="flex items-center text-gray-600">
              <HiOutlinePhone size={20} /> +880 1886-159495
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href="#"
              className="text-gray-600 transition-colors hover:text-[#19B2E7]"
            >
              <SlSocialFacebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 transition-colors hover:text-[#19B2E7]"
            >
              <TfiTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 transition-colors hover:text-[#19B2E7]"
            >
              <RxInstagramLogo size={20} />
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                className={`transition-all duration-300 ${
                  isScrolled ? "h-14" : "h-20"
                }`}
                src="/img/logo/B2B.png"
                alt="Company Logo"
              />
            </Link>
          </div>

          {/* Main navigation links */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-6 text-center font-semibold">
              <li>
                <Link
                  to="/"
                  className="relative block px-1 py-2 text-black transition-colors hover:text-[#19B2E7]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="relative block px-1 py-2 text-black transition-colors hover:text-[#19B2E7]"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="relative block px-1 py-2 text-black transition-colors hover:text-[#19B2E7]"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/checkout"
                  className="relative block px-1 py-2 text-black transition-colors hover:text-[#19B2E7]"
                >
                  Checkout
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="relative block px-1 py-2 text-black transition-colors hover:text-[#19B2E7]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right side elements */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-600 transition-colors hover:text-[#19B2E7]"
              >
                <BsSearch size={25} />
              </button>
              {/* Search input animation */}
              {searchOpen && (
                <motion.input
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "200px" }}
                  exit={{ opacity: 0, width: 0 }}
                  className="absolute top-10 right-0 rounded-lg border border-gray-300 p-2"
                  placeholder="Search..."
                />
              )}
            </div>

            {/* User account */}
            <a
              href="#"
              className="p-2 text-gray-600 transition-colors hover:text-[#19B2E7]"
            >
              <FiUsers size={25} />
            </a>

            {/* Shopping cart */}

            <div className="cla relative h-full">
              <a
                href="#"
                onClick={toggleCart}
                className="p-2 text-gray-600 transition-colors hover:text-[#19B2E7]"
              >
                <BsCart3 size={25} />
                <span className="absolute -top-1 -right-1 mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#152550] p-3 text-xs text-white">
                  {cartItems.length}
                </span>
              </a>

              {/* Cart dropdown animation */}
              <AnimatePresence>
                {isCartOpen && (
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="absolute right-0 z-10 mt-2 h-screen w-[350px] rounded-lg bg-white p-4 shadow-lg"
                  >
                    <h3 className="mb-2 font-semibold">Your Cart</h3>
                    {cartItems.length === 0 ? (
                      <p>Your cart is empty.</p>
                    ) : (
                      <div>
                        {cartItems.map((item) => (
                          <div key={item.id} className="mb-4 flex items-center">
                            {/* -----------------------cart------------------ */}

                            <div className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white p-4 shadow-md transition-all duration-300 hover:shadow-lg">
                              <div className="flex gap-4">
                                <div>
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-full rounded-lg object-cover"
                                  />
                                </div>

                                <div>
                                  <div>
                                    <h4 className="text-xl font-semibold text-gray-900">
                                      {item.name}
                                    </h4>
                                    <p className="py-2 text-sm font-medium text-gray-600">
                                      {item.price}
                                    </p>
                                  </div>

                                  <div className="flex items-center space-x-2">
                                    {/* Decrease Button */}
                                    <button
                                      onClick={() => {
                                        const input = document.getElementById(
                                          `quantity-input-${item.id}`
                                        );
                                        input.value = Math.max(
                                          0,
                                          parseInt(input.value) - 1
                                        );
                                      }}
                                      className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-all duration-200 hover:bg-gray-300"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4"
                                      >
                                        <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                                      </svg>
                                    </button>

                                    {/* Quantity Input */}
                                    <input
                                      id={`quantity-input-${item.id}`}
                                      type="number"
                                      defaultValue="1"
                                      min="0"
                                      className="w-16 rounded-md border border-gray-300 text-center text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />

                                    {/* Increase Button */}
                                    <button
                                      onClick={() => {
                                        const input = document.getElementById(
                                          `quantity-input-${item.id}`
                                        );
                                        input.value = parseInt(input.value) + 1;
                                      }}
                                      className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-all duration-200 hover:bg-gray-300"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4"
                                      >
                                        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-col items-center justify-between space-y-2">
                                <button
                                  onClick={() => removeFromCart(item.id)}
                                  className="w-full rounded-md bg-red-600 p-2 text-sm font-medium text-white transition-all duration-300 hover:bg-red-700"
                                >
                                  <AiOutlineDelete className="text-[20px]" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* --------------------price show section-------------------- */}

                    <div className="border-t-2 border-gray-200 py-6">
                      <div className="flex flex-col space-y-4">
                        {/* Sub-Total Section 1 */}
                        <div className="flex items-center justify-between px-4">
                          <p className="text-[18px] font-bold text-gray-500">
                            Sub-Total:
                          </p>
                          <p className="text-[20px] font-bold text-[#545454]">
                            $2134
                          </p>
                        </div>

                        {/* Sub-Total Section 2 */}
                        <div className="flex items-center justify-between px-4">
                          <p className="text-[18px] font-bold text-gray-500">
                            Vat (20%):
                          </p>
                          <p className="text-[20px] font-bold text-[#545454]">
                            $2134
                          </p>
                        </div>

                        {/* Sub-Total Section 3 */}
                        <div className="flex items-center justify-between px-4">
                          <p className="text-[18px] font-bold text-gray-500">
                            Total:
                          </p>
                          <p className="text-[20px] font-bold text-[#545454]">
                            $2134
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 text-center">
                      <button className="w-full rounded bg-blue-500 py-2 text-[10px] text-white">
                        Go to Checkout
                      </button>
                      <button
                        onClick={addToCart}
                        className="m w-full rounded bg-green-500 py-2 text-[10px] text-white"
                      >
                        Add New Product
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
