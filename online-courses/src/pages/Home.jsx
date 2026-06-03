import Hero from "../components/Hero";
import CourseList from "../components/CourseList";
import { useNavigate } from 'react-router-dom';
import { useUser } from "../context/UserContext"; // 🌟 يېڭى سىپتا چاقىرىش ئۇسۇلى
import { ClipboardCheck, ShieldAlert } from "lucide-react"; // كۆركەم سىنبەلگىلەر ئۈچۈن

export default function Home() {
  const navigate = useNavigate();
  const { user } = useUser(); // 🌟 كۇنتېكىستتىن ئابونت ئۇچۇرىنى بىخەتەر ئوقۇش

  return (
    <>
      {/* 1. قارشى ئېلىش زەربىدار بەت رايونى */}
      <Hero />
      
      {/* 2. دەرسلەر تىزىملىكى رايونى */}
      <CourseList />

      {/* 3. 🌟 ھەرىكەتچان سىن ئارقا كۆرۈنۈشلۈك تىزىملىتىش رايونى */}
      <div className="relative h-[450px] md:h-[550px] w-full overflow-hidden flex items-center justify-center">
        
        {/* 🎥 ئارقا كۆرۈنۈش سىنى */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        >
          <source src={`${process.env.PUBLIC_URL}/videos/QML.mp4`} type="video/mp4" />
        </video>

        {/* 🌌 زامانىۋى رەڭلىك قاپارتما سايە (Gradient Overlay) */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-purple-900/70 to-indigo-950/80 backdrop-blur-xs z-10" />

        {/* 📝 مەزمۇن قىسمى */}
        <div className="relative z-20 max-w-2xl mx-auto text-white text-center px-4 md:px-8 space-y-6 animate-fade-in" dir="rtl">
          
          {/* كۆركەم باشلىق چاقىرىق بىلەن */}
          <div className="flex flex-col items-center gap-3">
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-green-400 shadow-lg">
              <ClipboardCheck className="w-8 h-8 animate-pulse" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold font-uyghur tracking-wide drop-shadow-md">
              📋 تىزىملىتىش بۆلىكى
            </h2>
            <p className="font-uyghur text-gray-300 text-sm md:text-base max-w-md mx-auto leading-relaxed">
              تۆۋەندىكى كۇنۇپكىنى چىكىش ئارقىلىق سىستېمىغا تىزىملىتىپ، ئۆزىڭىزگە ماس كېلىدىغان ئالىي دەرىجىلىك دەرسلەرنى باشلىيالايسىز.
            </p>
          </div>

          {/* 🚀 كۇنۇپكىلار سۇپىسى */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            
            {/* 1. ئادەتتىكى تىزىملىتىش كۇنۇپكىسى */}
            <button
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 text-white font-bold font-uyghur text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              onClick={() => navigate('/register')}
            >
              <span>تىزىملىتىڭ</span>
            </button>

            {/* 2. 🛡️ باشقۇرغۇچى (Admin) كۇنۇپكىسى - پەقەت Admin غىلا كۆرۈنىدۇ */}
            {user?.role === "admin" && (
              <button
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold font-uyghur text-lg rounded-xl shadow-lg border border-blue-400/30 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                onClick={() => navigate('/view-registration')}
              >
                <ShieldAlert className="w-5 h-5 text-yellow-400" />
                <span>تىزىملىتىلگەن ئۇچۇرنى كۆرۈش</span>
              </button>
            )}
            
          </div>
        </div>
      </div>
    </>
  );
}