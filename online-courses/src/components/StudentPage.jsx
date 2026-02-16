import { useParams, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import students from "../data/students.json";
import CourseCard from "./cards/CourseCard";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function StudentPage() {
  const { id } = useParams(); // ID بويىچە
  const { user } = useAuth();
  const { currentUser } = useContext(UserContext);

  const student = students.find((s) => String(s.id) === id);

  if (!student) {
    return <p className="text-red-500 p-6">🚫 بۇ ئوقۇغۇچى تېپىلمىدى</p>;
  }

  const isAdmin = user?.role === "admin";
  const isSelf = user?.id === student.id;

  if (!isAdmin && !isSelf) {
    return <Navigate to="/students" replace />;
  }

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-6">{student.name} نىڭ دەرسلىرى</h2>

      {student.courses?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {student.courses.map((course, i) => (
            <CourseCard key={i} course={course} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">🚫 ھېچقانداق دەرس تىزىملاتقان ئەمەس</p>
      )}
    </section>
  );
}