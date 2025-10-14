interface PlayableProjectInterface {
    title: string;
    description: string;
    thumbnail: string;
    file: string;
  }
  
  export default function PlayableProjectCard({
    playableProject,
    onPlay,
  }: {
    playableProject: PlayableProjectInterface;
    onPlay: () => void;
  }) {
    return (
      <div className="bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition">
        <img src={playableProject.thumbnail} alt={playableProject.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{playableProject.title}</h3>
          <p className="text-gray-400 text-sm mb-4">{playableProject.description}</p>
          <div className="flex gap-3">
            <button
              onClick={onPlay}
              className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-500"
            >
              Play Here
            </button>
            <a
              href={playableProject.file}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600"
            >
              Open New Tab
            </a>
          </div>
        </div>
      </div>
    );
  }
  