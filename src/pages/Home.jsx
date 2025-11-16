import SubjectCard from '../components/SubjectCard';
import { subjects } from '../data/dummyData';

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {subjects.map(s => <SubjectCard key={s.id} subject={s} />)}
    </div>
  );
}
