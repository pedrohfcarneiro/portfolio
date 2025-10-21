import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  content: string;
}

export const MarkdownRenderer: React.FC<Props> = ({ content }) => {
  const accentColor = "#58BBA4"; // Primary accent
  return (
    <div className="portfolio-markdown text-gray-300">
      <ReactMarkdown
        className="prose prose-xl prose-invert max-w-none"
        remarkPlugins={[remarkGfm]}
        components={{
          h2: (props) => <h2 {...props} className="text-3xl font-bold mt-8 mb-4 text-white border-b-2 pb-2" style={{borderColor: accentColor}} />,
          h3: (props) => <h3 {...props} className="text-2xl font-semibold mt-6 mb-3" style={{color: accentColor}} />,
          ul: (props) => <ul {...props} className="list-disc ml-6 mb-2 text-lg" style={{listStyle: 'disc', color: accentColor}} />,
          p: (props) => <p {...props} className="mb-4 leading-relaxed" />
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};