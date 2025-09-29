interface Project {
    title: string;
    description: string;
    thumbnail: string;
    file: string;
  }
  
  export default function Modal({
    project,
    onClose,
  }: {
    project: Project;
    onClose: () => void;
  }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
        <div className="bg-gray-900 rounded-lg shadow-lg w-11/12 h-5/6 relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-white"
          >
            ✕
          </button>
          <iframe src={project.file} className="w-full h-full rounded-b-lg" />
        </div>
      </div>
    );
  }
  