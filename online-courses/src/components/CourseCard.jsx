// src/components/CourseCard.jsx
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export default function CourseCard({ course }) {
  const navigate = useNavigate();
  const { isLoggedIn, userRole } = useAuth();
  const { darkMode } = useTheme();

  return (
    <article
      data-aos="fade-up"
      className={`relative rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 overflow-hidden ${
        darkMode ? "bg-gray-800 text-white" : "bg-white"
      }`}
    >
      {/* Image + Video Hover */}
      <div className="relative">
        <img
        src={`${process.env.PUBLIC_URL}/{course.image}`}
        // src={course.image}
          alt={`Course: ${course.title}`}
          className="w-full h-48 object-cover"
        />
        {course.video && (
          <video
            src={course.video}
            controls
            className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-500"
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-white text-4xl drop-shadow-lg">▶</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="mb-3">{course.description}</p>

        <ul className="text-sm mb-4 space-y-1">
          <li>👨‍🏫 <strong>Instructor:</strong> {course.instructor}</li>
          <li>⏱ <strong>Duration:</strong> {course.duration}</li>
        </ul>

        <div className="flex flex-wrap gap-2 mb-4">
          {course.categories?.map((cat, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white"
            >
              #{cat}
            </span>
          ))}
        </div>

        <div className="flex justify-between text-sm mb-4">
          <span>👁 {course.views}</span>
          <span>❤️ {course.likes}</span>
          <span>💬 {course.comments}</span>
        </div>

        {/* View Details */}
        {isLoggedIn && (userRole === "user" || userRole === "admin") ? (
          <button
            onClick={() => navigate(`/outline/${course.id}`)}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            🔍 تەپسلاتىنى كۆرۇش
          </button>
        ) : (
          <div
            className="mt-4 w-full bg-gray-300 text-white py-2 rounded text-center cursor-not-allowed opacity-70"
            title="Please log in to view course details"
          >
            🔒 تىزىملىتپ كۆرۇڭ
          </div>
        )}
      </div>
    </article>
  );
}