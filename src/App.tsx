import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Playables from "./pages/Playables";
import Games from "./pages/Games";
import GameDetails from "./pages/GameDetails";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

export default function App() {
  return (
    <Router>
      <Header />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio/playables" element={<Playables />} />
          <Route path="/portfolio/games" element={<Games />} />
          <Route path="/portfolio/games/:gameId" element={<GameDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
        </Routes>
      </main>
    </Router>
  );
}
