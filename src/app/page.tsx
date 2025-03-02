import { Banner } from "@/components/Banner";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Problem } from "@/components/Problem";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";



export default function Home() {
  return (
    <>
    <div className="overflow-x-hidden">
      <Banner />
      <Hero />
      <LogoTicker />
      <Problem />
      <Features />
      <ProductShowcase />
      <FAQs />
    
     
      <CallToAction />
      </div>
      <Footer />
    </>
  );
}
