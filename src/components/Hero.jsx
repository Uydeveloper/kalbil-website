import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ✅ Use relative paths instead of PUBLIC_URL
const images = [
  "/images/image01.png",
  "/images/image02.png",
  "/images/image03.png"
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
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
          Welcome to <span className="text-yellow-400 font-extrabold">KalBil</span> EduCourses
        </h1>
        <p className="text-lg md:text-xl max-w-xl drop-shadow-md">
          Our mission is to provide quality education for everyone.
        </p>

        {/* 🚀 Explore Courses Button */}
        <Link
          to="/enroll"
          className="mt-6 inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold rounded shadow-lg transition duration-300"
        >
          دەرسكە تىزملىتىش
        </Link>
      </div>
    </section>
  );
}