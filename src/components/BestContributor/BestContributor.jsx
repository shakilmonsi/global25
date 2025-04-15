import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faGift,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

function BestContributor() {
  return (
    <section className="flex items-center justify-between mx-auto  gap-6 w-full max-w-screen-xl lg:py-24 md:py-18 xl:py-24 py-4  ">
      {/* Profile Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full bg-card  p-10 rounded-xl shadow-md shadow-box-style shadow-primary">
        {/* Profile Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
          <img
            src="/assits/Rewardspage/profileImg.jpg"
            alt="Profile"
            className="max-w-[250px] h-[300px] shadow-box-style shadow-primary rounded-full border-4 border-gray-300 object-cover"
          />
        </div>

        {/* Profile Details */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h4 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-shadow-md transform  transition-all duration-300">
            Name
          </h4>
          <p className="text-lg text-white font-medium mb-2">Designation</p>
          <p className="text-lg text-white  font-medium mb-2">Team Name</p>
          <p className="text-lg text-white  font-medium mb-2">
            Department Name
          </p>
          <p className="text-lg text-white  font-medium mb-2">Achieve Amount</p>
          <div className="flex items-center">
            <p className="text-lg text-white font-secondary mb-2">
              <FontAwesomeIcon
                icon={faTrophy}
                className="mr-2 text-yellow-500"
              />{" "}
            </p>
            <p className="text-lg text-white font-secondary mb-2">
              <FontAwesomeIcon
                icon={faTrophy}
                className="mr-2 text-yellow-500"
              />{" "}
            </p>
            <p className="text-lg text-white font-secondary mb-2">
              <FontAwesomeIcon
                icon={faTrophy}
                className="mr-2 text-yellow-500"
              />{" "}
            </p>
            <p className="text-lg text-white font-secondary mb-2">
              <FontAwesomeIcon
                icon={faLaptopCode}
                className="mr-2 text-red-500"
              />{" "}
            </p>
            <p className="text-lg text-white font-secondary mb-2">
              <FontAwesomeIcon icon={faGift} className="mr-2 text-purple-500" />{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Thank You Section */}
      <div className="w-full mt-12 flex items-center justify-center">
        <div className=" w-full max-w-lg text-center">
          <h4 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-shadow-md transform  transition-all duration-300">
            Thank You!
          </h4>
          <p className="text-xl text-[#FFF] mb-6  ">
            Your submission has been received. We appreciate your interest and
            will get back to you soon!
          </p>
        </div>
      </div>
    </section>
  );
}

export default BestContributor;






import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy,  faGift,  faLaptopCode } from '@fortawesome/free-solid-svg-icons';


function BestContributor  ()  {
  return (
<section className="lg:flex items-center justify-between mx-auto gap-6 w-full max-w-screen-xl lg:py-24 md:py-18 xl:py-24 py-4 px-[10px] md:px-[20px]">
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
      <p className="text-lg text-white font-medium mb-2 font-primary ">Designation</p>
      <p className="text-lg text-white font-medium mb-2 font-primary">Team Name</p>
      <p className="text-lg text-white font-medium mb-2 font-primary">Department Name</p>
      <p className="text-lg text-white font-medium mb-2  font-primary">Achieve Amount</p>

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
  <div className="w-full mt-12 flex items-center justify-center">
    <div className="w-full max-w-lg text-center">
      <h4 className="text-3xl font-primary font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-shadow-md transform transition-all duration-300">
        Thank You!
      </h4>
      <p className="text-xl text-accent mb-6 font-secondary">
        Your submission has been received. We appreciate your interest and will get back to you soon!
      </p>
    </div>
  </div>
</section>



  )
}

export default BestContributor












import React from "react";

// Static member data
const punctualityAwards = [
  {
    name: "John Doe",
    position: "Lead Developer",
    image: "/assits/Rewardspage/profileImg.jpg",
    award: "Employee of the Month",
    bio: "John is a passionate developer with 5+ years of experience.",
    experience: "5 years"
  },
  {
    name: "Jane Smith",
    position: "UI/UX Designer",
    image: "/assits/Rewardspage/profileImg.jpg",
    award: "Most Punctual",
    bio: "Jane is a creative mind and an expert in designing intuitive interfaces.",
    experience: "4 years"
  },
  {
    name: "Alex Johnson",
    position: "Project Manager",
    image: "/assits/Rewardspage/profileImg.jpg",
    award: "On-Time Performer",
    bio: "Alex is known for delivering projects on time with great leadership skills.",
    experience: "6 years"
  }
];

