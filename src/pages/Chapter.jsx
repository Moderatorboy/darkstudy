import { useParams } from 'react-router-dom';
import { lectures } from '../data/dummyData';
import LectureTabs from '../components/LectureTabs';

export default function Chapter() {
  const { chapterId } = useParams();
  const lec = lectures[chapterId] || [];
  return (
    <div className="p-4 space-y-4">
      {lec.map(l => <LectureTabs key={l.id} lecture={l} />)}
    </div>
  );
}
