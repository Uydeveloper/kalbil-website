import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { qmlTopics } from "../data/qmlTopics";

export default function TopicSlides() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const topic = qmlTopics.find((t) => t.id === topicId);

  const [currentSlide, setCurrentSlide] = useState(0);

  if (!topic) {
    return <div className="p-8 text-red-600">Topic not found.</div>;
  }

  const slide = topic.slides[currentSlide];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-bold mb-6">{topic.title}</h1>
      <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow max-w-2xl w-full text-center">
        <h2 className="text-2xl font-semibold mb-4">{slide.heading}</h2>
        <p className="text-lg">{slide.content}</p>
      </div>

      <div className="flex gap-4 mt-8">
        <button
          onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
          disabled={currentSlide === 0}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded disabled:opacity-50"
        >
          ◀ Previous
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, topic.slides.length - 1))}
          disabled={currentSlide === topic.slides.length - 1}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          Next ▶
        </button>
        <button
          onClick={() => navigate("/quantummachinelearning")}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          🔙 Back to Topics
        </button>
      </div>
    </div>
  );
}