import { useState, useEffect } from "react";

export default function AddNeuralCourse() {
  const localKey = "kalbil_courses";
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(" ");
  const [slides, setSlides] = useState([
    { heading: "", content: "" },
    { heading: "", content: "" },
    { heading: "", content: "" },
    { heading: "", content: "" },
    { heading: "", content: "" },
    { heading: "", content: "" },
    { heading: "", content: "" },
    { heading: "", content: "" },
    { heading: "", content: "" },
    {
      heading: "",
      content: "",
      codeexplore: ``
    }
  ]);
  const [savedCourses, setSavedCourses] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(localKey);
    if (saved) {
      setSavedCourses(JSON.parse(saved));
    }
  }, []);

  const handleSlideChange = (index, field, value) => {
    const updated = [...slides];
    updated[index][field] = value;
    setSlides(updated);
  };

  const addSlide = () => {
    setSlides([...slides, { heading: "", content: "", codeexplore: "" }]);
  };

  const deleteSlide = (index) => {
    const updated = slides.filter((_, i) => i !== index);
    setSlides(updated);
  };

  const handleSaveCourse = () => {
    const newCourse = {
      id: "nn",
      title,
      description,
      slides,
    };
    const updatedCourses = [...savedCourses, newCourse];
    localStorage.setItem(localKey, JSON.stringify(updatedCourses));
    setSavedCourses(updatedCourses);
    alert("✅ Neural Networks نىرۋا تورى دەرسى قوشۇلدى!");
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6"> يېڭى دەرس قۇشۇش 📚</h2>

      <div className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="📚 دەرس نامى"
          className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="📝 قىسقىچە چۈشەندۈرۈش"
          rows={3}
          className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />

        <h3 className="text-xl font-semibold text-center mt-6">📑 سلايدلار</h3>
        {slides.map((slide, index) => (
          <div key={index} className="border p-4 rounded-lg bg-white dark:bg-gray-800 mb-4 shadow">
            <input
              type="text"
              value={slide.heading}
              onChange={(e) => handleSlideChange(index, "heading", e.target.value)}
              placeholder={`🧠 سلايد تېمىسى ${index + 1}`}
              className="w-full mb-2 px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
            />
            <textarea
              value={slide.content}
              onChange={(e) => handleSlideChange(index, "content", e.target.value)}
              placeholder="🔍 مەزمۇن"
              rows={3}
              className="w-full mb-2 px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
            />
            <textarea
              value={slide.codeexplore || ""}
              onChange={(e) => handleSlideChange(index, "codeexplore", e.target.value)}
              placeholder="💻 كود مىسال (ئىختىيارى)"
              rows={3}
              className="w-full font-mono px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
            />
            <button
              onClick={() => deleteSlide(index)}
              className="mt-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            >
              🗑 سلايد ئۆچۈرۈش
            </button>
          </div>
        ))}

        <button
          onClick={addSlide}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          ➕ سلايد قوشۇش
        </button>

        <button
          onClick={handleSaveCourse}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          💾 دەرسنى ساقلاش
        </button>
      </div>
    </div>
  );
}