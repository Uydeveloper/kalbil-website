// src/pages/CourseOutline.jsx
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import courses from '../data/courses.json';

export default function CourseOutline() {
  const { id } = useParams();
  const course = courses.find((c) => String(c.id) === id);

  const { userRole } = useAuth();
  const isAdmin = userRole === 'admin';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!course) {
    return (
      <div className="p-6 text-red-600 dark:text-red-400">
        ❌ Course not found.
        <button
          onClick={() => window.history.back()}
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          🔙 قايتىش
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">{course.title} Outline</h2>

        {isAdmin && (
          <div className="flex gap-3">
            <Link
              to={`/courses/${id}/edit`}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg hover:scale-105 transition-transform animate-pulse"
            >
              🛠 Edit Course
            </Link>
            <Link
              to={`/courses/${id}/stats`}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-lg hover:scale-105 transition-transform animate-pulse"
            >
              📊 View Stats
            </Link>
          </div>
        )}
      </div>

      <table className="w-full table-auto border-collapse shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-3 text-left">📚 Topic</th>
            <th className="pr-20 text-right">📝 Description</th>
          </tr>
        </thead>
        <tbody>
          {course.topics.map((topic, index) => (
            <tr
              key={index}
              className="hover:bg-blue-100 dark:hover:bg-gray-800 border-b border-gray-300"
            >
              <td className="p-3">
                <Link
                  to={`/courses/${id}/topic/${index}`}
                  className="text-blue-600 hover:underline"
                >
                  {topic.title}
                </Link>
              </td>
              <td className="pr-10 text-right">{topic.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6">
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg shadow-md hover:scale-105 transition-transform"
        >
          🔙 قايتىش
        </button>
      </div>
    </div>
  );
}
