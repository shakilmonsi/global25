import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const products = [
  {
    id: 1,
    title: "Vegetables",
    image:
      "https://img.freepik.com/premium-photo/close-up-various-spices-bowls-white-background_1048944-16942779.jpg?uid=R152046755&semt=ais_hybrid",
    description: "Fresh and organic vegetables.",
    items: 45,
  },
  {
    id: 2,
    title: "Fruits",
    image:
      "https://img.freepik.com/free-photo/top-view-bundles-fresh-greens-tomatoes-with-stem-white-background_140725-143206.jpg?semt=ais_hybrid",
    description: "Seasonal fruits straight from the farm.",
    items: 30,
  },
  {
    id: 3,
    title: "Dairy Products",
    image:
      "https://img.freepik.com/premium-photo/close-up-various-spices-bowls-white-background_1048944-16942779.jpg?uid=R152046755&semt=ais_hybrid",
    description: "Fresh and organic dairy items.",
    items: 20,
  },
  {
    id: 4,
    title: "Spices",
    image:
      "https://img.freepik.com/premium-photo/composition-various-herbs-vegetables-isolsted-white_392895-405181.jpg?semt=ais_hybrid",
    description: "Pure and natural spices.",
    items: 60,
  },
  {
    id: 5,
    title: "Grains",
    image:
      "https://img.freepik.com/premium-photo/close-up-various-spices-bowls-white-background_1048944-16942779.jpg?uid=R152046755&semt=ais_hybrid",
    description: "High-quality grains for all needs.",
    items: 100,
  },
  {
    id: 6,
    title: "Beverages",
    image:
      "https://img.freepik.com/premium-photo/vegetables-isolated-white_404043-510.jpg?semt=ais_hybrid",
    description: "Fresh juices and drinks.",
    items: 80,
  },
  {
    id: 7,
    title: "Bakery Items",
    image:
      "https://img.freepik.com/premium-photo/close-up-various-spices-bowls-white-background_1048944-16942779.jpg?uid=R152046755&semt=ais_hybrid",
    description: "Delicious and fresh bakery goods.",
    items: 150,
  },
  {
    id: 8,
    title: "Meat & Poultry",
    image:
      "https://img.freepik.com/premium-photo/close-up-various-spices-bowls-white-background_1048944-16942779.jpg?uid=R152046755&semt=ais_hybrid",
    description: "Fresh meat and poultry products.",
    items: 45,
  },
  {
    id: 9,
    title: "Seafood",
    image:
      "https://img.freepik.com/premium-photo/close-up-various-spices-bowls-white-background_1048944-16942779.jpg?uid=R152046755&semt=ais_hybrid",
    description: "Fresh seafood directly from the sea.",
    items: 70,
  },
  {
    id: 10,
    title: "Snacks",
    image:
      "https://img.freepik.com/premium-photo/close-up-various-spices-bowls-white-background_1048944-16942779.jpg?uid=R152046755&semt=ais_hybrid",
    description: "Tasty snacks for every occasion.",
    items: 200,
  },
  {
    id: 11,
    title: "Frozen Foods",
    image:
      "https://img.freepik.com/premium-photo/close-up-various-spices-bowls-white-background_1048944-16942779.jpg?uid=R152046755&semt=ais_hybrid",
    description: "High-quality frozen foods.",
    items: 120,
  },
  {
    id: 12,
    title: "Organic Products",
    image:
      "https://img.freepik.com/premium-photo/vegetables-isolated-white_404043-510.jpg?semt=ais_hybrid",
    description: "Certified organic products for a healthy lifestyle.",
    items: 60,
  },
];

const ProductCarousel = () => {
  useEffect(() => {
    console.log("Swiper initialized");
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="w-[1527px] items-center justify-center px-4 py-20">
        <h2 className="mb-6 text-center text-2xl font-bold">
          Product Carousel
        </h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={5}
          pagination={{ clickable: true }}
          loop
          autoplay={{
            delay: 1000,
            disableOnInteraction: false, // Will continue autoplay even after user interaction
          }}
          breakpoints={{
            350: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="card w-full overflow-hidden overflow-x-hidden rounded-lg bg-[#F8F8DB] p-3 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#FCE3F5] hover:shadow-2xl">
                <div className="card-body rounded-lg bg-white p-2 shadow-md transition-all duration-300 ease-in-out hover:shadow-xl">
                  <div className="mb-4 w-full overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-[60px] w-full transform object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  </div>
                  <h2 className="card-title text-center text-[18px] font-bold text-black transition-colors duration-300 ease-in-out hover:text-[#FF5722]">
                    {product.title}
                  </h2>
                  <p className="text-center text-gray-600">
                    {product.items} Items
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductCarousel;
