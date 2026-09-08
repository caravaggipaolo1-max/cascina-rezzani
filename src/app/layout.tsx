import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://cascina-rezzani.vercel.app"
  ),
  title: "Società Agricola Cascina Rezzani",
  description: "Prodotti agricoli e specialità artigianali dal territorio.",
  openGraph: {
    title: "Società Agricola Cascina Rezzani",
    description: "Prodotti agricoli e specialità artigianali dal territorio.",
    type: "website",
    locale: "it_IT",
    images: [
      {
        url: "/images/hero/cancello-cascina-placeholder.jpg",
        width: 1717,
        height: 916,
        alt: "Cancello d'ingresso di Cascina Rezzani"
      }
    ]
  },
  icons: {
    icon: [
      {
        url: "/favicon-r.png?v=2",
        type: "image/png",
        sizes: "512x512"
      }
    ],
    shortcut: "/favicon-r.png?v=2",
    apple: "/favicon-r.png?v=2"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
