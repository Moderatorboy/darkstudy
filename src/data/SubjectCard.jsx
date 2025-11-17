import { Link } from "react-router-dom";

export default function SubjectCard({ subject }) {
  // Safety check (agar thumbnail ya name na ho to error avoid ho jayega)
  if (!subject) return null;

  return (
    <Link
      to={`/subject/${subject.id}`}
      className="border p-4 rounded-xl shadow-sm hover:shadow-md transition-all bg-white dark:bg-[#111] dark:border-gray-700"
    >
      <img
        src={subject.thumbnail || "/images/default-subject.png"}
        alt={subject.name || "Subject"}
        className="w-full h-36 object-cover rounded-lg"
      />
      
      <h2 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">
        {subject.name}
      </h2>
    </Link>
  );
}
