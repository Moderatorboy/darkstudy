import { useParams } from "react-router-dom";
import LectureTabs from "../data/LectureTabs";
import { lectures } from "../data/dummyData";

const Content = () => {
  const { chapterId, lectureId } = useParams();

  // Get all lectures from that chapter
  const chapterLectures = lectures[chapterId] || [];

  // Find current lecture by ID
  const currentLecture = chapterLectures.find(l => l.id === lectureId);

  if (!currentLecture) {
    return (
      <div className="p-4 text-red-500">
        Lecture data not found!
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">{currentLecture.title}</h2>
      <LectureTabs lecture={currentLecture} />
    </div>
  );
};

export default Content;
