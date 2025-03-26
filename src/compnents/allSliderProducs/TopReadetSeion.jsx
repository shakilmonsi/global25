import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Grid } from "swiper/modules";
import { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$10.00",
    img: "https://img.freepik.com/free-vector/green-vegetables-mix-white_98292-5108.jpg?semt=ais_hybrid",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$15.00",
    img: "https://img.freepik.com/free-vector/healthy-fresh-vegetables-background_1308-121411.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$20.00",
    img: "https://img.freepik.com/free-vector/organic-vegetables-realistic-composition_1284-17057.jpg",
  },
  {
    id: 4,
    name: "Product 4",
    price: "$25.00",
    img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-vegetables-background_52683-43916.jpg",
  },
  {
    id: 5,
    name: "Product 5",
    price: "$30.00",
    img: "https://img.freepik.com/free-vector/hand-drawn-fruits-vegetables-pattern-design_23-2148656492.jpg",
  },
  {
    id: 6,
    name: "Product 6",
    price: "$35.00",
    img: "https://img.freepik.com/free-vector/vegetables-fruits-doodle-seamless-pattern_1284-42081.jpg",
  },
];

const TopReadetSeion = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <div className="w-full py-6">
      <div className="flex items-center justify-between pb-4">
        <h2 className="text-2xl font-bold">
          Trending <span className="text-[#1E3A8A]">Items</span>
        </h2>
        {/* Arrow Buttons */}
        <div className="flex gap-2">
          <button className="prev-buttonss hover:bg-[#1E3A8A]">◀</button>
          <button className="next-buttonss hover:bg-[#1E3A8A]">▶</button>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        className="my-4"
        ref={swiperRef}
        modules={[Navigation, Autoplay, Grid]}
        navigation={{
          prevEl: ".prev-buttonss",
          nextEl: ".next-buttonss",
        }}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        grid={{ rows: 2, fill: "row" }} // ২টি রোতে দেখাবে
        breakpoints={{
          320: { slidesPerView: 1, grid: { rows: 3 } }, // মোবাইলে ১ কলাম × ৩ রো
          768: { slidesPerView: 1, grid: { rows: 3 } }, // ট্যাবলেটে ২ কলাম × ৩ রো
          1024: { slidesPerView: 1, grid: { rows: 3 } }, // ডেস্কটপে ৩ কলাম × ৩ রো
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="flex flex-col">
            <div className="s flex items-center rounded-lg border border-gray-300 bg-white p-4">
              <img
                className="h-20 w-20 rounded-md object-cover"
                src={product.img}
                alt={product.name}
              />
              <div className="ml-3">
                <h2 className="text-lg font-bold text-gray-700">
                  {product.name}
                </h2>
                <p className="text-gray-500">Category</p>
                <div className="flex items-center gap-2">
                  <p className="text-xl font-bold text-black">
                    {product.price}
                  </p>
                  <p className="text-sm text-gray-500 line-through">$50.00</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopReadetSeion;
