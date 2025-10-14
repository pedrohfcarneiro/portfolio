import { useParams, Link } from "react-router-dom";
import { games } from "../data/games";
import VideoEmbed from "../components/VideoEmbed";
import SectionTitle from "../components/SectionTitle";

export default function GameDetails() {
  const { gameId } = useParams();
  const game = games.find((g) => g.id === gameId);

  if (!game) return <p>Game not found.</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <img src={game.icon} alt={game.title} className="w-20 h-20 rounded-xl" />
        <div>
          <h1 className="text-3xl font-bold">{game.title}</h1>
          <p className="text-gray-400">{game.pitch}</p>
        </div>
      </div>

      {/* About Section */}
      <SectionTitle title="About the Game" />
      <p className="mb-4">{game.description}</p>
      <ul className="text-sm text-gray-300 space-y-1 mb-6">
        <li><b>People:</b> {game.people.join(", ")}</li>
        <li><b>Status:</b> {game.status}</li>
        <li><b>Tools:</b> {game.tools.join(", ")}</li>
        <li><b>Skills:</b> {game.skills.join(", ")}</li>
      </ul>

      {/* Video */}
      <SectionTitle title="Showcase" />
      <VideoEmbed videoId={game.videoId} />

      {/* Project Details */}
      <SectionTitle title="Development Details" />
      <div className="space-y-6">
        {game.details.map((item, i) => {
          if (item.type === "text")
            return <p key={i} className="text-gray-200">{item.content}</p>;
          return <img key={i} src={item.content} className="rounded-xl" />;
        })}
      </div>

      {/* Related Blog Posts */}
      {game.relatedPosts.length > 0 && (
        <>
          <SectionTitle title="Related Blog Posts" />
          <div className="grid md:grid-cols-2 gap-6">
            {game.relatedPosts.map((id) => (
              <Link key={id} to={`/blog/${id}`} className="bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition">
                <h4 className="text-lg font-semibold capitalize">{id.replace(/-/g, " ")}</h4>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
