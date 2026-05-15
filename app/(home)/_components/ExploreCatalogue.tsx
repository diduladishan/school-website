"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import bg from "@/public/images/home/catalog/bg.png";
import character from "@/public/images/home/catalog/character.webp";
import styles from "./ExploreCatalogue.module.css";

export default function ExploreCatalogue() {
  const characterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = characterRef.current;
    if (!el) return;

    let frame: number;
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      // Slow breathing / floating motion
      const floatY = Math.sin(elapsed / 1500) * 10; // vertical ±10px, 3s cycle
      const floatX = Math.sin(elapsed / 4000) * 4; // subtle horizontal ±4px, 5s cycle
      const scale = 1 + Math.sin(elapsed / 3000) * 0.008; // very subtle scale pulse

      el.style.transform = `translate(${floatX}px, ${floatY}px) scale(${scale})`;
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className={styles.section}>
      {/* Background */}
      <div className={styles.bg}>
        <Image
          src={bg}
          alt=""
          fill
          priority
          quality={90}
          className={styles.bgImage}
        />
        {/* Dark overlay for contrast */}
        <div className={styles.bgOverlay} />
        {/* Green vignette / atmospheric glow */}
        <div className={styles.bgGlow} />
      </div>

      {/* Character */}
      <div className={styles.characterWrap} ref={characterRef}>
        <Image
          src={character}
          alt="Game character"
          fill
          priority
          quality={95}
          className={styles.character}
        />
        {/* Subtle ground shadow for depth */}
        <div className={styles.characterShadow} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.dividerTop} />

        <h2 className={styles.heading}>
          EXPLORE OUR
          <br />
          CATALOGUE
        </h2>

        <div className={styles.divider} />

        <p className={styles.bodytext}>
          There are thousands of games waiting for you to explore. Browse by
          genre, features, price, and more to find your next favorite game.
        </p>

        <p className={styles.bodytext}>
          There are thousands of games waiting for you to explore. Browse by
          genre, features, price, and more.
        </p>

        <a href="#catalogue" className={styles.cta}>
          Browse All Games
          <span className={styles.ctaArrow}>→</span>
        </a>
      </div>
    </section>
  );
}
