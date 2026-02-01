// src/data/events.ts
export interface EventSpeaker {
  name: string;
  role: string;
  image?: string;
}

export interface EventResources {
  github?: string;
  youtube?: string;
  slides?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  category: "Workshop" | "Hackathon" | "Meetup" | "Lecture"; 
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
    title: "Virtual Dry-Run Hackathon",
    date: "2026-07-15",
    category: "Hackathon",
    location: "Online (Virtual)",
    status: "Upcoming",
    description: "Preparation hackathon to familiarize participants with tools, format, and challenges.",
    fullDetails: "This event focuses on training and team formation for the main hackathon. It includes technical workshops and practice challenges to ensure you are ready for the big stage.",
  },
  {
    id: "2",
    title: "Quantum Summer School",
    date: "2026-08-01",
    category: "Workshop",
    location: "Hybrid (Cairo & Online)",
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
    description: "Intensive summer program covering quantum computing fundamentals and advanced algorithms.",
    fullDetails: "A full-month program targeting students, researchers, and professionals. The curriculum includes comprehensive lectures on quantum mechanics, algorithms, and hands-on coding sessions.",
    speakers: [
      { name: "Dr. Taha Selim", role: "Program Director" },
      { name: "Prof. Asmaa Saafan", role: "Lead Instructor" }
    ]
  },
  {
    id: "3",
    title: "Alexandria Quantum Hackathon",
    date: "2026-09-03",
    category: "Hackathon",
    location: "",
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop",
    description: "Competitive hackathon bringing together enthusiasts to solve real-world challenges.",
    fullDetails: "Hosted at the prestigious Bibliotheca Alexandrina. Teams will compete with mentorship from industry experts to build practical quantum applications and innovations.",
    speakers: [
      { name: "Industry Mentors", role: "IBM & Google Quantum AI" }
    ],
    resources: {
      github: "https://github.com/egqcc/alex-hackathon-2026"
    }
  },
  {
    id: "4",
    title: "Quantum AI Lab Series",
    date: "2026-02-20",
    category: "Lecture",
    location: "YouTube Series",
    status: "Open",
    description: "Your gateway to understanding quantum artificial intelligence through hands-on labs.",
    fullDetails: "This comprehensive lab series explores quantum AI through practical implementations and cutting-edge research. Episodes are intelligently sorted by episode numbers and series logic.",
    resources: {
      youtube: "https://www.youtube.com/playlist?list=PL_Example_QuantumAI"
    }
  },
  {
    id: "5",
    title: "Winter School 2026",
    date: "2026-01-15",
    category: "Workshop",
    location: "Smart Village",
    status: "Closed",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
    description: "Fundamentals of quantum computing, algorithms, and machine learning.",
    fullDetails: "Covered quantum simulations, industry expert lectures, and certification opportunities. This event has concluded.",
    resources: {
      slides: "https://egqcc.org/archive/winter-2026"
    }
  },
  {
    id: "6",
    title: "Community Meetup: Alexandria",
    date: "2026-03-10",
    category: "Meetup",
    location: "Bibliotheca Alexandrina",
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000&auto=format&fit=crop",
    description: "A casual networking event for the local quantum community.",
    fullDetails: "Join us for an evening of networking, pizza, and lightning talks from community members.",
  }
];