import "./Home.css";
import heroBanner from "../../assets/hero_banner.jpg";
import herotitle from "../../assets/hero_title.png";
import TitleCards from "./TitleCards/TitleCards";
// import play_icon from "../../assets/play_icon.png";
// import info_icon from "../../assets/info_icon.png";
const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <img src={heroBanner} className="banner_img " alt=""></img>

        <div className="hero-caption">
          <img src={herotitle} alt="" className="caption-img" />
          <h1 className="font-bold text-3xl  text-yellow-500 m-4">
            Unlimited Movies, TV Shows, and More
          </h1>
          <p className="font-bold text-1xl text-green-500 mt-2S">
            Stream thousands of movies and TV shows on any device. No
            commitments, cancel anytime
          </p>
          <div className="hero-button">
            <button
              className="btn bg-black p-4 m-4 text-2xl font-bold border-r-4 text-white"
              alt=""
            >
              {/* <img src={play_icon} alt="" /> */}
              play
            </button>
            <button
              className="btn bg-black p-4 m-4 text-2xl font-bold border text-white  border-r-4"
              alt=""
            >
              {/* <img src={info_icon} className="w-8" alt="" /> */}
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* ----------------------title card----------------- */}

      <TitleCards></TitleCards>
      {/* ------body homepage----------------title card----------------- */}
      <div className="more-cards bg-black">
        <TitleCards titlesName={"blockbuster Movies"} />
        <TitleCards titlesName={"Only on Netflix"} />
        <TitleCards titlesName={"Upcoming"} />
        <TitleCards titlesName={"Top Pics for You"} />
      </div>
    </div>
  );
};

export default Home;
