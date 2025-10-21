import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { posts } from "../data/posts";
import { MarkdownRenderer } from "../components/MarkdownRenderer";

// Preload all markdown files for posts
const markdownFiles = import.meta.glob("../data/markdown/post_*.md", {
  as: "raw",
});

export const BlogPost: React.FC = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);
  const [markdown, setMarkdown] = useState("");
  useEffect(() => {
    if (post) {
      const path = `../data/markdown/post_${post.id}.md`;
      const loader = markdownFiles[path];
      if (loader) {
        loader().then((content: string) => setMarkdown(content));
      } else {
        console.warn("Markdown not found for:", path);
      }
    }
  }, [post]);

  if (!post) return <div className="p-8 text-center">Post not found.</div>;

  return (
    <div className="p-8 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-gray-400">{post.date}</p>
      <MarkdownRenderer content={markdown} />
    </div>
  );
};
