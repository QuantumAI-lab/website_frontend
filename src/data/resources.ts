// src/data/resources.ts
export interface Resource {
  id: string;
  title: string;
  author?: string;
  description: string;
  link: string;
  category: "Books" | "Courses" | "Tools" | "Community" | "News";
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  image?: string;
}

export const resources: Resource[] = [
  {
    id: "1",
    title: "Quantum Computation and Quantum Information",
    author: "Nielsen & Chuang",
    description:
      "Often called 'Mike & Ike', this is the standard textbook and bible for the field.",
    link: "https://www.cambridge.org/highereducation/books/quantum-computation-and-quantum-information/01E10196D0A682A6AEFFEA52D53BE9AE",
    category: "Books",
    level: "Advanced",
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Quantum Computing for Computer Scientists",
    author: "Yanofsky & Mannucci",
    description:
      "An accessible introduction designed specifically for those with a CS background.",
    link: "https://www.cambridge.org/us/academic/subjects/computer-science/algorithmics-complexity-computer-algebra-and-computational-g/quantum-computing-computer-scientists",
    category: "Books",
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "IBM Quantum Learning",
    description:
      "Official free courses from IBM covering everything from basics to hardware.",
    link: "https://learning.quantum.ibm.com/",
    category: "Courses",
    level: "Beginner",
  },
  {
    id: "5",
    title: "Qiskit Textbook",
    description:
      "Interactive open-source textbook to learn quantum programming with Python.",
    link: "https://github.com/Qiskit/textbook",
    category: "Courses",
    level: "Beginner",
  },

  {
    id: "7",
    title: "Qiskit",
    description:
      "IBM's open-source framework for working with noisy quantum computers.",
    link: "https://www.ibm.com/quantum/qiskit",
    category: "Tools",
    level: "All Levels",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "10",
    title: "Quirk",
    description:
      "A drag-and-drop quantum circuit simulator that runs right in your browser.",
    link: "https://algassert.com/quirk",
    category: "Tools",
    level: "Beginner",
  },

  {
    id: "11",
    title: "Quantum Stack Exchange",
    description:
      "A Q&A site for developers and researchers to ask technical questions.",
    link: "https://quantumcomputing.stackexchange.com/",
    category: "Community",
    level: "All Levels",
  },
  {
    id: "13",
    title: "IEEE Quantum",
    description:
      "The leading community for quantum computing professionals and engineers.",
    link: "https://quantum.ieee.org/",
    category: "News",
    level: "Advanced",
  },
];
