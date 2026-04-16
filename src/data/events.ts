// src/data/events.ts
export interface EventSpeaker {
  name: string;
  role: string;
}

export interface EventResources {
  github?: string;
  youtube?: string;
  slides?: string;
}
export type QuantumField = 
  | "Introduction to quantum computing" 
  | "Quantum Machine Learning" 
  | "Quantum Cryptography" 
  | "Quantum simulations"
  | "General";
export type QuantumLevel = "Beginner" | "Intermediate" | "Advanced" | "All Levels";
export interface Event {
  id: string;
  title: string;
  date: string;
  category: "Workshop" | "Hackathon" | "Lecture" | "School";
  field: QuantumField;
  level: QuantumLevel; 
  location: string; 
  status: "Upcoming" | "Open" | "Closed"; 
  image?: string;
  description: string;
  fullDetails?: string; 
  speakers?: EventSpeaker[];
  resources?: EventResources;
}

export const events: Event[] = [
  {
    id: "1",
    title: "The Quantum AI Monthly Series",
    date: "2024-12-19",
    category: "Lecture",
    field: "General",
    level: "All Levels",
    location: "Online",
    status: "Closed",
    description: "A monthly series bringing together global experts to discuss Quantum AI, energy efficiency, and QPU integration.",
    fullDetails: "This series marks the 'Year of Quantum' 2025, exploring the integration of quantum processing units (QPUs) with classical supercomputing, energy efficiency, and the shift toward native quantum algorithms. Organized in collaboration with Bibliotheca Alexandrina and iQafé.",
    speakers: [
      { name: "Youssef Eldakar", role: "Head, ISIS - Bibliotheca Alexandrina" },
      { name: "Dr. Taha Selim", role: "Co-founder & GM, MolKet" },
      { name: "Prof. Dr. Ahmed Younes", role: "Professor of Quantum Computing, Alexandria University" },
      { name: "Alain Chancé", role: "President, MolKet SAS" },
      { name: "Jan Blommaart", role: "Managing Partner, BioDAC" },
      { name: "Prof. Dr. Ahmed Shawky Moussa", role: "Professor of Computing, Cairo University" },
      { name: "Shwetha Jayaraj", role: "Quantum Computing Researcher" },
      { name: "Dr. Damir Cavar", role: "Associate Professor, Indiana University" },
      { name: "Ahmed Sleem", role: "Senior Technical Leader, IBM KSA" }
    ],
    resources: {
      youtube: "https://youtube.com/playlist?list=PLbzgihkqSogoFQ4BNssbgdEJWQyU4C4Yo&si=--J0E2aMLy_FvAUL"
    }
  },
  {
    id: "2",
    title: "Quantum AI Lab Series - Quantum Computing Fundamentals",
    date: "2025-11-16",
    category: "Lecture",
    field: "Introduction to quantum computing",
    level: "Beginner",
    location: "YouTube Series",
    status: "Closed",
    description: "Your gateway to understanding quantum foundations through hands-on labs.",
    fullDetails: "This comprehensive lab series explores quantum computing through practical implementations and cutting-edge research. Episodes are intelligently sorted by episode numbers and series logic.",
    speakers: [
      { name: "Abdelrahman Elsayed", role: "Quantum Software Engineer at Brightskies, Director of Education at EgQCC" },
      { name: "Dr. Taha Selim", role: "Co-founder & GM, MolKet" },
      { name: "Omar Sobhy", role: "Quantum AI Lab Instructor" },
      { name: "Ziad Tarek", role: "Quantum AI Lab Instructor" },
    ],
    resources: {
      youtube: "https://youtube.com/playlist?list=PLbzgihkqSogoAmQAa3BONV1NhK-0k5Rqh&si=s6vPrqJuxZXc6L0I",
        github: "https://github.com/QuantumAI-lab/-QuantumAI-lab-QML-25-26"
    }
  },
  {
    id: "3",
    title: "Quantum AI Lab Series - Quantum Cryptography and Security",
    date: "2026-02-13",
    category: "Lecture",
    field: "Quantum Cryptography", 
    level: "Intermediate",
    location: "Online",
    status: "Closed",
    description: "Fundamentals of quantum cryptography and secure communication in the quantum era.",
    fullDetails: " Post-Quantum Cryptography (PQC) and Quantum Communication This track introduces modern quantum safe security concepts, with a focus on cryptographic systems designed to remain secure in the presence of quantum computers, as well as the fundamentals of quantum communication.",
    speakers: [
      { name: "Sameh Zaghloul", role: "CTO at Fixed solutions, ex-IBM Consultant" },
      { name: "Mohamed Helmy", role: "Cybersecurity Analyst" },
      { name: "Raghade Nawar", role: "MSc in PQC" }
    ],
    resources: {
      youtube: "https://youtube.com/playlist?list=PLbzgihkqSogrpx3q2huhDFB7Odl-VlyNS&si=k0eCVV9kzL2ZVVko",
        github: "https://github.com/7elmie/EGQCC"
    }
  },
  {
    id: "4",
    title: "Quantum AI Lab Series - Quantum Machine Learning",
    date: "2026-02-14",
    category: "Lecture",
    field: "Quantum Machine Learning",    
    level: "Intermediate",
    location: "Online",
    status: "Closed",
    description: "Exploring the intersection of classical and quantum machine learning techniques for the future of AI.",
    fullDetails: "Classical Machine Learning Review and Quantum Machine Learning This track bridges classical and quantum approaches to machine learning. It begins with a focused review of classical machine learning concepts and progresses to quantum machine learning models and hybrid techniques. Topics include Quantum Support Vector Machines (QSVM), Quantum Neural Networks (QNN), and hybrid classical quantum models.",
    speakers: [
      { name: "Abdelrahman Elsayed", role: "Quantum Software Engineer at Brightskies, Director of Education at EgQCC" },
      { name: "Sama Samer", role: "AI Engineer, ECE Student at Helwan University" },
      { name: "Raghade Nawar", role: "MSc in PQC" }
    ],
    resources: {
      youtube: "https://youtube.com/playlist?list=PLbzgihkqSogrGmN8LpLd9_gFixDk6C5Vn&si=oDS-M_UfxF6L5zp2",
    }
  }
];