const Store = () => {
  return (
    <div>
      <div className="mt-10">
        <div
          className="relative h-[96%] w-full rounded-2xl bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/vegetables-multicolored-fresh-ripe-salad-top-view-green-rustic-wooden-surface_140725-14216.jpg?semt=ais_hybrid')",
          }}
        >
          {/* Darker Overlay */}
          <div className="absolute inset-0 bg-black opacity-75"></div>
          {/* Centered Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold text-white">Our Top Most</h1>
            <p className="mt-2 text-2xl text-white">Products Check It Now</p>
            <div className="mt-4 w-full px-4">
              <button className="w-[50%] rounded-md border-r-4 border-b-4 border-[#008DBD] bg-blue-600 px-4 py-2 font-semibold text-black transition hover:bg-blue-700">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;







// TopRated.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";

// Example Product Data
const products = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  category: "Category",
  price: `$${(i + 1) * 5}.00`,
  img: "https://img.freepik.com/free-vector/green-vegetables-mix-white_98292-5108.jpg?semt=ais_hybrid",
}));

const TopRated = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between py-4">
        <h2 className="text-2xl font-bold">
          Top Rated <span className="text-green-400">Items</span>
        </h2>
        {/* Arrow Buttons */}
        <div className="flex gap-2">
          <button className="prev-button rounded-full p-2">◀</button>
          <button className="next-button rounded-full p-2">▶</button>
        </div>
      </div>

      {/* Swiper for products */}
      <Swiper
        className="my-4"
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: ".prev-button",
          nextEl: ".next-button",
        }}
        spaceBetween={20}
        slidesPerView={1} // Adjust to show 3 items at once
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {products.map((product) => (
          <SwiperSlide className="flex flex-col" key={product.id}>
            <div className="bg-base-100 flex rounded-[6px] border border-gray-300 p-4">
              <img
                className="h-[80px] w-[80px] bg-cover"
                src={product.img}
                alt={product.name}
              />
              <div className="ml-3">
                <h2 className="text-[18px] font-bold text-[#545454]">
                  {product.name}
                </h2>
                <p className="text-[14px] text-[#545454]">{product.category}</p>
                <div className="flex items-center gap-2">
                  <p className="text-[20px] font-bold text-black">
                    {product.price}
                  </p>
                  <p className="line-through">$50.00</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className="my-4"
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: ".prev-button",
          nextEl: ".next-button",
        }}
        spaceBetween={20}
        slidesPerView={1} // Adjust to show 3 items at once
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {products.map((product) => (
          <SwiperSlide className="flex flex-col" key={product.id}>
            <div className="bg-base-100 flex rounded-[6px] border border-gray-300 p-4">
              <img
                className="h-[80px] w-[80px] bg-cover"
                src={product.img}
                alt={product.name}
              />
              <div className="ml-3">
                <h2 className="text-[18px] font-bold text-[#545454]">
                  {product.name}
                </h2>
                <p className="text-[14px] text-[#545454]">{product.category}</p>
                <div className="flex items-center gap-2">
                  <p className="text-[20px] font-bold text-black">
                    {product.price}
                  </p>
                  <p className="line-through">$50.00</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className="my-4"
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: ".prev-button",
          nextEl: ".next-button",
        }}
        spaceBetween={20}
        slidesPerView={1} // Adjust to show 3 items at once
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {products.map((product) => (
          <SwiperSlide className="flex flex-col" key={product.id}>
            <div className="bg-base-100 flex rounded-[6px] border border-gray-300 p-4">
              <img
                className="h-[80px] w-[80px] bg-cover"
                src={product.img}
                alt={product.name}
              />
              <div className="ml-3">
                <h2 className="text-[18px] font-bold text-[#545454]">
                  {product.name}
                </h2>
                <p className="text-[14px] text-[#545454]">{product.category}</p>
                <div className="flex items-center gap-2">
                  <p className="text-[20px] font-bold text-black">
                    {product.price}
                  </p>
                  <p className="line-through">$50.00</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopRated;



import React from "react";

const TopMostProducst = () => {
  return (
    <div className="mt-10">
      <div
        className="relative h-[96%] w-full rounded-2xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/vegetables-multicolored-fresh-ripe-salad-top-view-green-rustic-wooden-surface_140725-14216.jpg?semt=ais_hybrid')",
        }}
      >
        {/* Darker Overlay */}
        <div className="absolute inset-0 bg-black opacity-75"></div>
        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-white">Our Top Most</h1>
          <p className="mt-2 text-2xl text-white">Products Check It Now</p>
          <div className="mt-4 w-full px-4">
            <button className="w-[50%] rounded-md border-r-4 border-b-4 border-[#008DBD] bg-blue-600 px-4 py-2 font-semibold text-black transition hover:bg-blue-700">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMostProducst;
