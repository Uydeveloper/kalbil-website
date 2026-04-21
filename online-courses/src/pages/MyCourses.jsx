import { useState, useEffect } from "react";
import courses from "../data/mycourses.json";
import progressData from "../data/progress.json";
import { useParams } from "react-router-dom";
import html2pdf from 'html2pdf.js';

export default function MyCourses() {
  const { studentId } = useParams();
  const [studentProgress, setStudentProgress] = useState({});
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeTab, setActiveTab] = useState("level");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedVideoDetail, setSelectedVideoDetail] = useState(null);
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
    const progress = progressData.find((p) => p.studentId === studentId);
    if (progress) setStudentProgress(progress.courses);
    setIsAdmin(userInfo.role === 'admin' || userInfo.userId === 'admin');
    
    checkAdDisplayCondition();
  }, [studentId]);

  const checkAdDisplayCondition = () => {
    const now = new Date();
    const currentDate = now.getDate();
    const currentMonth = now.getMonth() + 1;
    
    if ((currentDate >= 23 && currentMonth === 12) || 
        (currentDate <= 1 && currentMonth === 1)) {
      setShowAd(true);
    } else {
      setShowAd(false);
    }
  };

  const AdBanner = () => {
    if (!showAd) return null;

    return (
      <div className="fixed bottom-4 right-4 z-50 animate-bounce">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-2xl shadow-2xl max-w-sm border-2 border-yellow-400">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-lg">💳 ئوقۇش پۇلى تولەش ئۇلانمىسى  </h3>
            <button 
              onClick={() => setShowAd(false)}
              className="text-white hover:text-yellow-200 text-lg"
            >
              ✕
            </button>
          </div>
          <p className="text-sm mb-3">
            بۇ ئايلىق ئوقۇش پۇلىنى . تۆۋەندىكى  تۇيغۇزما ئارقىلىق تۆلەڭ:
          </p>
          <div className="bg-black bg-opacity-30 p-3 rounded-lg mb-3">
            <p className="text-center font-mono text-yellow-300 text-sm">
              PayPal: @KawulAbduryim
            </p>
          </div>
          <a 
            href="https://www.paypal.com/paypalme/KawulAbduryim"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-yellow-500 hover:bg-yellow-600 text-center text-black font-bold py-2 px-4 rounded-lg transition-colors"
          >
            🎯 ھازىر تۆلەڭ
          </a>
          <p className="text-xs text-yellow-200 mt-2 text-center">
            ⏰   ھەر ئاينىڭ 23-كۈنىدىن 1-كۈنىگىچە
          </p>
        </div>
      </div>
    );
  };

  const subjects = [
    { id: "stat101", name: "سىتاستىكا", icon: "📊", color: "blue" },
    { id: "stat102", name: "پايسان", icon: "💻", color: "green" },
    { id: "stat103", name: "ماشىنا ئۆگىنىش", icon: "🤖", color: "purple" },
    { id: "stat104", name: "نىرۋاتورى ئۆگىنىش", icon: "🧠", color: "red" },
    { id: "stat105", name: "تېنسورفىلوۋ ئۆگىنىش", icon: "🧠", color: "red" },
    { id: "stat106", name: "كىۋانىت فىزىكىسى", icon: "⚛️", color: "orange" },
    { id: "stat107", name: "كىۋانىت مىخانىكىسى", icon: "🔬", color: "pink" },
    { id: "stat108", name: "كىۋانىت ماشىنا ئۆگىنىش", icon: "🌌", color: "indigo" },
    { id: "stat109", name: "  my Info", icon: "🌌", color: "indigo" }
  ];

  const getVideoNotesFile = (courseId, videoIndex, videoTitle) => {
    const courseMap = {
      "stat101": "statistics",
      "stat102": "python",
      "stat103": "machine-learning",
      "stat104": "neural-network",
      "stat105": "tensorflow",
      "stat106": "quantum-physics",
      "stat107": "quantum-mechanics",
      "stat108": "quantum-machine-learning"
    };
    const coursePrefix = courseMap[courseId] || "course";
    const safeTitle = videoTitle.replace(/[^a-zA-Z0-9-]/g, '-').toLowerCase();
    return `${coursePrefix}-video${videoIndex + 1}-${safeTitle}.html`;
  };

  const subjectContents = {
    "stat101": [
      { title: "سىتاستىكا 1-باب - ئاساسىي ئۇچۇرلار", file: "بايانلىق سىتاستىكا • Descriptive Statistics.html" },
      { title: "سىتاستىكا 2-باب - ئامالىي مەسىلىلەر", file: "html/ئېھتىمال تەقسىمات مەشىقى.html" },
      { title: "سىتاستىكا 3-باب - ھادىسە دىگەن نىمە", file: "statistics-chapter3.html" },
      { title: "سىتاستىكا 4-باب - قايتىش سىزقى", file: "" },
      { title: "سىتاستىكا 5-باب - ئېھتىماللىق", file: "html/Probability Theory.html." },
      { title: "سىتاستىكا 6-باب - ئېھتىماللىق", file: "html/ئېھتىماللىق ئۆزگەرگۈچى ۋە ئېھتىماللىق تارقىلىشى.html" },
      { title: "سىتاستىكا 7-باب - Variance (ۋارىيانس), Standard Deviation (ئۆلچەملىك ئېغىش), Correlation", file: "html/Variance · Standard Deviation · Correlation · Regression.html" },
      { title: "سىتاستىكا 8-باب - بايىس تېئورىيسى", file: "html/Bayes' Theorem.html" },
      { title: "سىتاستىكا 9-باب - بايسى مەشىقلىرى", file: "html/بايس نەزەرىيىسى.html" },
      { title: "سىتاستىكا 10-باب -بايىس فورمىلا ئۈگىنىش ", file: "html/بېيز نەزەرىيىسى فورمۇلا سىستېمىسى.html" },
      { title: "سىتاستىكا 11-باب -بايس فورمىلا ئۈگىنىش ", file: "html/ئارلىق باھالاش  Interval Estimation.html" },
      { title: "سىتاستىكا 12-باب - توپلام  Interval Estimation", file: "html/Population and Sample.html" },
      { title: "سىتاستىكا 13-باب -ئارلىق باھالاش  Interval Estimation", file: "html/ئېكسىتىرىپ قويۇلغان قىممەت.html" },
      { title: "سىتاستىكا 14-باب -لوگىكىلىق  چىكىنىش تەھلىلى. ", file: "html/لوجىستىك رېگرېسسىيە تەھلىلى.html" },
      { title: "سىتاستىكا 15-باب -  ئاددى سىزقلىق چىكىنىش تەھلىللى ", file: "html/ئاددىي رېگرېسسىيە تەھلىلى-ھىسابلاش.html" },
      { title: "سىتاستىكا 16-باب - AI · ماشىنا ئوقۇشنىڭ ماتېماتىكىسى ئۈگىنىش ", file: "html/Machine Learning Mathematics.html" },
      { title: "سىتاستىكا 17-باب - AI · ماشىنا ئوقۇشنىڭ ماتېماتىكىسى ئۈگىنىش ", file: "html/Machine Learning Mathematics.html" }
    ],
    "stat102": [
      { "title": "پايسان 1-باب - كودلاش ئاساسى (ئۆزگەرگۈچىلەر، سانلار، if/else)", "file": "پايسان/پايسان باشلانغۇچ.html" },
      { "title": "پايسان 2-باب - مۇھىت ۋە فۇنكسىيە (for/while، فۇنكسىيە، مودۇل)", "file": "پايسان/پايسان ئىلغار تېمىلىرى.html" },
      { "title": "پايسان 3-باب - OOP ۋە فايل بىلەن ئىش", "file": "پايسان/كېلەچەكتە ئۆگىنىش كېرەك بولغان تېمىلار.html" },
      { "title": "پەنداس 1-باب - كىرىش ۋە سانلىق مەلۇمات ئوقۇش", "file": "پايسان/pandas/pandas01.html" },
      { "title": "پەنداس 2-باب - DataFrame ۋە Series", "file": "پايسان/pandas/pandas02.html" },
      { "title": "پەنداس 3-باب - سانلىق مەلۇمات تازىلاش", "file": "پايسان/pandas/pandas03.html" },
      { "title": "پەنداس 4-باب - سانلىق مەلۇماتنى تەھلىل قىلىش", "file": "پايسان/pandas/pandas04.html" },
      { "title": "پەنداس 5-باب - مەلۇمات بىلەن ئامالىي مەشىقلەر", "file": "پايسان/pandas/pandas05.html" },
      { "title": "نامپاى 1-باب - كىرىش ۋە ئاساسىي ماترىتسا", "file": "پايسان/numpay/numpay01.html" },
      { "title": "نامپاى 2-باب - ماتماتىكىلىق ھېسابلاش ۋە مەشىقلەر", "file": "پايسان/numpay/numpay02.html" },
      { "title": "نامپاى 3-باب -  ئۇنىۋېرسال فۇنكسىيە ", "file": "پايسان/numpay/numpay03.html" },
      { "title": "سىبورن/مەتلەپ 1-باب - كىرىش ۋە ئاددىي كۆرۈنمە ياساش", "file": "پايسان/matplot-seaborn.html"},
      { "title": "سىبورن/مەتلەپ 2-باب - ئىلغار كۆرۈنمە ۋە گرافىك مەشىقلەر", "file": "پايسان/Matplotlib.html" },
      { "title": "گىت ۋە گىتخاب 1-باب -  ئاساسى بۇيرۇقلار(  init,add,merge/log,status,branch)", "file": "پايسان/GitGitHub.html" },

    ],
    "stat103": [
      { "title": "ماشىنا ئۆگىنىش 1-باب - ئاساسىي ئۇچۇرلار", "file": "machineLearning/ماشىنا ئۈگنىش.html " },
      { "title": "ماشىنا ئۆگىنىش 2-باب - Lineer Regression", "file": "machineLearning/Linear Regression.html" },
      { "title": "ماشىنا ئۆگىنىش 3-باب - Logistic Regression", "file": "machineLearning/Logistic Regression.html" },
      { "title": "ماشىنا ئۆگىنىش 4-باب - Decision Tree", "file": "machineLearning/Decision Tree.html" },
      { "title": "ماشىنا ئۆگىنىش 5-باب - Random Forest", "file": "machineLearning/Random Forest.html" },
      { "title": "ماشىنا ئۆگىنىش 6-باب - SVM", "file": "machineLearning/Support Vector Machine (SVM).html" },
      { "title": "ماشىنا ئۆگىنىش 7-باب - KNN", "file": "machineLearning/KNN.html" },
      { "title": "ماشىنا ئۆگىنىش 8-باب - Clustering (K-Means)", "file": "machineLearning/Clustering.html" }
    ],
    "stat104": [
      { "title": "نېرۋاتور 1-باب - ئاساسىي ئۇچۇرلار", "file": "neuralnetwork/Neural Network.html" },
      { "title": "نېرۋاتور 2-باب - Perceptron", "file": "neuralnetwork/Perceptron.html" },
      { "title": "نېرۋاتور 3-باب - Activation Functions", "file": "neuralnetwork/Activation Functions.html" },
      { "title": "نېرۋاتور 4-باب - CNN (Convolutional Neural Network)", "file": "neuralnetwork/Convolutional Neural.html" },
      { "title": "نېرۋاتور 5-باب - RNN (Recurrent Neural Network)", "file": "neuralnetwork/Recurrent Neural Network.html" },
      { "title": "نېرۋاتور 6-باب - LSTM/GRU", "file": "neuralnetwork/LSTM.html" },
      { "title": "نېرۋاتور 7-باب - Transformer & Attention", "file": "neuralnetwork/Transformer.html" }
    ],
    
    "stat105": [
      { "title": "تېنسور 1-باب - ئاساسىي ئۇچۇرلار", "file": "پايسان/تېنسور.html" },
    ],
    "stat106": [
      { "title": "كىۋانىت فىزىكىسى 1-باب - كىرىش", "file": "quantum/Quantum1.html" },
      { "title": "كىۋانىت فىزىكىسى 2-باب - فوتون ۋە قۇۋۋەت", "file": "quantum/Quantum2.html" },
      { "title": "كىۋانىت فىزىكىسى 3-باب - Superposition", "file": "quantum/Quantum3.html" },
      { "title": "كىۋانىت فىزىكىسى 4-باب - Entanglement", "file": "quantum/Quantum4.html" },
      { "title": "كىۋانىت فىزىكىسى 5-باب - Heisenberg Uncertainty", "file": "quantum/Quantum5.html" },
      { "title": "كىۋانىت فىزىكىسى 6-باب - كۋانتۇم زەرەتچلەر", "file": "quantum/Quantum6.html" }
    ],
    "stat107": [
      { "title": "كىۋانىت مىخانىكىسى 1-باب - كىرىش", "file": "html/quantum-mechanics-intro.html" },
      { "title": "كىۋانىت مىخانىكىسى 2-باب - Schrödinger Equation", "file": "html/quantum-mechanics-schrodinger.html" },
      { "title": "كىۋانىت مىخانىكىسى 3-باب - Quantum States", "file": "html/quantum-mechanics-states.html" },
      { "title": "كىۋانىت مىخانىكىسى 4-باب - Quantum Operators", "file": "html/quantum-mechanics-operators.html" },
      { "title": "كىۋانىت مىخانىكىسى 5-باب - Measurement", "file": "html/quantum-mechanics-measurement.html" }
    ],
    "stat108": [
      { "title": "كىۋانىت ماشىنا ئۆگىنىش 1-باب - كىرىش", "file": "quantummachinelearning/Qubit.html" },
      { "title": "كىۋانىت ماشىنا ئۆگىنىش 2-باب - Quantum Circuits", "file": "quantummachinelearning/QuantumGates.html" },
      { "title": "كىۋانىت ماشىنا ئۆگىنىش 3-باب - Qubit ۋە Gate", "file": "quantummachinelearning/QuantumCircuits.html" },
      { "title": "كىۋانىت ماشىنا ئۆگىنىش 4-باب - ئامالىي مەسىلىلەر", "file": "quantummachinelearning/VariationalAlgorithms.html" },
      { "title": "كىۋانىت ماشىنا ئۆگىنىش 5-باب - Variational Algorithms", "file": "quantummachinelearning/QuantumNeuralNetworks.html" },
      { "title": "كىۋانىت ماشىنا ئۆگىنىش 6-باب - Quantum Neural Networks", "file": "quantummachinelearning/QML + Classical ML.html" },
      { "title": "كىۋانىت ماشىنا ئۆگىنىش 7-باب - QML + Classical ML", "file": "quantummachinelearning/QuantumSamples.html" },
    ],
    "stat109": [
      { "title": "ئاساسىي ئۇچۇرلار", "file": "kalbil.html" },
      { "title": " گۇۋاھنامە  Certification ", "file": "گۇۋاھنامە.html" },
      { "title": "ئاساسىي ئۇچۇرلار", "file": "گۇۋاھنامە2.html" },
      { "title": " گۇۋاھنامە  Certification ", "file": "گۇۋاھنامە1.html" },
      { "title": " گۇۋاھنامە  Certification ", "file": "گۇۋاھنامە ئۇيغۇرچە.html" },

    
    ]
  };

  const handleCourseClick = (courseId) => {
    setSelectedCourse((prev) =>
      prev && prev.id === courseId ? null : courses.find((c) => c.id === courseId)
    );
  };

  const getVideoId = (url) => {
    const match = url.match(/v=([^&]+)/);
    return match ? match[1] : null;
  };

  const handleSubjectSelect = (subjectId) => {
    setSelectedSubject((prev) => (prev === subjectId ? null : subjectId));
  };

  const toggleSection = (key) => {
    setExpandedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const openHtmlFile = (filename) => {
    const url = `${process.env.PUBLIC_URL}/${filename}`;
    window.open(url, "_blank", "width=1200,height=800,scrollbars=yes");
    const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
    if (userInfo.userId) {
      const viewedPages = JSON.parse(localStorage.getItem('viewedPages') || '[]');
      if (!viewedPages.includes(filename)) {
        viewedPages.push(filename);
        localStorage.setItem('viewedPages', JSON.stringify(viewedPages));
      }
    }
  };

  const downloadHtmlAsPdf = async (filename, title) => {
    try {
      const response = await fetch(`${process.env.PUBLIC_URL}/${filename}`);
      const htmlContent = await response.text();
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = htmlContent;
      const options = {
        margin: 10,
        filename: `${title || filename.replace('.html', '')}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };
      html2pdf().from(tempDiv).set(options).save();
      const downloadHistory = JSON.parse(localStorage.getItem('downloadHistory') || '[]');
      downloadHistory.push({
        filename: filename,
        title: title || filename,
        date: new Date().toISOString(),
        type: 'pdf'
      });
      localStorage.setItem('downloadHistory', JSON.stringify(downloadHistory));
    } catch (error) {
      console.error('PDF چۈشۈرۈشتە خاتالىق:', error);
      alert('PDF چۈشۈرۈشتە خاتالىق يۈز بەردى. تور باغلىنىشىڭىزنى تەكشۈرۈڭ.');
    }
  };

  const openVideoDetailPage = (video, course, videoProgress, videoIndex) => {
    const notesFile = getVideoNotesFile(course.id, videoIndex, video.title);
    setSelectedVideoDetail({
      video: {
        ...video,
        notesFile: notesFile,
        example1: video.example1 || `${video.title} - مىسال 1`,
        example2: video.example2 || `${video.title} - مىسال 2`,
        example3: video.example3 || `${video.title} - مىسال 3`
      },
      course,
      progress: videoProgress
    });
  };

  const closeVideoDetailPage = () => {
    setSelectedVideoDetail(null);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "level":
        return (
          <div className="bg-amber-50 dark:bg-gray-800 p-4 rounded-lg mt-4 border-l-4 border-amber-500">
            <h3 className="text-lg font-bold text-amber-700 dark:text-amber-300">دەرس سەۋىيىلىرى</h3>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
              <li>سىتاستىكا (باشلانغۇچ ۋە ئوتتۇرا)</li>
              <li>پايسان پروگراممىلاش (ئاساسىي)</li>
              <li>ماشىنا ئۆگىنىش (ئوتتۇرا)</li>
              <li>نىرۋاتورى ئۆگىنىش (ئىلگىرىلەنگەن)</li>
              <li>كىۋانىت فىزىكىسى (ئىختىساسلاشقان)</li>
            </ul>
          </div>
        );
      case "time":
        return <WorldClock />;
      case "teacher":
        return (
          <div className="bg-purple-50 dark:bg-gray-800 p-4 rounded-lg mt-4 border-l-4 border-purple-500">
            <h3 className="text-lg font-bold text-purple-700 dark:text-purple-300">مۇئەللىملەر</h3>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
              <li>قاۋۇلجان ئابدۇرھىم — سىتاستىكا ۋە پايسان</li>
              <li>زىيابەگ — گىت ۋە گىتخاب</li>
              <li>قاۋۇلجان ئابدۇرھىم — نىرۋاتورى ئۆگىنىش</li>
              <li>قاۋۇلجان ئابدۇرھىم — ماشىنا ئۆگىنىش</li>
              <li>قاۋۇلجان ئابدۇرھىم — كىۋانىت فىزىكىسى</li>
              <li>قاۋۇلجان ئابدۇرھىم — كىۋانىت مىخانىكىسى</li>
              <li>قاۋۇلجان ئابدۇرھىم — كىۋانىت ماشىنا ئۆگىنىش</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  const VideoDetailPage = () => {
    if (!selectedVideoDetail) return null;
    const { video, course, progress } = selectedVideoDetail;
    const videoId = getVideoId(video.url);
    const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : "";

    const handleOpenNotes = () => {
      const notesFile = video.notesFile || getVideoNotesFile(course.id, 0, video.title);
      openHtmlFile(notesFile);
    };

    const handleDownloadPdf = () => {
      const notesFile = video.notesFile || getVideoNotesFile(course.id, 0, video.title);
      const title = video.title || "دەرس خاتىرىسى";
      downloadHtmlAsPdf(notesFile, title);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                📺 {video.title}
              </h2>
              <button
                onClick={closeVideoDetailPage}
                className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition focus:outline-none focus:ring-2 focus:ring-red-400"
                aria-label="يېپىش"
              >
                ✕
              </button>
            </div>
            
            <div className="mb-6">
              <div className="aspect-video mb-4 rounded-xl overflow-hidden shadow-lg bg-black">
                {embedUrl ? (
                  <iframe
                    src={embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-800">
                    يۈكلىنىۋاتىدۇ...
                  </div>
                )}
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  كۆرسەتۈش: {course.title}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  progress === 0 ? "bg-red-100 text-red-800" :
                  progress < 50 ? "bg-yellow-100 text-yellow-800" :
                  progress < 100 ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                }`}>
                  كۆرۈلگەن: {progress}%
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl">
                <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-3">
                  📖 دەرس چۈشەندۈرۈشى
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {video.description || "بۇ ۋىديودا سىز تۆۋەندىكى مەزمۇنلارنى ئۆگىنىسىز..."}
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-xl">
                <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-3">
                  🧪 ئەمەلىي مىساللار
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{video.example1}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{video.example2}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{video.example3}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200 mb-3">
                🔗 دەرس ماتېرىياللىرى
              </h3>
              <div className="space-y-3">
                {video.url && (
                  <a href={video.url} target="_blank" rel="noopener noreferrer" 
                     className="flex items-center px-4 py-2.5 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 rounded-lg hover:bg-red-200 dark:hover:bg-red-800 transition-colors">
                    <span className="mr-2">🎥</span>
                    YouTube دىن كۆرۈش
                  </a>
                )}
                
                <div className="grid grid-cols-2 gap-3">
                  <button onClick={handleOpenNotes}
                     className="flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all shadow focus:outline-none focus:ring-2 focus:ring-amber-400">
                    <span className="mr-2">📖</span>
                    دەرسلەرنى كۆرۈش
                  </button>
                  
                  <button onClick={handleDownloadPdf}
                     className="flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow focus:outline-none focus:ring-2 focus:ring-cyan-400">
                    <span className="mr-2">📄</span>
                    PDF چۈشۈرۈش
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-8xl mx-auto mt-4 p-4 sm:p-6 space-y-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <AdBanner />

      {/* Header with Uyghur-themed logo */}
      <div className="text-center mb-8 relative">
        <div className="flex justify-center mb-4">
          <img src={`${process.env.PUBLIC_URL}/images/image05.png`} alt="KaLBiL لوگوسى" className="w-auto" />
        </div>

        <div className="w-full h-48 sm:h-56 bg-gradient-to-r from-cyan-600 via-amber-500 to-orange-600 rounded-xl shadow-lg flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="relative z-10 text-white text-center p-4 sm:p-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-lg">
              پەن تېخنىكا ئاكادېمىيىسى KeLBiL
            </h1>
            <p className="text-lg md:text-xl font-medium">ئىلم-پەن بىلەن مەدەنىيەتنىڭ بىرلىكى</p>
          </div>
        </div>
        <blockquote className="text-lg sm:text-xl md:text-2xl italic font-medium text-gray-800 dark:text-amber-300 max-w-3xl mx-auto mt-4 px-2">
          ئىلم-پەن — مىللەتنىڭ مەڭگۇلۇڭ كۇچى، تېخنىكا — زاماننىڭ تىلى. ئۇيغۇر بالىلىرى دۇنيانىڭ ئەڭ ياخشى كودىنى يازىدۇ
        </blockquote>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">— ئۇيغۇر كود بايلىقى —</p>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold text-center text-cyan-700 dark:text-amber-400">
        🎓 مېنىڭ دەرسلىرىم
      </h1>

      {isAdmin && (
        <div className="bg-amber-100 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 rounded-lg">
          <div className="flex items-center">
            <div className="text-amber-600">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-amber-800 dark:text-amber-200">باشقۇرغۇچى كۆرۈنۈشى</p>
              <p className="text-sm text-amber-700 dark:text-amber-300">
                ئىشلەتكۈچى سانى: {progressData.length} | 
                ئاخىرقى كىرگەن: {studentId} |
                دەرس سانى: {courses.length} |
                ۋىديو سانى: {courses.reduce((total, course) => total + course.videos.length, 0)}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Subjects */}
      <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 dark:text-amber-300 mb-5">
          📚  دەرسلىك ماتېرىياللىرى
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {subjects.map((subject) => {
            const course = courses.find(c => c.id === subject.id);
            const videoCount = course ? course.videos.length : 0;
            return (
              <div
                key={subject.id}
                onClick={() => handleSubjectSelect(subject.id)}
                className={`cursor-pointer p-4 rounded-xl text-center transition-all duration-300 transform hover:scale-105 group ${
                  selectedSubject === subject.id
                    ? `bg-gradient-to-br from-cyan-500 to-amber-500 text-white shadow-xl`
                    : `bg-gray-100 hover:bg-amber-50 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white`
                }`}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{subject.icon}</div>
                <div className="font-semibold text-sm md:text-base mb-1">{subject.name}</div>
                <div className="text-xs opacity-75">{videoCount} پارچە</div>
              </div>
            );
          })}
        </div>

        {selectedSubject && subjectContents[selectedSubject] && (
          <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border-t-4 border-cyan-500">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
              <span className="mr-2">📚</span>
              {subjects.find((s) => s.id === selectedSubject)?.name} — مۇندەرىجە
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {subjectContents[selectedSubject].map((item, index) => (
                <div key={index} className="group relative">
                  <div
                    onClick={() => openHtmlFile(item.file)}
                    className="p-3 bg-white dark:bg-gray-600 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border-l-4 border-cyan-500 hover:border-l-8"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-cyan-600 dark:text-cyan-400 mr-2 text-lg group-hover:scale-110 transition">📖</span>
                        <span className="text-gray-800 dark:text-white text-sm font-medium group-hover:text-cyan-600 dark:group-hover:text-cyan-300">
                          {item.title}
                        </span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          downloadHtmlAsPdf(item.file, item.title);
                        }}
                        className="px-2 py-1 bg-amber-500 text-white rounded text-xs hover:bg-amber-600 transition-colors"
                        title="PDF چۈشۈرۈش"
                      >
                        📄
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Courses */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 dark:text-amber-300 mb-10 mt-10 bg-blue-200 dark:bg-blue-900/30 p-4 rounded-xl shadow-md border border-blue-300 dark:border-blue-700">
          📚   ۋىديو دەرسلىكلەر 
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {courses.map((course) => {
            const progress = studentProgress[course.id] || 0;
            const isSelected = selectedCourse?.id === course.id;
            const subject = subjects.find(s => s.id === course.id);
            return (
              <div
                key={course.id}
                onClick={() => handleCourseClick(course.id)}
                className={`cursor-pointer bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 transition-all duration-300 hover:scale-[1.02] ${
                  isSelected ? "ring-4 ring-cyan-500 dark:ring-amber-400 bg-cyan-50 dark:bg-gray-700" : "hover:ring-2 hover:ring-cyan-300"
                }`}
              >  
                <div className="flex items-center mb-2">
                  <span className="text-xl mr-2">{subject?.icon || "📚"}</span>
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{course.title}</h2>
                </div>
                
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {course.description}
                </p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {course.videos.length} ۋىديو
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {progress}% تاماملاندى
                  </span>
                </div>
                <div className="mt-1">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-700 ${
                        progress === 0 ? "bg-red-500" :
                        progress < 50 ? "bg-yellow-500" :
                        progress < 100 ? "bg-cyan-500" : "bg-green-500"
                      }`}
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="mt-2 text-xs text-center font-medium text-cyan-600 dark:text-amber-400">
                  {isSelected ? "👇 يىغىش" : "👆 دەرىسنى ئېچىش"}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Course Content */}
      {selectedCourse && (
        <div className="mt-10 bg-gradient-to-br from-gray-50 to-amber-50 dark:from-gray-800 dark:to-gray-900 p-5 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">
                {subjects.find(s => s.id === selectedCourse.id)?.icon || "🎥"}
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedCourse.title} دەرسى
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {selectedCourse.videos.length} ۋىديو | ھەر بىر ۋىديو ئۈچۈن ئايرىم HTML ھۆججەت
                </p>
              </div>
            </div>
            <button
              onClick={() => setSelectedCourse(null)}
              className="px-4 py-2 bg-gradient-to-r from-red-500 to-amber-600 text-white rounded-lg hover:from-red-600 hover:to-amber-700 transition-all shadow font-medium focus:ring-2 focus:ring-red-400 focus:outline-none"
              aria-label="دەرسنى يېپىش"
            >
              يېپىش
            </button>
          </div>

          <p className="text-gray-800 dark:text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
            {selectedCourse.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {selectedCourse.videos.map((video, idx) => {
              const videoId = getVideoId(video.url);
              const videoProgress = studentProgress[selectedCourse.id]?.videos?.[videoId] || 0;
              const sectionKey = `${selectedCourse.id}-${idx}`;
              const notesFile = getVideoNotesFile(selectedCourse.id, idx, video.title);

              let progressBarClass = "bg-gray-300 dark:bg-gray-700";
              let progressFillClass = "bg-gray-400";
              if (videoProgress === 100) {
                progressBarClass = "bg-green-200 dark:bg-green-900/30";
                progressFillClass = "bg-gradient-to-r from-green-500 to-emerald-600";
              } else if (videoProgress > 0) {
                progressBarClass = "bg-cyan-200 dark:bg-cyan-900/30";
                progressFillClass = "bg-gradient-to-r from-cyan-500 to-amber-500";
              }

              return (
                <div
                  key={idx}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 flex flex-col"
                  role="article"
                  aria-labelledby={`video-title-${idx}`}
                >
                  <div className="relative bg-gray-900 aspect-video">
                    {videoId ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-400">
                        🎥 يۈكلىنىۋاتىدۇ...
                      </div>
                    )}
                    <div className="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold text-white bg-black bg-opacity-60 backdrop-blur-sm">
                      {idx + 1}
                    </div>
                  </div>

                  <div className="p-4 flex flex-col flex-grow">
                    <h3
                      id={`video-title-${idx}`}
                      className="font-bold text-base sm:text-lg mb-2 text-gray-900 dark:text-white line-clamp-2"
                    >
                      {idx + 1}. {video.title}
                    </h3>

                    <div className="mt-2 mb-3">
                      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                        <span>كۆرۈلگەن</span>
                        <span>{videoProgress}%</span>
                      </div>
                      <div className={`w-full h-2 rounded-full ${progressBarClass}`}>
                        <div
                          className={`h-full rounded-full transition-all duration-700 ${progressFillClass}`}
                          style={{ width: `${videoProgress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="mt-auto space-y-2">
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => openVideoDetailPage(video, selectedCourse, videoProgress, idx)}
                          className="px-2.5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs sm:text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        >
                          📖 تەپسىلى
                        </button>
                        <button
                          onClick={() => downloadHtmlAsPdf(notesFile, video.title)}
                          className="px-2.5 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs sm:text-sm font-medium rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all shadow focus:outline-none focus:ring-2 focus:ring-amber-400"
                        >
                          📄 PDF
                        </button>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSection(sectionKey);
                        }}
                        className="w-full px-2.5 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
                      >
                        {expandedSections[sectionKey] ? "👇 يىغىش" : "👆 قىسقىچە"}
                      </button>
                    </div>
                  </div>

                  {expandedSections[sectionKey] && (
                    <div className="px-4 pb-4 mt-2 pt-2 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                      <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {video.description || "بۇ ۋىديو ئۈچۈن چۈشەندۈرۈش يوق."}
                      </p>
                      <div className="mt-2 flex justify-between items-center">
                        <span className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {notesFile}
                        </span>
                        <button
                          onClick={() => openHtmlFile(notesFile)}
                          className="text-xs bg-cyan-500 hover:bg-cyan-600 text-white px-2 py-1 rounded focus:outline-none focus:ring-1 focus:ring-cyan-400"
                        >
                          كۆرۈش
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="mt-12">
        <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 dark:text-amber-300 mb-5">ئۇچۇرلار</h3>
        <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-6">
          {[
            { key: "level", label: "دەرس ئۇچۇرى" },
            { key: "time", label: "ۋاقىت ئۇچۇرى" },
            { key: "teacher", label: "مۇئەللىم ئۇچۇرى" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2.5 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                activeTab === tab.key
                  ? "bg-gradient-to-r from-cyan-500 to-amber-500 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {renderTabContent()}
      </div>

      <VideoDetailPage />

      <div className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-10 pt-6 border-t border-gray-200 dark:border-gray-700 px-2">
        <p>"بىلىم ئالغان مىللەتلەر تارىخ يازىدۇ، بىلىم بەرگەن مۇئەللىملەر كەلگۈسى يارىتىدۇ."</p>
        <p className="mt-1">— ئۇيغۇر ئەقىل-پاراسەت سۆزى —</p>
      </div>
    </div>
  );
}

// World Clock Component
function WorldClock() {
  const timeZones = [
    { city: "ئۇرۇمچى (Urumqi)", offset: 6, icon: "🏔️" },
    { city: "ئىستانبول (Istanbul)", offset: 3, icon: "🕌" },
    { city: "سەمەرقەند (Samarkand)", offset: 5, icon: "🕌" },
    { city: "ئالماتا (Almaty)", offset: 6, icon: "🏔️" },
    { city: "دۇبەي (Dubai)", offset: 4, icon: "🏙️" },
    { city: "بىجىن (Beijing)", offset: 8, icon: "🏯" },
    { city: "لوندون (London)", offset: 0, icon: "🇬🇧" },
    { city: "نيويورك (New York)", offset: -5, icon: "🗽" },
    { city: "توكيو (Tokyo)", offset: 9, icon: "🗼" },
    { city: "پارىج (Paris)", offset: 1, icon: "🗼" },
  ];

  const getCurrentTime = (offset) => {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const localTime = new Date(utc + 3600000 * offset);
    return localTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const [times, setTimes] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTimes = {};
      timeZones.forEach(({ city, offset }) => {
        updatedTimes[city] = getCurrentTime(offset);
      });
      setTimes(updatedTimes);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-8 p-5 sm:p-6 bg-gradient-to-br from-cyan-50 to-amber-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg border border-cyan-200 dark:border-gray-700 overflow-hidden">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-amber-300 flex items-center gap-2">
          🌐 دۇنيادىكى ئەللەرنىڭ ۋاقىتى
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 text-right">
          دەرس ۋاقىتى: ياپۇنىيە ۋاقىتى (چارشەنبە، جۇمە،شەنبە: 22:00)
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
        <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300 min-w-full">
          <thead className="text-xs uppercase bg-gradient-to-r from-cyan-500 to-amber-500 text-white">
            <tr>
              <th scope="col" className="px-4 py-3 sm:px-6">شەھەر</th>
              <th scope="col" className="px-4 py-3 sm:px-6">ۋاقىت (UTC)</th>
              <th scope="col" className="px-4 py-3 sm:px-6">يەرلىك ۋاقىت</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {timeZones.map(({ city, offset, icon }) => (
              <tr
                key={city}
                className="hover:bg-cyan-50 dark:hover:bg-gray-700/50 transition-colors"
                aria-live="polite"
              >
                <td className="px-4 py-3 sm:px-6 font-medium text-gray-900 dark:text-white flex items-center gap-2">
                  <span aria-hidden="true">{icon}</span>
                  {city}
                </td>
                <td className="px-4 py-3 sm:px-6 text-cyan-600 dark:text-cyan-400 font-mono">
                  UTC{offset >= 0 ? `+${offset}` : offset}
                </td>
                <td className="px-4 py-3 sm:px-6 font-bold text-gray-900 dark:text-white">
                  {times[city] || "— : —"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-5 text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
        <span>ℹ️</span>
        <span>ۋاقىت ھەر سېكۇنت ئۆزگىرىپ تۇرىدۇ. ئۇرۇمچى ۋاقىتى UTC+6.</span>
      </div>
    </div>
  );
}