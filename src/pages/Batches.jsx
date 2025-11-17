import BatchCard from "../data/BatchCard";

const Batches = () => {
  const batches = [
    { id: "b1", name: "NEET 2025", thumbnail: "/images/batch1.jpg" },
    { id: "b2", name: "JEE MAINS 2025", thumbnail: "/images/batch2.jpg" }
  ];

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {batches.map((batch) => (
        <BatchCard key={batch.id} batch={batch} />
      ))}
    </div>
  );
};

export default Batches;
