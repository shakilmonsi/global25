import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types"; // PropTypes ইমপোর্ট করুন
import cards_data from "../../../assets/cards/Cards_data";
import "./TitleCards.css";

const TitleCards = ({ titlesName }) => {
  const cardRef = useRef(null);
  const [isAutoScroll, setIsAutoScroll] = useState(true);

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
  }, [isAutoScroll]);

  return (
    <div className="title-cards">
      <h2 className="text-yellow-600 font-bold text-2xl uppercase pb-8 pt-2">
        {titlesName ? titlesName : "Popular on Netflix"}
      </h2>
      <div className="card-list" ref={cardRef} onWheel={handleWheel}>
        {cards_data.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={card.name} />
            <div className="overlay"></div>
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Prop validation using PropTypes
TitleCards.propTypes = {
  titlesName: PropTypes.string, // titlesName should be a string
};

export default TitleCards;

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
