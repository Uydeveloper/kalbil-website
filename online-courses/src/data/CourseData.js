import { useParams } from "react-router-dom";
import { useState } from "react";
import { CourseData } from "./data/CourseData.js";

export default function CourseDetail() {
  const { id } = useParams();
  const course = CourseData.find(c => c.id === id);
  const [currentLesson, setCurrentLesson] = useState(course.lessons[0]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-700 text-white p-5 text-xl font-bold">
        {course.title}
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Playlist */}
        <div className="md:w-1/3 bg-white border-r">
          <h2 className="p-4 font-semibold border-b">
            📂 دەرس ئەلبۇمى
          </h2>

          {course.lessons.map((lesson) => (
            <div
              key={lesson.id}
              onClick={() => setCurrentLesson(lesson)}
              className={`p-4 cursor-pointer border-b
                ${currentLesson.id === lesson.id ? "bg-blue-100" : "hover:bg-gray-100"}
              `}
            >
              <div className="flex justify-between text-sm">
                <span>{lesson.title}</span>
                <span className="text-gray-500">
                  {lesson.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Video */}
        <div className="md:w-2/3 p-5">
          <video controls className="w-full rounded mb-4">
            <source src={currentLesson.video} type="video/mp4" />
          </video>

          <h2 className="text-2xl font-bold mb-2">
            {currentLesson.title}
          </h2>

          <p className="text-gray-700">
            {currentLesson.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
