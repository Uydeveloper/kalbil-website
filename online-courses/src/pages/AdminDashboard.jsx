// src/pages/AdminDashboard.jsx
import { useAuth } from "../context/AuthContext";
import students from "../data/students.json";
import StudentDetail from "../components/StudentDetail";

export default function AdminDashboard() {
  const { isAdmin } = useAuth();

  if (!isAdmin) return <p>⛔ باشقۇرغۇچىلا كۆرەلەيدۇ</p>;

  return (
    <div className="space-y-4 p-4">
      <h1 className="text-2xl font-bold">👨‍🎓 ھەممە ئوقۇغۇچىلار</h1>
      {students.map((student) => (
        <StudentDetail key={student.id} student={student} />
      ))}
    </div>
  );
}