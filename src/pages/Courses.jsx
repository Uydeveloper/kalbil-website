// src/pages/Courses.jsx
import { useState, useEffect } from "react";
import courses from "../data/courses.json";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const { isLoggedIn, userRole } = useAuth();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  let filteredCourses = courses.filter((course) =>
    `${course.title} ${course.instructor}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  if (selectedCategory !== "all") {
    filteredCourses = filteredCourses.filter(
      (course) => course.category === selectedCategory
    );
  }

  if (sortBy === "views") {
    filteredCourses.sort((a, b) => b.views - a.views);
  } else if (sortBy === "likes") {
    filteredCourses.sort((a, b) => b.likes - a.likes);
  } else if (sortBy === "duration") {
    filteredCourses.sort(
      (a, b) => parseInt(b.duration) - parseInt(a.duration)
    );
  }

  const allCategories = ["all", ...new Set(courses.map((c) => c.category))];

  return (
    <section
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      } p-8 min-h-screen transition`}
    >
      {/* Hero Section */}
      <div
        className={`relative rounded-xl p-6 mb-12 shadow-lg border-l-8 border-blue-500 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-8 text-right">
          يۇقىرى پەن-تېخنىكا ۋە ئۇيغۇر روھىنىڭ ئۇيغۇنلىقى — KalBiL
        </h2>

        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="md:w-1/2 w-full">
            <img
              src={`${process.env.PUBLIC_URL}/images/image05.png`}
              alt="KalBiL نىڭ پەن-تېخنىكا ۋە مەدەنىيەت ئۇيغۇنلىقى"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>

          <div className="md:w-2/2 w-full space-y-4 text-right text-lg leading-relaxed">
            <p>
              كىۋانت ماشىنا ئۈگىنىش ئارقىلىق، ئۇيغۇر زېھنىنىڭ يېڭى ئۇچۇقىنى ئاچىدۇ.{" "}
              <strong>KalBiL</strong>
            </p>
            <p>
              سۇنئىي ئەقىل بىلەن، بىلىم سىستېمىسىنى راقەملىك كەلگۈسىگە باشلايدۇ.{" "}
              <strong>KalBiL</strong>
            </p>
            <p>
              ئۇچۇر تېخنىكىسى ئارقىلىق، جامائەتنى ئۇلاش، بىلىم تارقىتىش، ھەمكارلىق قۇرۇش.{" "}
              <strong>KalBiL</strong>
            </p>
            <p>
              چوڭ سابلىق مەلۇمات بىلەن، مەدەنىيەت نۇرىنى پەن-تېخنىكا بىلەن يورۇتىدۇ.{" "}
              <strong>KalBiL</strong>
            </p>
          </div>
        </div>

        <p className="mt-6 text-right italic text-gray-600 dark:text-gray-400">
          « تېخنىكا ئارقىلىق، مەدەنىيەت ۋە بىلىمنىڭ يېڭى باشلىنىشى — KalBiL»
        </p>
      </div>

      {/* Title */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-3xl font-bold text-center md:text-left">
          🎓 بىزنىڭ دەرسلەر
        </h2>
      </div>

      {/* Search + Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          placeholder="تىما ياكى ئوقۇتقۇچى بويىچە ئىزدەڭ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        />

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        >
          <option value="default">تەرتىپلەش</option>
          <option value="views">👁 كۆرۈلگەن سانى</option>
          <option value="likes">❤️ ياخشى كۆرۈلگەن</option>
          <option value="duration">⏱ مۇددىتى</option>
        </select>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        >
          {allCategories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat === "all" ? "بارلىق كاتېگورىيە" : `#${cat}`}
            </option>
          ))}
        </select>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <article
            key={course.id}
            data-aos="fade-up"
            className={`relative rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 overflow-hidden ${
              darkMode ? "bg-gray-800 text-white" : "bg-white"
            }`}
          >
            <div className="relative">
              <img
                src={course.image}
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

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="mb-3">{course.description}</p>

              <ul className="text-sm mb-4 space-y-1">
                <li>👨‍🏫 <strong>ئوقۇتقۇچى:</strong> {course.instructor}</li>
                <li>⏱ <strong>مۇددىتى:</strong> {course.duration}</li>
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  #{course.category}
                </span>
              </div>

              <div className="flex justify-between text-sm mb-4">
                <span>👁 {course.views}</span>
                <span>❤️ {course.likes}</span>
                <span>💬 {course.comments?.length || 0}</span>
              </div>

               
  
  <div className='relative w-full bottom-4'>
                <button
                  onClick={() => navigate(`/outline/${course.id}`)}
                  className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                  🔍 View Details
                </button>
              </div>

  <div
    className="mt-4 w-full bg-gray-400 text-white py-2 rounded text-center cursor-not-allowed opacity-70"
    title="سىزنىڭ كىرىشىڭىز كېرەك"
  >
    🔒 ئالدى بىلەن كىرىڭ
  </div>


              
            </div>
          </article>
        ))}
      </div>

      {/* ✅ No Results Message */}
      {filteredCourses.length === 0 && (
        <p className="text-center mt-12 text-lg">
          😕 كورسلار تېپىلمىدى.
        </p>
      )}
    </section>
  );
}

