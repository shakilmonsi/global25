import heroBanner from "../../../../assets/projectsPricingCart.png";

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-[400px] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black opacity-50"></div>

      <div className="relative z-10 flex items-center justify-center w-full h-full text-center text-white">
        <div>
          <h1 className="text-5xl font-bold mb-4">Technologies Used</h1>
          <p className="text-lg mb-8"></p>
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Contact Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
