import Header from "@/components/landing/Header";
import AboutGravitas from "@/sections/landing/AboutGravitas";
import Hero from "@/sections/landing/Hero";
import PremiumEvents from "@/sections/landing/PremiumEvents";
import Timer from "@/sections/landing/Timer";

export default function Home() {
  return (
    <main className="bg-base  w-full pb-12">
      <Header />
      <Hero />
      <Timer />
      <AboutGravitas />
      <PremiumEvents />
    </main>
  );
}
