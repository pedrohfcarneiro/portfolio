import { useParams } from "react-router-dom";
import { posts } from "../data/blog";

export default function BlogPost() {
  const { postId } = useParams();
  const post = posts.find((p) => p.id === postId);

  if (!post) return <p className="p-8">Post not found.</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-indigo-300">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-8">{post.date}</p>
      <article className="prose prose-invert max-w-none">
        {post.content}
      </article>
    </div>
  );
}
