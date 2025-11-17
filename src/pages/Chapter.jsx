import ChapterCard from "../data/ChapterCard";
import { useParams } from "react-router-dom";

const Chapters = () => {
  const { subjectId } = useParams();

  const chapters = [
    { id: "ch1", name: "Basic Concepts" },
    { id: "ch2", name: "Atomic Structure" },
    { id: "ch3", name: "Chemical Bonding" }
  ];

  return (
    <div className="p-4 space-y-3">
      {chapters.map((chapter) => (
        <ChapterCard 
          key={chapter.id} 
          chapter={chapter}
          subjectId={subjectId}
        />
      ))}
    </div>
  );
};

export default Chapters;
