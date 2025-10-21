// import { posts } from "../data/posts";
// import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SectionTitle title="Development Blog" />
      <div className="space-y-6">
          <h1 className="text-gray-200 text-2xl font-bold mb-2 text-center"> Under Construction...</h1>
        {/* {posts.map((post) => (
          <Link
            to={`/blog/${post.id}`}
            key={post.id}
            className="block bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition"
          >
            <h3 className="text-xl font-bold mb-2 text-[#58BBA4]">
              {post.title}
            </h3>
            <p className="text-gray-400 text-sm mb-2">{post.date}</p>
            <p className="text-gray-300">{post.summary}</p>
          </Link>
        ))} */}
      </div>
    </div>
  );
}
