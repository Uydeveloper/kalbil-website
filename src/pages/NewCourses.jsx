import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StatisticsLessonPage = () => {
  const [lessons, setLessons] = useState([
    {
      id: 1,
      title: "ستاتىستىكا نېمە؟ / What is Statistics?",
      image: "https://via.placeholder.com/1200x500/3498db/ffffff?text=STATISTICS",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      quote: "«بىلىم - ھەممىنىڭ قورالى، ستاتىستىكا - ھەممىنىڭ تىلى.»",
      instructor: "D3 ناكامۇرا يۇتا",
      time: "2024-يىل 5-ئاينىڭ 20-كۈنى، 14:00–15:30",
      shortDesc: "كلاسىكىك ستاتىستىكادىن بايېسقا تېز كۆچۈش",
      longDesc:
        "ستاتىستىكا – خۇدا ئىلىملىرى... Descriptive, Inferential, and Bayes statistics.",
      zoomLink: "https://zoom.us/j/1234567890",
    },
    {
      id: 2,
      title: "تەتقىقاتلار ئۈچۈن ستاتىستىكا",
      image: "https://via.placeholder.com/1200x500/e74c3c/ffffff?text=RESEARCH",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      quote: "«سانلارنى بىلىش، ھەقىقەتنى بىلىش.»",
      instructor: "پروفېسسور ئېلىم",
      time: "2024-يىل 5-ئاينىڭ 22-كۈنى، 10:00–11:30",
      shortDesc: "SD، SE، P قىممىتى ۋە Excelدا ھېسابلاش",
      longDesc:
        "تەتقىقاتلار نېمە ئۈچۈن ستاتىستىكا ئىشلىتىدۇ؟ Excel فورمۇلالارنى ئىشلىتىشنى ئۆگىنىمىز.",
      zoomLink: "https://zoom.us/j/2345678901",
    },
    {
      id: 3,
      title: "بايېس ستاتىستىكىسى",
      image: "https://via.placeholder.com/1200x500/9b59b6/ffffff?text=BAYES",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      quote: "«بايېسچىلىق - ئۇچراتقا ئاساسلانغان ھەقىقەت يېنىشى.»",
      instructor: "دۆكتۇر كىيەن",
      time: "2024-يىل 5-ئاينىڭ 25-كۈنى، 16:00–17:30",
      shortDesc:
        "شەرتلىك ئىمكانىيەت ۋە ئۇچراتقا ئاساسلانغان بوشلۇق بويىچە باھالاش",
      longDesc: "بايېسچىلىق – ئىمكانىيەتنى يېڭىلايدىغان يېنىش...",
      zoomLink: "https://zoom.us/j/3456789012",
    },
  ]);
  
  const [expanded, setExpanded] = useState({});
  const [joined, setJoined] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newLesson, setNewLesson] = useState({
    title: '',
    instructor: '',
    time: '',
    image: 'https://via.placeholder.com/150/cccccc/000000?text=LESSON',
    video: '',
    zoomLink: '',
    shortDesc: '',
    longDesc: '',
  });

  // سىلايد چوڭايتىش/چوڭايتىلماسلىق
  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ZOOM غا قاتنىشىش
  const handleJoin = (id, link) => {
    setJoined((prev) => ({ ...prev, [id]: true }));
    window.open(link.trim(), '_blank'); // URL نى تازىلاپ ئاچىدۇ
  };

  // يېڭى دەرس قوشۇش
  const handleSaveLesson = () => {
    if (!newLesson.title || !newLesson.zoomLink) {
      alert('تېما ۋە Zoom ئۇلىنىشى كېرەك!');
      return;
    }
    const trimmedLesson = {
      ...newLesson,
      video: newLesson.video.trim(),
      zoomLink: newLesson.zoomLink.trim(),
      image: newLesson.image || 'https://via.placeholder.com/150/cccccc/000000?text=LESSON',
    };
    const updatedLessons = [...lessons, { ...trimmedLesson, id: Date.now() }];
    setLessons(updatedLessons);
    setNewLesson({
      title: '',
      instructor: '',
      time: '',
      image: '',
      video: '',
      zoomLink: '',
      shortDesc: '',
      longDesc: '',
    });
    setShowModal(false);
  };

   // سىلايد كۆرسىتىش configuration
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  // دەرس ئۇچۇرۇش
  const handleDeleteLesson = (id) => {
    if (window.confirm('ھەقىقەتەن بۇ دەرسنى ئۇچۇرماقچىمۇ؟')) {
      setLessons(lessons.filter((lesson) => lesson.id !== id));
      setExpanded((prev) => {
        const newExp = { ...prev };
        delete newExp[id];
        return newExp;
      });
      setJoined((prev) => {
        const newJoin = { ...prev };
        delete newJoin[id];
        return newJoin;
      });
    }
  };

  // تەھرىرلاش (نامۇنە، سىز تەپسىلىنى تولدۇرالايسىز)
  const handleEditLesson = (lesson) => {
    setNewLesson({ ...lesson });
    setShowModal(true);
  };

  return (
      <>
    <div className="bg-gray-50 min-h-screen font-sans text-right rtl">
      {/* ======= Hero Slider ======= */}
      <div className="relative">
        <Slider {...sliderSettings}>
          {lessons.map((slide) => (
            <div key={slide.id} className="relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white px-4">
                <h2 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg mb-4">
                  {slide.title}
                </h2>
                <p className="italic text-lg md:text-2xl mb-4">{slide.quote}</p>
                <div className="w-3/4 md:w-1/2 aspect-video shadow-lg border-4 border-white rounded-lg overflow-hidden">
                  <iframe
                    src={slide.video}
                    title={slide.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      


    <div className="bg-gray-100 min-h-screen p-6 font-sans text-right rtl">
      {/* تېما */}
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">دەرسلەر / Lessons</h1>

      {/* يېڭى دەرس قوشۇش تەسىراتى */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl space-y-4 shadow-xl">
            <h2 className="text-xl font-bold text-indigo-700">➕ يېڭى دەرس قوشۇش / Add New Lesson</h2>

            <input
              className="w-full border p-2 rounded"
              placeholder="دەرس تېمىسى / Lesson Title"
              value={newLesson.title}
              onChange={(e) => setNewLesson({ ...newLesson, title: e.target.value })}
            />
            <input
              className="w-full border p-2 rounded"
              placeholder="سۆزلۈكچى / Instructor"
              value={newLesson.instructor}
              onChange={(e) => setNewLesson({ ...newLesson, instructor: e.target.value })}
            />
            <input
              className="w-full border p-2 rounded"
              placeholder="ۋاقىت / Time"
              value={newLesson.time}
              onChange={(e) => setNewLesson({ ...newLesson, time: e.target.value })}
            />
            <input
              className="w-full border p-2 rounded"
              placeholder="رەسىم URL / Image URL (optional)"
              value={newLesson.image}
              onChange={(e) => setNewLesson({ ...newLesson, image: e.target.value })}
            />
            <input
              className="w-full border p-2 rounded"
              placeholder="YouTube ۋىدىئو URL / Video URL"
              value={newLesson.video}
              onChange={(e) => setNewLesson({ ...newLesson, video: e.target.value.trim() })}
            />
            <input
              className="w-full border p-2 rounded"
              placeholder="Zoom ئۇلىنىشى / Zoom Link"
              value={newLesson.zoomLink}
              onChange={(e) => setNewLesson({ ...newLesson, zoomLink: e.target.value.trim() })}
            />
            <textarea
              className="w-full border p-2 rounded"
              placeholder="قىسقىچە چۈشەندۈرۈش / Short Description"
              value={newLesson.shortDesc}
              onChange={(e) => setNewLesson({ ...newLesson, shortDesc: e.target.value })}
            />
            <textarea
              className="w-full border p-2 rounded"
              placeholder="تولۇق چۈشەندۈرۈش / Full Description"
              rows="4"
              value={newLesson.longDesc}
              onChange={(e) => setNewLesson({ ...newLesson, longDesc: e.target.value })}
            />

            <div className="flex justify-end gap-4 pt-2">
              <button
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={handleSaveLesson}
              >
                💾 ساقلاش / Save
              </button>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                onClick={() => setShowModal(false)}
              >
                ❌ يوق / Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* دەرس كارتىسى */}
      <div className="space-y-10">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
          >
            {/* سول تەرەپ: رەسىم ۋە ۋىدىئو */}
            <div className="md:w-1/3">
              <img
                src={lesson.image}
                alt={lesson.title}
                className="w-full h-40 object-cover"
              />
              <div className="aspect-video">
                <iframe
                  src={lesson.video}
                  title={lesson.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* ئوڭ تەرەپ: مەزمۇن */}
            <div className="md:w-2/3 p-6 space-y-4">
              <h3 className="text-xl font-semibold text-indigo-600">{lesson.title}</h3>
              <p><strong>ئوقۇتقۇچى:</strong> {lesson.instructor}</p>
              <p><strong>ۋاقىت:</strong> {lesson.time}</p>
              <p>{lesson.shortDesc}</p>

              <div className="bg-gray-50 p-4 rounded-md text-sm leading-relaxed">
                {expanded[lesson.id]
                  ? lesson.longDesc
                  : `${lesson.longDesc.substring(0, 120)}...`}
              </div>

              {lesson.longDesc.length > 120 && (
                <button
                  onClick={() => toggleExpand(lesson.id)}
                  className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 text-sm"
                >
                  {expanded[lesson.id] ? 'يۇقىرى قارا / Show less' : 'ھەممىنى ئوقۇش / Read more'}
                </button>
              )}

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => handleJoin(lesson.id, lesson.zoomLink)}
                  disabled={joined[lesson.id]}
                  className={`flex-1 py-3 rounded font-bold text-white ${
                    joined[lesson.id]
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-green-600 hover:bg-green-700'
                  }`}
                >
                  {joined[lesson.id] ? 'قاتنىشىلدى / Joined' : 'ZOOM غا قاتنىشىش / Join Class'}
                </button>
                {editMode && (
                  <>
                    <button
                      onClick={() => handleEditLesson(lesson)}
                      className="bg-yellow-500 text-white px-3 py-3 rounded hover:bg-yellow-600"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => handleDeleteLesson(lesson.id)}
                      className="bg-red-600 text-white px-3 py-3 rounded hover:bg-red-700"
                    >
                      🗑️
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ئاستىدىكى باتتونلار */}
      <div className="mt-12 flex flex-wrap justify-center gap-4 border-t pt-6">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded font-bold hover:bg-blue-700"
          onClick={() => setShowModal(true)}
        >
          ➕ دەرس قوشۇش / Add Lesson
        </button>
        <button
          className="bg-yellow-500 text-white px-6 py-3 rounded font-bold hover:bg-yellow-600"
          onClick={() => setEditMode(!editMode)}
        >
          ✏️ {editMode ? 'تەھرىردىن چىق / Exit Edit' : 'تەھرىرلەش / Edit'}
        </button>
        <button
          className="bg-indigo-600 text-white px-6 py-3 rounded font-bold hover:bg-indigo-700"
          onClick={() => alert('💾 بارلىق دەرسلەر ساقلاندى! / All lessons saved!')}
        >
          💾 ساقلاش / Save
        </button>
        <button
          className="bg-pink-600 text-white px-6 py-3 rounded font-bold hover:bg-pink-700"
          onClick={() => {
            const links = lessons.map(l => l.zoomLink).join('\n');
            navigator.clipboard.writeText(links).then(() => {
              alert('Zoom ئۇچراتلىرى تاختىغا كۆچۈرۈلدى! / Zoom links copied!');
            });
          }}
        >
          📤 ئۇچۇرلاش / Share
        </button>
      </div>
    </div>
    </div>

    </>
  );
};

export default StatisticsLessonPage;