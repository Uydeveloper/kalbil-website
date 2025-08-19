// src/pages/CourseTopics.jsx
import { useNavigate } from "react-router-dom";

const courses = [
  { id: "qml", title: "Quantum Machine Learning", description: "كۋانتۇم ئۈگىنىش دەرسى" },
  { id: "ai", title: "AI Ethics", description: "AI نىڭ ئەخلاقى ۋە مەسئۇلىيىتى" },
  { id: "web", title: "Web Development", description: "تور تەرەققىيات دەرسى" },
];

export default function CourseTopics() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-300 mb-8">📚 KalBil دەرسلىرى</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:ring-2 hover:ring-blue-500 transition cursor-pointer"
            onClick={() => navigate(`/qml/${course.id}`)}
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{course.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}