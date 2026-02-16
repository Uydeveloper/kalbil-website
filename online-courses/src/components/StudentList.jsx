import StudentCard from "./StudentCard";
import studentsData from "../data/students.json";
import { useState, useEffect, useContext } from "react";
import AddStudentForm from "./AddStudentForm";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const { currentUser, isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();

  // مەلۇماتلارنى يۈكلەش
  useEffect(() => {
    try {
      const savedStudents = localStorage.getItem("students");
      if (savedStudents) {
        setStudents(JSON.parse(savedStudents));
      } else {
        setStudents(studentsData);
        localStorage.setItem("students", JSON.stringify(studentsData));
      }
    } catch (err) {
      console.error("Error loading students:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // مەلۇماتلارنى ساقلاش
  useEffect(() => {
    if (students.length > 0) {
      localStorage.setItem("students", JSON.stringify(students));
    }
  }, [students]);

  // ئىزدەش فۇنكسىيىسى - پەقەت ئادىمنىڭ كۆرۈشى ئۈچۈن
  const filtered = students.filter((s) => {
    if (!isAdmin && currentUser) {
      // ئادەتتىكى ئوقۇغۇچى پەقەت ئۆزىنى كۆرەلەيدۇ
      return s.id === currentUser.id;
    }
    
    // ئادىمىن ھەممىنى كۆرەلەيدۇ
    const searchString = `${s.name} ${s.courses?.[0]?.title || ""} ${s.courses?.[0]?.teacher || ""} ${s.department || ""}`.toLowerCase();
    return searchString.includes(searchTerm.toLowerCase());
  });

  // يېڭى ئوقۇغۇچى قوشۇش
  const handleAddStudent = (newStudent) => {
    const studentWithId = {
      ...newStudent,
      id: Date.now(),
      joinDate: new Date().toISOString().split('T')[0],
      password: "123456" // سۈكۈتتىكى پارول
    };
    
    setStudents(prev => [...prev, studentWithId]);
    setShowForm(false);
    alert(`«${newStudent.name}» مۇۋەپپەقىيەتلىك قوشۇلدى!`);
  };

  // ئوقۇغۇچىنى ئۆچۈرۈش
  const handleDeleteStudent = (id, name) => {
    if (window.confirm(`«${name}» نى رەسەن ئۆچۈرمەكچىمۇ؟`)) {
      setStudents(prev => prev.filter(student => student.id !== id));
      alert(`«${name}» مۇۋەپپەقىيەتلىك ئۆچۈرۈلدى!`);
    }
  };

  // ئوقۇغۇچى تەپسىلاتىغا يۆتكەش
  const handleViewDetails = (student) => {
    navigate(`/student/${student.id}`, { state: { student } });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto"></div>
          <p className="mt-4 text-blue-900">مەلۇماتلار يۈكلىنىۋاتىدۇ...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      {/* باش تېما */}
      <div className="relative bg-gradient-to-r from-blue-900 to-purple-800 text-white py-16 px-6 md:px-20 text-center overflow-hidden">
        <img
          src="/images/image05.png"
          alt="KalBil Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            بىلىم بىلەن كۈچلۈك بول — KelBiL
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            «بىلىم — قەلبنىڭ نۇرى، ئەقىلنىڭ قۇرى. ئۆگىنىشتىن توختىما، تىرىشچانلىق بىلەن ئۆزگىرىشنى باشلا.»
          </p>
        </div>
      </div>

      {/* ئىستاتىستىكا */}
      <div className="max-w-6xl mx-auto -mt-8 px-6">
        <div className="bg-white rounded-lg shadow-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-900">{students.length}</div>
            <div className="text-gray-600">جەمئىي ئوقۇغۇچى</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-900">{filtered.length}</div>
            <div className="text-gray-600">
              {isAdmin ? "كۆرسىتىلىۋاتقان" : "سىزنىڭ ھېساباتىڭىز"}
            </div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-900">
              {students.filter(s => s.courses && s.courses.length > 0).length}
            </div>
            <div className="text-gray-600">دەرسكە قاتناشقان</div>
          </div>
        </div>
      </div>

      {/* ئوقۇغۇچىلار تىزىمى */}
      <div className="max-w-7xl mx-auto p-6 md:p-8">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold text-blue-900">
                {isAdmin ? "تىزىملاتقان ئوقۇغۇچىلار" : "مېنىڭ ھېساباتىم"}
              </h2>
              <p className="text-gray-600 mt-2">
                {isAdmin 
                  ? "بارلىق تىزىملاتقان ئوقۇغۇچىلارنىڭ تەپسىلاتلىرى" 
                  : "شەخسىي ئۇچۇرلىرىڭىز ۋە دەرسلىرىڭىز"
                }
              </p>
            </div>
            
            {currentUser && !isAdmin && (
              <div className="mt-4 md:mt-0 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 font-semibold">خۇش كەلدىڭىز! 👋</p>
                <p className="text-blue-600">{currentUser.name}</p>
              </div>
            )}
          </div>

          {/* ئىزدەش (پەقەت ئادىمىن ئۈچۈن) */}
          {isAdmin && (
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="ئىسمى، دەرس، ئوقۇتقۇچى ياكى بۆلۈم بويىچە ئىزدەڭ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 pr-12 border border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-lg"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </span>
            </div>
          )}

          {/* ئىشلەتكۈچى ھەرىكەت بوتۇنلىرى */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            {isAdmin && (
              <button
                onClick={() => setShowForm(true)}
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-200 font-semibold"
              >
                <span>➕</span>
                يېڭى ئوقۇغۇچى قوشۇش
              </button>
            )}

            <button
              onClick={() => navigate("/join-class")}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-200 font-semibold"
            >
              <span>🎓</span>
              Live دەرسكە قاتنىشىش
            </button>

            {isAdmin && (
              <button
                onClick={() => setSearchTerm("")}
                className="flex items-center justify-center gap-2 bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-200 font-semibold"
              >
                <span>🔄</span>
                تازىلاش
              </button>
            )}
          </div>

          {/* قوشۇش فورمىسى */}
          {showForm && (
            <div className="mb-8 animate-fade-in">
              <AddStudentForm 
                onAdd={handleAddStudent} 
                onCancel={() => setShowForm(false)} 
              />
            </div>
          )}

          {/* ئوقۇغۇچىلار كارتا تورى */}
          {filtered.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">😔</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {isAdmin ? "ئوقۇغۇچى تېپىلمىدى" : "ھېساباتىڭىز تېپىلمىدى"}
              </h3>
              <p className="text-gray-500 mb-6">
                {isAdmin 
                  ? "ئىزدەش سۆزىتىنى ئۆزگەرتۈپ ياكى يېڭى ئوقۇغۇچى قوشۇپ سىناپ بېقىڭ"
                  : "ئادىمىنگە مۇراجىئەت قىلىڭ ياكى قايتا تىزىملاتىڭىز"
                }
              </p>
              {isAdmin && (
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
                >
                  بىرىنچى ئوقۇغۇچىنى قوشۇڭ
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((student) => (
                <StudentCard 
                  key={student.id} 
                  student={student} 
                  onDelete={isAdmin ? handleDeleteStudent : null}
                  onViewDetails={handleViewDetails}
                  showActions={isAdmin}
                  isCurrentUser={currentUser && student.id === currentUser.id}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}