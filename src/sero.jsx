
import { Link } from 'react-router-dom';

function CtaSection() {
  return (
    <div
      className="bg-cover bg-center relative m-auto"
      style={{
        backgroundImage: 'url(/assits/hero/b1.JPG)', // background image
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay with a light color (White with slight opacity) */}
      <div className="absolute inset-0 bg-white bg-opacity-50 z-[1]"></div>

      {/* Main content area */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white py-12 md:py-24 lg:py-30 xl:py-30 w-full sm:px-[20px] px-[10px] md:px-[20px] lg:px-[20px]">
        <div className="bg-secondary bg-opacity-90 py-12 rounded-xl shadow-2xl text-center mx-auto w-full max-w-6xl ">
          
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


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy,  faGift,  faLaptopCode } from '@fortawesome/free-solid-svg-icons';

function BestContributor  ()  {
  return (
<section className="lg:flex items-center justify-between mx-auto gap-6 w-full max-w-screen-xl lg:py-24 md:pb-12 xl:py-24 py-4 px-[10px] md:px-[20px]">
  {/* Profile Section */}
  <div className="flex flex-col md:flex-row items-center mx-auto justify-center w-full bg-card p-10 rounded-xl shadow-md shadow-box-style shadow-primary">
    {/* Profile Image */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
      <img
        src="/assits/Rewardspage/profileImg.jpg"
        alt="Profile"
        className="max-w-[250px] h-[300px] shadow-box-style shadow-primary rounded-full border-4 border-gray-300 object-cover"
      />
    </div>

    {/* Profile Details */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h4 className="text-2xl font-primary font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-shadow-md transform transition-all duration-300">
        Md. Shakil Munshi
      </h4>
      <p className="text-lg text-white font-medium mb-2 font-primary "> Full Stack Developer </p>
      <p className="text-lg text-white font-medium mb-2 font-primary">Team: Joni Team </p>
      <p className="text-lg text-white font-medium mb-2 font-primary">Department: Full Stack</p>
      <p className="text-lg text-white font-medium mb-2  font-primary">Achieve Amount <strong className='text-primary font-primary'>$4800</strong> </p>

      {/* Icons */}
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-4">
        <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 text-xl" />
        <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 text-xl" />
        <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 text-xl" />
        <FontAwesomeIcon icon={faLaptopCode} className="text-red-500 text-xl" />
        <FontAwesomeIcon icon={faGift} className="text-purple-500 text-xl" />
      </div>
    </div>
  </div>

  {/* Thank You Section */}

<div className="w-full m-auto flex items-center justify-center py-[40px] md:py-0 md:mt-12 ">
  <div className="w-full max-w-lg text-center">
    {/* Font Awesome Trophy Icon */}
    <div className="flex justify-center mb-4">
      <FontAwesomeIcon icon={faTrophy} className="text-yellow-400 text-6xl" />
    </div>

    {/* Title */}
    <h4 className="text-3xl font-primary font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-shadow-md transform transition-all duration-300">
      Thank You & Congratulations!
    </h4>

    {/* Message */}
    <p className="text-xl text-accent mb-6 font-secondary">
      Your dedication and excellence have set a benchmark.
      <br />
      We are proud to honor you as our <strong className="text-primary">Best Contributor</strong>.
    </p>

    {/* CEO-like Quote */}
    <p className="text-md text-accent font-secondary font-medium italic">
      “Great teams are built by great individuals like you.” – CEO, MTS Software Company
    </p>
  </div>
</div>



</section>



  )
}

export default BestContributor
`````````````````



  <div className="flex items-center  gap-2 w-[200px]">
    <div className="flex-grow border-t-2 border-primary w-4"></div> {/* Left side of the divider */}
   <FaTrophy className="text-yellow-300 text-2xl"></FaTrophy>

    <div className="flex-grow border-t-2 border-primary"></div> {/* Right side of the divider */}
  </div> 


