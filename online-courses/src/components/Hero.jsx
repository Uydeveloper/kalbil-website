import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ✅ Use relative paths instead of PUBLIC_URL
const images = [
  `${process.env.PUBLIC_URL}/images/image01.png`,
  `${process.env.PUBLIC_URL}/images/image02.png`,
  `${process.env.PUBLIC_URL}/images/image03.png`
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showHtmlContent, setShowHtmlContent] = useState(false);
  const [htmlContent, setHtmlContent] = useState("");

  // سلايد شو ئۈچۈن
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // HTML مەزمۇننى ئوقۇش
  const loadHtmlContent = async () => {
    try {
      const response = await fetch(`${process.env.PUBLIC_URL}/2026_car_course.html`);
      if (!response.ok) throw new Error("HTML مەزمۇنىنى تاپالمىدى");
      const text = await response.text();
      setHtmlContent(text);
      setShowHtmlContent(true);
    } catch (err) {
      console.error("HTML مەزمۇن ئوقۇش خاتالىقى:", err);
      alert("⚠️ دەرس مەزمۇنىنى يۈكلىيەلمىدى!");
    }
  };

  // قايتىش بوتىنى بىلەن ھېرو قايتىش
  const goBack = () => {
    setShowHtmlContent(false);
    setHtmlContent("");
  };

  // ئەگەر HTML مەزمۇن كۆرۈنۈۋاتقان بولسا، ئۇنى كۆرسەت
  if (showHtmlContent) {
    return (
      <section className="relative min-h-screen bg-white dark:bg-gray-900 p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={goBack}
            className="mb-6 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow flex items-center gap-2"
          >
            ← قايتىش
          </button>
          {/* ⚠️ خاۋەپسىزلىك ئۈچۈن DOMPurify ئىشلىتىش تەۋسىيە قىلىنىدۇ (ئاسانلاش بىلەن ئۇ يەرگە قويۇلمىدى) */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 overflow-auto">
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </div>
        </div>
      </section>
    );
  }

  // ئاسلى ھېرو بەت
  return (
    <section className="relative h-[500px] md:h-[900px] overflow-hidden">
      {/* 🔄 Fade Image Slideshow */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* 🌌 Overlay Content */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg leading-tight">
          Welcome to <span className="text-yellow-400 font-extrabold">KelBil</span> EduCourses
        </h1>
        <p className="text-lg md:text-xl max-w-xl drop-shadow-md">
          Our mission is to provide quality education for everyone.
        </p>

        {/* 🚀 Explore Courses Button */}
        <Link
          to="/enroll"
          className="mt-6 inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold rounded shadow-lg transition duration-300"
        >
          دەرسكە تىزىملىتىش
        </Link>

        {/* 🚗 2026 كىۋانىت ماشىنىسى دەرسى بوتىلى */}
<Link
  to="/courses/quantum-car-2026"
  className="mt-4 inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded shadow-lg transition duration-300"
>
  2026 يىللىق كىۋانىت ماشىنا ئۈگىنىش دەرسى
</Link>
      </div>
    </section>
  );
}