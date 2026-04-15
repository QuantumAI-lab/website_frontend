// src/data/podcasts.ts

export interface Podcast {
  id: string;
  title: string;
  desc: string;
  url: string;
  date: string;
}

export const podcasts: Podcast[] = [
  {
    id: "p1",//p2,p3 etc. for future 
    title: "iQafé Podcast",
    desc: "A series of interviews with brilliant minds around the world working in AI, quantum computing, deep learning, ... etc.",
    url: "https://youtube.com/playlist?list=PLtM-Z9tntiQtnBnuCmtTmswJx2lfrEAdp&si=y1ivGxnte0v_kZzv",
    date: "2025 - Ongoing"
  },
];