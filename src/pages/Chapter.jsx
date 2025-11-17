import ChapterCard from "../components/ChapterCard";

const Chapters = () => {
  const chapters = [
    { id: "ch1", name: "Basic Concepts" },
    { id: "ch2", name: "Atomic Structure" },
    { id: "ch3", name: "Chemical Bonding" }
  ];

  return (
    <div className="p-4 space-y-3">
      {chapters.map((c) => (
        <ChapterCard key={c.id} data={c} />
      ))}
    </div>
  );
};

export default Chapters;
