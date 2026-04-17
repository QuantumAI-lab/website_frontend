// src/data/events.ts
export interface EventSpeaker {
  name: string;
  role: string;
}

export interface EventResources {
  github?: string;
  youtube?: string;
  slides?: string;
  Link?: string;
  Live_stream?: string;
  Facebook?: string;
  website?: string;
  Agenda?: string;
  Linkedin?: string;
}
export type QuantumField = 
  | "Quantum Machine Learning" 
  | "Quantum Cryptography" 
  | "Quantum simulations"
  | "General"
  | "Artificial Intelligence"
  | "Quantum Neural Networks"
  | "Data Science"
  | "Hybrid Classical–Quantum Models"
  | "Quantum Support Vector Machines"
  | "Career Development"
  | "Quantum Industry"
  | "Quantum optimization"
  | "Quantum chemistry"
  | "Quantum computing";
export type QuantumLevel = "Beginner" | "Intermediate" | "Advanced" | "All Levels" ;
export interface Event {
  id: string;
  title: string;
  date: string;
  category: "Workshop" | "Hackathon" | "Lecture" | "School" | "Seminar" | "Educational Series" | "Industry Sessions";
  field: QuantumField | QuantumField[];
  level: QuantumLevel | QuantumLevel[]; 
  location: string; 
  status: "Upcoming" | "Open" | "Closed" ; 
  image?: string;
  description: string;
  fullDetails?: string; 
  speakers?: EventSpeaker[];
  resources?: EventResources;
}

