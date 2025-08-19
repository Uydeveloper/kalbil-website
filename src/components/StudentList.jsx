// src/components/StudentList.jsx
import StudentCard from "./StudentCard";
import { useEffect, useState } from "react";

const students = [
  {
    id: 1,
    name: "Ahmet",
    teacher: "Ali",
    course: "JavaScript",
    duration: "4 ھەپتە",
    progress: 75,
    videoUrl: "/videos/ahmet.mp4",
    imageUrl: "/images/ahmet.jpg"
  },
  {
    id: 2,
    name: "Mehmet",
    teacher: "Fatma",
    course: "React",
    duration: "6 ھەپتە",
    progress: 40,
    videoUrl: "/videos/mehmet.mp4",
    imageUrl: "/images/mehmet.jpg"
  }
];

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(data);
  }, []);

  const filtered = students.filter((s) =>
    `${s.name} ${s.course}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          تىزىملىتىلگەن ئوقۇغۇچىلار
        </h2>

        <input
          type="text"
          placeholder="ئىسمى ياكى دەرس بويىچە ئىزدەڭ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full mb-6 px-4 py-2 border border-blue-300 rounded"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((student, index) => (
            <StudentCard key={index} student={student} />
          ))}
        </div>
      </div>
    </section>

  );
}