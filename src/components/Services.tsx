"use client";

import CardSection from "./Cards";
import { FaGraduationCap, FaTrophy, FaUniversity } from "react-icons/fa";

export default function Services() {
  
  const features = [
    {
      icon: <FaGraduationCap className="text-5xl text-accent" />,
      title: "Education & Training",
      desc: "From seasonal schools to internationally recognized certifications (QBronze, QNickel), we provide world-class training to master quantum computing and AI."
    },
    {
      icon: <FaTrophy className="text-5xl text-green-400" />,
      title: "Events & Hackathons",
      desc: "Join Egypt's National Quantum Hackathon, weekly workshops, and interactive meetups to compete, collaborate, and connect with industry experts."
    },
    {
      icon: <FaUniversity className="text-5xl text-blue-400" />,
      title: "University Chapters",
      desc: "A network of student hubs across Egyptian universities, providing direct access to IBM Quantum, research mentorship, and a global community of innovators."
    }
  ];

  return (
    <CardSection 
      title="Our Key"
      highlightedWord="Features"
      subtitle="Discover how EgQCC is building the ecosystem for the next generation of quantum pioneers."
      features={features}
    />
  );
}