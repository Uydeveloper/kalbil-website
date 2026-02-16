import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

// JSON ھۆججىتىنى ئىمپورت قىلىش
import coursesData from "../data/kalbil_courses.json";

export default function MainSection() {
  const navigate = useNavigate();
  const [lectures, setLectures] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const { user } = useContext(UserContext);
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

  useEffect(() => {
    console.log("ئەسلى JSON:", coursesData);
    const savedLectures = localStorage.getItem("kalbil_courses");
    
    if (savedLectures) {
      try {
        const parsedLectures = JSON.parse(savedLectures);
        console.log("لوكال ستورىجىدىكى لىكسىيىلەر:", parsedLectures);
        setLectures(parsedLectures);
      } catch (error) {
        console.error("لوكال ستورىجىدىكى JSON نى ئوقۇشتا خاتالىق:", error);
        // خاتالىق بولسا، JSON دىن ئېلىش
        initializeFromJSON();
      }
    } else {
      console.log("لوكال ستورىجىدا يوق، JSON دىن ئېلىۋاتىدۇ");
      initializeFromJSON();
    }
  }, []);

  // JSON دىكى سانلىق مەلۇماتلارنى باشلاش
  const initializeFromJSON = () => {
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
  };

  // رەسىم ئادىرىسىنى توغرىلاش
  const getImageUrl = (imagePath) => {
    if (!imagePath) return `${process.env.PUBLIC_URL}/images/image05.png`;
    
    if (imagePath.startsWith('data:')) {
      return imagePath;
    }
    
    if (imagePath.startsWith('/')) {
      return `${process.env.PUBLIC_URL}${imagePath}`;
    }
    
    return imagePath;
  };

  // تىزىملاش مودىلىنى ئاچىش
  const openRegistrationModal = (lectureId) => {
    setSelectedLectureId(lectureId);
    setShowRegistrationModal(true);
    setRegistrationData({
      name: "",
      email: "",
      country: "",
      age: ""
    });
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

        return {
          ...lecture,
          registrations: [...registrations, newRegistration]
        };
      }
      return lecture;
    });

    setLectures(updatedLectures);
    localStorage.setItem("kalbil_courses", JSON.stringify(updatedLectures));
    
    setShowRegistrationModal(false);
    alert("تىزىملاش مۇۋەپپەقىيەتلىك تاماملاندى! رەھمەت سىزگە!");
  };

  // تىزىملاشلارنى كۆرۈش
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

  // ئۇلىنىشقا ئاتلاش
  const joinLecture = (lecture) => {
    if (lecture.zoomLink) {
      window.open(lecture.zoomLink, '_blank');
    } else if (lecture.otherLink) {
      window.open(lecture.otherLink, '_blank');
    } else if (lecture.link) {
      window.open(lecture.link, '_blank');
    } else {
      alert("بۇ لىكسىيە ئۈچۈن ھازىرچە ئۇلىنىش ئادىرىسى يوق.");
    }
  };

  // JSON ھۆججىتىنى چىقىرىش
  const exportToJSON = () => {
    const dataStr = JSON.stringify(lectures, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    
    const link = document.createElement("a");
    link.href = URL.createObjectURL(dataBlob);
    link.download = "kalbil_courses.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // JSON ھۆججىتىنى يۈكلەش
  const importFromJSON = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedLectures = JSON.parse(e.target.result);
          if (Array.isArray(importedLectures)) {
            const lecturesWithRegistrations = importedLectures.map(lecture => ({
              ...lecture,
              registrations: lecture.registrations || [],
              date: lecture.date || "",
              zoomLink: lecture.zoomLink || "",
              otherLink: lecture.otherLink || ""
            }));
            
            setLectures(lecturesWithRegistrations);
            localStorage.setItem("kalbil_courses", JSON.stringify(lecturesWithRegistrations));
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
        setNewLecture({ ...newLecture, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setNewLecture({ ...newLecture, video: url });
    }
  };

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
      const newLectureWithId = { 
        ...newLecture, 
        id: newId,
        registrations: []
      };
      updated = [...lectures, newLectureWithId];
    }
    
    localStorage.setItem("kalbil_courses", JSON.stringify(updated));
    setLectures(updated);
    setShowModal(false);
    setNewLecture({
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

  const phrases = [
    "🚀 «بۈگۈن باشلا، ئەتە غەلىبە قازان»",
    "🌱 «ھەر بىر قەدەم چوڭ ئىلگىرلشكە يول»",
    "🔥 «قىزىقىشىڭىز ئۈچۈن ئەڭ ياخشى ۋاقىت — ھازىر»",
    "📦 «بىلەن بىلىم كۈچكە ئايلىنىدۇ KelBiL»",
    "🎭 «ھەر كۈندە يېڭى بىر سەھىپە، يېڭى بىر پۇرسەت»",
    "📚 «بىلىم — ھاياتنىڭ ئەڭ قىممەتلىك مەنبەسى»",
    "🌍 «ئۇلانغان بىلىم، ئۇلۇغ پۇرسەتلەرگە ئۇلانغان»",
    "💡 «بىر ئىدىيە، بىر ئۆزگىرىشنىڭ باشلىنىشى»",
    "⏳ «ۋاقىتنى قەدىرلە، ئەمگەك مېۋىسى پىشىپ چىقىدۇ»",
    "🌟 «ھەر كۈندە يېڭى كۈلۈش، يېڭى نۇر»",
    "🛠️ «تەجرىبىسىز ئوقۇش، پەقەت خىيال»",
    "📖 «كۈندە بىر بەت، ھاياتتا بىر قەدەم ئالغا»",
    "🎯 «مەقسىتىڭىزنى بىلىڭ، قەدەمنىڭ كۈچلۈك بولسۇن»",
    "💎 «سەبرى بىلەن بىلىم گۆھەرگە ئايلىنىدۇ»",
    "🌄 «سەھەردە باشلانغان قەدەم كۈندە ئوڭۇشلۇق يول»",
    "🤝 «بىلىم ھەمبەھىرلەنگەندە كۆپىيىدۇ»",
    "⚡ «كۈندە كىچىك بىر ئىلگىرىلەش، چوڭ ئۆزگىرشنى بارلىققا كەلتۇرىدۇ»",
    "🧭 «بىلىم يول كۆرسەتكۈچ، ئەقل يېتەكچى»",
    "🌺 «كۈندە بىر يېڭىلىق، كۆڭۈلگە نۇر چاچىدۇ»",
    "🏆 «تىنچلىق بىلەن ئوقۇش، غەلىبە بىلەن ئاخىرلىشىدۇ»"
  ];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [phrases.length]);

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
            ئۇيغۇر ئوقۇغۇچىلار ئۈچۈن بىلىم، مەدەنىيەت، ۋە تېخنىكىنى بىرلەشتۈرگەن دەرس سۇپىسى.
          </p>
          
          <div className="flex gap-4 flex-wrap">
            {user?.role === "admin" && (
              <>
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
                >
                  ➕ تور لىكسيە قوشۇش
                </button>
                <button
                  onClick={exportToJSON}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded transition"
                >
                  📥 جەيسان چىقىرىش
                </button>
                <label className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded transition cursor-pointer">
                  📤 جەيسان يۈكلەش
                  <input
                    type="file"
                    accept=".json"
                    onChange={importFromJSON}
                    className="hidden"
                  />
                </label>
              </>
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

      {/* تىزىملاش مودىلى */}
      {showRegistrationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">تور لىكسىيىگە تىزىملاش</h3>
            
            <input
              type="text"
              placeholder="ئىسمىڭىز"
              value={registrationData.name}
              onChange={(e) => setRegistrationData({...registrationData, name: e.target.value})}
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="email"
              placeholder="ئېلخەت ئادرېسىڭىز"
              value={registrationData.email}
              onChange={(e) => setRegistrationData({...registrationData, email: e.target.value})}
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="دۆلەتىڭىز"
              value={registrationData.country}
              onChange={(e) => setRegistrationData({...registrationData, country: e.target.value})}
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="number"
              placeholder="يېشىڭىز"
              value={registrationData.age}
              onChange={(e) => setRegistrationData({...registrationData, age: e.target.value})}
              className="w-full mb-4 p-2 border rounded"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowRegistrationModal(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded"
              >
                ❌ بىكار قىلىش
              </button>
              <button
                onClick={handleRegistration}
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                ✅ تىزىملاش
              </button>
            </div>
          </div>
        </div>
      )}

      {/* لىكسىيە قوشۇش مودىلى */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-lg">
            <h3 className="text-xl font-bold mb-4">
              {editingId ? "تور لىكسيە ئۆزگەرتىش" : "تور لىكسيە قوشۇش"}
            </h3>

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
            <input
              type="text"
              placeholder="📅 لىكسىيە ۋاقتى (مەسىلەن: 2025.11.11 سائەت 20:00)"
              value={newLecture.date}
              onChange={(e) => setNewLecture({ ...newLecture, date: e.target.value })}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="⏱ لىكسيە ۋاقىتى (مەسىلەن: 2 سائەت)"
              value={newLecture.duration}
              onChange={(e) => setNewLecture({ ...newLecture, duration: e.target.value })}
              className="w-full mb-2 p-2 border rounded"
            />
            <textarea
              placeholder="📝 قىسقىچە مەزمۇن"
              value={newLecture.description}
              onChange={(e) => setNewLecture({ ...newLecture, description: e.target.value })}
              className="w-full mb-2 p-2 border rounded"
              rows="3"
            />

            <label className="block mb-2">🖼️ رەسم يۈكلەش</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-4" />

            <label className="block mb-2">🎥 ۋىدېئو يۈكلەش</label>
            <input type="file" accept="video/*" onChange={handleVideoUpload} className="mb-4" />

            <input
              type="text"
              placeholder="🔗 زۇم ئۇلىنىش ئادىرىسى"
              value={newLecture.zoomLink}
              onChange={(e) => setNewLecture({ ...newLecture, zoomLink: e.target.value })}
              className="w-full mb-2 p-2 border rounded"
            />

            <input
              type="text"
              placeholder="🔗 باشقا ئۇلىنىش ئادىرىسى"
              value={newLecture.otherLink}
              onChange={(e) => setNewLecture({ ...newLecture, otherLink: e.target.value })}
              className="w-full mb-2 p-2 border rounded"
            />

            <input
              type="text"
              placeholder="🔗 YouTube ئۇلىنىش ئادىرىسى"
              value={newLecture.link}
              onChange={(e) => setNewLecture({ ...newLecture, link: e.target.value })}
              className="w-full mb-4 p-2 border rounded"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setShowModal(false);
                  setEditingId(null);
                  setNewLecture({
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
                }}
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

      {/* لىكسيە تىزىملىكى */}
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
        تور لىكسيىلەر تىزىملىكى ({lectures.length} تال)
      </h3>
      
      <div className="bg-gradient-to-r mb-5 from-indigo-600 to-purple-600 text-white p-6 rounded-lg shadow text-center overflow-hidden h-24 flex items-center justify-center">
        <p className="text-xl font-semibold animate-fade-in">{phrases[index]}</p>
      </div>

      {lectures.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">ھازىرچە تور لىكسىيە يوق.</p>
          <button
            onClick={initializeFromJSON}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
          >
            ئەسلى لىكسىيىلەرنى يۈكلەش
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {lectures.map((course) => {
            const registrationCount = course.registrations ? course.registrations.length : 0;
            
            return (
              <div key={course.id} className="border rounded-lg shadow bg-gray-50 dark:bg-gray-800 p-4 relative hover:shadow-lg transition-shadow">
                {/* تىزىملاش سانى */}
                <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {registrationCount}
                </div>
                
                <img 
                  src={getImageUrl(course.image)} 
                  alt={course.title} 
                  className="w-full h-40 object-cover rounded mb-3" 
                />
                <h4 className="text-lg font-bold text-indigo-700 dark:text-indigo-300 mb-2">{course.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">👤 {course.speaker}</p>
                
                {course.date && (
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">📅 {course.date}</p>
                )}
                
                {course.duration && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">⏱ {course.duration}</p>
                )}
                
                <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-2 mb-3">
                  {course.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate(`/lecture/${course.id}`, { state: course })}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      🔍 تەپسىلاتىنى كۆرۈش
                    </button>
                    
                    {(course.zoomLink || course.otherLink || course.link) && (
                      <button
                        onClick={() => joinLecture(course)}
                        className="text-green-600 hover:underline text-sm"
                      >
                        🎥 قاتنىشىش
                      </button>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => openRegistrationModal(course.id)}
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
                    >
                      📝 تىزىملاش
                    </button>
                    
                    {user?.role === "admin" && (
                      <>
                        <button 
                          onClick={() => viewRegistrations(course.id)}
                          className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm"
                        >
                          👥
                        </button>
                        <button onClick={() => handleEdit(course)} className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm">
                          ✏️
                        </button>
                        <button onClick={() => handleDelete(course.id)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm">
                          🗑️
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}