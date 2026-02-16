import { qmlTopics } from "../data/qmlTopics";
import { Dialog } from "@headlessui/react";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import courses from "./Courses";
export default function QuantumMachineLearning() {
  const [selectedTopic, setSelectedTopic] = useState(null);
const [currentSlideIndex, setCurrentSlideIndex] = useState(0); // ✅ بۇنى قوشۇڭ

  return (
    <section className="bg-gradient-to-r from-indigo-100 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-6 md:px-12 lg:px-24">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto mb-10 text-center">
        <img
          src="/images/image05.png"
          alt="KalBiL Logo"
          className="mx-auto mb-6 w-34 h-34"
        />
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          بىلىم ئارقىلىق كەلگۈسىنى قۇرۇش KeLBiL
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          كىۋانىت تېخنىكىسى بىلەن بىلىمنى ئۇلاش، مەدەنىيەتنى يۇقىرى كۆتۈرۈش، ۋە ئۇيغۇر ئوقۇغۇچىلار ئۈچۈن يېڭى پەسىللەرنى ئېچىش
        </p>
        <p className="italic text-md text-indigo-600 dark:text-indigo-300">
          «بىلىم – قەلبنىڭ نۇرى، كەلگۈسىنىڭ يولى»
        </p>
      </div>

      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          كىۋانىت ماشىنا ئۈگنىش دەرسلىرى
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
          تۆۋەندىكى تېمىلارنى تاللاپ، كىۋانىت ئۈگنىشنى تېخىمۇ چوڭقۇر ئۆگىنەلەيسىز.
        </p>
      </div>

      {/* Topic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {qmlTopics.map((topic) => (
          <div
            key={topic.id}
            onClick={() => setSelectedTopic(topic)} // ✅ تۈزىتىلگەن
            className="cursor-pointer bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 text-center"
          >
            <BookOpenIcon className="mx-auto h-10 w-10 text-indigo-600 dark:text-indigo-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {topic.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              دەرسنى كۆرۈش ئۈچۈن بېسىڭ
            </p>
          </div>
        ))}
      </div>

      {/* Modal for Slides */}
      {selectedTopic && (
  <Dialog
    open={!!selectedTopic}
    onClose={() => setSelectedTopic(null)}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <Dialog.Panel className="bg-white dark:bg-gray-900 rounded-xl p-8 max-w-2xl mx-auto shadow-2xl overflow-y-auto max-h-[90vh] transition-all duration-300">
      {/* Title */}
      <Dialog.Title className="text-3xl font-bold text-center text-indigo-700 dark:text-indigo-300 mb-4">
        {selectedTopic.title}
      </Dialog.Title>

      {/* Description */}
      <Dialog.Description className="text-center text-gray-600 dark:text-gray-300 mb-6 text-sm">
        بۇ دەرس KalBiL سۇپىسىدىكى كىۋانىت ئۈگنىشنىڭ مۇھىم بۆلىكى بولۇپ، ئۆزگەچە ئۇسلۇب بىلەن تەقدىم قىلىنغان.
      </Dialog.Description>

      {/* Slide Content */}
      <div className="relative bg-gradient-to-br from-indigo-50 to-white dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg shadow-inner transition-opacity duration-300 ease-in-out">
        <h4 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
          {selectedTopic.slides[currentSlideIndex]?.title}
        </h4>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {selectedTopic.slides[currentSlideIndex]?.content}
        </p>
      </div>

      {/* Slide Controls */}
      <div className="flex justify-between items-center mt-6">
        <button
          disabled={currentSlideIndex === 0}
          onClick={() => setCurrentSlideIndex((i) => i - 1)}
          className={`px-4 py-2 rounded font-semibold ${
            currentSlideIndex === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
        >
          ◀ ئالدىنقى
        </button>

        <span className="text-sm text-gray-600 dark:text-gray-400">
          سلايد {currentSlideIndex + 1} / {selectedTopic.slides.length}
        </span>

        <button
          disabled={currentSlideIndex === selectedTopic.slides.length - 1}
          onClick={() => setCurrentSlideIndex((i) => i + 1)}
          className={`px-4 py-2 rounded font-semibold ${
            currentSlideIndex === selectedTopic.slides.length - 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
        >
          كېيىنكى ▶
        </button>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setSelectedTopic(null)}
        className="mt-8 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 font-semibold transition"
      >
        تاقاش
      </button>
    </Dialog.Panel>
  </Dialog>
)}


      {/* Action Buttons */}
      <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <button
          onClick={() => navigate("/add-course")}
          className="h-44 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex flex-col items-center justify-center"
        >
          <h1 className="text-3xl font-bold mb-2">➕ Add Courses</h1>
          <p className="text-white text-sm"> سۇپىسىغا يېڭى دەرس قوشۇڭ KeLBiL </p>
        </button>

        <button
          onClick={() => navigate("/courses")}
          className="h-44 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition flex flex-col items-center justify-center"
        >
          <h1 className="text-2xl font-bold mb-1">📖 View Courses</h1>
          <p className="text-white text-sm">قوشۇلغان دەرسلەرنى كۆرۈش ۋە باشقۇرۇش</p>
        </button>
      </div>
    </section>
  );
}