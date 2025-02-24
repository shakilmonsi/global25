import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Sinup = () => {
  return (
    <div className="login">
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="w-full max-w-md bg-gray-800 p-8 rounded-md shadow-md">
          <div className="flex justify-center mb-8">
            <img src={logo} alt="Logo" className="h-12" />
          </div>
          <h2 className="text-2xl font-semibold text-white text-center mb-6">
            Sign In
          </h2>
          <form className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-400">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-400">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full mt-2 p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-400">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-2 p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-600 focus:outline-none"
            >
              Sign In
            </button>
          </form>
          <div className="text-center mt-6 text-gray-400">
            <p>
              <Link to="/login" className="text-yellow-500 hover:underline">
                LogIn
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sinup;
