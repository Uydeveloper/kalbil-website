// src/components/StudentCard.jsx
import { Link } from "react-router-dom";
import "./StudentCard.css";

export default function StudentCard({ student }) {
  return (
    <div className="student-card">
      <video src={student.videoUrl} controls />
      <img src={student.imageUrl} alt={`${student.name}`} />
      <h3>{student.name}</h3>
      <p>🧑‍🏫 ئوقۇتقۇچى: {student.teacher}</p>
      <p>📘 دەرس تىمىسى: {student.course}</p>
      <p>⏱️ مۇددەت: {student.duration}</p>
      <p>✅ تاماملاش: {student.progress}%</p>
      <Link to={`/students/${student.id}`} className="text-blue-600 underline">
  تەپسىلاتى
</Link>
    </div>
  );
}