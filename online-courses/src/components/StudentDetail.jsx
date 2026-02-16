import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function StudentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, isAdmin } = useContext(AuthContext);
  
  const student = location.state?.student;

  // ئىشلەتكۈچى باشقا ئوقۇغۇچىنىڭ تەپسىلاتىنى كۆرۈشكە تىرىشسا
  if (!isAdmin && currentUser && student.id !== currentUser.id) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🚫</div>
          <h2 className="text-2xl font-bold text-red-600 mb-4">ئىجازەت يوق</h2>
          <p className="text-gray-600 mb-6">سىز باشقا ئوقۇغۇچىلارنىڭ تەپسىلاتلىرىنى كۆرەلمەيسىز</p>
          <button
            onClick={() => navigate("/students")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            ئوقۇغۇچىلار تىزىمىغا قايتىش
          </button>
        </div>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😔</div>
          <h2 className="text-2xl font-bold text-gray-700 mb-4">ئوقۇغۇچى تېپىلمىدى</h2>
          <button
            onClick={() => navigate("/students")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            قايتىش
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* باشلىق */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{student.name}</h1>
              <p className="text-gray-600 mt-2">{student.department}</p>
            </div>
            <button
              onClick={() => navigate("/students")}
              className="mt-4 md:mt-0 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              ← قايتىش
            </button>
          </div>
        </div>

        {/* شەخسىي ئۇچۇرلار */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">شەخسىي ئۇچۇرلار</h2>
            <div className="space-y-3">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">ئىسمى:</span>
                <span className="font-semibold">{student.name}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">ئېلخەت:</span>
                <span className="font-semibold">{student.email || "يوق"}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">تېلېفون:</span>
                <span className="font-semibold">{student.phone || "يوق"}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">بۆلۈم:</span>
                <span className="font-semibold">{student.department || "يوق"}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">قوشۇلغان ۋاقىت:</span>
                <span className="font-semibold">{student.joinDate || "يوق"}</span>
              </div>
            </div>
          </div>

          {/* دەرسلەر */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">دەرسلەر</h2>
            {student.courses?.length > 0 ? (
              <div className="space-y-3">
                {student.courses.map((course, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                    <h3 className="font-semibold text-gray-800">{course.title}</h3>
                    <p className="text-sm text-gray-600">ئوقۇتقۇچى: {course.teacher}</p>
                    <p className="text-sm text-gray-600">ۋاقىت: {course.schedule}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">ھازىرچە دەرس يوق</p>
            )}
          </div>
        </div>

        {/* تىزىملىك ئۇچۇرلار */}
        {isAdmin && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">تىزىملىك ئۇچۇرلار (ئادىمىن)</h2>
            <div className="space-y-3">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">ئوقۇغۇچى ID:</span>
                <span className="font-mono text-sm">{student.id}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">پارول:</span>
                <span className="font-mono text-sm">••••••</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}