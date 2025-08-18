import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext"; // ✅ Context قوشۇش

export default function MainSection() {
  const navigate = useNavigate();
  const localKey = "kalbil_courses";
  const [courses, setCourses] = useState([]);
  const { user } = useContext(UserContext); // ✅ Context ئارقىلىق user

  useEffect(() => {
    const saved = localStorage.getItem(localKey);
    if (saved) {
      setCourses(JSON.parse(saved));
    }
  }, []);

  const handleDelete = (id) => {
    const filtered = courses.filter((course) => course.id !== id);
    localStorage.setItem(localKey, JSON.stringify(filtered));
    setCourses(filtered);
  };

  const handleStart = () => navigate("/add-course");
  const handleQuantum = () => navigate("/quantummachinelearning");

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6 md:px-12 lg:px-24">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            بىلىم ئارقىلىق كەلگۈسىنى قۇرۇش
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            ئۇيغۇر ئوقۇغۇچىلار ئۈچۈن بىلىم، مەدەنىيەت، ۋە تېخنىكىنى بىرلەشتۈرگەن دەرس سۇپىسى. سىزگە قەلب بىلەن قۇرۇلغان بىلىم يولىنى تەمىنلەيدۇ
          </p>
          <p className="italic text-indigo-600 dark:text-indigo-300 mb-6">
            «بىلىم – قەلبنىڭ نۇرى، كەلگۈسىنىڭ يولى»
          </p>
          <div className="flex gap-4 flex-wrap">
            {user?.role === "admin" && (
              <button
                onClick={() => navigate('/view-registration')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
              >
                ➕ دەرس قوشۇش
              </button>
            )}
            <button
              onClick={handleQuantum}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 px-6 py-2 rounded transition"
            >
              📚 كىۋانىت دەرسلىرى
            </button>
          </div>
        </div>

        <div>
          <img
            src="/images/image05.png"
            alt="Students learning"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Course List Section */}
      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-800 text-center dark:text-white mb-6">
          📖 قوشۇلغان دەرسلەر
        </h3>
        {courses.length === 0 ? (
          <p className="text-gray-600 text-right dark:text-gray-400">
            ھازىرچە قوشۇلغان دەرس يوق.
          </p>
        ) : (
          <div className="space-y-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-800 shadow"
              >
                <h4 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300">
                  {course.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  {course.description}
                </p>

                <details className="mb-2">
                  <summary className="cursor-pointer text-sm text-blue-600 dark:text-blue-300">
                    📑 سلايدلارنى كۆرۈش
                  </summary>
                  <ul className="mt-2 list-disc list-inside space-y-2">
                    {course.slides.map((slide, i) => (
                      <li key={i}>
                        <strong>{slide.heading}</strong>: {slide.content}
                      </li>
                    ))}
                  </ul>
                </details>

                <button
                  onClick={() => handleDelete(course.id)}
                  className="mt-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  🗑️ ئۆچۈرۈش
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}