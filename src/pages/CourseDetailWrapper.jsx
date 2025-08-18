import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import CourseDetails from "./CourseDetails";
import CourseOutline from "./CourseOutline";

export default function CourseDetailWrapper() {
  const { user } = useContext(UserContext);

  // ✅ باشقۇرچى بولسا تولۇق كۆرۈش بىتى
  if (user?.role === "admin") {
    return <CourseDetails />;
  }

  // ✅ ئادەتتىكى قوللانغۇچى بولسا CourseOutline
  if (user?.username) {
    return <CourseOutline />;
  }

  // ❌ لوگىن بولمىغانلارغا fallback
  return (
    <div className="p-6 text-center text-red-600 dark:text-red-400">
      🚫 بۇ بەتكە كىرىش ئۈچۈن ئالدى بىلەن كىرىڭ!
    </div>
  );
}