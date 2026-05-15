"use client";

import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import SwiperCarouselCard from "./swiper-carousel-card";

interface GameData {
  id: string;
  background: string;
  poster: string;
  title: string;
  rating: number;
  description: string;
  price: number;
  wishlistedBy: number;
  releaseDate: string;
  soldOut: boolean;
}

const staticGameData: GameData[] = [
  {
    id: "1",
    background: "/images/home/swiper-carousel/syberia-banner.jpg",
    poster: "/images/home/swiper-carousel/syberia-poster.png",
    title: "Syberia: The World Before",
    rating: 5,
    description:
      "Syberia: The World Before is a story-driven adventure game developed by Microids. The game follows Kate Walker and Dana Roze across different timelines as they uncover mysteries connected by war, identity, and personal loss.",
    price: 59.99,
    wishlistedBy: 12500,
    releaseDate: "2024-03-15",
    soldOut: false,
  },
  {
    id: "2",
    background: "/images/home/swiper-carousel/call-of-duty-banner.jpg",
    poster: "/images/home/swiper-carousel/call-of-duty-poster.jpg",
    title: "Call of Duty Modern Warfare",
    rating: 4,
    description:
      "Call of Duty: Modern Warfare delivers intense military combat, cinematic storytelling, realistic missions, multiplayer action, and fast-paced tactical gameplay experiences worldwide.",
    price: 49.99,
    wishlistedBy: 8200,
    releaseDate: "2024-01-20",
    soldOut: false,
  },
  {
    id: "3",
    background: "/images/home/swiper-carousel/forza-banner.jpg",
    poster: "/images/home/swiper-carousel/forza-poster.jpg",
    title: "Forza Horizon 5",
    rating: 4,
    description:
      "Forza Horizon 5 promises immersive open-world racing, stunning visuals, dynamic weather, diverse vehicles, and exciting high-speed exploration adventures worldwide.",
    price: 39.99,
    wishlistedBy: 5300,
    releaseDate: "2023-11-10",
    soldOut: true,
  },
  {
    id: "4",
    background: "/images/home/swiper-carousel/farcry-banner.jpg",
    poster: "/images/home/swiper-carousel/farcry-poster.jpg",
    title: "Far Cry 6",
    rating: 5,
    description:
      "Far Cry 6 features intense action, open-world exploration, guerrilla warfare, dynamic combat, and a thrilling revolution against a ruthless dictator.",
    price: 29.99,
    wishlistedBy: 3100,
    releaseDate: "2023-09-05",
    soldOut: false,
  },
];

const SwiperCarousel = () => {
  const [bg, setBg] = useState(staticGameData[0].background);
  const [gameData] = useState<GameData[]>(staticGameData);

  const handleSlideChange = (swiper: { realIndex: number }) => {
    const realIndex = swiper.realIndex;
    setBg(gameData[realIndex]?.background);
  };

  return (
    <section
      className={`relative min-h-svh bg-cover bg-center flex items-center justify-center font-primaryFont font-semibold text-[8px] lg:text-[9px] xl:text-[11px] 2xl:text-[13px] text-white transition-all duration-1000 ease-in-out`}
      style={{
        backgroundImage: `url('${bg}')`,
      }}
    >
      {/* Top gradient */}
      <div className="absolute top-0 w-full h-2/5 bg-gradient-to-b from-black to-transparent"></div>

      <div className="relative container mx-auto pb-[2em] z-20">
        <Swiper
          modules={[EffectCoverflow, Pagination, Autoplay]}
          speed={1500}
          loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 55,
            stretch: 40,
            depth: 400,
            modifier: 1,
            scale: 0.6,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          autoplay={{ disableOnInteraction: false, pauseOnMouseEnter: true }}
          onSlideChange={handleSlideChange}
          className="mySwiper"
        >
          {gameData.map(
            (
              {
                id,
                poster,
                title,
                rating,
                description,
                price,
                releaseDate,
                soldOut,
              },
              i,
            ) => (
              <SwiperSlide key={id}>
                <SwiperCarouselCard
                  id={gameData[i]?.id || id}
                  poster={poster}
                  title={title}
                  rating={Math.round(rating)}
                  description={description}
                  price={price}
                  releaseDate={releaseDate}
                  soldOut={soldOut}
                />
              </SwiperSlide>
            ),
          )}
        </Swiper>
        <style>{`
            .swiper {
              width: 100%;
              padding-top: 6%;
              padding-bottom: 5%;
            }
            
            .swiper-slide {
              width: 340px;
            }
              
            .swiper-slide-next {
              background-color: transparent;
            }

            .swiper-pagination-bullet {
              background-color: #45F882;
              transition-property: all;
              transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
              transition-duration: 1s;
              margin-bottom: 200px;
            }
  
            .swiper-pagination-bullet-active {
              scale: 1.8;
            }

            @media (min-width: 768px) {
              .swiper-slide {
                width: 70%;
              }
            }

            @media (min-width: 1024px) {
              .swiper-slide {
                width: 60%;
              }
            }

            @media (min-width: 1024px) {
              .swiper-slide {
                width: 55%;
              }
            }
          `}</style>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 w-full h-2/5 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  );
};

export default SwiperCarousel;
