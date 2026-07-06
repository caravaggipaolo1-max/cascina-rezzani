import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/IntroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { StorySection } from "@/components/StorySection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <IntroSection />
        <StorySection />
        <ProductsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
