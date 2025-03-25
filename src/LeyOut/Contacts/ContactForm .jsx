import { useRef } from "react";
import emailjs from "@emailjs/browser";
// import heroBanner from "../../../assets/projectsPricingCart.png";
import heroBanner from "../../assets/projectsPricingCart.png";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_60i9jid", "template_ismrjrd", form.current, {
        publicKey: "JJMc_Zke9xtK_Ygyj",
      })
      .then(
        () => {
          alert("ইমেইল সফলভাবে পাঠানো হয়েছে!");
        },
        (error) => {
          alert("ইমেইল পাঠাতে ব্যর্থ হয়েছে।");
        }
      );
  };

  return (
    <div
      className="relative w-full h-auto bg-cover bg-center py-28 px-4"
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black opacity-50"></div>

      <div className="relative z-10 flex items-center justify-between w-full h-full text-center text-white">
        {/* Form Section */}
        <div className="w-1/2 max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">
            যোগাযোগ করুন
          </h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label
                htmlFor="user_name"
                className="block text-sm font-medium text-gray-700"
              >
                নাম
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="user_email"
                className="block text-sm font-medium text-gray-700"
              >
                ইমেইল
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                বার্তা
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-[5px_5px_0_0_#008DBD] transition-transform duration-300 ease-in-out hover:scale-110"
            >
              Contact Now
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-1/2 ">
          <img src={heroBanner} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
