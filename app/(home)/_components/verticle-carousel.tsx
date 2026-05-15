import { useState } from "react";

import VerticalCarouselSkeleton from "./vertical-carousel-skeleton";
import VerticalCarouselCard from "./vertical-carousel-card";
import "./verticle-carousel.css";

const staticGameData = [
  {
    id: "670f554d92cae82274f98b54",
    poster: "/images/home/swiper-carousel/syberia-banner.jpg",
    name: "Syberia: The World Before",
    price: 49.99,
    rating: 5,
    soldOut: true,
  },
  {
    id: "670f5ce892cae82274f98b5b",
    poster: "/images/home/best-selling/ac4.webp",
    name: "Assassin's Creed III",
    price: 32.25,
    rating: 4.4,
    soldOut: false,
  },
  {
    id: "670fbcca0a1092877a48494c",
    poster: "/images/home/best-selling/aoe3.jpg",
    name: "Age of Empires III",
    price: 37.95,
    rating: 4.6,
    soldOut: false,
  },
  {
    id: "67160d8b0342881a0be83757",
    poster: "/images/home/swiper-carousel/call-of-duty-banner.jpg",
    name: "Call of Duty MW2",
    price: 44.99,
    rating: 4.9,
    soldOut: false,
  },
  {
    id: "670f554d92cae82274f98b55",
    poster: "/images/home/swiper-carousel/farcry-poster.jpg",
    name: "Far Cry 6",
    price: 27.45,
    rating: 4.8,
    soldOut: false,
  },
];

const VerticalCarousel = () => {
  return (
    <section className="relative bg-gradient-to-b from-black from-20% via-[#063C28] via-80% to-black font-primaryFont text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-1/12 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-1/12 h-full bg-gradient-to-l from-black to-transparent z-10"></div>

      <div className="container mx-auto sm:px-[36px] py-[60px] sm:py-[90px] md:py-[120px] lg:py-[150px] xl:py-[175px] 2xl:py-[200px]">
        {/* Title */}
        <div className="text-[18px] uppercase font-medium w-fit mx-auto mb-[2.3em] text-center flex-shrink-0 sm:text-[22px] md:text-[26px] lg:text-[29px] xl:text-[31px] 2xl:text-[33px]">
          <p className="text-[#0BDB45] translate-y-[55%]">Top much</p>
          <p
            className="font-bold text-[1.2em] border-[#0BDB45] border-[0.1em] px-[1em] py-[0.5em]"
            style={{
              clipPath:
                "polygon(0% 0%, 15% 0%, 15% 5%, 85% 5%, 85% 0%, 100% 0%, 100% 100%, 65% 100%, 65% 95%, 35% 95%, 35% 100%, 0% 100%)",
            }}
          >
            Latest games
          </p>
        </div>

        {/* Carousel */}
        <div className="vertical-carousel-container">
          {staticGameData.map(
            ({ id, poster, name, price, rating, soldOut }, i) => (
              <VerticalCarouselCard
                key={id}
                id={id}
                poster={poster}
                name={name}
                price={price}
                rating={rating}
                soldOut={soldOut}
                i={i}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default VerticalCarousel;
