import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
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
        <Route path="/" element={<Home />} />
        <Route path="/batches/:batchId" element={<Batches />} />
        <Route path="/subjects/:batchId" element={<Subjects />} />
        <Route path="/chapters/:batchId/:subjectId" element={<Chapters />} />
        <Route
          path="/content/:batchId/:subjectId/:chapterId"
          element={<Content />}
        />
        <Route path="/play/:batchId/:video" element={<VideoPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
