import StudentCard from "./StudentCard";
import studentsData from "../data/students.json";
import { useState } from "react";
import AddStudentForm from "./AddStudentForm";
import { useNavigate } from "react-router-dom"; // ✅ redirect ئۈچۈن
import JoinClass from "./JoinClass";


export default function StudentList() {
  const [students, setStudents] = useState(studentsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate(); // ✅ redirect function

  const filtered = students.filter((s) =>
    `${s.name} ${s.courses?.[0]?.title || ""}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
    setShowForm(false);
  };

  return (
    <section className="min-h-screen bg-gray-50">
      {/* 🎨 باش تېما */}
      <div className="relative bg-blue-900 text-white py-12 px-6 md:px-20 text-center">
        <img
          src="/images/education-banner.jpg"
          alt="Education Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">KalBiL — بىلىم بىلەن كۈچلۈك بول</h1>
          <p className="text-lg max-w-3xl mx-auto">
            «بىلىم — قەلبنىڭ نۇرى، ئەقىلنىڭ قۇرى. ئۆگىنىشتىن توختىما، تىرىشچانلىق بىلەن ئۆزگىرىشنى باشلا.»
          </p>
        </div>
      </div>

      {/* 🧑‍🎓 ئوقۇغۇچىلار تىزىمى */}
      <div className="max-w-6xl mx-auto p-6 md:p-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          تىزىملىتىلگەن ئوقۇغۇچىلار
        </h2>

        <input
          type="text"
          placeholder="ئىسمى، دەرس، ياكى ئوقۇتقۇچى بويىچە ئىزدەڭ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full mb-6 px-4 py-2 border border-blue-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* ✅ ئىككى بوتۇن: يېڭى ئوقۇغۇچى + Live دەرس */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button
            onClick={() => setShowForm(true)}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 shadow"
          >
            ➕ يېڭى ئوقۇغۇچى قوشۇش
          </button>

          <button
            onClick={() => navigate("/join-class")}
            className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 shadow"
          >
            🎓 Live دەرسكە قاتنىشىش
          </button>
        </div>

        {showForm && (
          <div className="mb-6">
            <AddStudentForm onAdd={handleAddStudent} onCancel={() => setShowForm(false)} />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </div>
    </section>
  );
}