import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Diary from "./pages/Diary";
import Choose from "./pages/Choose";
import FindYourRain from "./pages/FindyourRain";
import Gallery from "./pages/Gallery";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/Choose_your_Rain" element={<Choose />} />
        <Route path="/Find_your_Rain" element={<FindYourRain />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
