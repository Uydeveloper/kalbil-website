import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import courses from '../data/courses.json';

export default function CourseOutline() {
  const { id } = useParams();
  const course = courses.find((c) => String(c.id) === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const user = JSON.parse(localStorage.getItem('user'));
  const isAdmin = user?.role === 'admin';

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
      <h2 className="text-3xl font-bold mb-6">{course.title} Outline</h2>

      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-3 text-left">📚 Topic</th>
            <th className="p-3 text-left">📝 Description</th>
          </tr>
        </thead>
        <tbody>
          {course.topics.map((topic, index) => (
            <tr key={index} className="hover:bg-blue-100 dark:hover:bg-gray-800">
              <td className="p-3">
                <Link
                  to={`/courses/${id}/topic/${index}`}
                  className="text-blue-600 hover:underline"
                >
                  {topic.title}
                </Link>
              </td>
              <td className="p-3">{topic.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {isAdmin && (
        <div className="mt-6 flex gap-4">
          <Link
            to={`/courses/${id}/edit`}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            🛠 Edit Course
          </Link>
          <Link
            to={`/courses/${id}/stats`}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            📊 view Stats
          </Link>
        </div>
      )}

      <button
        onClick={() => window.history.back()}
        className="mt-6 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
      >
        🔙 قايتىش
      </button>
    </div>
  );
}