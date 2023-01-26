import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Diary from "./pages/Diary";
import TestsNewsDonations from "./pages/TestsNewsDonations";
import QuestionsAndAnswers from "./pages/QuestionsAndAnswers";
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
        <Route path="/tests_news_donations" element={<TestsNewsDonations />} />
        <Route path="/questions_and_answers" element={<QuestionsAndAnswers />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
};

export default AppRouter;