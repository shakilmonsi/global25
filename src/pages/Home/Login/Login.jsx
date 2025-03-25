import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./login.css";
import { useState } from "react";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  return (
    <div className="login">
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="w-full max-w-md bg-gray-800 p-8 rounded-md shadow-md">
          <div className="flex justify-center mb-8">
            <img src={logo} alt="Logo" className="h-12" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white text-center mb-6">
              {signState}
            </h2>

            <form className="space-y-6">
              {/* Name Input - Only for Sign Up */}
              {signState === "Sign Up" && (
                <div>
                  <label className="block text-sm font-medium text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full mt-2 p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
              )}

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
                {signState}
              </button>

              {/* --------------------------check box --------------- */}
              <div className="form-help flex justify-between text-gray-400 text-sm mt-2">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-1" />
                  <label>Remember Me</label>
                </div>
                <p className="cursor-pointer hover:underline">Need Help?</p>
              </div>
            </form>
          </div>

          {/* Sign In / Sign Up Switch */}
          <div className="form-switch text-center mt-6">
            {signState === "Sign In" ? (
              <p className="text-white">
                New to Netflix?{" "}
                <span
                  onClick={() => setSignState("Sign Up")}
                  className="text-yellow-500 cursor-pointer hover:underline"
                >
                  Sign Up Now
                </span>
              </p>
            ) : (
              <p className="text-white">
                Already have an account?{" "}
                <span
                  onClick={() => setSignState("Sign In")}
                  className="text-yellow-500 cursor-pointer hover:underline"
                >
                  Sign In Now
                </span>
              </p>
            )}
          </div>

          <div className="text-center mt-6 text-gray-400">
            <p>
              <Link to="/Signup" className="text-yellow-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import { Link } from "react-router-dom";
// import logo from "../../../assets/logo.png";
// import "./login.css";
// import { useState } from "react";

// const Login = () => {
//   const [signState, setSignState] = useState("Sign In");

//   return (
//     <div className="login">
//       <div className="flex items-center justify-center min-h-screen bg-black">
//         <div className="w-full max-w-md bg-gray-800 p-8 rounded-md shadow-md">
//           <div className="flex justify-center mb-8">
//             <img src={logo} alt="Logo" className="h-12" />
//           </div>

//           {/* ----------------------this is  a new code------------------- */}

//           <div>
//             <h2 className="text-2xl font-semibold text-white text-center mb-6">
//               {signState}
//             </h2>

//             <form className="space-y-6">
//               {signState === "Sign Up" ? (
//                 <input
//                   type="text"
//                   placeholder="Sign Up"
//                   className="w-full mt-2 p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 />
//               ) : (
//                 <></>
//               )}

//               {/* Email Input */}

//               <div>
//                 <label className="block text-sm font-medium text-gray-400">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full mt-2 p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>

//               {/* Password Input */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-400">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   placeholder="Enter your password"
//                   className="w-full mt-2 p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full py-3 mt-4 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-600 focus:outline-none"
//               >
//                 {signState}
//               </button>
//               <div className="form-help flex">
//                 <div className="remove">
//                   <input type="checkbox" />
//                   <label htmlFor="">Remember Me</label>
//                 </div>
//                 <p>Need Help?</p>
//               </div>
//             </form>
//           </div>

//           {/* -----------------div------------- */}
//           <div className="form-swithc">
//             {signState === "sign In" ? (
//               <p className="text-white">
//                 New To Netflix?{" "}
//                 <span
//                   onClick={() => {
//                     setSignState("sign Up");
//                   }}
//                 >
//                   sign Up Now
//                 </span>
//               </p>
//             ) : (
//               <p className="text-g">
//                 Already Have Account?
//                 <span
//                   onClick={() => {
//                     setSignState("sign In");
//                   }}
//                 >
//                   sign In Now
//                 </span>
//               </p>
//             )}
//           </div>

//           <div className="text-center mt-6 text-gray-400">
//             <p>
//               <Link to="/Signup" className="text-yellow-500 hover:underline">
//                 Sign Up
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// // <div className="text-center mt-6 text-gray-400">
// //   <p>
// //     <Link to="/Signup" className="text-yellow-500 hover:underline">
// //       Sign Up
// //     </Link>
// //   </p>
// // </div>;

// //  <div>
// //         <label className="block text-sm font-medium text-gray-400">
// //           Email Address
// //         </label>
// //         <input
// //           type="email"
// //           placeholder="Enter your email"
// //           className="w-full mt-2 p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
// //         />
// //       </div>
