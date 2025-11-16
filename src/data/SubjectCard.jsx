import { Link } from 'react-router-dom';
export default function SubjectCard({ subject }) {
  return (
    <Link to={`/subject/${subject.id}`} className="border p-4 rounded shadow hover:shadow-lg">
      <img src={subject.thumbnail} alt={subject.name} className="w-full h-32 object-cover rounded" />
      <h2 className="mt-2 text-lg font-semibold">{subject.name}</h2>
    </Link>
  );
}
