import Header from "@/components/landing/Header";
import AboutGravitas from "@/sections/landing/AboutGravitas";
import Hero from "@/sections/landing/Hero";
import PremiumEvents from "@/sections/landing/PremiumEvents";
import Sponsors from "@/sections/landing/Sponsors";
import Timer from "@/sections/landing/Timer";
import Patrons from "@/sections/landing/Patrons";
import Gallery from "@/sections/landing/gallery";
import Footer from "@/sections/landing/Footer";

export default function Home() {
  return (
    <main className="bg-base w-full pb-6">
      <Header />
      <Hero />
      <Timer />
      <AboutGravitas />
      <PremiumEvents />
      <Sponsors />
      <Patrons />
      <Gallery />
      <Footer />
    </main>
  );
}
