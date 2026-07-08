export type Product = {
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  detailDescription: string[];
  formats: string[];
  bottleStyle?: string;
  alcohol: string;
  servingTemperature: string;
  retailPrice: string;
  availability: string;
  origin: string;
  pairings: string[];
  notes: string[];
  image: string;
  imageAlt: string;
  callToAction: string;
};

export const products: Product[] = [
  {
    name: "Crème de Cassis",
    slug: "creme-de-cassis",
    category: "Liquore al ribes nero",
    shortDescription:
      "Liquore al ribes nero dal gusto intenso, ricco e fruttato. Una specialità versatile, ideale da degustare fresca, con ghiaccio, con vino bianco o in abbinamento alle bollicine.",
    detailDescription: [
      "La Crème de Cassis nasce per valorizzare il carattere profondo del ribes nero. Il frutto regala un colore scuro e brillante, un profumo avvolgente e un gusto pieno, morbido e persistente.",
      "La lavorazione si ispira alla tradizione dei liquori al ribes: le bacche vengono lasciate macerare per estrarre aromi, colore e struttura, ottenendo un'infusione intensa che viene poi addolcita per raggiungere equilibrio e piacevolezza.",
      "Si può gustare liscia, fresca o con ghiaccio. È ottima anche con vino bianco secco, con spumante o Franciacorta, e può diventare un ingrediente elegante per cocktail, dessert, gelati e preparazioni di pasticceria."
    ],
    formats: ["70 cl", "10 cl"],
    bottleStyle: "Bottiglia stile Armagnac",
    alcohol: "20% vol. - dato provvisorio",
    servingTemperature: "Da servire fresco",
    retailPrice: "Da definire",
    availability: "Disponibile su richiesta",
    origin: "Cascina Rezzani",
    pairings: ["Vino bianco secco", "Franciacorta", "Gelato alla crema", "Dessert"],
    notes: ["Ribes nero", "Frutto maturo", "Colore intenso", "Profilo aromatico ricco"],
    image: "/images/products/creme-de-cassis-placeholder.jpg",
    imageAlt: "Bottiglia elegante di liquore al ribes nero",
    callToAction: "Richiedi informazioni"
  },
  {
    name: "Birra al ribes",
    slug: "birra-ribes",
    category: "Birra artigianale",
    shortDescription:
      "Una birra originale e fruttata, pensata per valorizzare il carattere aromatico del ribes con una bevuta fresca, equilibrata e distintiva.",
    detailDescription: [
      "La birra al ribes nasce come proposta fresca e originale, con una componente fruttata pensata per rendere la bevuta riconoscibile senza appesantirla.",
      "È indicata per aperitivi informali, degustazioni in cascina e abbinamenti con piatti semplici e saporiti."
    ],
    formats: ["75 cl", "50 cl"],
    alcohol: "Da confermare",
    servingTemperature: "6-8 °C",
    retailPrice: "Da definire",
    availability: "Disponibile su richiesta",
    origin: "Cascina Rezzani",
    pairings: ["Salumi", "Formaggi freschi", "Aperitivi rustici"],
    notes: ["Ribes", "Freschezza", "Finale fruttato"],
    image: "/images/products/birra-ribes-placeholder.jpg",
    imageAlt: "Bottiglia artigianale di birra al ribes",
    callToAction: "Richiedi informazioni"
  },
  {
    name: "Franciacorta Brut",
    slug: "franciacorta-brut",
    category: "Metodo Classico",
    shortDescription:
      "Un Franciacorta Brut elegante e asciutto, pensato per accompagnare aperitivi, degustazioni e momenti conviviali con una bollicina fine e armoniosa.",
    detailDescription: [
      "Il Franciacorta Brut è una bollicina secca ed elegante, pensata per chi cerca freschezza, equilibrio e una beva pulita.",
      "La descrizione è provvisoria e verrà completata con scheda tecnica definitiva, vitigni, affinamento e note di degustazione ufficiali."
    ],
    formats: ["75 cl"],
    alcohol: "12,5% vol. - dato provvisorio",
    servingTemperature: "6-8 °C",
    retailPrice: "22€",
    availability: "Disponibile su richiesta",
    origin: "Franciacorta",
    pairings: ["Aperitivi", "Antipasti", "Pesce", "Formaggi delicati"],
    notes: ["Bollicina fine", "Profilo asciutto", "Freschezza"],
    image: "/images/products/franciacorta-brut-placeholder.jpg",
    imageAlt: "Bottiglia elegante di Franciacorta Brut",
    callToAction: "Richiedi informazioni"
  },
  {
    name: "Franciacorta Satèn",
    slug: "franciacorta-saten",
    category: "Metodo Classico",
    shortDescription:
      "Un Franciacorta Satèn morbido e raffinato, dalla spuma cremosa e dal profilo delicato. Una proposta provvisoria pensata per raccontare il lato più vellutato della cantina.",
    detailDescription: [
      "Il Franciacorta Satèn è una proposta più morbida e vellutata, caratterizzata da una spuma cremosa e da una sensazione elegante al palato.",
      "La descrizione è provvisoria e verrà completata con dati definitivi su uvaggio, affinamento, annata e profilo sensoriale."
    ],
    formats: ["75 cl"],
    alcohol: "12,5% vol. - dato provvisorio",
    servingTemperature: "6-8 °C",
    retailPrice: "22€",
    availability: "Disponibile su richiesta",
    origin: "Franciacorta",
    pairings: ["Primi delicati", "Pesce", "Carni bianche", "Formaggi morbidi"],
    notes: ["Spuma cremosa", "Profilo morbido", "Eleganza"],
    image: "/images/products/franciacorta-saten-placeholder.jpg",
    imageAlt: "Bottiglia elegante di Franciacorta Satèn",
    callToAction: "Richiedi informazioni"
  }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
