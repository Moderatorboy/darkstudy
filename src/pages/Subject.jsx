import SubjectCard from "../components/SubjectCard";

const Subjects = () => {
  const subjects = [
    { id: "chem", name: "CHEMISTRY", thumbnail: "/chem.jpg" },
    { id: "phy", name: "PHYSICS", thumbnail: "/phy.jpg" },
    { id: "math", name: "MATHS", thumbnail: "/math.jpg" }
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {subjects.map((s) => (
        <SubjectCard key={s.id} data={s} />
      ))}
    </div>
  );
};

export default Subjects;
