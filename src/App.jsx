import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./data/Navbar";
import Home from "./pages/Home";
import Batches from "./pages/Batches";
import Subjects from "./pages/Subjects";
import Chapters from "./pages/Chapters";
import Content from "./pages/Content";
import VideoPlayer from "./pages/VideoPlayer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* SHOW ALL BATCHES */}
        <Route path="/batches" element={<Batches />} />

        {/* SELECT SUBJECT */}
        <Route path="/subjects/:batchId" element={<Subjects />} />

        {/* SELECT CHAPTER */}
        <Route path="/chapters/:batchId/:subjectId" element={<Chapters />} />

        {/* CONTENT PAGE (LECTURES, NOTES, DPP) */}
        <Route
          path="/content/:batchId/:subjectId/:chapterId"
          element={<Content />}
        />

        {/* VIDEO PLAYER */}
        <Route path="/play/:videoId" element={<VideoPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
