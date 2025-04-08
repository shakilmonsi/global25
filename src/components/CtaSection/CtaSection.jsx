import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <div className="mt-20 bg-[#1983E7] py-12 px-6 rounded-xl shadow-xl text-white">
      <h3 className="text-3xl font-bold text-center mb-6">
        Become a Full-Stack Developer
      </h3>
      <p className="text-center text-lg mb-8">Start now</p>
      <div className="flex justify-center">
        <Link
          to="/"
          className="inline-block bg-cta text-cta-text text-base sm:text-lg font-semibold px-8 py-3 rounded-full shadow-md hover:bg-cta-active hover:text-cta-txt-active hover:scale-105 transform transition duration-300 ease-in-out"
        >
          ⬅️ Contact Now
        </Link>
      </div>
    </div>
  );
};

export default CtaSection;
