import Hero from "@/components/Hero";
import UpcomingEvents from "@/components/UpcomingEvents"; 
import QuantumIntro from "@/components/QuantumIntro";
import Services from "@/components/Services";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <QuantumIntro />
      <Services />
      <UpcomingEvents /> 
      {/*if there's previous section i'll put it here */}
    </main>
  );
}