export const events: Event[] = [
  {
    id:  "quantum-ai-monthly-series",
    title: "Quantum AI Monthly Series",
    date: "December 2024 - Present",
    category: "Educational Series",
    field: ["Artificial Intelligence", "Quantum computing"],
    level: ["Beginner", "Intermediate"],
    location: "Online",
    status: "Open",
    description: "A monthly series bringing together global experts to discuss Quantum Computing and AI.",
    fullDetails: "The Quantum AI Monthly Series is an ongoing initiative co-organized by the Bibliotheca Alexandrina and iQafé, aimed at building awareness, skills, and community around the fast-evolving intersection of quantum computing and artificial intelligence. \n Launched in December 2024, the series brings together students, researchers, and professionals through monthly sessions that explore cutting-edge topics in quantum computing and AI. It serves as a collaborative platform for knowledge exchange, discussion, and community building, supporting the growth of a vibrant quantum ecosystem.",
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
      youtube: "https://quantum.bibalex.org/StaticPage?pageName=Monthlyseries"
    }
  },
  {
    id: "quantum-ai-lab-1st",
    title: "Quantum AI Lab Series - E1.0",
    date: "March 2025 - Present",
    category: "Educational Series",
    field: ["Quantum computing", "Quantum Cryptography", "Quantum Machine Learning", "Quantum simulations"],
    level: ["Beginner", "Intermediate"],
    location: "Online",
    status: "Closed",
    description: "Your gateway to understanding quantum foundations through hands-on labs.",
    fullDetails: "The Quantum AI Lab is a hands-on program co-organized by the Bibliotheca Alexandrina and iQafé, designed to provide structured learning and practical experience across multiple quantum computing domains through specialized tracks and guided sessions.",
    speakers: [
      { name: "Dr. Taha Selim", role: "Moderator and review" },
      { name: "Eng. Ahmed Saad El Fiky", role: "Quantum teleportation and superdense coding" },
      { name: "Gamal Mounib", role: "Quantum AI Lab Practical sessions Instructor" },
    ],
    resources: {
      youtube: "https://www.youtube.com/playlist?list=PLbzgihkqSogor2r6XvsjvdgFIO770L4BG",
    }
  },
  {
    id: "quantum-ai-lab-2nd-1",
    title: "Quantum AI Lab Series - E2.1",
    date: "November 2025",
    category: "Educational Series",
    field: ["Quantum computing", "Quantum Machine Learning"], 
    level: ["Beginner"],
    location: "Online",
    status: "Closed",
    description: "Fundamentals of quantum cryptography and secure communication in the quantum era.",
    fullDetails: " Post-Quantum Cryptography (PQC) and Quantum Communication This track introduces modern quantum safe security concepts, with a focus on cryptographic systems designed to remain secure in the presence of quantum computers, as well as the fundamentals of quantum communication.",
    speakers: [
      {name: "Taha Selim", role: ""},
      {name: "Abdelrahman Elsayed" , role: ""},
      {name:"Omar Sobhy", role: ""},
      {name:"Ziad Tarek", role: ""},
      {name:"Mohamed Masmoudi", role: ""}
    ],
    resources: {
      youtube: "https://youtube.com/playlist?list=PLbzgihkqSogoAmQAa3BONV1NhK-0k5Rqh&si=W4x4ihi8bC8mdjA9",
        github: "https://github.com/7elmie/EGQCC"
    }
  },
  {
    id: "quantum-ai-lab-2nd-2",
    title: "Quantum AI Lab Series - E2.2",
    date: "February 2026",
    category: "Educational Series",
    field: ["Quantum simulations"],    
    level: ["Intermediate"],
    location: "Online",
    status: "Open",
    description: "Exploring the intersection of classical and quantum machine learning techniques for the future of AI.",
    fullDetails: "Classical Machine Learning Review and Quantum Machine Learning This track bridges classical and quantum approaches to machine learning. It begins with a focused review of classical machine learning concepts and progresses to quantum machine learning models and hybrid techniques. Topics include Quantum Support Vector Machines (QSVM), Quantum Neural Networks (QNN), and hybrid classical quantum models.",
    speakers: [
      {name: "Taha Selim", role: ""},
      {name: "Ziad Tarek" , role: ""},
    ],
    resources: {
      youtube: "https://youtube.com/playlist?list=PLbzgihkqSogonnClzCrsfhpRP42tjr5fH&si=d16MHMFWy7otRVXG",
    }
  },
  {
    id: "quantum-ai-lab-3rd-1",
    title: "Quantum AI Lab Series - E3.1",
    date: "February 2026 - March 2026",
    category: "Educational Series",
    field: ["Data Science", "Quantum Neural Networks" , "Quantum Machine Learning" , "Hybrid Classical–Quantum Models", "Quantum Support Vector Machines"],    
    level: ["Intermediate"],
    location: "Online",
    status: "Open",
    description: "Exploring the intersection of classical and quantum machine learning techniques for the future of AI.",
    fullDetails: "This track is designed for students, researchers, and practitioners who want to go beyond classical AI and understand how quantum computing can enhance machine learning models, not just in theory, but in practice.",
    speakers: [
      {name: "Eng. Abdelrahman Elsayed" , role: "Quantum Software Engineer Intern Brightskies"},
      {name: "Eng. Sama Samer" , role: "AI Engineer | Machine Learning & Data-Driven Solutions"},
      {name: "Eng. Asmaa Ahmed" ,role: "Teaching Assistant, South Valley University"}
    ],
    resources: {
      youtube: "https://www.youtube.com/playlist?list=PLbzgihkqSogrGmN8LpLd9_gFixDk6C5Vn",
    }
  },
  {
    id: "quantum-ai-lab-3rd-2",
    title: "Quantum AI Lab Series - E3.2",
    date: "February 2026 - March 2026",
    category: "Educational Series",
    field: ["Quantum Cryptography"],    
    level: ["Intermediate"],
    location: "Online",
    status: "Open",
    description: "Exploring post-quantum cryptography and quantum communication.",
    fullDetails: "This track is ideal for anyone interested in cybersecurity, post-quantum cryptography, and quantum communication, and it is highly suitable for graduation projects and master’s research.",
    speakers: [
      {name: "Eng. Sameh Zaghloul", role: "CTO at Fixed Solutions | ex-IBM Consultant"},
      {name: "Eng. Muhammed Helmy" , role: "Cybersecurity Analyst"},
      {name: "Eng. Menna Mohamed", role: "AI and ML Engineer"},
      {name: "Eng. Raghade Nawar", role: "MSc in Post-Quantum Cryptography"}
    ],
    resources: {
      youtube: "https://youtube.com/playlist?list=PLbzgihkqSogrpx3q2huhDFB7Odl-VlyNS&si=Wvz-BXDy3p7qp39y",
    }
  },
  {
    id: "ask-quantum-industry-series",
    title: "Ask Quantum Industry Series",
    date: "January 2026 - Present",
    category: "Industry Sessions",
    field: ["Career Development", "Quantum Industry"],    
    level: ["All Levels"],
    location: "Online",
    status: "Open",
    description: "Insights into Quantum industry and Career Paths.",
    fullDetails: "A series of industry-focused sessions connecting participants with professionals working in the quantum ecosystem. The series provides insights into real-world applications, career paths, and industry trends through interactive talks and Q&A discussions.",
    speakers: [
      {name: "Dr. Taha selim" , role: ""},
      {name: "Eng. Omar sobhy" , role: ""},
      {name: "Eng. Muhammed Fergany" , role: ""},
      {name: "Eng. Abdelrahman Elsayed" , role: ""}
    ],
    resources: {
      youtube: "https://www.youtube.com/playlist?list=PLbzgihkqSogrmtkr-04enUUoJ_i-_yvvY",
    }
  },
  {
    id: "quantum-dry-run-hackathon-2025",
    title: "Quantum Dry-Run Hackathon 2025",
    date: "July 2025",
    category: "Hackathon",
    field: ["Quantum computing","Quantum Machine Learning"],    
    level: ["Beginner", "Intermediate"],
    location: "Online",
    status: "Closed",
    description: "A pre-hackathon simulation event designed to prepare participants for the Alexandria Quantum Hackathon to develop their practical skills",
    fullDetails: "A pre-hackathon simulation event designed to prepare participants for the Alexandria Quantum Hackathon. Participants experienced a mock hackathon environment, working in teams on quantum-related problems while developing practical skills in tools, collaboration, and problem-solving",
    speakers: [
      
    ],
    resources: {
      youtube: "https://www.youtube.com/playlist?list=PLbzgihkqSogoE3uMg5Md9J6NN6SRr9YGO",
      Link: "https://quantum.bibalex.org/StaticPage?pageName=timeline",
    }
  },
  {
    id: "quantum-summer-school-august-2025",
    title: "Quantum Summer School August 2025",
    date: "August 2025",
    category: "School",
    field: ["Quantum Machine Learning", "Quantum chemistry", "Quantum optimization", "Quantum computing"],    
    level: ["Beginner", "Intermediate"],
    location: "Online",
    status: "Closed",
    description: "A 3-day intensive program designed to introduce key concepts and practical skills in quantum computing.",
    fullDetails: "A 3-day intensive program designed to introduce key concepts and practical skills in quantum computing and its applications, including machine learning, optimization, and quantum chemistry. The program served as a preparatory phase for participants ahead of the Alexandria Quantum Hackathon.",
    speakers: [
      
    ],
    resources: {
      youtube: "https://www.youtube.com/playlist?list=PLbzgihkqSogq5WG5keipbrX25hYnIslnN",
    }
  },
  {
    id: "2025-Hakathon",
    title: "Egypt’s first-ever national quantum hackathon",
    date: "August 2025 - Septemper 2025",
    category: "Hackathon",
    field: ["Career Development", "Quantum Industry"],    
    level: ["All Levels"],
    location: "Hybird",
    status: "Closed",
    description: "Egypt’s first national quantum hackathon, hosted by Bibliotheca Alexandrina, unites experts, mentors, and innovators to tackle real‑world challenges with quantum technologies.",
    fullDetails: "The Alexandria Quantum Hackathon 2025, organized by Bibliotheca Alexandrina and iQafé Academy with support from the Open Quantum Institute, is Egypt’s first national quantum hackathon. Running from August 31 to September 5, it features problem sets, workshops, and presentations in a hybrid format. Thirty‑six Egyptian participants and mentors from across the Arab world and beyond will form teams to address pressing issues in life sciences, urban planning, and atmospheric chemistry using quantum computing. With sessions blending technical work, networking, and cultural activities, the event marks a milestone in building Egypt’s quantum ecosystem and fostering innovation in the region.",
    speakers: [
      
    ],
    resources: {
      Link: "http://quantum.alex.org/",
      Linkedin: "https://lnkd.in/e-gpKPZW",
    }
  }
];