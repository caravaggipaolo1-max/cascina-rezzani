import Image from "next/image";

export function Hero() {
  const logoImage = "/images/logos/cascina-rezzani-logo.png";

  return (
    <section className="hero logo-hero" aria-label="Cascina Rezzani">
      <Image
        className="logo-hero-logo"
        src={logoImage}
        alt="Cascina Rezzani"
        width={900}
        height={244}
        priority
      />
    </section>
  );
}
