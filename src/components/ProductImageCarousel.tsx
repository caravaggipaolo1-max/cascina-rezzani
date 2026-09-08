"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

type ProductImageCarouselProps = {
  images: GalleryImage[];
  priority?: boolean;
  sizes?: string;
};

export function ProductImageCarousel({
  images,
  priority = false,
  sizes = "(min-width: 900px) 44vw, 100vw"
}: ProductImageCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const selectedIndexRef = useRef(0);
  const loadedImageSources = useRef(new Set<string>());
  const selectedImage = images[selectedIndex];
  const hasMultipleImages = images.length > 1;

  if (!selectedImage) {
    return null;
  }

  const selectImage = (nextIndex: number) => {
    selectedIndexRef.current = nextIndex;
    setSelectedIndex(nextIndex);

    if (loadedImageSources.current.has(images[nextIndex]?.src)) {
      setVisibleIndex(nextIndex);
    }
  };

  const handleImageLoad = (index: number) => {
    const image = images[index];

    if (!image) {
      return;
    }

    loadedImageSources.current.add(image.src);

    if (selectedIndexRef.current === index) {
      setVisibleIndex(index);
    }
  };

  const showPrevious = () => {
    const currentIndex = selectedIndexRef.current;
    selectImage(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const showNext = () => {
    const currentIndex = selectedIndexRef.current;
    selectImage(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="product-gallery" role="group" aria-label="Galleria fotografica del prodotto">
      <div className="product-gallery-frame">
        {images.map((image, index) => (
          <Image
            key={image.src}
            className={`product-gallery-image${visibleIndex === index ? " is-active" : ""}`}
            src={image.src}
            alt={selectedIndex === index ? image.alt : ""}
            fill
            priority={priority && index === 0}
            loading={index === 0 ? undefined : "eager"}
            sizes={sizes}
            onLoad={() => handleImageLoad(index)}
          />
        ))}
        {hasMultipleImages ? (
          <div className="product-gallery-controls">
            <button
              className="product-gallery-nav"
              type="button"
              onClick={showPrevious}
              aria-label="Mostra la foto precedente"
              title="Foto precedente"
            >
              <span aria-hidden="true">&larr;</span>
            </button>
            <p className="product-gallery-count" aria-live="polite">
              {selectedIndex + 1} / {images.length}
            </p>
            <button
              className="product-gallery-nav"
              type="button"
              onClick={showNext}
              aria-label="Mostra la foto successiva"
              title="Foto successiva"
            >
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
