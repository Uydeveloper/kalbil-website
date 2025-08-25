import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext"; // ✅ Context قوشۇش


export default function MainSection() {
  const navigate = useNavigate();
  const localKey = "kalbil_courses";
  const [courses, setCourses] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const { user } = useContext(UserContext); // ✅ Context ئارقىلىق user
  const [showModal, setShowModal] = useState(false);
  const [lectures, setLectures] = useState([]);

  const [newLecture, setNewLecture] = useState({
    title: "",
    speaker: "",
    description: "",
    image: "",
    video: "",
    link: "",
  });




  useEffect(() => {
  const savedLectures = localStorage.getItem(localKey);
  if (savedLectures) {
    setLectures(JSON.parse(savedLectures));
  }
}, []);

  // 📂 PC دىن رەسم يۈكلەش
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewLecture({ ...newLecture, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };


  // 📂 PC دىن ۋىدېئو يۈكلەش
  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setNewLecture({ ...newLecture, video: url });
    }
  };

  // 💾 ساقلاش ياكى ئۆزگەرتىش
  const handleSave = () => {
  let updated;
  if (editingId) {
    updated = lectures.map((lec) =>
      lec.id === editingId ? { ...newLecture, id: editingId } : lec
    );
    setEditingId(null);
  } else {
    updated = [...lectures, { ...newLecture, id: Date.now() }];
  }
  localStorage.setItem(localKey, JSON.stringify(updated));
  setLectures(updated);
  setShowModal(false);
  setNewLecture({
    title: "",
    speaker: "",
    description: "",
    image: "",
    video: "",
    link: "",
  });
};




  const handleDelete = (id) => {
    const filtered = lectures.filter((lec) => lec.id !== id);
    localStorage.setItem(localKey, JSON.stringify(filtered));
    setLectures(filtered);
  };

  // ✏️ كاتىغا ئېدىت
  const handleEdit = (lec) => {
    setNewLecture(lec);
    setEditingId(lec.id);
    setShowModal(true);
  };


  const phrases = [
  "🚀 «بۈگۈن باشلا، ئەتە غەلىبە قازان",
  "🌱 «ھەر بىر قەدەم چوڭ ئىلگىرلشكە يول»",
  "🔥 «قىزىقىشىڭىز ئۈچۈن ئەڭ ياخشى ۋاقىت — ھازىر»",
  "📦 «بىلەن بىلىم كۈچكە ئايلىنىدۇ  KalBiL » ",
  "🎭 «ھەر كۈندە يېڭى بىر سەھىپە، يېڭى بىر پۇرسەت»",
  "📚 «بىلىم — ھاياتنىڭ ئەڭ قىممەتلىك مەنبەسى»",
  "🌍 «ئۇلانغان بىلىم، ئۇلۇغ پۇرسەتلەرگە ئۇلانغان",
  "💡 «بىر ئىدىيە، بىر ئۆزگىرىشنىڭ باشلىنىشى»",
  "⏳ «ۋاقىتنى قەدىرلە، ئەمگەك مېۋىسى پىشپ چىقىدۇ»",
  "🌟 «ھەر كۈندە يېڭى كۈلۈش، يېڭى نۇر»",
  "🛠️ «تەجرىبىسز ئوقۇش، پەقەت خىيال»",
  "📖 «كۈندە بىر بەت، ھاياتتا بىر قەدەم ئالغا»",
  "🎯 «مەقسىتىڭىزنى بىلىڭ، قەدەمنىڭ كۈچلۈك بولسۇن»",
  "💎 «سەبرى بىلەن بىلىم گۆھەرگە ئايلىنىدۇ»",
  "🌄 «سەھەردە باشلانغان قەدەم كۈندە ئوڭۇشلۇق يول»",
  "🤝 «بىلىم ھەمبەھىرلەنگەندە كۆپىيىدۇ»",
  "⚡ «كۈندە كىچىك بىر ئىلگىرىلەش، چوڭ ئۆزگىرشنى  بارلىققا كەلتۇرىدۇ",
  "🧭 «بىلىم يول كۆرسەتكۈچ، ئەقل يېتەكچى»",
  "🌺 «كۈندە بىر يېڭىلىق، كۆڭۈلگە نۇر چاچىدۇ»",
  "🏆 «تىنچلىق بىلەن ئوقۇش، غەلىبە بىلەن ئاخىرلىشىدۇ»"
];



  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000); // 3 seconds per phrase
    return () => clearInterval(timer);
  }, [phrases.length]);



  const handleStart = () => navigate("/add-course");
  const handleQuantum = () => navigate("/quantummachinelearning");

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6 md:px-12 lg:px-24">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            بىلىم ئارقىلىق كەلگۈسىنى قۇرۇش
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            ئۇيغۇر ئوقۇغۇچىلار ئۈچۈن بىلىم، مەدەنىيەت، ۋە تېخنىكىنى بىرلەشتۈرگەن دەرس سۇپىسى. سىزگە قەلب بىلەن قۇرۇلغان بىلىم يولىنى تەمىنلەيدۇ
          </p>
          <p className="italic text-indigo-600 dark:text-indigo-300 mb-6">
            «بىلىم – قەلبنىڭ نۇرى، كەلگۈسىنىڭ يولى»
          </p>
          <div className="flex gap-4 flex-wrap">
          
        {user?.role === "admin" && (
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
          >
            ➕ تور لىكسيە قوشۇش
          </button>
        )}
            <button
              onClick={handleQuantum}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 px-6 py-2 rounded transition"
            >
              📚 كىۋانىت دەرسلىرى
            </button>
          </div>
        </div>

        <div>
          <img
            src={`${process.env.PUBLIC_URL}/images/image05.png`}
            alt="KalBil Logo"
           
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/*  persentation List Section */}
      {/* Modal */}
      {showModal && (
       
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-lg">
            <h3 className="text-xl font-bold mb-4">تور لىكسيە قوشۇش</h3>

            <input
              type="text"
              placeholder="📖 لىكسيە ئىسمى"
              value={newLecture.title}
              onChange={(e) => setNewLecture({ ...newLecture, title: e.target.value })}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="👤 لىكسيە سۆزلگۈچى"
              value={newLecture.speaker}
              onChange={(e) => setNewLecture({ ...newLecture, speaker: e.target.value })}
              className="w-full mb-2 p-2 border rounded"
            />
            <textarea
              placeholder="📝 قىسقىچە مەزمۇن"
              value={newLecture.description}
              onChange={(e) => setNewLecture({ ...newLecture, description: e.target.value })}
              className="w-full mb-2 p-2 border rounded"
            />

            {/* 📂 PC دىن رەسم يۈكلەش */}
            <label className="block mb-2">🖼️ رەسم يۈكلەش</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-4" />

            {/* 📂 PC دىن ۋىدېئو يۈكلەش */}
            <label className="block mb-2">🎥 ۋىدېئو يۈكلەش</label>
            <input type="file" accept="video/*" onChange={handleVideoUpload} className="mb-4" />

            <input
              type="text"
              placeholder="🔗 لىكسيە ئۇلىنىش ئادىرىسى"
              value={newLecture.link}
              onChange={(e) => setNewLecture({ ...newLecture, link: e.target.value })}
              className="w-full mb-4 p-2 border rounded"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded"
              >
                ❌ بىكار قىلىش
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                💾 ساقلاش
              </button>
            </div>
          </div>
        </div>
      )}

      {/*  persentation List Section */}
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">تور لىكسيىلەر تىزىملىكى</h3>
    <div className="bg-gradient-to-r mb-5 from-indigo-600 to-purple-600 text-white p-6 rounded-lg shadow text-center overflow-hidden h-24 flex items-center justify-center">
      <p className="text-xl font-semibold animate-fade-in">{phrases[index]}</p>
    </div>



<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
  {lectures.map((course) => (
  <div key={course.id} className="border rounded-lg shadow bg-gray-50 dark:bg-gray-800 p-4">
    {course.image && (
      <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded mb-2" />
    )}
    <h4 className="text-lg font-bold text-indigo-700 dark:text-indigo-300">{course.title}</h4>
    <p className="text-sm text-gray-600 dark:text-gray-400">👤 {course.speaker}</p>
    <p className="text-gray-700 dark:text-gray-300 mb-2">{course.description}</p>

    <div className="flex justify-between mt-2">
      <button
        onClick={() => navigate(`/lecture/${course.id}`, { state: course })}
        className="text-blue-600 hover:underline"
      >
        🔍 تەپسىلاتىنى كۆرۈش
      </button>

      {user?.role === "admin" && (
        <div className="flex gap-2">
          <button onClick={() => handleEdit(course)} className="text-yellow-600 hover:underline">
            ✏️ كاتىغا ئېدىت
          </button>
          <button onClick={() => handleDelete(course.id)} className="text-red-600 hover:underline">
            🗑️ ئۆچۈرۈش
          </button>
        </div>
      )}
    </div>
  </div>
))}
</div>

      
    </section>
  );
}