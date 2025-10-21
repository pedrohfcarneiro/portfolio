export interface Game {
    id: string;
    name: string;
    pitch: string;
    icon: string;
    people: string[];
    status: string;
    tools: string[];
    skills: string[];
    category: string;
    video: string;
    details: { type: string; content: string }[];
    relatedPosts: string[];
    coverImage: string;
  }

export const games: Game[] = [
  {
    id: "cardmancer",
    name: "Cardmancer",
    pitch: "",
    icon: "/gameAssets/cardmancer/iconImage.jpg",
    people: ["Pedro Henrique", "Raphael Duarte", "João Saiago", "Eduardo Petropolis"],
    status: "In Progress",
    tools: ["Unity", "C#", "Aseprite"],
    skills: ["Gameplay Programming", "C#", "UI Design", "Game Design", "Pixel Art"],
    category: "Personal",
    video: "https://www.youtube.com/embed/V5H1ZTjCiAc",
    details: [
      { type: "text", content: "I handled player controls and wave logic..." },
      { type: "image", content: "/images/asteroid/screenshot.png" },
    ],
    relatedPosts: ["Work in progress"],
    coverImage: "/gameAssets/cardmancer/coverImage.jpg",
  },
];