const PunctualityAwards = () => {
  return (
    <section className="bg-gradient-to-r text-white mx-auto gap-6 w-full max-w-screen-xl lg:py-24 md:py-16 xl:py-24 py-4 px-[10px] md:px-[20px]">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Section Heading */}
        <div className="flex items-center justify-center mx-auto md:mb-4 mb-4 lg:mb-6">
          <h4 className="lg:text-5xl overflow-y: auto leading-[67px] xl:text-5xl font-primary text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-shadow-md transform transition-all duration-300">
            Punctuality Awards
          </h4>
        </div>

        {/* Cards Container - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {punctualityAwards.map((member, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl transition-all shadow-md shadow-box-style shadow-primary"
            >
              <div className="flex flex-col items-center justify-center">
                <img
                  src={member.image}
                  alt={`Member ${index + 1}`}
                  className="w-32 h-32 mb-4 rounded-full border-4 border-white object-cover shadow-box-style shadow-primary"
                />
                <h4 className="text-xl font-semibold text-white mb-2 font-primary">{member.name}</h4>
                <p className="text-lg font-medium text-white mb-2 font-primary">{member.position}</p>
                <p className="text-[20px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary  font-primary  to-accent  mb-2">{member.award}</p>
                <p className="text-sm text-white mb-1 font-secondary">{member.bio}</p>
                <p className="text-sm text-white font-secondary">{member.experience} of Experience</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PunctualityAwards;



import React from "react";

// Static member data
const punctualityAwards = [
  {
    name: "John Doe",
    position: "Lead Developer",
    image: "/assits/Rewardspage/profileImg.jpg",
    award: "Employee of the Month",
    bio: "John is a passionate developer with 5+ years of experience.",
    experience: "5 years"
  },
  {
    name: "Jane Smith",
    position: "UI/UX Designer",
    image: "/assits/Rewardspage/profileImg.jpg",
    award: "Most Punctual",
    bio: "Jane is a creative mind and an expert in designing intuitive interfaces.",
    experience: "4 years"
  },
  {
    name: "Alex Johnson",
    position: "Project Manager",
    image: "/assits/Rewardspage/profileImg.jpg",
    award: "On-Time Performer",
    bio: "Alex is known for delivering projects on time with great leadership skills.",
    experience: "6 years"
  }
];

const PunctualityAwards = () => {
  return (
    <section className="bg-gradient-to-r text-white mx-auto gap-6 w-full max-w-screen-xl lg:py-24 md:py-16 xl:py-24 py-4 px-[10px] md:px-[20px]">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Section Heading */}
        <div className="flex items-center justify-center mx-auto md:mb-4 mb-4 lg:mb-6">
          <h4 className="lg:text-5xl overflow-y: auto leading-[67px] xl:text-5xl font-primary text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-shadow-md transform transition-all duration-300">
            Punctuality Awards
          </h4>
        </div>

        {/* Cards Container - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {punctualityAwards.map((member, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl transition-all shadow-md shadow-box-style shadow-primary"
            >
              <div className="flex flex-col items-center justify-center">
                <img
                  src={member.image}
                  alt={`Member ${index + 1}`}
                  className="w-32 h-32 mb-4 rounded-full border-4 border-white object-cover shadow-box-style shadow-primary"
                />
                <h4 className="text-xl font-semibold text-white mb-2 font-primary">{member.name}</h4>
                <p className="text-lg font-medium text-white mb-2 font-primary">{member.position}</p>
                <p className="text-[20px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary  font-primary  to-accent  mb-2">{member.award}</p>
                <p className="text-sm text-white mb-1 font-secondary">{member.bio}</p>
                <p className="text-sm text-white font-secondary">{member.experience} of Experience</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PunctualityAwards;


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy,  faGift,  faLaptopCode } from '@fortawesome/free-solid-svg-icons';


function BestContributor  ()  {
  return (
<section className="lg:flex items-center justify-between mx-auto gap-6 w-full max-w-screen-xl lg:py-24 md:py-18 xl:py-24 py-4 px-[10px] md:px-[20px]">
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
      <p className="text-lg text-white font-medium mb-2 font-primary ">Designation</p>
      <p className="text-lg text-white font-medium mb-2 font-primary">Team Name</p>
      <p className="text-lg text-white font-medium mb-2 font-primary">Department Name</p>
      <p className="text-lg text-white font-medium mb-2  font-primary">Achieve Amount</p>

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
  <div className="w-full mt-12 flex items-center justify-center">
    <div className="w-full max-w-lg text-center">
      <h4 className="text-3xl font-primary font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-shadow-md transform transition-all duration-300">
        Thank You!
      </h4>
      <p className="text-xl text-accent mb-6 font-secondary">
        Your submission has been received. We appreciate your interest and will get back to you soon!
      </p>
    </div>
  </div>
</section>



  )
}

export default BestContributor
// finalw proje================== 

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

<div className="w-full m-auto flex items-center justify-center py-[40px] md:py-0 md:mt-12">
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












import React from "react";

// Static member data
const risingtelent = [
  {
    name: "Shakil Munshi",
    position: "Full Stack Developer",
    image: "/assits/Rewardspage/profileImg.jpg",
  },
  {
    name: "Rani Roy",
    position: "UI/UX Designer",
    image: "/assits/Rewardspage/r1.png",
  },
  {
    name: "Alex Johnson",
    position: "Project Manager",
    image: "/assits/Rewardspage/r3.png",
  },
];

const RisingTalent = () => {
  return (
    <section className=" bg-gradient-to-r   text-accent  mx-auto gap-6 w-full max-w-screen-xl lg:py-24 md:py-16 xl:py-24 py-4 px-[10px] md:px-[20px]">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Section Heading */}
        
    <div className="flex items-center justify-center mx-auto md:mb-4 mb-4 lg:mb-6">
   
   <h4 className="lg:text-5xl overflow-y: auto;  leading-[67px] xl:text-5xl font-primary text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-shadow-md transform transition-all duration-300">
  Rising Talent
</h4>


    </div>
        {/* Cards Container - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {risingtelent.map((member, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl transition-all shadow-md shadow-box-style shadow-primary"
            >
              <div className="flex flex-col items-center justify-center">
                <img
                  src={member.image}
                  alt={`Member ${index + 1}`}
                  className="w-32 h-32 mb-4 rounded-full border-4 border-white  object-cover shadow-box-style shadow-primary"
                />
                <h4 className="text-[24px] font-semibold  mb-2 font-primary  text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-shadow-md transform transition-all duration-300">{member.name}</h4>
                <p className="text-lg font-medium text-accent font-primary">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RisingTalent;




import React from "react";

// Static member data
const punctualityAwards = [
  {
    name: "Shakil Munshi",
    position: "Lead Developer",
    image: "/assits/Rewardspage/profileImg.jpg",
    award: "Employee of the Month",
    bio: "John is a passionate developer with 5+ years of experience.",
    experience: "5 years"
  },
  {
    name: "Rani Roy",
    position: "UI/UX Designer",
    image: "public/assits/Rewardspage/r1.png",
    award: "Most Punctual",
    bio: "Jane is a creative mind and an expert in designing intuitive interfaces.",
    experience: "4 years"
  },
  {
    name: "Alex Johnson",
    position: "Project Manager",
    image: "/assits/Rewardspage/r3.png",
    award: "On-Time Performer",
    bio: "Alex is known for delivering projects on time with great leadership skills.",
    experience: "6 years"
  }
];

const PunctualityAwards = () => {
  return (
    <section className="bg-gradient-to-r text-white mx-auto gap-6 w-full max-w-screen-xl lg:py-24 md:py-16 xl:py-24 py-4 px-[10px] md:px-[20px]">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Section Heading */}
        <div className="flex items-center justify-center mx-auto md:mb-4 mb-4 lg:mb-6">
          <h4 className="lg:text-5xl overflow-y: auto leading-[67px] xl:text-5xl font-primary text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-shadow-md transform transition-all duration-300">
            Punctuality Awards
          </h4>
        </div>

        {/* Cards Container - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {punctualityAwards.map((member, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl transition-all shadow-md shadow-box-style shadow-primary"
            >
              <div className="flex flex-col items-center justify-center">
                <img
                  src={member.image}
                  alt={`Member ${index + 1}`}
                  className="w-32 h-32 mb-4 rounded-full border-4 border-white object-cover shadow-box-style shadow-primary"
                />
                  <h4 className="text-[24px] font-semibold  mb-2 font-primary  text-transparent bg-clip-text bg-gradient-to-r
                  from-primary to-accent text-shadow-md transform transition-all duration-300">{member.name}</h4>

                <p className="text-lg font-medium text-accent mb-2 font-primary">{member.position}</p>
                <p className="text-[20px] font-medium text-accent mb-2 font-primary">{member.award}</p>
                <p className="text-sm text-accent mb-1 font-secondary">{member.bio}</p>
                <p className="text-sm text-accent font-secondary">{member.experience} of Experience</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PunctualityAwards;

