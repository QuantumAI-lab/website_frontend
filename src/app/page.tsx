// src/app/page.tsx
import Hero from "@/components/Hero/Hero";
import UpcomingEvents from "@/components/UpcomingEvents/UpcomingEvents";
import QuantumIntro from "@/components/QuantumIntro/QuantumIntro";
import Services from "@/components/Services/Services";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <QuantumIntro />
      <Services />
      <UpcomingEvents />
    </main>
  );
}
