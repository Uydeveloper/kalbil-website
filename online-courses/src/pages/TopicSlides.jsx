// src/pages/TopicSlides.jsx
import { useParams, useNavigate } from "react-router-dom";

const slideContent = {
  qml: "كۋانتۇم ئۈگىنىش — كەلگۈسىنىڭ ئەقلىي ئىقتىدارى.",
  ai: "AI ئەخلاقى — مەسئۇلىيەتلىك تەرەققىيات ئۈچۈن.",
  web: "تور تەرەققىيات — HTML, CSS, JavaScript نىڭ كۈچى.",
};

export default function TopicSlides() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const content = slideContent[topicId] || "بۇ دەرس توغرىسىدا ئۇچۇر تېپىلمىدى.";

  return (
    <section className="min-h-screen p-8 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-300">🎓 {topicId} دەرس سىلايدى</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-lg text-gray-700 dark:text-gray-300">
          {content}
        </div>
        <div className="text-center">
          <button
            onClick={() => navigate("/CourseTopics")}
            className="py-2 px-6 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            ◀️ قايتىش
          </button>
        </div>
      </div>
    </section>
  );
}