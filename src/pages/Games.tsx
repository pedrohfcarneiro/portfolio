import { Link } from "react-router-dom";
import { games } from "../data/games";
import SectionTitle from "../components/SectionTitle";

export default function Games() {
  const personal = games.filter((g) => g.category === "Personal");
  const jam = games.filter((g) => g.category === "Game Jam");

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-gray-300 text-sm mb-12 text-center max-w-2xl mx-auto leading-relaxed font-bold"> 
        This page is under construction.
      </div>
      <SectionTitle title="Personal Projects" />
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {personal.map((g) => (
          <Link
            key={g.id}
            to={`/portfolio/games/${g.id}`}
            className="bg-gray-800 rounded-2xl p-4 hover:scale-105 transition transform"
          >
            <img src={g.icon} alt={g.name} className="rounded-xl mb-3" />
            <h3 className="text-xl font-semibold">{g.name}</h3>
            <p className="text-gray-400 text-sm">{g.pitch}</p>
          </Link>
        ))}
      </div>

      <SectionTitle title="Game Jam Projects" />
      <div className="grid md:grid-cols-3 gap-6">
        {jam.map((g) => (
          <Link
            key={g.id}
            to={`/portfolio/games/${g.id}`}
            className="bg-gray-800 rounded-2xl p-4 hover:scale-105 transition transform"
          >
            <img src={g.icon} alt={g.name} className="rounded-xl mb-3" />
            <h3 className="text-xl font-semibold">{g.name}</h3>
            <p className="text-gray-400 text-sm">{g.pitch}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
