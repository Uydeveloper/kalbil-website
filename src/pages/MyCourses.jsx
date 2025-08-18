// src/pages/MyCourses.jsx
import { useNavigate } from 'react-router-dom';
import myCourses from '../data/mycourses.json'; // ✅ Import JSON

export default function MyCourses() {
  const navigate = useNavigate();

  return (
    <div className="p-6">

      {/* Hero Uyghur slogan */}
      <div className="mb-10 text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-calibri font-bold text-blue-700 dark:text-blue-400 leading-relaxed">
          بىلىم بىلەن قۇرۇلغان كەلگۈسى، ئىلم - پەن روھ بىلەن نۇرلانغان مەدەنىيەت   بىلەن ئۇيغۇرنىڭ يېڭى باشلىنىشى
        </h1>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {myCourses.map((course) => (
          <div key={course.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            {/* Course Media */}
            <div className="relative">
              {course.video ? (
                <video
                  className="w-full h-48 object-cover"
                  src={course.video}
                  controls
                />
              ) : (
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
              )}
            </div>

            {/* Course Info */}
            <div className="p-4 space-y-1">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">{course.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">⏱ {course.duration}</p>
              <p className="text-gray-500 dark:text-gray-400">👨‍🏫 {course.instructor}</p>
              <p className="text-gray-500 dark:text-gray-400">🧑‍🎓 {course.enrolledBy}</p>

              {/* Start Button */}
              <button
                onClick={() => navigate(`/courses/${course.id}/start`)}
                className="mt-4 w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                ▶️ دەرس باشلاش
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}