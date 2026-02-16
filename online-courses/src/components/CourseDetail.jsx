import { useLocation } from "react-router-dom";

const CourseDetail = () => {
  const location = useLocation();
  const course = location.state;

  if (!course) {
    return <p>❌ ئۇچۇر تېپىلمىدى</p>;
  }

  return (
    <div className="p-4 max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded shadow">
      <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">{course.title}</h2>
      {course.image && (
        <img src={course.image} alt={course.title} className="w-full h-60 object-cover rounded mb-4" />
      )}
      <p className="text-gray-700 dark:text-gray-300 mb-2">👤 نوتۇقچى: {course.speaker}</p>
      <p className="text-gray-600 dark:text-gray-400">{course.description}</p>
    </div>
  );
};

export default CourseDetail