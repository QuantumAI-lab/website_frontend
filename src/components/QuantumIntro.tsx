"use client";

import CardSection from "./Cards";
import { FaAtom, FaProjectDiagram, FaRocket } from "react-icons/fa";

export default function QuantumIntro() {
  
  const features = [
    {
      icon: <FaAtom className="text-5xl text-accent" />,
      title: "Superposition",
      desc: "Unlike classical bits (0 or 1), Qubits can exist in multiple states at once, unlocking parallel processing power beyond imagination."
    },
    {
      icon: <FaProjectDiagram className="text-5xl text-blue-400" />,
      title: "Entanglement",
      desc: "Particles linked across space instantly affect each other. Einstein called it 'spooky action at a distance'—we call it the future of communication."
    },
    {
      icon: <FaRocket className="text-5xl text-purple-400" />,
      title: "Exponential Speed",
      desc: "Solving complex problems in seconds that would take today's supercomputers thousands of years to crack."
    }
  ];

  return (
    <CardSection 
      title="Why"
      highlightedWord="Quantum?"
      subtitle="We are shifting from the era of Bit to the era of Qubit. Here is how quantum computing changes the game."
      features={features}
    />
  );
}