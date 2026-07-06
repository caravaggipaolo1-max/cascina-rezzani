# Società Agricola Cascina Rezzani

Sito vetrina one-page per Società Agricola Cascina Rezzani, pensato per presentare la cascina, i prodotti e i contatti aziendali.

Il sito non include e-commerce, carrello, checkout, pagamenti, login, database o CMS.

## Tecnologia

- Next.js
- TypeScript
- CSS moderno in `src/styles/globals.css`
- Immagini statiche in `public/images/`

## Avvio in locale

```bash
npm install
npm run dev
```

Poi aprire `http://localhost:3000`.

## Modificare i prodotti

I dati dei prodotti si trovano in:

```text
src/data/products.ts
```

Da qui si possono modificare nome, descrizione, categoria, formati, stile bottiglia, immagine e call to action.

## Sostituire le immagini

Le immagini provvisorie sono organizzate così:

```text
public/images/hero/cancello-cascina-placeholder.jpg
public/images/cascina/cascina-placeholder.jpg
public/images/products/creme-de-cassis-placeholder.jpg
public/images/products/birra-ribes-placeholder.jpg
public/images/products/spumante-brut-placeholder.jpg
public/images/logos/logo-placeholder.png
```

Quando arrivano le foto definitive, basta sostituire i file mantenendo lo stesso nome. In alternativa, aggiornare i percorsi in `src/data/products.ts` o nei componenti interessati.

## Contatti

I placeholder di indirizzo, telefono, email e WhatsApp sono in:

```text
src/components/ContactSection.tsx
src/components/Footer.tsx
```

Il form e solo front-end. In futuro puo essere collegato a Formspree, EmailJS, una API route Next.js o un altro servizio di invio.

## Pubblicazione su Vercel

1. Caricare il progetto su GitHub.
2. Creare un nuovo progetto su Vercel collegando il repository GitHub.
3. Lasciare le impostazioni standard Next.js.
4. Pubblicare il progetto.

Prima della pubblicazione definitiva, aggiornare Privacy Policy, Cookie Policy, contatti aziendali e immagini reali.
