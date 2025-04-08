import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./TitleCards.css";

const TitleCards = ({ titlesName, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardRef = useRef(null);
  const [isAutoScroll, setIsAutoScroll] = useState(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzI4NzY5YTA5NGRjZTA2Mzg3NTRiYjgzYTFlYjI0NiIsIm5iZiI6MTc0MDM4MDMyNy43MTksInN1YiI6IjY3YmMxOGE3ZTVmZDE4ZjdiNjQ2NDExOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aHhZqn-qBSWHmufD4SqoIjMHAJHQGq_sIYoKknqjCjA",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    if (cardRef.current) {
      cardRef.current.scrollLeft += event.deltaY;
    }
    if (isAutoScroll) {
      setIsAutoScroll(false);
    }
  };

  useEffect(() => {
    // এখানে category ব্যবহার করা হচ্ছে fetch URL-এ, যাতে এটি লিন্টার ও TS এর জন্য ব্যবহৃত বলে গণ্য হয়।
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${
            category || "now_playing"
          }?language=en-US&page=1`,
          options
        );
        const data = await response.json();
        setApiData(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const currentRef = cardRef.current;
    const autoScrollInterval = setInterval(() => {
      if (isAutoScroll && currentRef) {
        if (
          currentRef.scrollLeft + currentRef.clientWidth >=
          currentRef.scrollWidth
        ) {
          currentRef.scrollLeft = 0;
        } else {
          currentRef.scrollLeft += 250;
        }
      }
    }, 1000);

    return () => {
      clearInterval(autoScrollInterval);
    };
  }, [isAutoScroll, category]);

  return (
    <div className="title-cards w-[1400px]">
      <h2 className="text-yellow-600 font-bold text-2xl uppercase pb-8 pt-2">
        {titlesName || "Popular on Netflix"}
      </h2>
      <div className="card-list" ref={cardRef} onWheel={handleWheel}>
        {Array.isArray(apiData) &&
          apiData.map((card) => (
            <div key={card.id} className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`}
                alt={card.original_title}
              />
              <div className="overlay"></div>
              <p>{card.original_title}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

TitleCards.propTypes = {
  titlesName: PropTypes.string,
  category: PropTypes.string, // category প্রপসটি string হিসেবে ব্যবহৃত হবে
};

export default TitleCards;

// import { useRef, useEffect, useState } from "react";
// import PropTypes from "prop-types"; // PropTypes ইমপোর্ট করুন
// // import cards_data from "../../../assets/cards/Cards_data";
// import "./TitleCards.css";

// const TitleCards = ({ titlesName, category }) => {
//   // ------------------API _data distuctring_________________add

//   const [apiData, setApiData] = useState([]);

//   const cardRef = useRef(null);
//   // ------------------API __________________add

//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzI4NzY5YTA5NGRjZTA2Mzg3NTRiYjgzYTFlYjI0NiIsIm5iZiI6MTc0MDM4MDMyNy43MTksInN1YiI6IjY3YmMxOGE3ZTVmZDE4ZjdiNjQ2NDExOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aHhZqn-qBSWHmufD4SqoIjMHAJHQGq_sIYoKknqjCjA",
//     },
//   };

//   //  fetch(
//   //   "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
//   //   options
//   //  )
//   //   .then((res) => res.json())
//   //   .then((res) => console.log(res))
//   //   .catch((err) => console.error(err));

//   // ------------------API __________________add

//   const [isAutoScroll, setIsAutoScroll] = useState(true);

//   const handleWheel = (event) => {
//     event.preventDefault();
//     if (cardRef.current) {
//       cardRef.current.scrollLeft += event.deltaY;
//     }

//     if (isAutoScroll) {
//       setIsAutoScroll(false);
//     }
//   };

//   // ------------------API __________________add

//   useEffect(() => {
//     fetch(
//       `https://api.themoviedb.org/3/movie/&{category?category: "now_playing"}?language=en-US&page=1`,
//       options
//     )
//       .then((res) => res.json())
//       .then((res) => setApiData(res.results))
//       .catch((err) => console.error(err));

//     // ------------------API __________________add

//     const currentRef = cardRef.current;

//     const autoScrollInterval = setInterval(() => {
//       if (isAutoScroll && currentRef) {
//         if (
//           currentRef.scrollLeft + currentRef.clientWidth >=
//           currentRef.scrollWidth
//         ) {
//           currentRef.scrollLeft = 0;
//         } else {
//           currentRef.scrollLeft += 250;
//         }
//       }
//     }, 1000);

//     return () => {
//       clearInterval(autoScrollInterval);
//     };
//   }, [isAutoScroll]);

//   return (
//     <div className="title-cards">
//       <h2 className="text-yellow-600 font-bold text-2xl uppercase pb-8 pt-2">
//         {titlesName ? titlesName : "Popular on Netflix"}
//       </h2>

//       <div className="card-list" ref={cardRef} onWheel={handleWheel}>
//         {apiData.map((card, index) => (
//           <div key={index} className="card">
//             <img
//               src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path}
//               alt={card.name}
//             />
//             <div className="overlay"></div>
//             <p>{card.original_title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Prop validation using PropTypes
// TitleCards.propTypes = {
//   titlesName: PropTypes.string, // titlesName should be a string
//   category: PropTypes.string, // titlesName should be a string
// };

// export default TitleCards;

// import { useRef, useEffect, useState } from "react";
// import cards_data from "../../../assets/cards/Cards_data";
// import "./TitleCards.css";

// const TitleCards = ({ titlesName }) => {

//   const cardRef = useRef(null);
//   const [isAutoScroll, setIsAutoScroll] = useState(true);

//   // Scroll by mouse wheel
//   const handleWheel = (event) => {
//     event.preventDefault();
//     if (cardRef.current) {
//       cardRef.current.scrollLeft += event.deltaY; // Horizontal scroll with wheel
//     }

//     // Stop auto-scroll when user manually scrolls
//     if (isAutoScroll) {
//       setIsAutoScroll(false);
//     }
//   };

//   // Auto-scroll functionality
//   useEffect(() => {
//     const currentRef = cardRef.current;

//     // Handle mouse wheel scroll
//     currentRef?.addEventListener("wheel", handleWheel, { passive: false });

//     // Auto-scroll every 500ms (adjust as needed)
//     const autoScrollInterval = setInterval(() => {
//       if (isAutoScroll && currentRef) {
//         if (
//           currentRef.scrollLeft + currentRef.clientWidth >=
//           currentRef.scrollWidth
//         ) {
//           // Reset the scroll position to the start if we reach the end
//           currentRef.scrollLeft = 0;
//         } else {
//           currentRef.scrollLeft += 250; // Scroll by a fixed width of one card (adjust if needed)
//         }
//       }
//     }, 1000); // Auto-scroll every 500ms

//     // Cleanup interval and event listener on component unmount
//     return () => {
//       clearInterval(autoScrollInterval);
//       currentRef?.removeEventListener("wheel", handleWheel);
//     };
//   }, [isAutoScroll]); // Effect depends on `isAutoScroll` state

//   return (
//     <div className="title-cards">
//       <h2 className="text-yellow-600 font-bold text-4xl uppercase pb-8 pt-2">
//         {titlesName ? titlesName : "Popular on Netflix"}
//       </h2>
//       <div className="card-list" ref={cardRef}>
//         {cards_data.map((card, index) => (
//           <div key={index} className="card">
//             <img src={card.image} alt={card.name} />
//             <div className="overlay"></div>
//             <p>{card.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TitleCards;
