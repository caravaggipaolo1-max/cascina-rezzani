"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) {
      return;
    }

    const updateProgress = () => {
      const rect = hero.getBoundingClientRect();
      const scrollable = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
      hero.style.setProperty("--hero-progress", progress.toFixed(3));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef} aria-label="Benvenuti a Cascina Rezzani">
      <div className="hero-sticky">
        <div className="hero-media" aria-hidden="true">
          <Image
            src="/images/hero/cancello-cascina-placeholder.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-content">
          <p className="hero-kicker">Società Agricola Cascina Rezzani</p>
          <h1>Benvenuti a Cascina Rezzani</h1>
          <p>
            Prodotti agricoli e specialità artigianali dal nostro territorio.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#prodotti">
              Scopri i prodotti
            </a>
            <a className="button secondary" href="#contatti">
              Contattaci
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
