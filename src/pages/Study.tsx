import { Link } from "react-router-dom";
import { studyProjects } from "../data/studyProjects";
import SectionTitle from "../components/SectionTitle";
import type { StudyProjectInterface } from "../data/studyProjects";

export default function Study() {

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <SectionTitle title="Study Projects" />
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {studyProjects.map((project: StudyProjectInterface) => (
          <Link key={project.id} to={`/study/${project.id}`}>
            <div className="bg-gray-800 rounded-2xl p-4 hover:scale-105 transition transform border-l-4 border-l-transparent" style={{ borderLeftColor: `#307167` }}>
            <img src={project.thumbnail} alt={project.name} className="rounded-xl mb-3" />
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
