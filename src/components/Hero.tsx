"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const currentFrameRef = useRef<HTMLImageElement | null>(null);
  const nextFrameRef = useRef<HTMLImageElement | null>(null);
  const logoImage = "/images/logos/cascina-rezzani-logo.png";
  const gateFrames = [
    "/images/hero/gate-cutouts/01-closed.png",
    "/images/hero/gate-cutouts/02-opening.png",
    "/images/hero/gate-cutouts/03-opening.png",
    "/images/hero/gate-cutouts/04-opening.png",
    "/images/hero/gate-cutouts/05-opening.png",
    "/images/hero/gate-cutouts/06-opening.png",
    "/images/hero/gate-cutouts/07-open.png",
  ];

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      hero.style.setProperty("--hero-progress", "1");
      currentFrameRef.current?.setAttribute("src", gateFrames[gateFrames.length - 1]);
      hero.style.setProperty("--gate-current-opacity", "1");
      hero.style.setProperty("--gate-next-opacity", "0");
      return;
    }

    const updateProgress = () => {
      const rect = hero.getBoundingClientRect();
      const scrollable = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
      hero.style.setProperty("--hero-progress", progress.toFixed(3));

      const framePosition = progress * (gateFrames.length - 1);
      const activeFrame = Math.floor(framePosition);
      const blend = framePosition - activeFrame;

      if (hero.dataset.activeGateFrame !== String(activeFrame)) {
        currentFrameRef.current?.setAttribute("src", gateFrames[activeFrame]);
        nextFrameRef.current?.setAttribute("src", gateFrames[Math.min(activeFrame + 1, gateFrames.length - 1)]);
        const preloadFrame = new window.Image();
        preloadFrame.src = gateFrames[Math.min(activeFrame + 2, gateFrames.length - 1)];
        hero.dataset.activeGateFrame = String(activeFrame);
      }

      hero.style.setProperty("--gate-current-opacity", (1 - blend).toFixed(3));
      hero.style.setProperty("--gate-next-opacity", blend.toFixed(3));
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

        <div className="gate-sequence" aria-hidden="true">
          <img
            className="gate-frame gate-frame-current"
            ref={currentFrameRef}
            src={gateFrames[0]}
            alt=""
          />
          <img
            className="gate-frame gate-frame-next"
            ref={nextFrameRef}
            src={gateFrames[1]}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
