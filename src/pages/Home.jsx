import Hero from "../components/Hero";
import CourseList from "../components/CourseList";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext); // ✅ Get current user

  return (
    <>
      <Hero />
      <CourseList />

      {/* ✅ Video Background Section with Gradient & Animation */}
      <div className="relative h-[500px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 mb-10 object-cover z-0"
        >
          <source src="/videos/QML.mp4" type="video/mp4" />
        </video>

        

        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-900 opacity-70 z-10"></div>

        <div className="relative z-20 flex flex-col justify-center h-full text-white text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-2">📋 تىزىملىتىش بۆلىكى</h2>

          <div className="y-0 m-0">
            <button
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
              onClick={() => navigate('/register')}
            >
              تىزىملىتىڭ
            </button>

            {/* ✅ Only show if user is admin */}
            {user?.role === "admin" && (
              <button
                className="bg-blue-600 text-white px-6 py-3 m-2 rounded hover:bg-blue-700 transition"
                onClick={() => navigate('/view-registration')}
              >
                تىزىملىتىلگەن ئۇچۇرنى كۆرۈش
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}