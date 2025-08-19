import { useParams, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import students from "../data/students.json"; // بارلىق تىزىملاتقان ئوقۇغۇچىلار
import CourseCard from "./cards/CourseCard";

export default function StudentPage() {
  const { name } = useParams();
  const { user } = useAuth();

  const student = students.find((s) => s.name === name);

  if (!student) {
    return <p>بۇ ئوقۇغۇچى تېپىلمىدى</p>;
  }

  // ئەگەر باشقۇرغۇچى بولمىسا → پەقەت ئۆزىنىڭ بەتنىلا ئاچالايدۇ
  if (user?.role !== "admin" && user?.name !== student.name) {
    return <Navigate to="/students" replace />;
  }

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-6">{student.name} نىڭ دەرسلىرى</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {student.courses.map((course, i) => (
          <CourseCard key={i} course={course} />
        ))}
      </div>
    </section>
  );
}
