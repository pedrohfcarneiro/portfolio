import { playables } from "../data/playables";
import SectionTitle from "../components/SectionTitle";
import PlayableProjectCard from "../components/ProjectCard";
import { useState } from "react";

import type { PlayableProjectInterface } from "../data/playables";

export default function Playables() {
const [selected, setSelected] = useState<PlayableProjectInterface | null>(null);
const base = import.meta.env.BASE_URL;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <SectionTitle title="Playable Ads" />
      <div className="grid md:grid-cols-3 gap-6">
        {playables.map((p) => (
          <PlayableProjectCard
            key={p.title}
            playableProject={p}
            onPlay={() => {console.log(p);setSelected(p);}}
          />
        ))}
      </div>
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
              src={`${selected.file}`}
              className="w-full h-full rounded-b-2xl border border-gray-700"
            />
          </div>
        </div>
      )}
    </div>
  );
}
