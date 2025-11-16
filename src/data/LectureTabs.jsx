import { useState } from 'react';
import VideoPlayer from './VideoPlayer';
export default function LectureTabs({ lecture }) {
  const [tab, setTab] = useState('lecture');
  return (
    <div>
      <div className="flex space-x-4 mb-4">
        {['lecture', 'notes', 'dppQuiz', 'dppPDF', 'dppVideo'].map(t => (
          <button key={t} className={`px-4 py-2 ${tab===t?'bg-blue-500 text-white':'bg-gray-200'}`} onClick={()=>setTab(t)}>{t}</button>
        ))}
      </div>
      <div className="border p-4 rounded">
        {tab==='lecture' && <p>Lecture Content Here</p>}
        {tab==='notes' && <p>Notes Content Here</p>}
        {tab==='dppQuiz' && <p>DPP Quiz Content Here</p>}
        {tab==='dppPDF' && <p>DPP PDF Content Here</p>}
        {tab==='dppVideo' && <VideoPlayer url={lecture.rumble} />}
      </div>
    </div>
  );
}
