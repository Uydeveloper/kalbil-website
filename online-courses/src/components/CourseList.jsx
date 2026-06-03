import React, { useEffect, useState, useContext, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

// JSON سانلىق مەلۇمات مەنبەسى
import coursesData from "../data/kalbil_courses.json";

export default function MainSection() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  
  // شىتاتلار (States)
  const [lectures, setLectures] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [selectedLectureId, setSelectedLectureId] = useState(null);

  const [newLecture, setNewLecture] = useState({
    title: "",
    speaker: "",
    date: "",
    duration: "",
    description: "",
    image: "",
    video: "",
    link: "",
    zoomLink: "",
    otherLink: ""
  });

  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    country: "",
    age: ""
  });

  // JSON دىكى سانلىق مەلۇماتلارنى قېلىپلاشتۇرۇپ باشلاش
  const initializeFromJSON = useCallback(() => {
    try {
      const lecturesWithRegistrations = coursesData.map(lecture => ({
        ...lecture,
        registrations: lecture.registrations || [],
        date: lecture.date || "",
        zoomLink: lecture.zoomLink || "",
        otherLink: lecture.otherLink || "",
        detailedDescription: lecture.detailedDescription || "",
        level: lecture.level || "باشلانغۇچ",
        category: lecture.category || "ئومۇمىي",
        language: lecture.language || "ئۇيغۇرچە",
        price: lecture.price || "ھەقسىز",
        prerequisites: lecture.prerequisites || "يوق",
        whatYouLearn: lecture.whatYouLearn || [],
        targetAudience: lecture.targetAudience || []
      }));
      setLectures(lecturesWithRegistrations);
      localStorage.setItem("kalbil_courses", JSON.stringify(lecturesWithRegistrations));
    } catch (error) {
      console.error("سانلىق مەلۇماتلارنى قۇرۇلمىلاشتا خاتالىق كۆرۈلدى:", error);
    }
  }, []);

  // دەسلەپكى يۈكلەش
  useEffect(() => {
    const savedLectures = localStorage.getItem("kalbil_courses");
    if (savedLectures) {
      try {
        const parsedLectures = JSON.parse(savedLectures);
        if (Array.isArray(parsedLectures)) {
          setLectures(parsedLectures);
        } else {
          initializeFromJSON();
        }
      } catch (error) {
        console.error("لوكال ستورىجىدىكى JSON نى ئوقۇشتا خاتالىق:", error);
        initializeFromJSON();
      }
    } else {
      initializeFromJSON();
    }
  }, [initializeFromJSON]);

  // رەسىم ئادرېسىنى كەسپىي بىر تەرەپ قىلىش
  const getImageUrl = (imagePath) => {
    if (!imagePath) return `${process.env.PUBLIC_URL}/images/image05.png`;
    if (imagePath.startsWith('data:') || imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath;
    }
    if (imagePath.startsWith('/')) {
      return `${process.env.PUBLIC_URL}${imagePath}`;
    }
    return `${process.env.PUBLIC_URL}/${imagePath}`;
  };

  // تىزىملاش مودىلىنى ئاچىش
  const openRegistrationModal = (lectureId) => {
    setSelectedLectureId(lectureId);
    setShowRegistrationModal(true);
    setRegistrationData({ name: "", email: "", country: "", age: "" });
  };

  // تىزىملاشنى بىر تەرەپ قىلىش
  const handleRegistration = () => {
    if (!registrationData.name.trim() || !registrationData.email.trim()) {
      alert("ئىسمىڭىز ۋە ئېلخەت ئادرېسىڭىزنى كىرگۈزۈڭ!");
      return;
    }

    const updatedLectures = lectures.map(lecture => {
      if (lecture.id === selectedLectureId) {
        const registrations = lecture.registrations || [];
        const newRegistration = {
          id: Date.now(),
          ...registrationData,
          registrationDate: new Date().toISOString()
        };
        return { ...lecture, registrations: [...registrations, newRegistration] };
      }
      return lecture;
    });

    setLectures(updatedLectures);
    localStorage.setItem("kalbil_courses", JSON.stringify(updatedLectures));
    setShowRegistrationModal(false);
    alert("تىزىملاش مۇۋەپپەقىيەتلىك تاماملاندى! رەھمەت سىزگە!");
  };

  // تىزىملانغانلارنى كۆرۈش
  const viewRegistrations = (lectureId) => {
    const lecture = lectures.find(l => l.id === lectureId);
    if (lecture && lecture.registrations && lecture.registrations.length > 0) {
      const registrationsList = lecture.registrations.map(reg => 
        `• ${reg.name} (${reg.age} ياش) - ${reg.country} - ${reg.email}`
      ).join('\n');
      alert(`تىزىملانغانلار (${lecture.registrations.length} كىشى):\n\n${registrationsList}`);
    } else {
      alert("ھازىرچە تىزىملانغان ئادەم يوق.");
    }
  };

  // لىكسىيەگە قاتنىشىش
  const joinLecture = (lecture) => {
    const targetLink = lecture.zoomLink || lecture.otherLink || lecture.link;
    if (targetLink) {
      window.open(targetLink, '_blank', 'noopener,noreferrer');
    } else {
      alert("بۇ لىكسىيە ئۈچۈن ھازىرچە ئۇلىنىش ئادىرىسى يوق.");
    }
  };

  // جەيسان چىقىرىش (Export)
  const exportToJSON = () => {
    try {
      const dataStr = JSON.stringify(lectures, null, 2);
      const dataBlob = new Blob([dataStr], { type: "application/json" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(dataBlob);
      link.download = "kalbil_courses.json";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      alert("ھۆججەت چىقىرىشتا خاتالىق يۈز بەردى.");
    }
  };

  // جەيسان يۈكلەش (Import)
  const importFromJSON = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedLectures = JSON.parse(e.target.result);
          if (Array.isArray(importedLectures)) {
            const finalLectures = importedLectures.map(lecture => ({
              ...lecture,
              registrations: lecture.registrations || [],
              date: lecture.date || "",
              zoomLink: lecture.zoomLink || "",
              otherLink: lecture.otherLink || ""
            }));
            setLectures(finalLectures);
            localStorage.setItem("kalbil_courses", JSON.stringify(finalLectures));
            alert("تور لىكسيىلەر مۇۋەپپەقىيەتلىك يۈكلەندى!");
          } else {
            alert("جەيسان ھۆججىتىنىڭ فورماتى خاتا!");
          }
        } catch (error) {
          alert("جەيسان ھۆججىتىنى ئوقۇشتا خاتالىق يۈز بەردى!");
        }
      };
      reader.readAsText(file);
    }
    event.target.value = "";
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewLecture(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setNewLecture(prev => ({ ...prev, video: url }));
    }
  };

  // لىكسىيەنى ساقلاش
  const handleSave = () => {
    if (!newLecture.title.trim()) {
      alert("لىكسىيە ئىسمىنى كىرگۈزۈڭ!");
      return;
    }

    let updated;
    if (editingId) {
      updated = lectures.map((lec) =>
        lec.id === editingId ? { 
          ...newLecture, 
          id: editingId,
          registrations: lec.registrations || []
        } : lec
      );
      setEditingId(null);
    } else {
      const newId = Math.max(...lectures.map(l => l.id), 0) + 1;
      updated = [...lectures, { ...newLecture, id: newId, registrations: [] }];
    }
    
    localStorage.setItem("kalbil_courses", JSON.stringify(updated));
    setLectures(updated);
    setShowModal(false);
    setNewLecture({
      title: "", speaker: "", date: "", duration: "",
      description: "", image: "", video: "", link: "",
      zoomLink: "", otherLink: ""
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("بۇ لىكسىيەنى چىنلا ئۆچۈرمەكچىمۇ؟")) {
      const filtered = lectures.filter((lec) => lec.id !== id);
      localStorage.setItem("kalbil_courses", JSON.stringify(filtered));
      setLectures(filtered);
    }
  };

  const handleEdit = (lec) => {
    setNewLecture(lec);
    setEditingId(lec.id);
    setShowModal(true);
  };

  // شىئارلار تىزىملىكى
  const phrases = useMemo(() => [
    "🚀 «بۈگۈن باشلا، ئەتە غەلىبە قازان»",
    "🌱 «ھەر بىر قەدەم چوڭ ئىلگىرلشكە يول»",
    "🔥 «قىزىقىشىڭىز ئۈچۈن ئەڭ ياخشى ۋاقىت — ھازىر»",
    "📦 «بىلەن بىلىم كۈچكە ئايلىنىدۇ KeLBiL»",
    "🎭 «ھەر كۈندە يېڭى بىر سەھىپە، يېڭى بىر پۇرسەت»",
    "📚 «بىلىم — ھاياتنىڭ ئەڭ قىممەتلىك مەنبەسى»",
    "🌍 «ئۇلانغان بىلىم، ئۇلۇغ پۇرسەتلەرگە ئۇلانغان»",
    "💡 «بىر ئىدىيە، بىر ئۆزگىرىشنىڭ باشلىنىشى»",
    "⏳ «ۋاقىتنى قەدىرلە، ئەمگەك مېۋىسى پىشىپ چىقىدۇ»",
    "🌟 «ھەر كۈندە يېڭى كۈلۈش، يېڭى نۇر»",
    "🛠️ «تەجرىبىسىز ئوقۇش، پەقەت خىيال»",
    "📖 «كۈندە بىر بەت, ھاياتتا بىر قەدەم ئالغا»",
    "🎯 «مەقسىتىڭىزنى بىلىڭ، قەدەمنىڭ كۈچلۈك بولسۇن»",
    "💎 «سەبرى بىلەن بىلىم گۆھەرگە ئايلىنىدۇ»",
    "🌄 «سەھەردە باشلانغان قەدەم كۈندە ئوڭۇشلۇق يول»",
    "🤝 «بىلىم ھەمبەھىرلەنگەندە كۆپىيىدۇ»",
    "⚡ «كۈندە كىچىك بىر ئىلگىرىلەش، چوڭ ئۆزگىرشنى بارلىققا كەلتۇرىدۇ»",
    "🧭 «بىلىم يول كۆرسەتكۈچ، ئەقل يېتەكچى»",
    "🌺 «كۈندە بىر يېڭىلىق، كۆڭۈلگە نۇر چاچىدۇ»",
    "🏆 «تىنچلىق بىلەن ئوقۇش، غەلىبە بىلەن ئاخىرلىشىدۇ»"
  ], []);

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [phrases.length]);

  return (
    <section className="bg-slate-50 dark:bg-slate-950 py-16 px-6 md:px-12 lg:px-24 transition-colors duration-300 min-h-screen" style={{ direction: 'rtl' }}>
      {/* باش قىسىم (Hero Section) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="text-right">
          <h2 className="text-4xl font-extrabold text-slate-800 dark:text-slate-100 mb-6 tracking-wide leading-tight">
            بىلىم ئارقىلىق كەلگۈسىنى قۇرۇش
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            ئۇيغۇر ئوقۇغۇچىلار ئۈچۈن بىلىم، مەدەنىيەت، ۋە يۇقىرى پەن-تېخنىكىنى بىرلەشتۈرگەن زامانىۋى دەرس سۇپىسى.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-start">
            {user?.role === "admin" && (
              <>
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  ➕ تور لىكسىيە قوشۇش
                </button>
                <button
                  onClick={exportToJSON}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  📥 جەيسان چىقىرىش
                </button>
                <label className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer">
                  📤 جەيسان يۈكلەش
                  <input type="file" accept=".json" onChange={importFromJSON} className="hidden" />
                </label>
              </>
            )}
            <button
              onClick={() => navigate("/quantummachinelearning")}
              className="bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium px-5 py-2.5 rounded-lg shadow-sm transition-all"
            >
              📚 كىۋانت دەرسلىرى
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/image05.png`}
            alt="KeLBiL Logo"
            className="w-4/5 md:w-full max-w-sm rounded-2xl shadow-xl dark:shadow-blue-900/10 object-cover transform hover:scale-[1.02] transition-transform duration-300"
            onError={(e) => { e.target.src = getImageUrl(null); }}
          />
        </div>
      </div>

      {/* ئىستاتىستىكا شىئار بالدىقى */}
      <div className="max-w-6xl mx-auto bg-gradient-to-l mb-10 from-blue-600 to-indigo-600 text-white p-6 rounded-2xl shadow-lg text-center h-20 flex items-center justify-center">
        <p className="text-xl font-bold tracking-wide animate-pulse">{phrases[index]}</p>
      </div>

      {/* دەرسلەر تىزىملىكى باش تېمىسى */}
      <h3 className="text-3xl font-extrabold text-slate-800 dark:text-slate-100 mb-8 text-center">
        نۆۋەتتىكى تور لىكسىيىلەر تىزىملىكى ({lectures.length} تال)
      </h3>

      {lectures.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl shadow max-w-md mx-auto">
          <p className="text-slate-500 dark:text-slate-400 text-lg mb-6">ھازىرچە تور لىكسىيە يوق.</p>
          <button
            onClick={initializeFromJSON}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow transition"
          >
            ئەسلى لىكسىيىلەرنى يۈكلەش
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {lectures.map((course) => {
            const registrationCount = course.registrations ? course.registrations.length : 0;
            return (
              <div key={course.id} className="group border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm bg-white dark:bg-slate-900 p-5 relative hover:shadow-xl hover:border-blue-500/30 dark:hover:border-blue-400/20 transition-all duration-300 flex flex-col justify-between">
                
                {/* تىزىملانغانلار سانى بەلگىسى */}
                <div className="absolute -top-3 -right-3 bg-rose-500 text-white rounded-full w-9 h-9 flex items-center justify-center text-sm font-black shadow-md z-10">
                  {registrationCount}
                </div>
                
                <div>
                  <div className="overflow-hidden rounded-xl mb-4 h-44 bg-slate-100 dark:bg-slate-800">
                    <img 
                      src={getImageUrl(course.image)} 
                      alt={course.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = getImageUrl(null); }}
                    />
                  </div>
                  
                  <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3 line-clamp-1 text-right">{course.title}</h4>
                  <div className="space-y-1.5 text-right mb-4">
                    <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-1.5 justify-start">
                      <span>👤</span> <span className="font-medium">{course.speaker}</span>
                    </p>
                    {course.date && (
                      <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5 justify-start">
                        <span>📅</span> <span>{course.date}</span>
                      </p>
                    )}
                    {course.duration && (
                      <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5 justify-start">
                        <span>⏱</span> <span>{course.duration}</span>
                      </p>
                    )}
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-5 leading-relaxed text-right">
                    {course.description}
                  </p>
                </div>

                {/* كۇنۇپكىلار رايونى */}
                <div className="border-t border-slate-100 dark:border-slate-800 pt-4 flex flex-col gap-3">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex gap-3">
                      <button
                        onClick={() => navigate(`/lecture/${course.id}`, { state: course })}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-sm transition"
                      >
                        🔍 تەپسىلاتى
                      </button>
                      
                      {(course.zoomLink || course.otherLink || course.link) && (
                        <button
                          onClick={() => joinLecture(course)}
                          className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold text-sm transition"
                        >
                          🎥 قاتنىشىش
                        </button>
                      )}
                    </div>

                    <button 
                      onClick={() => openRegistrationModal(course.id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-1.5 rounded-lg text-xs shadow-sm transition"
                    >
                      📝 تىزىملاش
                    </button>
                  </div>

                  {/* باشقۇرغۇچى قوراللىرى */}
                  {user?.role === "admin" && (
                    <div className="flex gap-1.5 justify-end bg-slate-50 dark:bg-slate-800/50 p-1.5 rounded-lg">
                      <button onClick={() => viewRegistrations(course.id)} className="bg-purple-600 hover:bg-purple-700 text-white p-1.5 rounded-md text-xs transition" title="تىزىملانغانلار">👥</button>
                      <button onClick={() => handleEdit(course)} className="bg-amber-500 hover:bg-amber-600 text-white p-1.5 rounded-md text-xs transition" title="تەھرىرلەش">✏️</button>
                      <button onClick={() => handleDelete(course.id)} className="bg-rose-600 hover:bg-rose-700 text-white p-1.5 rounded-md text-xs transition" title="ئۆچۈرۈش">🗑️</button>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      )}

      {/* تىزىملاش مودىلى (Modal) */}
      {showRegistrationModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl w-full max-w-md shadow-2xl border border-slate-100 dark:border-slate-800 text-right animate-modal-enter">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-5">تور لىكسىيىگە تىزىملاش</h3>
            
            <div className="space-y-3">
              <input
                type="text"
                placeholder="ئىسمىڭىز"
                value={registrationData.name}
                onChange={(e) => setRegistrationData(p => ({...p, name: e.target.value}))}
                className="w-full p-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 text-right outline-none"
              />
              <input
                type="email"
                placeholder="ئېلخەت ئادرېسىڭىز"
                value={registrationData.email}
                onChange={(e) => setRegistrationData(p => ({...p, email: e.target.value}))}
                className="w-full p-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 text-left outline-none"
              />
              <input
                type="text"
                placeholder="دۆلىتىڭىز"
                value={registrationData.country}
                onChange={(e) => setRegistrationData(p => ({...p, country: e.target.value}))}
                className="w-full p-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 text-right outline-none"
              />
              <input
                type="number"
                placeholder="يېشىڭىز"
                value={registrationData.age}
                onChange={(e) => setRegistrationData(p => ({...p, age: e.target.value}))}
                className="w-full p-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 text-right outline-none"
              />
            </div>

            <div className="flex justify-start gap-3 mt-6">
              <button onClick={() => handleRegistration()} className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl shadow transition">✅ تىزىملاش</button>
              <button onClick={() => setShowRegistrationModal(false)} className="px-5 py-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-medium rounded-xl transition">❌ بىكار قىلىش</button>
            </div>
          </div>
        </div>
      )}

      {/* لىكسىيە قوشۇش / تەھرىرلەش مودىلى (Admin Modal) */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex justify-center items-center z-50 p-4 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl w-full max-w-lg shadow-2xl my-8 border border-slate-100 dark:border-slate-800 text-right">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-5">
              {editingId ? "✏️ تور لىكسىيە تەھرىرلەش" : "➕ يېڭى تور لىكسىيە قوشۇش"}
            </h3>

            <div className="space-y-3 max-h-[65vh] overflow-y-auto pl-2">
              <input
                type="text"
                placeholder="📖 لىكسىيە تېمىسى"
                value={newLecture.title}
                onChange={(e) => setNewLecture(p => ({ ...p, title: e.target.value }))}
                className="w-full p-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="👤 لىكسىيە سۆزلىگۈچى"
                value={newLecture.speaker}
                onChange={(e) => setNewLecture(p => ({ ...p, speaker: e.target.value }))}
                className="w-full p-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="📅 لىكسىيە ۋاقتى (مەسىلەن: 2026.06.15 سائەت 20:00)"
                value={newLecture.date}
                onChange={(e) => setNewLecture(p => ({ ...p, date: e.target.value }))}
                className="w-full p-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="⏱ لىكسىيە داۋاملىشىش ۋاقتى (مەسىلەن: 2 سائەت)"
                value={newLecture.duration}
                onChange={(e) => setNewLecture(p => ({ ...p, duration: e.target.value }))}
                className="w-full p-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="📝 قىسقىچە مەزمۇنى"
                value={newLecture.description}
                onChange={(e) => setNewLecture(p => ({ ...p, description: e.target.value }))}
                className="w-full p-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
              />

              <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-dashed border-slate-200 dark:border-slate-700">
                <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">🖼️ مۇقاۋا رەسىم يۈكلەش</label>
                <input type="file" accept="image/*" onChange={handleImageUpload} className="text-sm text-slate-500" />
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-dashed border-slate-200 dark:border-slate-700">
                <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">🎥 لىكسىيە ۋىدېئوسى يۈكلەش</label>
                <input type="file" accept="video/*" onChange={handleVideoUpload} className="text-sm text-slate-500" />
              </div>

              <input
                type="text"
                placeholder="🔗 Zoom ئۇلىنىش ئادرېسى"
                value={newLecture.zoomLink}
                onChange={(e) => setNewLecture(p => ({ ...p, zoomLink: e.target.value }))}
                className="w-full p-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-blue-500 text-left"
              />
              <input
                type="text"
                placeholder="🔗 باشقا نەق مەيدان ئۇلىنىشى"
                value={newLecture.otherLink}
                onChange={(e) => setNewLecture(p => ({ ...p, otherLink: e.target.value }))}
                className="w-full p-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-blue-500 text-left"
              />
              <input
                type="text"
                placeholder="🔗 YouTube لىنكى"
                value={newLecture.link}
                onChange={(e) => setNewLecture(p => ({ ...p, link: e.target.value }))}
                className="w-full p-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-blue-500 text-left"
              />
            </div>

            <div className="flex justify-start gap-3 mt-6 border-t border-slate-100 dark:border-slate-800 pt-4">
              <button onClick={handleSave} className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl shadow transition">💾 ساقلاش</button>
              <button
                onClick={() => {
                  setShowModal(false);
                  setEditingId(null);
                  setNewLecture({
                    title: "", speaker: "", date: "", duration: "",
                    description: "", image: "", video: "", link: "",
                    zoomLink: "", otherLink: ""
                  });
                }}
                className="px-5 py-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-medium rounded-xl transition"
              >
                ❌ بىكار قىلىش
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}