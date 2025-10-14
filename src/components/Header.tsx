import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();

  const links = [
    { path: "/", label: "Home" },
    { path: "/portfolio/playables", label: "Playables" },
    { path: "/portfolio/games", label: "Games" },
    { path: "/blog", label: "Blog" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-gray-900/80 border-b border-gray-800 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold tracking-wide text-white">
        Pedro Henrique
        </Link>
        <ul className="flex space-x-6 text-gray-300 text-sm">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`hover:text-indigo-400 ${
                  pathname === link.path ? "text-indigo-400 font-semibold" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
