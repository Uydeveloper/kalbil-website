// src/context/CourseContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import mycourses from "../data/students.json";

const CourseContext = createContext();

export function CourseProvider({ children }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // ھازىرچە local JSON دىن ئوقۇش
    setCourses(mycourses);
  }, []);

  // ✅ بەلگىلەنگەن ئوقۇغۇچىنىڭ دەرسلىرىنى قايتۇرۇش
  const getUserCourses = (userId) => {
    return courses.filter((course) => course.userId === userId);
  };

  // ✅ يېڭى دەرس قوشۇش
  const addCourse = (newCourse) => {
    setCourses((prev) => [...prev, newCourse]);
  };

  return (
    <CourseContext.Provider value={{ courses, getUserCourses, addCourse }}>
      {children}
    </CourseContext.Provider>
  );
}

export function useCourses() {
  return useContext(CourseContext);
}
