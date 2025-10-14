export interface Game {
    id: string;
    title: string;
    pitch: string;
    description: string;
    people: string[];
    status: "In Development" | "Released" | "Prototype";
    tools: string[];
    skills: string[];
    category: "Personal" | "Game Jam";
    icon: string;
    videoId: string;
    details: { type: "text" | "image" | "gif"; content: string }[];
    relatedPosts: string[];
  }

export const games: Game[] = [
  {
    id: "asteroid",
    title: "Project Asteroid",
    pitch: "A fast-paced space shooter built for a game jam.",
    description: "Built in Unity with a small team during a weekend jam.",
    people: ["Pedro Henrique", "Maria Silva"],
    status: "Released",
    tools: ["Unity", "C#", "Blender"],
    skills: ["Gameplay Programming", "UI Design", "Game Design"],
    category: "Game Jam",
    icon: "/images/asteroid/icon.png",
    videoId: "dQw4w9WgXcQ",
    details: [
      { type: "text", content: "I handled player controls and wave logic..." },
      { type: "image", content: "/images/asteroid/screenshot.png" },
    ],
    relatedPosts: ["devlog-asteroid-ai"],
  },
];
