import { useParams } from 'react-router-dom';
import { chapters } from '../data/dummyData';
import ChapterCard from '../components/ChapterCard';

export default function Subject() {
  const { subjectId } = useParams();
  const chaps = chapters[subjectId] || [];
  return (
    <div className="p-4 grid gap-4">
      {chaps.map(c => <ChapterCard key={c.id} chapter={c} subjectId={subjectId} />)}
    </div>
  );
}
