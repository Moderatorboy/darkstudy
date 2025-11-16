import { Link } from 'react-router-dom';
export default function ChapterCard({ chapter, subjectId }) {
  return (
    <Link to={`/subject/${subjectId}/chapter/${chapter.id}`} className="border p-3 rounded hover:bg-gray-100">
      {chapter.name}
    </Link>
  );
}
