import { Link } from "react-router-dom";
import "./StudentCard.css";

export default function StudentCard({ student }) {
  const course = student.courses?.[0];

  return (
    <div className="student-card bg-white rounded-lg shadow-md p-4">
      <img
        src={student.avatar || "/avatars/default.png"}
        alt={student.name}
        className="w-24 h-24 rounded-full mx-auto mb-2"
      />
      <h3 className="text-xl font-bold text-center">{student.name}</h3>

      {course ? (
        <>
          <p>🧑‍🏫 {course.teacher}</p>
          <p>📘 {course.title}</p>
          <p>⏱️ {course.duration}</p>
          <p>✅ {course.progress}%</p>
        </>
      ) : (
        <p className="text-red-500 text-sm text-center">🚫 دەرس ئۇچۇرى يوق</p>
      )}

      <Link to={`/students/${student.id}`} className="text-blue-600 underline block mt-2 text-center">
        تەپسىلاتى
      </Link>
    </div>
  );
}