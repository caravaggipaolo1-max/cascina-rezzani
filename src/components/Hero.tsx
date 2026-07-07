"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const gateImage = "/images/hero/cancello-cascina-trasparente.svg";
  const logoImage = "/images/logos/cascina-rezzani-logo.png";

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      hero.style.setProperty("--hero-progress", "1");
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
    <section className="hero gate-hero" ref={heroRef} aria-label="Benvenuti a Cascina Rezzani">
      <div className="hero-sticky gate-stage">
        <div className="gate-logo-reveal" aria-hidden="true">
          <Image
            className="gate-reveal-logo"
            src={logoImage}
            alt=""
            width={900}
            height={244}
            priority
          />
        </div>

        <div className="gate-leaf gate-leaf-left" aria-hidden="true">
          <Image src={gateImage} alt="" fill priority sizes="100vw" />
        </div>
        <div className="gate-leaf gate-leaf-right" aria-hidden="true">
          <Image src={gateImage} alt="" fill priority sizes="100vw" />
        </div>

        <div className="gate-pillar gate-pillar-left" aria-hidden="true" />
        <div className="gate-pillar gate-pillar-right" aria-hidden="true" />
        <div className="gate-shadow" aria-hidden="true" />
      </div>
    </section>
  );
}
