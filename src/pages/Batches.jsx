import BatchCard from "../components/BatchCard";

const Batches = () => {
  const batches = [
    { id: "b1", name: "NEET 2025", thumbnail: "/batch1.jpg" },
    { id: "b2", name: "JEE MAINS 2025", thumbnail: "/batch2.jpg" }
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {batches.map((b) => (
        <BatchCard key={b.id} data={b} />
      ))}
    </div>
  );
};

export default Batches;
