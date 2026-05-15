import React, { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { LiaAngleRightSolid } from "react-icons/lia";

import bg from "@/public/images/home/best-selling/bg3.jpg";
import BestSellingCard from "./best-selling-card";

interface Game {
  id: string;
  title: string;
  desc: string;
  discountPrice?: number;
  originalPrice: number;
  poster: string;
  rating: number;
  stockStatus: string;
}

// ✅ Static data — edit these as needed
const STATIC_GAMES: Game[] = [
  {
    id: "1",
    title: "Syberia: The World Before",
    desc: "An open-world action-adventure set in Night City.",
    discountPrice: 49.99,
    originalPrice: 59.99,
    poster: "/images/home/swiper-carousel/syberia-banner.jpg",
    rating: 5.0,
    stockStatus: "IN_STOCK",
  },
  {
    id: "2",
    title: "Hogwarts Legacy",
    desc: "A vast lands between to explore, crafted by Hidetaka Miyazaki.",
    discountPrice: 35.0,
    originalPrice: 59.99,
    poster: "/images/home/best-selling/harry-potter.jpg",
    rating: 3.9,
    stockStatus: "IN_STOCK",
  },
  {
    id: "3",
    title: "Call of Duty Modern Warfare 2",
    desc: "Kratos and Atreus must journey to each of the Nine Realms.",
    originalPrice: 39.99,
    poster: "/images/home/best-selling/callofduty.jpg",
    rating: 4.6,
    stockStatus: "OUT_OF_STOCK",
  },
  {
    id: "4",
    title: "Need for Speed Payback",
    desc: "An open-world action-adventure set in Night City.",
    discountPrice: 29.99,
    originalPrice: 59.99,
    poster: "/images/home/best-selling/needforspeed.jpg",
    rating: 4.6,
    stockStatus: "IN_STOCK",
  },
  {
    id: "5",
    title: "Black Myth: Wukong",
    desc: "A vast lands between to explore, crafted by Hidetaka Miyazaki.",
    discountPrice: 49.99,
    originalPrice: 59.99,
    poster: "/images/home/best-selling/wukong.jpg",
    rating: 4.8,
    stockStatus: "IN_STOCK",
  },
  {
    id: "6",
    title: "Battlefield 6",
    desc: "Kratos and Atreus must journey to each of the Nine Realms.",
    originalPrice: 27.0,
    poster: "/images/home/best-selling/battlefield.jpg",
    rating: 5,
    stockStatus: "OUT_OF_STOCK",
  },
  {
    id: "7",
    title: "Age of Empires IV",
    desc: "Kratos and Atreus must journey to each of the Nine Realms.",
    originalPrice: 36.99,
    poster: "/images/home/best-selling/aoe.jpg",
    rating: 3,
    stockStatus: "OUT_OF_STOCK",
  },
  {
    id: "8",
    title: "Grand Theft Auto IV",
    desc: "Kratos and Atreus must journey to each of the Nine Realms.",
    originalPrice: 69.99,
    poster: "/images/home/best-selling/gta.jpg",
    rating: 4.9,
    stockStatus: "OUT_OF_STOCK",
  },
];

const BestSelling = () => {
  // ✅ No useEffect or axios needed — just use the static array directly
  const bestSellingGames: Game[] = STATIC_GAMES;

  return (
    <section
      className="relative bg-black bg-cover font-primaryFont text-white"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* Top gradient */}
      <div className="absolute top-0 w-full h-2/5 bg-gradient-to-b from-black to-transparent"></div>

      {/* Container */}
      <div className="container mx-auto px-[32px]">
        {/* Title */}
        <div className="text-[18px] uppercase font-medium w-fit mx-auto mb-[2.3em] text-center sm:text-[22px] md:text-[26px] lg:text-[29px] xl:text-[31px] 2xl:text-[33px]">
          <p className="text-[#0BDB45] translate-y-[55%]">Top much</p>
          <p
            className="font-bold text-[1.2em] border-[#0BDB45] border-[0.1em] px-[1em] py-[0.5em]"
            style={{
              clipPath:
                "polygon(0% 0%, 15% 0%, 15% 5%, 85% 5%, 85% 0%, 100% 0%, 100% 100%, 65% 100%, 65% 95%, 35% 95%, 35% 100%, 0% 100%)",
            }}
          >
            Best selling games
          </p>
        </div>

        {/* Product card grid */}
        <div className="grid grid-cols-2 gap-y-[10px] place-items-center lg:grid-cols-3 2xl:grid-cols-4 sm:gap-y-[15px] md:gap-y-[20px] lg:gap-y-[25px] xl:gap-y-[30px] 2xl:gap-y-[33px]">
          {bestSellingGames.map((game, i) => (
            <BestSellingCard key={game.id} game={game} i={i} />
          ))}
        </div>

        {/* See more */}
        <div className="grid grid-cols-2 place-items-center lg:grid-cols-3 2xl:grid-cols-4">
          <div className="w-[150px] col-start-2 flex justify-end sm:w-[200px] md:w-[240px] lg:w-[280px] lg:col-start-3 xl:w-[300px] 2xl:w-[320px] 2xl:col-start-4">
            <Link href="/shop-page">
              <Button
                variant="gaming"
                className="h-fit text-[7px] px-[2.26em] py-[0.5em] mt-[2em] mb-[4.5em] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px]"
              >
                See More <LiaAngleRightSolid />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 w-full h-2/5 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default BestSelling;
