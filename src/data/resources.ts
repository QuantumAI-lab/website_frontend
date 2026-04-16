// src/data/resources.ts

export type QuantumField = 
  | "Introduction to quantum computing" 
  | "Quantum Machine Learning" 
  | "Quantum Cryptography" 
  | "Quantum simulations"
  | "General";
  
export interface Resource {
  id: string;
  title: string;
  author?: string;
  description: string;
  link: string;
category: "Presentations" | "Recordings" | "Articles" | "Projects";
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  field: QuantumField; 
}

export const resources: Resource[] = [
  {
    id: "1",
    title: "Introduction to Quantum Computing",
    author: "Dr. Taha Selim, Eng. Abdelrahman Elsayed",
    description: "Introductory presentation slides from our first community meetup covering the basics of qubits, superposition, and entanglement.",
    link: "https://github.com/QuantumAI-lab/-QuantumAI-lab-QML-25-26",
    category: "Presentations", 
    level: "Beginner",
    field: "Introduction to quantum computing",
  }
];