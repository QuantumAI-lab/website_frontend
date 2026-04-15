// src/data/team.ts
export interface SocialLinks {
  linkedin?: string;
  x?: string; 
  facebook?: string;
  email?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  socials: SocialLinks;
}

export const founder: TeamMember = {
  id: "taha-selim",
  name: "Dr. Taha Selim",
  role: "Founder & Community Builder",
  image: "/assets/contributors/dr-taha-selim.png",
  socials: {
    linkedin: "https://www.linkedin.com/in/tiselim/",
  },
};
export interface FormerTeamMember {
  id: string;
  name: string;
  role: string;       
  period: string;     
  description: string; 
  image: string;     
  socials: SocialLinks;
}
export const teamMembers: TeamMember[] = [
  {
    id: "asmaa-saafan",
    name: "Asmaa Mahmoud Saafan",
    role: "Vice President",
    image: "/assets/contributors/asmaa-saafan.PNG",
    socials: {
      email: "mailto:asmaa.safan@yahoo.com",
      linkedin: "https://www.linkedin.com/in/asmaa-saafan-592231171",
    },
  },
  {
    id: "mohammed-nabil",
    name: "Mohammed Nabil",
    role: "Organizer",
    image: "/assets/contributors/mohammed-nabil.jpg",
    socials: {
      email: "mailto:mnabilm58@gmail.com",
      linkedin: "https://www.linkedin.com/in/m-nabil950",
    },
  },
  {
    id: "abdelrahman-elsayed",
    name: "Abdelrahman Elsayed Ahmed",
    role: "Quantum AI Lab",
    image: "/assets/contributors/abdelrahman-elsayed.jpeg",
    socials: {
      email: "mailto:abdo.elsayd102@gmail.com",
      linkedin: "https://www.linkedin.com/in/abdelrahman-elsayed-4230b5261/",
    },
  },
  {
    id: "omar-sobhy",
    name: "Omar Sobhy Abouelela",
    role: "Director, Digital Comms & Outreach",
    image: "/assets/contributors/omar-sobhy.jpeg",
    socials: {
      email: "mailto:omar.sobhy808@gmail.com",
      linkedin: "https://www.linkedin.com/in/omar-sobhy-a191a5268/",
    },
  },
  {
    id: "muhammad-fergany",
    name: "Muhammad Fergany Khalil",
    role: "PR & Partnerships & Business Dev",
    image: "/assets/contributors/muhammad-fergany.jpeg",
    socials: {
      email: "mailto:fergany92@gmail.com",
      linkedin: "https://www.linkedin.com/in/ferganykhalil",
    },
  },
  {
    id: "ziad-tarek",
    name: "Ziad Tarek Mohamed",
    role: "Quantum Labs Coordinator",
    image: "/assets/contributors/ziad-tarek.JPG",
    socials: {
      email: "mailto:ziadt160@gmail.com",
      linkedin: "https://www.linkedin.com/in/ziad-tarek-4089a7116",
    },
  },
  {
    id: "nada-ahmed",
    name: "Nada Ahmed",
    role: "IT & Web Development Unit Coordinator",
    image: "/assets/contributors/nada-ahmed.jpeg",
    socials: {
      email: "mailto:nada-h-ahmed@outlook.com",
      linkedin: "https://www.linkedin.com/in/nada-ahmed-0242a12b2",
    },
  },
  {
    id: "malak-edrees",
    name: "Malak Edrees",
    role: "Volunteer, IT & Web Development Unit",
    image: "/assets/contributors/malak-edrees.jpeg",
    socials: {
      email: "mailto:Malak.320240101@ejust.edu.eg",
      linkedin: "https://www.linkedin.com/in/malak-e-3b765925b",
    },
  },
  {
    id: "ahmed-saad",
    name: "Ahmed Saad El Fiky",
    role: "QML Lab Coordinator",
    image: "/assets/contributors/ahmed-saad-el-fiky.jpeg",
    socials: {
      email: "mailto:ah.saadfiky@gmail.com",
      linkedin: "https://linkedin.com/in/saadfiky",
    },
  },
  {
    id: "moataz-fayek",
    name: "Moataz Mohamed Fayek",
    role: "Web Development",
    image: "/assets/contributors/moataz-mohamed.jpg",
    socials: {
      email: "mailto:moataz5197@gmail.com",
      linkedin: "https://www.linkedin.com/in/moataz-mohamed-fayek",
    },
  },
];
export const formerMembers: FormerTeamMember[] = [
  {
    id: "ahmed-el-taher",
    name: "Ahmed El-Taher",
    role: "Director, Community Development",
    period: "2024 - 2025",
    description: "Spearheaded community growth initiatives, organized key events, and established partnerships that significantly expanded our reach and impact in the quantum computing ecosystem.",
    image: "/assets/contributors/ahmed-el-taher.png",
    socials: {
      email: "mailto:ahmed.g.eltaher@gmail.com",
      linkedin: "https://www.linkedin.com/in/ahmed-el-taher/",
    },
  },
];