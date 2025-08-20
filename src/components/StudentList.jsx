import StudentCard from "./StudentCard";
import studentsData from "../data/students.json";
import { useState } from "react";
import AddStudentForm from "./AddStudentForm";

export default function StudentList() {
  const [students, setStudents] = useState(studentsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);

  const filtered = students.filter((s) =>
    `${s.name} ${s.courses?.[0]?.title || ""}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
    setShowForm(false);
  };

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

        <button
          onClick={() => setShowForm(true)}
          className="mb-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          ➕ دەرس تىزىملىتىش
        </button>

        {showForm && <AddStudentForm onAdd={handleAddStudent} onCancel={() => setShowForm(false)} />}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((student, index) => (
            <StudentCard key={index} student={student} />
          ))}
        </div>
      </div>
    </section>
  );
}