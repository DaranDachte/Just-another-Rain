import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Diary from "./pages/Diary";
import Choose from "./pages/Choose";
import FindYourRain from "./pages/FindyourRain";
import Gallery from "./pages/Gallery";
import Welcome from "./pages/Welcome";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/choose_your_Rain" element={<Choose />} />
        <Route path="/find_your_Rain" element={<FindYourRain />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
