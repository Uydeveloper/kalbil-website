import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, GraduationCap, Cpu } from "lucide-react";

// رەسىم يوللىرى
const images = [
  `${process.env.PUBLIC_URL}/images/image01.png`,
  `${process.env.PUBLIC_URL}/images/image02.png`,
  `${process.env.PUBLIC_URL}/images/image03.png`
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showHtmlContent, setShowHtmlContent] = useState(false);
  const [htmlContent, setHtmlContent] = useState("");
  const [loading, setLoading] = useState(false);

  // سىلىق ئالمىشىدىغان سلايدشۇ ئەپەندى
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // 5 سېكۇنت ئالمىشىش
    return () => clearInterval(interval);
  }, []);

  // HTML دەرس مەزمۇنىنى يۈكلەش فۇنكسىيەسى
  const loadHtmlContent = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await fetch(`${process.env.PUBLIC_URL}/2026_car_course.html`);
      if (!response.ok) throw new Error("HTML مەزمۇنىنى تاپالمىدى");
      const text = await response.text();
      setHtmlContent(text);
      setShowHtmlContent(true);
    } catch (err) {
      console.error("HTML مەزمۇن ئوقۇش خاتالىقى:", err);
      alert("⚠️ دەرس مەزمۇنىنى يۈكلىيەلمىدى!");
    } finally {
      setLoading(false);
    }
  };

  const goBack = () => {
    setShowHtmlContent(false);
    setHtmlContent("");
  };

  // 1-ھالەت: ئەگەر ئىچكى HTML دەرس مەزمۇنى كۆرۈنۈۋاتقان بولسا
  if (showHtmlContent) {
    return (
      <section className="relative min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4 sm:px-6 lg:px-8" dir="rtl">
        <div className="max-w-4xl mx-auto">
          {/* كەينىگە قايتىش كۇنۇپكىسى */}
          <button
            onClick={goBack}
            className="mb-6 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium font-uyghur rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
          >
            {/* ئۇيغۇرچە يۆنىلىشتە كەينىگە قايتىش سىنبەلگىسىنى ئوڭغا قارىتىش ئەۋزەل */}
            <ArrowLeft className="w-5 h-5 transform rotate-180" />
            <span>كەينىگە قايتىش</span>
          </button>
          
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 md:p-10 border border-gray-100 dark:border-gray-800 overflow-auto max-h-[80vh] prosc-container text-right">
            {/* HTML مەزمۇن بۇ يەردە رەتلىك چىقىدۇ */}
            <div 
              dangerouslySetInnerHTML={{ __html: htmlContent }} 
              className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-200 font-uyghur"
            />
          </div>
        </div>
      </section>
    );
  }

  // 2-ھالەت: ئاساسىي كۆركەم Hero بەت كۆرۈنۈشى
  return (
    <section className="relative h-[550px] md:h-[750px] lg:h-[850px] w-full overflow-hidden">
      
      {/* 🔄 رەسىملەرنىڭ سىلىق ئۆتۈش ئۈنۈمى (Fade Effect) */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-center bg-cover transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* 🌌 زامانىۋى گۈزەل Overlay چۈشۈرۈش */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 via-blue-900/60 to-gray-950/80 flex flex-col items-center justify-center text-white text-center px-4 sm:px-6 md:px-12 z-10">
        
        {/* شۇئار ۋە تېكىستلەر */}
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-xl leading-tight">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300 font-black">KelBil</span> EduCourses
          </h1>
          
          <p className="font-uyghur text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto text-gray-200 drop-shadow-md font-medium leading-relaxed" dir="rtl">
            بىلىم بىلەن قانىتىڭىزنى ئېچىڭ. بىز كۆپچىلىككە ئەڭ يۇقىرى سۈپەتلىك، زامانىۋى ۋە كۆركەم بىلىم يۆنىلىشلىرىنى سۇنۇشنى نىشان قىلدۇق.
          </p>
        </div>

        {/* 🚀 كۇنۇپكىلار توپلىمى (ئىنتايىن كۆركەم ۋە قۇلايلىق) */}
        <div className="mt-8 flex flex-col sm:flex-row-reverse items-center justify-center gap-4 w-full px-4" dir="rtl">
          
          {/* 1. دەرسكە تىزىملىتىش كۇنۇپكىسى */}
          <Link
            to="/enroll"
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-blue-950 font-bold font-uyghur text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <GraduationCap className="w-5 h-5" />
            <span>دەرسكە تىزىملىتىش</span>
          </Link>

          {/* 2. 2026 كىۋانت ماشىنىسى دەرسى كۇنۇپكىسى */}
          <button
            onClick={loadHtmlContent}
            disabled={loading}
            className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold font-uyghur text-lg rounded-xl shadow-lg border border-white/20 backdrop-blur-md transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <Cpu className="w-5 h-5 text-green-400" />
            <span>{loading ? "يۈكلىنىۋاتىدۇ..." : "2026 كىۋانت ماشىنا دەرسى"}</span>
          </button>
          
        </div>
      </div>

      {/* ئاستى تەرەپتىكى سىلىق بېزەك سايە */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 dark:from-gray-950 to-transparent z-20" />
    </section>
  );
}