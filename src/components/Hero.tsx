"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const logoImage = "/images/logos/cascina-rezzani-logo.png";
  const gateImage = "/images/hero/gate-cutouts/01-closed.png";

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

    let animationFrame = 0;

    const updateProgress = () => {
      const rect = hero.getBoundingClientRect();
      const scrollable = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
      hero.style.setProperty("--hero-progress", progress.toFixed(3));
    };

    updateProgress();

    const requestUpdate = () => {
      if (animationFrame) {
        return;
      }

      animationFrame = window.requestAnimationFrame(() => {
        updateProgress();
        animationFrame = 0;
      });
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestUpdate);
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

        <div className="gate-fixed" aria-hidden="true">
          <img className="gate-side gate-side-left" src={gateImage} alt="" />
          <img className="gate-side gate-side-right" src={gateImage} alt="" />
        </div>

        <div className="gate-leaves" aria-hidden="true">
          <img className="gate-leaf gate-leaf-left" src={gateImage} alt="" />
          <img className="gate-leaf gate-leaf-right" src={gateImage} alt="" />
        </div>
      </div>
    </section>
  );
}
