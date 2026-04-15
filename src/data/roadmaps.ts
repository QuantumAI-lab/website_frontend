// src/data/roadmaps.ts
import { QuantumField } from "./resources";

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  estimatedWeeks: number;
  skills: string[];
}

export interface Roadmap {
  id: string;
  title: string;
  field: QuantumField;
  description: string;
  steps: RoadmapStep[];
}

export const roadmaps: Roadmap[] = [
  {
    id: "qml-path",
    title: "Quantum Machine Learning Engineer",
    field: "QML",
    description: "Master the intersection of classical AI and quantum mechanics, from basic gates to Quantum Neural Networks.",
    steps: [
      {
        id: "qml-1",
        title: "Linear Algebra & Quantum Mechanics",
        description: "Understand the mathematical foundation: vectors, matrices, Hilbert spaces, and qubits.",
        level: "Beginner",
        estimatedWeeks: 3,
        skills: ["Linear Algebra", "Dirac Notation", "Superposition"],
      },
      {
        id: "qml-2",
        title: "Quantum Circuits & Qiskit",
        description: "Learn to build and simulate quantum circuits using IBM's Qiskit framework.",
        level: "Beginner",
        estimatedWeeks: 4,
        skills: ["Python", "Qiskit", "Quantum Gates", "Entanglement"],
      },
      {
        id: "qml-3",
        title: "Classical ML Review",
        description: "Solidify your understanding of classical optimization, SVMs, and neural networks.",
        level: "Intermediate",
        estimatedWeeks: 3,
        skills: ["Scikit-Learn", "Gradient Descent", "Loss Functions"],
      },
      {
        id: "qml-4",
        title: "Variational Quantum Algorithms (VQA)",
        description: "Dive into parameterized quantum circuits, VQE, and QAOA.",
        level: "Advanced",
        estimatedWeeks: 4,
        skills: ["VQA", "PennyLane", "Optimization"],
      },
      {
        id: "qml-5",
        title: "Quantum Neural Networks (QNN)",
        description: "Build and train hybrid classical-quantum models.",
        level: "Advanced",
        estimatedWeeks: 5,
        skills: ["PyTorch", "QNN", "Quantum Gradients"],
      },
    ],
  },
  {
    id: "crypto-path",
    title: "Quantum Security & Cryptography",
    field: "Communication",
    description: "Learn how to secure tomorrow's communications against quantum threats.",
    steps: [
      {
        id: "cryp-1",
        title: "Classical Cryptography Foundations",
        description: "Understand RSA, ECC, and symmetric/asymmetric encryption paradigms.",
        level: "Beginner",
        estimatedWeeks: 2,
        skills: ["Hashing", "Public Key Infrastructure", "Math Foundations"],
      },
      {
        id: "cryp-2",
        title: "Shor's Algorithm & The Threat",
        description: "Analyze how quantum computers break classical encryption.",
        level: "Intermediate",
        estimatedWeeks: 3,
        skills: ["Period Finding", "Quantum Fourier Transform"],
      },
      {
        id: "cryp-3",
        title: "Quantum Key Distribution (QKD)",
        description: "Learn the physics of secure communication using the BB84 protocol.",
        level: "Advanced",
        estimatedWeeks: 4,
        skills: ["BB84", "Photon Polarization", "No-Cloning Theorem"],
      },
    ],
  },
];