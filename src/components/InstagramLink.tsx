"use client";

import type { MouseEvent } from "react";

const INSTAGRAM_URL = "https://www.instagram.com/cascinarezzani/";
const INSTAGRAM_APP_URL = "instagram://user?username=cascinarezzani";
const MOBILE_USER_AGENT = /Android|iPhone|iPad|iPod/i;

export function InstagramLink() {
  const openInstagram = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!MOBILE_USER_AGENT.test(window.navigator.userAgent)) {
      return;
    }

    event.preventDefault();

    let fallbackTimer = 0;
    const cancelFallback = () => {
      if (document.visibilityState !== "hidden") {
        return;
      }

      window.clearTimeout(fallbackTimer);
      document.removeEventListener("visibilitychange", cancelFallback);
    };

    document.addEventListener("visibilitychange", cancelFallback);
    fallbackTimer = window.setTimeout(() => {
      document.removeEventListener("visibilitychange", cancelFallback);
      window.location.assign(INSTAGRAM_URL);
    }, 1200);

    window.location.assign(INSTAGRAM_APP_URL);
  };

  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noreferrer"
      onClick={openInstagram}
    >
      Instagram: @cascinarezzani
    </a>
  );
}
