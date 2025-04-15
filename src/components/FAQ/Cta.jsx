import { Link } from "react-router-dom";

function CtaSection() {
  return (
    <div
      className="bg-cover bg-center relative m-auto"
      style={{
        backgroundImage: "url(/assits/Rewardspage/r1.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay on the background */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Main content area */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white py-12 md:py-24 lg:py-30 xl:py-30 w-full sm:px-[20px] px-[10px] md:px-[20px] lg:px[20px]">
        <div className="bg-primary bg-opacity-90 py-12  rounded-xl shadow-2xl text-center mx-auto w-full max-w-6xl ">
          {/* Main Heading */}
          <h3 className="text-4xl font-extrabold mb-6">
            Become a Full-Stack Developer
          </h3>

          {/* Description */}
          <p className="text-lg mb-8">
            Start your journey to mastering full-stack development today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center space-x-4">
            <Link
              to="/learn-more"
              className="bg-transparent border border-white text-white font-semibold px-8 py-3 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110 hover:bg-white hover:text-gray-900"
            >
              Contact Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CtaSection;
