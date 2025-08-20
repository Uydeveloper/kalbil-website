import { Link } from "react-router-dom";
import "./StudentCard.css";

export default function StudentCard({ student }) {
  const course = student.courses?.[0];

  return (
    <div className="student-card bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 ease-in-out">
      {/* 🖼️ Avatar */}
      <div className="flex justify-center mb-4">
        <div className="avatar-circle">
          <img
            src={student.avatar || "/avatars/default.png"}
            alt={student.name}
            className="avatar-img"
          />
        </div>
      </div>

      {/* 👤 Name */}
      <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
        {student.name}
      </h3>

      {/* 📘 Course Info */}
      {course ? (
        <div className="text-sm text-gray-700 space-y-1 text-left px-4">
          <p>🧑‍🏫 <span className="font-medium">{course.teacher}</span></p>
          <p>📘 <span className="font-medium">{course.title}</span></p>
          <p>⏱️ <span className="font-medium">{course.duration}</span></p>
          <p>✅ <span className="font-medium">{course.progress}% تاماملاندى</span></p>
        </div>
      ) : (
        <p className="text-red-500 text-sm text-center mt-2">🚫 دەرس ئۇچۇرى يوق</p>
      )}

      {/* 🔗 Detail Link */}
      <div className="mt-4 text-center">
        <Link
          to={`/students/${student.id}`}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm font-semibold"
        >
          تەپسىلاتى كۆرۈش
        </Link>
      </div>
    </div>
  );
}