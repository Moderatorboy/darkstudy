import { useState } from 'react';
import VideoPlayer from './VideoPlayer';

export default function LectureTabs({ lecture }) {
  const [tab, setTab] = useState('lecture');

  return (
    <div>
      {/* Tabs */}
      <div className="flex space-x-4 mb-4">
        {[
          { key: 'lecture', label: 'Lecture' },
          { key: 'notes', label: 'Notes' },
          { key: 'dppQuiz', label: 'DPP Quiz' },
          { key: 'dppPDF', label: 'DPP PDF' },
          { key: 'dppVideo', label: 'DPP Video' }
        ].map(t => (
          <button
            key={t.key}
            className={`px-4 py-2 rounded ${
              tab === t.key
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Content Body */}
      <div className="border p-4 rounded">
        
        {/* Lecture Video */}
        {tab === 'lecture' && (
          <VideoPlayer url={lecture.url} />
        )}

        {/* Notes */}
        {tab === 'notes' && (
          <div>
            {lecture.notes && lecture.notes.length > 0 ? (
              <ul className="list-disc ml-5">
                {lecture.notes.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            ) : (
              <p>No Notes Available</p>
            )}
          </div>
        )}

        {/* DPP Quiz */}
        {tab === 'dppQuiz' && (
          <div>
            {lecture.dppQuiz ? (
              <a
                href={lecture.dppQuiz}
                target="_blank"
                className="text-blue-500 underline"
              >
                Open DPP Quiz
              </a>
            ) : (
              <p>No DPP Quiz Available</p>
            )}
          </div>
        )}

        {/* DPP PDF */}
        {tab === 'dppPDF' && (
          <div>
            {lecture.dppPDF ? (
              <a
                href={lecture.dppPDF}
                target="_blank"
                className="text-blue-500 underline"
              >
                Download DPP PDF
              </a>
            ) : (
              <p>No DPP PDF Available</p>
            )}
          </div>
        )}

        {/* DPP Video */}
        {tab === 'dppVideo' && (
          <div>
            {lecture.dppVideo ? (
              <VideoPlayer url={lecture.dppVideo} />
            ) : (
              <p>No DPP Video Available</p>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
