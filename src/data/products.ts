export type Product = {
  name: string;
  slug: string;
  category: string;
  description: string;
  formats: string[];
  bottleStyle?: string;
  image: string;
  imageAlt: string;
  callToAction: string;
};

export const products: Product[] = [
  {
    name: "Crème de Cassis",
    slug: "creme-de-cassis",
    category: "Liquore al ribes nero",
    description:
      "Liquore artigianale a base di ribes nero, intenso, aromatico e versatile. Una specialità pensata per degustazioni, abbinamenti e momenti conviviali.",
    formats: ["70 cl", "10 cl"],
    bottleStyle: "Bottiglia stile Armagnac",
    image: "/images/products/creme-de-cassis-placeholder.jpg",
    imageAlt: "Bottiglia elegante di liquore al ribes nero",
    callToAction: "Richiedi informazioni"
  },
  {
    name: "Birra al ribes",
    slug: "birra-ribes",
    category: "Birra al ribes",
    description:
      "Una birra originale e fruttata, pensata per valorizzare il carattere aromatico del ribes con una bevuta fresca, equilibrata e distintiva.",
    formats: ["75 cl", "50 cl"],
    image: "/images/products/birra-ribes-placeholder.jpg",
    imageAlt: "Bottiglia artigianale di birra al ribes",
    callToAction: "Richiedi informazioni"
  },
  {
    name: "Spumante Brut",
    slug: "spumante-brut",
    category: "Spumante Brut",
    description:
      "Uno spumante brut elegante e asciutto, ideale per aperitivi, degustazioni e momenti conviviali.",
    formats: ["75 cl"],
    image: "/images/products/spumante-brut-placeholder.jpg",
    imageAlt: "Bottiglia elegante di spumante brut",
    callToAction: "Richiedi informazioni"
  }
];
