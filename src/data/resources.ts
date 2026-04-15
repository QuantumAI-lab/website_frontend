// src/data/resources.ts

export type QuantumField = "QML" | "Communication" | "Algorithms" | "Hardware" | "General";

export interface Resource {
  id: string;
  title: string;
  author?: string;
  description: string;
  link: string;
  category: "Books" | "Courses" | "Tools" | "Community" | "News";
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  field: QuantumField; 
  image?: string;
}

export const resources: Resource[] = [
  {
    id: "1",
    title: "Quantum Computation and Quantum Information",
    author: "Nielsen & Chuang",
    description: "Often called 'Mike & Ike', this is the standard textbook and bible for the field.",
    link: "https://www.cambridge.org/highereducation/books/quantum-computation-and-quantum-information",
    category: "Books",
    level: "Advanced",
    field: "General",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Quantum Computing for Computer Scientists",
    author: "Yanofsky & Mannucci",
    description: "An accessible introduction designed specifically for those with a CS background.",
    link: "https://www.cambridge.org/core/books/quantum-computing-for-computer-scientists",
    category: "Books",
    level: "Beginner",
    field: "Algorithms",
  },
  {
    id: "4",
    title: "IBM Quantum Learning",
    description: "Official tutorials and guides for programming real quantum hardware.",
    link: "https://learning.quantum.ibm.com/",
    category: "Courses",
    level: "Beginner",
    field: "General",
  },
  {
    id: "5",
    title: "Qiskit Textbook",
    description: "Interactive open-source textbook to learn quantum programming with Python.",
    link: "https://github.com/Qiskit/textbook",
    category: "Courses",
    level: "Beginner",
    field: "Algorithms",
  },
  {
    id: "7",
    title: "Qiskit",
    description: "IBM's open-source framework for working with noisy quantum computers.",
    link: "https://www.ibm.com/quantum/qiskit",
    category: "Tools",
    level: "All Levels",
    field: "General",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "8",
    title: "PennyLane",
    description: "A cross-platform Python library for differentiable programming of quantum computers.",
    link: "https://pennylane.ai/",
    category: "Tools",
    level: "Intermediate",
    field: "QML",
  },
  {
    id: "10",
    title: "Quirk",
    description: "A drag-and-drop quantum circuit simulator that runs right in your browser.",
    link: "https://algassert.com/quirk",
    category: "Tools",
    level: "Beginner",
    field: "Algorithms",
  },
  {
    id: "11",
    title: "QWorld Community",
    description: "A global network of researchers and educators promoting quantum technologies.",
    link: "https://qworld.net/",
    category: "Community",
    level: "All Levels",
    field: "General",
  }
];