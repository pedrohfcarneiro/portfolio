// src/App.tsx
import { useState, useEffect } from "react";

interface Project {
  title: string;
  description: string;
  thumbnail: string;
  file: string;
}

const projects: Project[] = [
  {
    title: "Korean Game",
    description: "Playable Ad",
    thumbnail: "/thumbnails/playable1.png",
    file: "/playables/playable1/index.html",
  },
  {
    title: "Organize Shelf",
    description: "Playable Ad",
    thumbnail: "/thumbnails/playable2.png",
    file: "/playables/playable2/index.html",
  },
  {
    title: "Merge 3D Game",
    description: "Playable Ad",
    thumbnail: "/thumbnails/playable3.png",
    file: "/playables/playable3/index.html",
  },
  {
    title: "Puzzle Game",
    description: "Playable Ad",
    thumbnail: "/thumbnails/playable4.png",
    file: "/playables/playable4/index.html",
  },
  {
    title: "Sniper Game",
    description: "Playable Ad",
    thumbnail: "/thumbnails/playable5.png",
    file: "/playables/playable5/index.html",
  },
  {
    title: "Boss Battle Puzzle",
    description: "Playable Ad",
    thumbnail: "/thumbnails/playable6.png",
    file: "/playables/playable6/index.html",
  },
  {
    title: "3D Battle Royale Game",
    description: "Playable Ad",
    thumbnail: "/thumbnails/playable7.png",
    file: "/playables/playable7/index.html",
  },
  {
    title: "Jet Fighter Game",
    description: "Playable Ad",
    thumbnail: "/thumbnails/playable8.png",
    file: "/playables/playable8/index.html",
  },
  {
    title: "2D Merge Game",
    description: "Playable Ad",
    thumbnail: "/thumbnails/playable9.png",
    file: "/playables/playable9/index.html",
  },
];

export default function App() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-200 min-h-screen font-sans">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors ${
          scrolled ? "bg-gray-950/90 backdrop-blur shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
          <a href="#" className="font-bold text-lg tracking-wide">
            Pedro Henrique
          </a>
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
            <a href="#projects" className="hover:text-blue-400 transition">
              Playables
            </a>
            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden"
      >
        {/* floating accents */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />

        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6">
          Hi, I'm Pedro Henrique
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-xl">
          Game Programmer
        </p>
        <a
          href="#projects"
          className="mt-10 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          View Portfolio
        </a>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="relative w-50 h-50 max-w-sm mx-auto md:mx-0 aspect-square rounded-2xl overflow-hidden bg-gray-800/60 border-2 border-gray-700">
            <img
              src="/photo/myPhoto.jpg"
              alt="Pedro Henrique"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-2">
            <p className="text-gray-200 leading-relaxed">
             Hi! I'm Pedro Henrique, a game programmer based in Brazil. I love solving technical problems and being creative, building experiences that players will actually engage with. I am passionate about exploring diverse genres and expanding my creative and technical skills. I'm always eager to learn, from building mechanics and systems for new genres to engine and graphics programming. My ultimate goal is to build games that really impact people's lives as the ones i played did to me.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-12 text-center">Playable Ads</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative bg-gray-800/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-blue-600/30 transition"
            >
              <img
                src={p.thumbnail}
                alt={p.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{p.description}</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelected(p)}
                    className="px-4 py-2 bg-blue-600/80 rounded-lg hover:bg-blue-600"
                  >
                    ▶ Play Here
                  </button>
                  <a
                    href={p.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700/80 rounded-lg hover:bg-gray-700"
                  >
                    ↗ New Tab
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-900/60 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Skills & Tools</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "JavaScript",
              "TypeScript",
              "Three.js",
              "Pixi.js",
              "WebGL",
              "Unity",
              "C#",
              "React",
            ].map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 bg-gray-800 rounded-full text-sm font-medium hover:bg-blue-600/70 hover:shadow-md hover:shadow-blue-600/30 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        {/* <p className="text-gray-400 mb-8">
          Open for collaborations, freelance projects and creative opportunities.
        </p> */}
        <div className="flex justify-center gap-8 text-2xl">
          <a
            href="mailto:pedrohfcarneiro1@gmail.com"
            className="hover:text-blue-400 transition"
            aria-label="Email"
            title="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
              <path d="M3 7l9 6 9-6"></path>
            </svg>
          </a>
          <a
            href="https://github.com/pedrohfcarneiro"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="GitHub"
            title="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.58 0-.287-.01-1.049-.016-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.758-1.334-1.758-1.09-.745.083-.73.083-.73 1.205.085 1.839 1.238 1.839 1.238 1.07 1.833 2.807 1.303 3.492.997.109-.775.419-1.303.762-1.603-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.805 5.624-5.476 5.921.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.293 0 .321.216.696.825.578C20.565 21.796 24 17.299 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/pedrohfcarneiro/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8"
              fill="currentColor"
            >
              <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003zM7.059 20.452H3.877V9h3.182v11.452zM5.468 7.433c-1.018 0-1.842-.826-1.842-1.844 0-1.018.824-1.842 1.842-1.842 1.018 0 1.844.824 1.844 1.842 0 1.018-.826 1.844-1.844 1.844zM20.452 20.452h-3.178v-5.573c0-1.33-.024-3.041-1.853-3.041-1.853 0-2.136 1.448-2.136 2.944v5.67H10.11V9h3.05v1.561h.043c.425-.804 1.462-1.652 3.009-1.652 3.219 0 3.812 2.119 3.812 4.872v6.671z" />
            </svg>
          </a>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur">
          <div className="bg-gray-900/95 rounded-2xl shadow-2xl w-11/12 h-5/6 relative flex flex-col">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>
            <iframe
              src={selected.file}
              className="w-full h-full rounded-b-2xl border border-gray-700"
            />
          </div>
        </div>
      )}
    </div>
  );
}
