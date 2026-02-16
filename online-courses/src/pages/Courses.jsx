import { useState, useEffect } from "react";
import courses from "../data/courses.json";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import { 
  FaHeart, FaRegHeart, FaLock, FaPlay, FaStar, FaTag, FaAd, FaLockOpen, 
  FaUpload, FaFileDownload, FaPaypal, FaCreditCard, FaCheck, FaCopy, 
  FaEnvelope, FaUser, FaQuoteLeft, FaQuoteRight, FaBookOpen 
} from "react-icons/fa";

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openAlbum, setOpenAlbum] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showWritingModal, setShowWritingModal] = useState(false); // 🆕
  const [currentWriting, setCurrentWriting] = useState(null); // 🆕
  const [newWriting, setNewWriting] = useState({ // 🆕
    image: "",
    title: "",
    summary: "",
    author: "",
    date: new Date().toISOString().split("T")[0],
    link: ""
  });
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [purchasedCourses, setPurchasedCourses] = useState(new Set());
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [unlockedVideos, setUnlockedVideos] = useState(new Set());
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [verificationCode, setVerificationCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const { isLoggedIn, user, userRole, isAdmin } = useAuth();
  const allCategories = ["all", ...new Set(courses.map((c) => c.catigories || "General"))];

  // 🆕 يېڭى يازما قوشۇش
  const handleAddWriting = () => {
    if (!newWriting.title || !newWriting.link) {
      alert("تېمىسى ۋە ئۇلىنىشنى تولدۇرۇڭ!");
      return;
    }
    const writingWithId = { ...newWriting, id: Date.now(), isWriting: true };
    setUploadedFiles(prev => [...prev, writingWithId]);
    setNewWriting({
      image: "",
      title: "",
      summary: "",
      author: "",
      date: new Date().toISOString().split("T")[0],
      link: ""
    });
    setShowWritingModal(false);
  };

  // 🆕 يازما كۆرۈش
  const viewWriting = (writing) => {
    setCurrentWriting(writing);
  };

  // 🆕 قايتىش
  const closeWritingDetail = () => {
    setCurrentWriting(null);
  };

  useEffect(() => {
    AOS.init({ duration: 800 });
    const storedFiles = localStorage.getItem("uploadedFiles");
    const storedPurchased = localStorage.getItem("purchasedCourses");
    const storedUnlocked = localStorage.getItem("unlockedVideos");
    if (storedFiles) setUploadedFiles(JSON.parse(storedFiles));
    if (storedPurchased) setPurchasedCourses(new Set(JSON.parse(storedPurchased)));
    if (storedUnlocked) setUnlockedVideos(new Set(JSON.parse(storedUnlocked)));
  }, []);

  useEffect(() => {
    localStorage.setItem("uploadedFiles", JSON.stringify(uploadedFiles));
    localStorage.setItem("purchasedCourses", JSON.stringify([...purchasedCourses]));
    localStorage.setItem("unlockedVideos", JSON.stringify([...unlockedVideos]));
  }, [uploadedFiles, purchasedCourses, unlockedVideos]);

  let filteredCourses = courses.filter((course) =>
    `${course.title} ${course.instructor}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );
  if (selectedCategory !== "all") {
    filteredCourses = filteredCourses.filter(
      (course) => course.catigories === selectedCategory
    );
  }
  if (sortBy === "views") {
    filteredCourses.sort((a, b) => b.views - a.views);
  } else if (sortBy === "likes") {
    filteredCourses.sort((a, b) => b.likes - a.likes);
  } else if (sortBy === "duration") {
    filteredCourses.sort((a, b) => {
      const aMin = parseInt(a.duration) || 0;
      const bMin = parseInt(b.duration) || 0;
      return bMin - aMin;
    });
  }

  const isCoursePurchased = (courseId) => {
    return isAdmin || purchasedCourses.has(courseId);
  };

  const unlockVideo = (courseId, videoIndex) => {
    const videoKey = `${courseId}-${videoIndex}`;
    setUnlockedVideos(prev => new Set([...prev, videoKey]));
  };

  const isVideoUnlocked = (courseId, videoIndex) => {
    if (isCoursePurchased(courseId)) return true;
    if (videoIndex === 0) return true;
    const videoKey = `${courseId}-${videoIndex}`;
    return unlockedVideos.has(videoKey);
  };

  const albums = filteredCourses.map(course => ({
    id: course.id,
    title: course.title,
    description: course.description,
    instructor: course.instructor,
    duration: course.duration,
    image: course.image,
    price: course.price || "99.99",
    category: course.catigories || "General",
    level: course.level || "باشلانغۇچ",
    students: course.students || 0,
    rating: course.rating || 4.8,
    topics: course.topics || [],
    videos: [
      { 
        title: "دەسلەپكى كۆرۈش", 
        src: course.previewYoutubeUrl || course.fullYoutubeUrl || "/videos/placeholder.mp4",
        isPreview: true
      },
      ...(course.topics?.slice(0, 3).map((topic, i) => ({
        title: topic.title,
        src: course.fullYoutubeUrl || "/videos/placeholder.mp4",
        isPreview: false
      })) || [])
    ]
  }));

  const handlePurchaseCourse = (course) => {
    if (!isLoggedIn) {
      window.location.href = '/#/login';
      return;
    }
    setSelectedCourse(course);
    setShowPaymentModal(true);
  };

  const handlePaypalPayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowPaymentModal(false);
      const newCode = Math.random().toString(36).substring(2, 8).toUpperCase();
      setGeneratedCode(newCode);
      setShowSuccessModal(true);
    }, 2000);
  };

  const handleVerification = () => {
    if (verificationCode === generatedCode) {
      setPurchasedCourses(prev => new Set([...prev, selectedCourse.id]));
      setShowSuccessModal(false);
      setVerificationCode("");
      setGeneratedCode("");
      alert('كورس مۇۋەپپەقىيەتلىك سېتىۋېلىندى! ھەممە ۋىديولار ئېچىلدى.');
    } else {
      alert('تەستىقلاش كودى خاتا! قايتا سىناڭ.');
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;
    const oversized = files.filter(f => f.size > 10 * 1024 * 1024);
    if (oversized.length > 0) {
      alert(`10MB دىن چوڭ ھۆججەتلەرنى يۇكلەشمەيسىز: ${oversized.map(f => f.name).join(', ')}`);
      return;
    }
    setIsLoading(true);
    const readers = files.map(file => 
      new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = e => resolve({
          id: Date.now() + Math.random(),
          name: file.name,
          type: file.type,
          size: file.size,
          url: e.target.result,
          uploadDate: new Date().toISOString(),
          isWriting: false
        });
        reader.readAsDataURL(file);
      })
    );
    Promise.all(readers).then(newFiles => {
      setUploadedFiles(prev => [...prev, ...newFiles]);
      setIsLoading(false);
      setShowUploadModal(false);
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("بۇ ھۆججەتنى چىنەمەن ئۆچۈرمەكچىمۇ؟")) {
      setUploadedFiles(prev => prev.filter(f => f.id !== id));
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const fileCategories = [
    { id: "all", name: "ھەممىسى" },
    { id: "image", name: "رەسىملەر" },
    { id: "video", name: "سىنلار" },
    { id: "document", name: "ھۆججەتلەر" },
    { id: "other", name: "باشقىلار" }
  ];

  const filteredFiles = uploadedFiles.filter(file => {
    const matchesSearch = (file.name?.toLowerCase() || file.title?.toLowerCase() || "").includes(searchTerm.toLowerCase());
    let matchesCategory = true;
    if (selectedCategory !== "all") {
      if (selectedCategory === "image") matchesCategory = file.type?.startsWith("image/");
      else if (selectedCategory === "video") matchesCategory = file.type?.startsWith("video/");
      else if (selectedCategory === "document") matchesCategory = file.type?.includes("pdf") || file.type?.includes("word") || file.type?.includes("excel") || file.type?.includes("powerpoint") || file.type?.includes("text/plain");
      else if (selectedCategory === "other") matchesCategory = !file.type?.startsWith("image/") && !file.type?.startsWith("video/") && !file.type?.includes("pdf") && !file.type?.includes("word") && !file.type?.includes("excel") && !file.type?.includes("powerpoint") && !file.type?.includes("text/plain");
    }
    return matchesSearch && matchesCategory;
  });

  const handleFileUpload = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div className={`p-4 sm:p-6 min-h-screen font-uyghur text-3xl transition-colors ${darkMode ? "bg-gradient-to-br from-gray-900 to-amber-900/5" : "bg-gray-50"}`}>
      {/* 📢 ئېلان باننېرى */}
      <div className="font-uyghur text-3xl bg-gradient-to-r from-cyan-500 to-amber-500 text-white p-3 rounded-xl mb-6 flex items-center gap-3 animate-pulse max-w-4xl mx-auto shadow-lg">
        <FaAd className="text-xl flex-shrink-0" />
        <span className=" font-bold text-center flex-grow">
          🎉 يېڭى كورس: «كىۋانىت ماشىنا ئۆگىنىش» باشلاندى! ھازىر سېتىۋېلىش 20% ئىتبار!
        </span>
      </div>
      {/* Hero Section */}
      <div className="font-uyghur mb-10 text-center py-6 sm:py-8 bg-gradient-to-r from-cyan-600 via-amber-500 to-orange-600 rounded-2xl text-white shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed px-4 relative z-10">
          بىلىم بىلەن قۇرۇلغان كەلگۈسى، ئىلم - پەن روھ بىلەن نۇرلانغان مەدەنىيەت
          بىلەن ئۇيغۇرنىڭ يېڭى باشلىنىشى
        </h1>
        <p className="mt-3 text-base opacity-90 px-4 relative z-10">ئۆزىڭىزنىڭ بىلىم سەپىرىڭىزنى باشلاڭ</p>
      </div>
      <div className={`relative rounded-2xl p-6 mb-10 shadow-xl border-l-8 border-cyan-500 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"} transform hover:scale-[1.01] transition-transform duration-300`} data-aos="fade-up">
        <h2 className="text-2xl sm:text-3xl font-bold text-cyan-600 dark:text-amber-400 mb-6 text-right">
          يۇقىرى پەن-تېخنىكا ۋە ئۇيغۇر روھىنىڭ ئۇيغۇنلىقى — KelBiL
        </h2>
        <p className="mt-5 text-right italic text-gray-600 dark:text-gray-400">
          « تېخنىكا ئارقىلىق، مەدەنىيەت ۋە بىلىمنىڭ يېڭى باشلىنىشى — KelBiL»
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
        <div className="md:w-1/2 w-full transform hover:scale-[1.02] transition-transform duration-300">
          <img
            src={`${process.env.PUBLIC_URL}/images/image05.png`}
            alt="KalBiL نىڭ پەن-تېخنىكا ۋە مەدەنىيەت ئۇيغۇنلىقى"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
        <div className="font-uyghur md:w-2/2 w-full space-y-4 text-right text-3xl leading-relaxed">
          <p className="transform hover:translate-x-2 transition-transform duration-300">
            كىۋانت ماشىنا ئۈگىنىش ئارقىلىق، ئۇيغۇر زېھنىنىڭ يېڭى ئۇپۇقىنى ئاچىدۇ.{" "}
            <strong className="text-cyan-600 dark:text-amber-400">KelBiL</strong>
          </p>
          <p className="transform hover:translate-x-2 transition-transform duration-300">
            سۇنئىي ئەقىل بىلەن، بىلىم سىستېمىسىنى راقەملىك كەلگۈسىگە باشلايدۇ.{" "}
            <strong className="text-cyan-600 dark:text-amber-400">KelBiL</strong>
          </p>
          <p className="transform hover:translate-x-2 transition-transform duration-300">
            ئۇچۇر تېخنىكىسى ئارقىلىق، جامائەتنى ئۇلاش، بىلىم تارقىتىش، ھەمكارلىق قۇرۇش.{" "}
            <strong className="text-cyan-600 dark:text-amber-400">KelBiL</strong>
          </p>
          <p className="transform hover:translate-x-2 transition-transform duration-300">
            چوڭ سابلىق مەلۇمات بىلەن، مەدەنىيەت نۇرىنى پەن-تېخنىكا بىلەن يورۇتىدۇ.{" "}
            <strong className="text-cyan-600 dark:text-amber-400">KelBiL</strong>
          </p>
        </div>
      </div>

      {/* باشلىق ۋە تەرتىپلەش */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center md:text-left text-cyan-700 dark:text-amber-400 bg-gradient-to-r from-cyan-100 to-amber-100 dark:from-gray-800 dark:to-amber-900/20 p-4 rounded-2xl shadow-md">
          🎓 بىزنىڭ دەرسلەر
        </h2>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 shadow-md transform hover:scale-105 transition-transform duration-200"
        >
          <option value="default">تەرتىپلەش</option>
          <option value="views">👁 كۆرۈلگەن سانى</option>
          <option value="likes">❤️ ياخشى كۆرۈلگەن</option>
          <option value="duration">⏱ مۇددىتى</option>
        </select>
      </div>

      {/* ئىزدەش ۋە كاتېگورىيە */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <input
          type="text"
          placeholder="تىما ياكى ئوقۇتقۇچى بويىچە ئىزدەڭ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 shadow-md transform hover:scale-[1.02] transition-transform duration-200"
        />
        <div className="flex flex-wrap gap-2">
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.1 font-uyghur text-3xl rounded-full  transition transform hover:scale-110 duration-200 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 shadow-md"
              }`}
            >
              {cat === "all" ? "بارلىقى" : `#${cat}`}
            </button>
          ))}
        </div>
      </div>

      {/* دەرىجىلەر — كاتېگورىيە چەككەندە يېنىك */}
      {!openAlbum ? (
        <div className="font-uyghur text-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album) => (
            <div
              key={album.id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03] border border-gray-200 dark:border-gray-700 cursor-pointer"
              onClick={() => setOpenAlbum(album.id)}
            >
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
                  <img 
                    src={album.image || `${process.env.PUBLIC_URL}/images/course-placeholder.jpg`} 
                    alt={album.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 rounded-full p-4">
                      <FaPlay className="text-cyan-600 text-xl ml-1" />
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-xs px-2.5 py-1 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-200">
                  🎬 {album.videos.length} ۋىديو
                </div>
                <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full">
                  ⏱ {album.duration}
                </div>
                {!isCoursePurchased(album.id) && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-red-600 text-white font-bold text-xs px-2 py-1 rounded-full shadow-lg">
                    💰 {album.price}¥
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 line-clamp-2">{album.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">{album.description}</p>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <span className="flex items-center gap-1">👨‍🏫 {album.instructor}</span>
                  <span className="flex items-center gap-1"><FaStar className="text-amber-500" /> {album.rating}</span>
                </div>
                {!isCoursePurchased(album.id) && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePurchaseCourse(album);
                    }}
                    className=" w-full py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-medium hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-md transform hover:scale-105 flex items-center justify-center gap-2 text-sm mb-2"
                  >
                    <FaCreditCard className=" font-uyghur text-2xl" />
                    <span>سېتىۋېلىش ({album.price}¥)</span>
                  </button>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/outline/${album.id}`);
                  }}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-2.5 rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-md transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <FaTag className="text-sm" />
                  <span>🔍 تەپسىلات</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => setOpenAlbum(null)}
            className="mb-6 px-5 py-2.5 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-xl hover:from-gray-700 hover:to-black transition-all duration-300 shadow-lg flex items-center gap-2 transform hover:scale-105"
          >
            <span>↶</span>
            <span>🔙 قايتىش</span>
          </button>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {albums.find(a => a.id === openAlbum)?.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {albums.find(a => a.id === openAlbum)?.description}
            </p>
            {!isCoursePurchased(openAlbum) && (
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-amber-800 dark:text-amber-200 font-uyghur text-xl">
                      💰 كورسنى سېتىۋېلىڭ
                    </h3>
                    <p className="text-amber-700 dark:text-amber-300 font-uyghur text-xl mt-1">
                      ھەممە ۋىديولارنى ئېچىڭ ۋە چەكسىز ئۆگىنىڭ
                    </p>
                  </div>
                  <button
                    onClick={() => handlePurchaseCourse(albums.find(a => a.id === openAlbum))}
                    className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg transform hover:scale-105"
                  >
                    سېتىۋېلىش - {albums.find(a => a.id === openAlbum)?.price}¥
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums
              .find(a => a.id === openAlbum)
              ?.videos.map((video, i) => {
                const isUnlocked = isVideoUnlocked(openAlbum, i);
                const isPurchased = isCoursePurchased(openAlbum);
                return (
                  <div 
                    key={i} 
                    className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-200 dark:border-gray-700 cursor-pointer"
                    onClick={() => {
                      if (isUnlocked) {
                        console.log('ۋىديو كۆرسىتىش:', video.title);
                      }
                    }}
                  >
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <div className="text-center text-white">
                        <FaPlay className="text-3xl mx-auto mb-3 text-cyan-500" />
                        <p className="font-uyghur text-xl font-medium">{video.title}</p>
                        <p className="font-uyghur text-xl mt-1 text-gray-400">
                          {isUnlocked ? "چىكىپ كۆرۈڭ" : "قولۇپلانغان"}
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-start gap-3">
                        <span className={`text-xs px-2 py-1 rounded-full min-w-6 text-center flex-shrink-0 ${
                          isUnlocked 
                            ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white" 
                            : "bg-gradient-to-r from-gray-400 to-gray-500 text-white"
                        }`}>
                          {i + 1}
                        </span>
                        <div className="flex-grow">
                          <h3 className="text-base font-semibold text-gray-900 dark:text-white line-clamp-2">
                            {video.title}
                          </h3>
                          <div className="flex items-center justify-between mt-2">
                            {!isUnlocked ? (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  unlockVideo(openAlbum, i);
                                }}
                                className="text-xs bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1.5 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-1"
                                disabled={i > 0 && !isVideoUnlocked(openAlbum, i - 1)}
                              >
                                <FaLockOpen className="font-uyghur text-xl" />
                                ئېچىش ({i === 0 ? "بېپۇل" : "10¥"})
                              </button>
                            ) : (
                              <span className="font-uyghur text-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1.5 rounded-lg flex items-center gap-1">
                                <FaLockOpen className="font-uyghur text-xl" />
                                ئوچۇق
                              </span>
                            )}
                            {!isPurchased && (
                              <span className="font-uyghur text-xl text-gray-500 dark:text-gray-400">
                                {i === 0 ? "بېپۇل" : "10¥"}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}

      {/* 💳 تۆلەش مودالى */}
      {showPaymentModal && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl w-full max-w-2xl shadow-2xl transform animate-scaleIn">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
              💳 كورس سېتىۋېلىش
            </h3>
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800 rounded-xl p-6 mb-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h4 className="font-bold text-cyan-800 dark:text-cyan-200 text-xl mb-3">
                    {selectedCourse.title}
                  </h4>
                  <div className="font-uyghur text-xlspace-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-cyan-700 dark:text-cyan-300">كورس تىمىسى:</span>
                      <span className="text-cyan-800 dark:text-cyan-200 font-medium">{selectedCourse.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cyan-700 dark:text-cyan-300">ئوقۇتقۇچى:</span>
                      <span className="text-cyan-800 dark:text-cyan-200 font-medium">{selectedCourse.instructor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cyan-700 dark:text-cyan-300">كاتېگورىيە:</span>
                      <span className="text-cyan-800 dark:text-cyan-200 font-medium">{selectedCourse.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cyan-700 dark:text-cyan-300">سەۋىيە:</span>
                      <span className="text-cyan-800 dark:text-cyan-200 font-medium">{selectedCourse.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cyan-700 dark:text-cyan-300">ۋاقىت:</span>
                      <span className="text-cyan-800 dark:text-cyan-200 font-medium">{selectedCourse.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-cyan-300 dark:border-cyan-700">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">
                        {selectedCourse.price}¥
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">ئومۇمىي باھا</div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>كورس باھاسى:</span>
                        <span>{selectedCourse.price}¥</span>
                      </div>
                      <div className="flex justify-between">
                        <span>يېتەكچىلىك:</span>
                        <span>0¥</span>
                      </div>
                      <div className="flex justify-between border-t border-gray-200 dark:border-gray-600 pt-2 font-bold">
                        <span>جەمئىي:</span>
                        <span>{selectedCourse.price}¥</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-4 mb-6">
              <div className="text-center">
                <FaQuoteLeft className="text-purple-500 text-xl mb-2 mx-auto" />
                <p className="text-purple-700 dark:text-purple-300 font-uyghur text-xl italic mb-3">
                  "بىلىم - ئەڭ باي بېغىز، بىلىمسىزلىك - ئەڭ يوقسۇل كەمچىلىك"
                </p>
                <p className="text-purple-600 dark:text-purple-400 text-sm">
                  - ئۇيغۇر خەلق ماقالى
                </p>
                <FaQuoteRight className="text-purple-500 text-xl mt-2 mx-auto" />
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 mb-6">
              <h4 className="font-bold text-green-800 dark:text-green-200 text-lg mb-3 text-center">
                📞 ئالاقە ئۇچۇرلىرى
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg p-3 border border-green-300 dark:border-green-700">
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-green-600 dark:text-green-400" />
                    <span className="text-green-700 dark:text-green-300">ئېلخەت:</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-green-800 dark:text-green-200">kelbil.edu@gmail.com</span>
                    <button
                      onClick={() => copyToClipboard('kalbil.edu@gmail.com')}
                      className="px-2 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 flex items-center gap-1 text-xs"
                    >
                      {copied ? <FaCheck /> : <FaCopy />}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg p-3 border border-green-300 dark:border-green-700">
                  <div className="flex items-center gap-3">
                    <FaPaypal className="text-blue-600 dark:text-blue-400" />
                    <span className="text-green-700 dark:text-green-300">پەيپال:</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-green-800 dark:text-green-200">kelbil.edu@paypal.com</span>
                    <button
                      onClick={() => copyToClipboard('kalbil.edu@paypal.com')}
                      className="px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 flex items-center gap-1 text-xs"
                    >
                      {copied ? <FaCheck /> : <FaCopy />}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg p-3 border border-green-300 dark:border-green-700">
                  <div className="flex items-center gap-3">
                    <FaUser className="text-amber-600 dark:text-amber-400" />
                    <span className="text-green-700 dark:text-green-300">ماسۇل كىشى:</span>
                  </div>
                  <span className="font-mono text-green-800 dark:text-green-200"> KeLBiL</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-6">
              <div className="text-center">
                <h5 className="font-bold text-amber-800 dark:text-amber-200 text-lg mb-2">
                  رەھمەت سۆزلىرى
                </h5>
                <p className="text-amber-700 dark:text-amber-300 font-uyghur text-xl mb-2">
                  "سىزنىڭ قوللاشىڭىز بىزنىڭ يېڭى تېخنىكا ۋە مەدەنىيەتنى ئۇيغۇر ياشلىرىغا يەتكۈزۈش يولىمىزدا مۇھىم رول ئوينايدۇ."
                </p>
                <p className="text-amber-600 dark:text-amber-400 font-uyghur text-xl">
                  - KelBiL تەربىيەلىش گۇرۇپپىسى
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handlePaypalPayment}
                disabled={isLoading}
                className="flex-1 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-md transform hover:scale-105 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              >
                <FaCheck className="text-xl" />
                {isLoading ? "تەكشۈرۈۋاتىدۇ..." : "تۆلەش تامAMLاندى"}
              </button>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="flex-1 py-4 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white rounded-lg font-medium hover:bg-gray-400 transition-all duration-300 shadow-md transform hover:scale-105 text-lg"
              >
                بىكار قىلىش
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ✅ مۇۋەپپەقىيەتلىك تۆلەش مودالى */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl w-full max-w-md shadow-2xl transform animate-scaleIn">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheck className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                تەستىقلاش كودى
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                تۆلەش مۇۋەپپەقىيەتلىك بولدى! تۆۋەندىكى كودنى كۆچۈرۈپ، كىرگۈزۈڭ:
              </p>
              <p className="text-sm text-amber-600 dark:text-amber-300 mt-2">
                📧 بۇ كود سىزنىڭ kelbil.edu@gmail.com ئادرېسىڭىزغا يوللاندى دەپ قاراڭ.
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 mb-4">
              <p className="text-green-800 dark:text-green-200 text-center text-lg font-bold font-mono">
                {generatedCode}
              </p>
            </div>
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value.toUpperCase())}
              placeholder="تەستىقلاش كودىنى كىرگۈزۈڭ"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl mb-4 dark:bg-gray-700 text-gray-900 dark:text-white text-center font-mono text-lg"
              maxLength={6}
            />
            <div className="flex gap-3">
              <button
                onClick={handleVerification}
                className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-md transform hover:scale-105"
              >
                تەستىقلاش
              </button>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="flex-1 py-3 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white rounded-lg font-medium hover:bg-gray-400 transition-all duration-300 shadow-md transform hover:scale-105"
              >
                بىكار قىلىش
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 📝 يازما قوشۇش مودالى */}
      {showWritingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl w-full max-w-lg shadow-2xl transform animate-scaleIn">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white text-center">يېڭى يازما قوشۇش</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="رەسىم ئۇلىنىشى (مەجبۇرىي ئەمەس)"
                value={newWriting.image}
                onChange={(e) => setNewWriting({...newWriting, image: e.target.value})}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl dark:bg-gray-700 text-white"
              />
              <input
                type="text"
                placeholder="يازما تېمىسى (مەجبۇرىي)"
                value={newWriting.title}
                onChange={(e) => setNewWriting({...newWriting, title: e.target.value})}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl dark:bg-gray-700 text-white"
              />
              <textarea
                placeholder="قىسقىچە مەزمۇن"
                value={newWriting.summary}
                onChange={(e) => setNewWriting({...newWriting, summary: e.target.value})}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl dark:bg-gray-700 text-white h-24"
              />
              <input
                type="text"
                placeholder="ئاپتور"
                value={newWriting.author}
                onChange={(e) => setNewWriting({...newWriting, author: e.target.value})}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl dark:bg-gray-700 text-white"
              />
              <input
                type="date"
                value={newWriting.date}
                onChange={(e) => setNewWriting({...newWriting, date: e.target.value})}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl dark:bg-gray-700 text-white"
              />
              <input
                type="url"
                placeholder="يازما ئۇلىنىشى (مەسلەن: /html/Bayes_Theorem.html)"
                value={newWriting.link}
                onChange={(e) => setNewWriting({...newWriting, link: e.target.value})}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl dark:bg-gray-700 text-white"
              />
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleAddWriting}
                className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg font-bold hover:from-purple-600 hover:to-indigo-700"
              >
                قوشۇش
              </button>
              <button
                onClick={() => setShowWritingModal(false)}
                className="flex-1 py-3 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white rounded-lg"
              >
                بىكار قىلىش
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 📄 يازما ھۆججىتى مودالى */}
      {currentWriting && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={closeWritingDetail}
              className="absolute top-4 right-4 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-900 z-10"
            >
              ✕
            </button>
            {currentWriting.image && (
              <img
                src={currentWriting.image}
                alt={currentWriting.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
            )}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {currentWriting.title}
              </h2>
              <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                {currentWriting.author && <span>يازغۇچى: {currentWriting.author}</span>}
                <span>چىقىرىلغان ۋاقىت: {currentWriting.date}</span>
              </div>
              {currentWriting.summary && (
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {currentWriting.summary}
                </p>
              )}
              <div className="mt-6">
                <iframe
                  src={currentWriting.link}
                  title={currentWriting.title}
                  className="w-full h-[600px] border border-gray-300 dark:border-gray-600 rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 📁 يۇكلىنىپ بولغان ھۆججەتلەر */}
      <div className="mt-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3 bg-gradient-to-r from-cyan-100 to-amber-100 dark:from-gray-800 dark:to-amber-900/20 p-4 rounded-2xl shadow-md">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-2 rounded-xl shadow-lg">📂</span>
            يۇكلىنىپ بولغان ھۆججەتلەر
          </h2>
          <div className="flex gap-3">
            <button
              onClick={handleFileUpload}
              className="px-5 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg transform hover:scale-105 flex items-center gap-2"
            >
              <FaUpload className="text-sm" />
              <span>ئاپلاش</span>
            </button>
            <input
              id="fileInput"
              type="file"
              multiple
              onChange={handleUpload}
              className="hidden"
            />
            {/* 🆕 شەرت يوق — ھەممىگە كۆرۈنىدۇ */}
            <button
              onClick={() => setShowWritingModal(true)}
              className="px-5 py-2.5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 shadow-lg transform hover:scale-105 flex items-center gap-2"
            >
              <span>+</span> 
              <span>يەنە بىر يازما قوشۇش</span>
            </button>
          </div>
        </div>

        {showUploadModal && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl w-full max-w-md shadow-2xl transform animate-scaleIn">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">ھۆججەت يۇكلەش</h3>
              <input type="file" multiple onChange={handleUpload} className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl mb-4 dark:bg-gray-700 text-white shadow-md" />
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">ھەر بىر ھۆججەت 10MB دىن كىچىك بولۇشى كېرەك</p>
              <div className="flex justify-end gap-3">
                <button onClick={() => setShowUploadModal(false)} className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white rounded-xl hover:bg-gray-400 transition-all duration-300 shadow-md transform hover:scale-105">بىكار قىلىش</button>
                <button onClick={() => document.querySelector('input[type="file"]').click()} className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-md transform hover:scale-105">
                  {isLoading ? "⏳ يۇكلىنىۋاتىدۇ..." : "📤 يۇكلەش"}
                </button>
              </div>
            </div>
          </div>
        )}

        {filteredFiles.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400 font-uyghur text-xl">📭 ھۆججەت يوق.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {filteredFiles.map(file => (
              <div 
                key={file.id} 
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] border border-gray-200 dark:border-gray-700 cursor-pointer"
                onClick={() => {
                  if (file.isWriting) {
                    viewWriting(file);
                  }
                }}
              >
                <div className="mb-4">
                  {file.isWriting ? (
                    <div className="aspect-video flex flex-col items-center justify-center bg-gradient-to-br from-purple-200 to-indigo-300 dark:from-purple-800 dark:to-indigo-900 rounded-xl text-white shadow-md">
                      <FaBookOpen className="text-4xl mb-2" />
                      <p className="text-xs text-center px-2 truncate w-full text-white">{file.title || file.name}</p>
                    </div>
                  ) : file.type?.startsWith("image/") ? (
                    <img src={file.url} alt={file.name} className="w-full aspect-video object-cover rounded-xl shadow-md" />
                  ) : file.type?.startsWith("video/") ? (
                    <video src={file.url} controls className="w-full aspect-video object-cover rounded-xl shadow-md" />
                  ) : (
                    <div className="aspect-video flex flex-col items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-xl text-gray-600 dark:text-gray-300 shadow-md">
                      <span className="text-4xl mb-2 transform hover:scale-110 transition-transform duration-200">
                        {file.type?.includes("pdf") ? "📄" : file.type?.includes("word") ? "📝" : file.type?.includes("excel") ? "📊" : file.type?.includes("powerpoint") ? "📑" : "📂"}
                      </span>
                      <p className="text-xs text-center px-2 truncate w-full">{file.name}</p>
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white truncate mb-2">
                    {file.isWriting ? file.title : file.name}
                  </p>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <span>{file.isWriting ? "يازما" : formatFileSize(file.size)}</span>
                    <span>{new Date(file.uploadDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    {!file.isWriting && (
                      <a href={file.url} download={file.name} className="flex-1 px-3 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-md transform hover:scale-105 text-center text-sm flex items-center justify-center gap-1">
                        <FaFileDownload className="text-xs" />
                        چۈشۈرۈش
                      </a>
                    )}
                    {isAdmin && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(file.id);
                        }} 
                        className="flex-1 px-3 py-2 bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-lg hover:from-red-600 hover:to-rose-700 transition-all duration-300 shadow-md transform hover:scale-105 text-center text-sm flex items-center justify-center gap-1"
                      >
                        🗑 ئۆچۈرۈش
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {filteredCourses.length === 0 && !isAdmin && (
        <div className="text-center mt-12 text-lg py-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
          <p className="text-gray-500 dark:text-gray-400">😕 كورسلار تېپىلمىدى.</p>
        </div>
      )}
    </div>
  );
}