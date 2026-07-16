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
  technicalDetails?: Array<{
    label: string;
    value: string;
  }>;
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
    image: "/images/products/creme-de-cassis-render.jpg",
    imageAlt: "Bottiglia elegante di liquore al ribes nero",
    callToAction: "Richiedi informazioni"
  },
  {
    name: "Birra al ribes",
    slug: "birra-ribes",
    category: "Birra artigianale",
    shortDescription:
      "Una birra artigianale al ribes, fresca e piacevolmente fruttata, nata per raccontare il lato più vivace dei frutti coltivati ai piedi del Montorfano.",
    detailDescription: [
      "La Birra al Ribes Cascina Rezzani unisce il carattere della birra artigianale alla freschezza aromatica del ribes. Un incontro originale, pensato per valorizzare un frutto coltivato nel nostro territorio e trasformarlo in una bevuta dalla personalita' riconoscibile.",
      "Al naso emergono note di frutto rosso e ribes, mentre al palato la componente fruttata accompagna la bevuta con equilibrio e una piacevole vivacita'. Il finale lascia una sensazione fresca, invitando a un altro sorso.",
      "Versatile e conviviale, e' ideale per l'aperitivo, per una degustazione in cascina o per accompagnare salumi, formaggi freschi e piatti semplici dal gusto deciso."
    ],
    formats: ["75 cl", "33 cl"],
    alcohol: "Da confermare",
    servingTemperature: "6-8 °C",
    retailPrice: "Da definire",
    availability: "Disponibile su richiesta",
    origin: "Cascina Rezzani",
    pairings: ["Salumi", "Formaggi freschi", "Aperitivi rustici"],
    notes: ["Ribes", "Freschezza", "Finale fruttato"],
    image: "/images/products/birra-ribes-render.jpg",
    imageAlt: "Bottiglia artigianale di birra al ribes",
    callToAction: "Richiedi informazioni"
  },
  {
    name: "Franciacorta Brut",
    slug: "franciacorta-brut",
    category: "Metodo Classico",
    shortDescription:
      "Un Franciacorta Brut fresco ed equilibrato, ottenuto da uve Chardonnay e caratterizzato da una beva elegante, minerale e sapida.",
    detailDescription: [
      "Il Franciacorta Brut Cascina Rezzani nasce da una cuvée di vini Chardonnay. È una bollicina fresca ed equilibrata, pensata per esprimere il carattere classico della Franciacorta con una lettura pulita, elegante e immediata.",
      "L'affinamento in acciaio e la successiva permanenza in bottiglia sui lieviti valorizzano le note minerali e sapide, mantenendo un profilo asciutto, fine e piacevole alla beva.",
      "Al calice si presenta giallo paglierino con riflessi dorati, con perlage fine e persistente. Il profumo richiama note floreali intense, mentre il sorso è elegante e fresco, con sentori di pesca e una piacevole chiusura minerale."
    ],
    formats: ["75 cl", "1,5 L"],
    alcohol: "12,5% vol.",
    servingTemperature: "6-8 °C",
    retailPrice: "22€",
    availability: "Disponibile su richiesta",
    origin: "Franciacorta",
    pairings: ["Aperitivi", "Antipasti di mare", "Verdure", "Piatti delicati"],
    notes: ["100% Chardonnay", "Fresco ed equilibrato", "Mineralità", "Perlage fine e persistente"],
    technicalDetails: [
      { label: "Affinamento sui lieviti", value: "Minimo 20 mesi" },
      { label: "Zuccheri residui", value: "4,4 g/l" },
      { label: "Acidità totale", value: "6,1 g/l" },
      { label: "Colore", value: "Giallo paglierino con riflessi dorati" },
      { label: "Perlage", value: "Fine e persistente, con schiuma cremosa" },
      { label: "Profumo", value: "Note floreali intense con un piacevole finale minerale di grafite" },
      { label: "Sapore", value: "Elegante e fresco, con sentori di pesca accompagnati da piacevoli note minerali" }
    ],
    image: "/images/products/franciacorta-brut-render.jpg",
    imageAlt: "Bottiglia elegante di Franciacorta Brut",
    callToAction: "Richiedi informazioni"
  },
  {
    name: "Franciacorta Satèn",
    slug: "franciacorta-saten",
    category: "Metodo Classico",
    shortDescription:
      "Un Franciacorta Satèn elegante e vellutato, pensato per esaltare la morbidezza dello Chardonnay e la finezza della bollicina.",
    detailDescription: [
      "Il Franciacorta Satèn Cascina Rezzani è una bollicina elegante, morbida e raffinata. Nasce per raccontare il lato più vellutato dello Chardonnay coltivato in Franciacorta, con un'effervescenza delicata e una sensazione cremosa al palato.",
      "È un blanc de blancs dalla personalità fine e armoniosa, in cui mineralità e sapidità si fondono con la morbida eleganza del vitigno. L'affinamento in acciaio e la lunga permanenza sui lieviti contribuiscono a costruire complessità, equilibrio e persistenza.",
      "Al calice si presenta giallo paglierino con riflessi dorati. Il perlage è estremamente fine e cremoso, con bollicine setose e persistenti. Il profumo richiama fiori bianchi, nocciola tostata, miele d'acacia e un tocco di agrumi canditi."
    ],
    formats: ["75 cl", "1,5 L"],
    alcohol: "12,0% vol.",
    servingTemperature: "6-8 °C",
    retailPrice: "22€",
    availability: "Disponibile su richiesta",
    origin: "Franciacorta",
    pairings: ["Antipasti di pesce", "Risotti delicati", "Crostacei", "Formaggi freschi"],
    notes: ["Blanc de blancs", "Elegante", "Bollicina setosa", "Struttura vellutata"],
    technicalDetails: [
      { label: "Affinamento sui lieviti", value: "Oltre 30 mesi" },
      { label: "Zuccheri residui", value: "4,6 g/l" },
      { label: "Acidità totale", value: "5,7 g/l" },
      { label: "Colore", value: "Giallo paglierino con riflessi dorati" },
      { label: "Perlage", value: "Estremamente fine e cremoso, con bollicine setose e persistenti" },
      { label: "Profumo", value: "Sentori di fiori bianchi, nocciola tostata e miele d'acacia, con un tocco di agrumi canditi" },
      { label: "Sapore", value: "Morbido ed equilibrato, con struttura vellutata, note di pasta frolla e vaniglia e finale persistente con sfumature minerali" }
    ],
    image: "/images/products/franciacorta-saten-render.jpg",
    imageAlt: "Bottiglia elegante di Franciacorta Satèn",
    callToAction: "Richiedi informazioni"
  }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
