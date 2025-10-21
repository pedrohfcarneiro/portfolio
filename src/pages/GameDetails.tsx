import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { games } from "../data/games";
import { MarkdownRenderer } from "../components/MarkdownRenderer";

// Preload all markdown files at build time
const markdownFiles = import.meta.glob("../data/markdown/game_*.md", {
  as: "raw",
});

// --- Helper Component for Info Cards ---
interface InfoCardProps {
  title: string;
  content: string;
}

const InfoCard = ({ title, content }: InfoCardProps) => {
  const accentColor = "#58BBA4"; // Primary accent
  return (
    // Padding reduced from p-4 to p-3
    <div className="bg-zinc-900 p-3 rounded-lg shadow-xl border-l-4 border-l-transparent transition-all duration-300 flex flex-col justify-between h-full transform hover:shadow-2xl"
         style={{ borderLeftColor: accentColor, borderLeftWidth: "4px" }}
         onMouseEnter={(e) => e.currentTarget.classList.add('hover:border-l-[#307167]')}
         onMouseLeave={(e) => e.currentTarget.classList.remove('hover:border-l-[#307167]')}>
      
      {/* Title size remains text-xs */}
      <h3 className="text-xs font-semibold uppercase tracking-widest mb-2" style={{color: accentColor}}>{title}</h3>
      {Array.isArray(content) ? (
          <ul className="space-y-1 mt-1">
              {/* List item text reduced from text-base to text-sm */}
              {content.map((item, index) => (
                  <li key={index} className="text-sm font-medium text-white">{item}</li>
              ))}
          </ul>
      ) : (
          /* Single line text reduced from text-lg to text-base */
          <p className="text-base font-extrabold text-white">{content}</p>
      )}
    </div>
  );
};

// ----------------------------------------

export const GameDetails: React.FC = () => {
  const { gameId } = useParams();
  const game = games.find((g) => g.id === gameId);
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    if (game) {
      const path = `../data/markdown/game_${game.id}.md`;
      const loader = markdownFiles[path];
      if (loader) {
        loader().then((content: string) => setMarkdown(content));
      } else {
        console.warn("Markdown not found for:", path);
      }
    }
  }, [game]);

  if (!game)
    return (
      <div className="flex items-center justify-center min-h-screen bg-zinc-950 text-gray-300">
        <p className="text-2xl animate-pulse">Game not found...</p>
      </div>
    );

  // NOTE: You need a 'coverImage' property in your game object for the hero background!
  return (
    // Set the overall page background with a subtle gradient
    <div className="min-h-screen font-inter text-gray-100 relative main-app-container">
      
      {/* Hero Section - The big header area */}
      <div
        className="relative h-96 md:h-[500px] w-full overflow-hidden flex items-center justify-center p-8"
        style={{
          backgroundImage: `url(${game.coverImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", 
        }}
      >
        {/* Dark overlay for text readability against the image */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative z-10 text-center max-w-6xl w-full">
          <img
            src={game.icon}
            alt={game.name}
            // Clean border and subtle shadow, using the new color
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-4 shadow-lg mx-auto transform hover:scale-[1.03] transition-transform duration-500"
            style={{ borderColor: `white` }} // Adding 50% opacity to the hex color
          />
          <h1 className="text-5xl sm:text-6xl font-extrabold mt-8 text-white leading-tight tracking-tight">
            {game.name}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mt-4 max-w-4xl mx-auto font-light">
            {game.pitch}
          </p>
        </div>
      </div>
      
      {/* Main Content Container with generous padding and spacing */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Game Info Cards - Grid layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard title="Status" content={game.status} />
          <InfoCard title="People" content={game.people.join(", ")} />
          <InfoCard title="Tools" content={game.tools.join(", ")} />
          <InfoCard title="Skills" content={game.skills.join(", ")} />
        </div>

        {/* Video Section - Responsive 16:9 aspect ratio container */}
        {game.video && (
          <section className="space-y-6">
            {/* Centered text */}
            <h2 className="text-3xl font-bold text-white pb-2 tracking-tight border-b-2 text-center" style={{borderColor: `#307167`}}>
              Showcase
            </h2>
            <div className="relative w-[60%] mx-auto pb-[36.25%] overflow-hidden rounded-xl shadow-2xl bg-zinc-900 group transition-all duration-500 border border-zinc-800" 
                 style={{ borderColor: `white` }}
                 onMouseEnter={(e) => e.currentTarget.classList.add('hover:border-[#307167]/50')}
                 onMouseLeave={(e) => e.currentTarget.classList.remove('hover:border-[#307167]/50')}>
              <iframe
                src={game.video}
                title={`${game.name} Demonstration`}
                className="absolute inset-0 w-full h-full border-0 rounded-xl transform group-hover:scale-[1.01] transition-transform duration-500"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>
        )}

        {/* Markdown Content - Styled with the Typography Plugin */}
        <section className="bg-zinc-900 p-8 rounded-2xl shadow-xl prose prose-invert max-w-none">
          {/* 💡 The prose classes MUST be here for the styling to work */}
          <MarkdownRenderer content={markdown} />
        </section>

        {/* Development Blog Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-white pb-2 tracking-tight border-b-2" style={{borderColor: `#307167`}}>
            Related Blog Posts
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {game.relatedPosts.map((id) => (
              <a
                key={id}
                // Simulate link behavior
                href="#"
                onClick={(e) => { e.preventDefault(); console.log(`Navigating to simulated blog post: ${id}`); }}
                // Background is bg-zinc-900 (darker)
                className="block p-6 bg-zinc-900 rounded-lg shadow-xl hover:bg-zinc-800 transition-all duration-300 transform hover:-translate-y-1 group border-b-2 border-transparent"
                style={{ borderColor: `#307167` }}
                onMouseEnter={(e) => e.currentTarget.classList.add('hover:border-[#58BBA4]')}
                onMouseLeave={(e) => e.currentTarget.classList.remove('hover:border-[#58BBA4]')}
              >
                <h3 className="text-xl font-semibold text-white transition-colors duration-300" style={{ color: `#307167` }} onMouseEnter={(e) => e.currentTarget.style.color = `#307167`} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>
                  {id.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                </h3>
                <p className="text-gray-400 mt-2 text-md group-hover:text-gray-300 transition-colors duration-300">
                  Read the deep dive <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform duration-300" style={{color: `#58BBA4`}}>→</span>
                </p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};