import React, { useState, useEffect } from 'react';
import './StudentInfo.css';
import { motion, AnimatePresence } from "framer-motion";
const StudentInfo = () => {
  // State Management
  const [currentUser, setCurrentUser] = useState(null);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [activeTab, setActiveTab] = useState('attendance');
  const [selectedWeek, setSelectedWeek] = useState('all');
  const [homeworkFile, setHomeworkFile] = useState(null);
  const [comment, setComment] = useState('');
  const [students, setStudents] = useState([]);
  const [admins, setAdmins] = useState([
    { id: 1, username: 'admin', password: 'admin123', name: 'باشقۇرغۇچى' }
  ]);

  // Initialize data
// Initialize data - JSON دىن ئوقۇش
useEffect(() => {
  // userscopy.json دىن ئوقۇغۇچى ۋە باشقۇرغۇچىلارنى ئايرىش
  const studentsFromJSON = [
    { id: "student001", name: "musa.ismar", password: "musa.ismar@qml26", role: "student" },
    { id: "student002", name: "hijrankiroran", password: "hijrankiroran@qml26", role: "student" },
    { id: "student003", name: "xukran123", password: "xukran123@qml26", role: "student" },
    { id: "student004", name: "ahirat1314", password: "ahirat1314@qml26", role: "student" },
    { id: "student005", name: "varis.atasoy", password: "varis.atasoy@qml26", role: "student" },
    { id: "student006", name: "husenjanobul", password: "husenjanobul@qml26", role: "student" },
    { id: "student007", name: "asiya11reyim", password: "asiya11reyim@qml26", role: "student" },
    { id: "student008", name: "uyghuromroep", password: "uyghuromroep@qml26", role: "student" },
    { id: "student009", name: "ozluk.nl", password: "ozluk.nl@qml26", role: "student" },
    { id: "student010", name: "mexrep", password: "mexrep@qml26", role: "student" },
    { id: "student011", name: "mhmdfath858", password: "mhmdfath858@qml26", role: "student" },
    { id: "student012", name: "hezirtelii", password: "hezirtelii@qml26", role: "student" },
    { id: "student013", name: "medine20171121", password: "medine20171121@qml26", role: "student" },
    { id: "student014", name: "izdan2746", password: "izdan2746@qml26", role: "student" },
    { id: "student015", name: "Test User", password: "TestUser@qml26", role: "student" }
  ].map(u => ({
    ...u,
    attendance: {},
    homework: [],
    comments: []
  }));

  const adminsFromJSON = [
    { id: "admin001", name: "Uyghurjan", password: "u_kelbil2026", role: "admin" }
  ];

  // localStorage دىن يۈكلەش ياكى يېڭى سانلىق مەلۇمات ساقلاش
  const savedStudents = localStorage.getItem('kelbil_students_v2');
  const savedAdmins = localStorage.getItem('kelbil_admins_v2');
  
  if (savedStudents) {
    try {
      const parsed = JSON.parse(savedStudents);
      setStudents(parsed);
    } catch (e) {
      setStudents(studentsFromJSON);
      localStorage.setItem('kelbil_students_v2', JSON.stringify(studentsFromJSON));
    }
  } else {
    setStudents(studentsFromJSON);
    localStorage.setItem('kelbil_students_v2', JSON.stringify(studentsFromJSON));
  }

  if (savedAdmins) {
    try {
      setAdmins(JSON.parse(savedAdmins));
    } catch (e) {
      setAdmins(adminsFromJSON);
    }
  } else {
    setAdmins(adminsFromJSON);
    localStorage.setItem('kelbil_admins_v2', JSON.stringify(adminsFromJSON));
  }
}, []);

// Login Handler - تۈزىتىلگەن نۇسخا
const handleLogin = (e) => {
  e.preventDefault();
  
  const inputName = loginForm.username.trim();
  const inputPass = loginForm.password.trim();

  // ✅ Admin login: name ۋە password بىلەن تەكشۈرۈش
  const admin = admins.find(a => a.name === inputName && a.password === inputPass);
  if (admin) {
    setCurrentUser({ ...admin, role: 'admin' });
    return;
  }

  // ✅ Student login: name ۋە password بىلەن تەكشۈرۈش (username ئەمەس!)
  const student = students.find(s => s.name === inputName && s.password === inputPass);
  if (student) {
    setCurrentUser({ 
      ...student, 
      role: 'student',
      attendance: student.attendance || {},
      homework: student.homework || [],
      comments: student.comments || []
    });
  } else {
    alert('ئىسىم ياكى مەخپىي نۇمۇر خاتا!');
  }
};

  // Logout Handler
  const handleLogout = () => {
    setCurrentUser(null);
    setLoginForm({ username: '', password: '' });
    setActiveTab('attendance');
  };

  // Toggle Attendance (Admin only)
  const toggleAttendance = (studentId, week, lesson, type) => {
    if (currentUser.role !== 'admin') return;

    setStudents(students.map(student => {
      if (student.id === studentId) {
        const key = `${week}-${lesson}-${type}`;
        const newAttendance = { ...student.attendance };
        newAttendance[key] = !newAttendance[key];
        return { ...student, attendance: newAttendance };
      }
      return student;
    }));
  };

  // Upload Homework (Student)
  const handleHomeworkUpload = (studentId) => {
    if (!homeworkFile) {
      alert('ھۆججەت تاللاڭ!');
      return;
    }

    const newHomework = {
      id: Date.now(),
      fileName: homeworkFile.name,
      uploadDate: new Date().toISOString(),
      status: 'pending',
      file: homeworkFile
    };

    setStudents(students.map(student => {
      if (student.id === studentId) {
        return { ...student, homework: [...student.homework, newHomework] };
      }
      return student;
    }));

    setHomeworkFile(null);
    alert('تاپشۇرۇق مۇۋەپپەقىيەتلىك يۈكلەندى!');
  };

  // Approve/Reject Homework (Admin)
  const handleHomeworkReview = (studentId, homeworkId, approved, commentText = '') => {
    setStudents(students.map(student => {
      if (student.id === studentId) {
        const newHomework = student.homework.map(hw => {
          if (hw.id === homeworkId) {
            return {
              ...hw,
              status: approved ? 'approved' : 'rejected',
              comment: commentText
            };
          }
          return hw;
        });
        return { ...student, homework: newHomework };
      }
      return student;
    }));
  };

  // Add Comment (Admin)
  const handleAddComment = (studentId) => {
    if (!comment.trim()) return;

    const newComment = {
      id: Date.now(),
      text: comment,
      date: new Date().toISOString(),
      author: currentUser.name
    };

    setStudents(students.map(student => {
      if (student.id === studentId) {
        return { ...student, comments: [...student.comments, newComment] };
      }
      return student;
    }));

    setComment('');
  };

  // Delete Student (Admin)
  const deleteStudent = (studentId) => {
    if (confirm('بۇ ئوقۇغۇچىنى ئۆچۈرمەكچىمۇسىز؟')) {
      setStudents(students.filter(s => s.id !== studentId));
    }
  };

  // Add New Student (Admin)
  const addNewStudent = (newStudent) => {
    const student = {
      id: Date.now(),
      ...newStudent,
      attendance: {},
      homework: [],
      comments: []
    };
    setStudents([...students, student]);
  };

  // Export Data (Admin)
  const exportData = () => {
    const dataStr = JSON.stringify(students, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `kelbil_students_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  // Import Data (Admin)
  const importData = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const importedData = JSON.parse(event.target.result);
          setStudents(importedData);
          alert('سانلىق مەلۇمات مۇۋەپپەقىيەتلىك يۈكلەندى!');
        } catch (error) {
          alert('ھۆججەت خاتا!');
        }
      };
      reader.readAsText(file);
    }
  };

  // Generate Weeks (6 months = 24 weeks, 3 lessons per week = 72 lessons)
  const generateWeeks = () => {
    const weeks = [];
    for (let i = 1; i <= 24; i++) {
      weeks.push(i);
    }
    return weeks;
  };

 // Login Form - Professional & Modern Uyghur Design
if (!currentUser) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-950 to-emerald-950 flex items-center justify-center p-4">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top Left Glow */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        {/* Bottom Right Glow */}
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        {/* Center Glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Main Login Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md"
      >
        {/* Glassmorphism Card */}
        <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Top Gradient Bar */}
          <div className="h-2 bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-500"></div>
          
          <div className="p-8 md:p-10">
            
            {/* Logo Section - Centered */}
            <div className="flex flex-col items-center text-center mb-8">
              {/* Logo Container with Glow */}
              <motion.div 
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="relative mb-6"
              >
                {/* Outer Glow Rings */}
                <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full blur-2xl opacity-30"></div>
                
                {/* Logo Circle */}
                <div className="relative w-24 h-24 bg-gradient-to-br from-cyan-400 via-emerald-400 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
                  {/* Inner Icon */}
                  <div className="text-white text-4xl font-black">K</div>
                  
                  {/* Decorative Stars */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan-300 rounded-full animate-pulse delay-300"></div>
                </div>
              </motion.div>

              {/* Brand Name */}
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent mb-2"
              >
                KelBiL
              </motion.h1>

              {/* Uyghur Title */}
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl font-bold text-white/90 mb-2"
                dir="rtl"
              >
                كەلبىل ئۇيغۇر يۇقىرى تېخنىكا
              </motion.h2>

              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-sm text-cyan-300/80 font-medium tracking-wide"
              >
                6 ئايلىق مۇنتىزىم تور دەرسى
              </motion.p>

              {/* Decorative Line */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "120px" }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mt-4"
              ></motion.div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              
              {/* Username Input */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="form-group"
              >
                <label className="block text-sm font-semibold text-cyan-200 mb-2 flex items-center gap-2" dir="rtl">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  ئىسىم (نام):
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={loginForm.username}
                    onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                    placeholder="مەسىلەن: musa.ismar"
                    required
                    dir="ltr"
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-emerald-400 rounded-full opacity-0 focus-within:opacity-100 transition-opacity"></div>
                </div>
              </motion.div>

              {/* Password Input */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="form-group"
              >
                <label className="block text-sm font-semibold text-cyan-200 mb-2 flex items-center gap-2" dir="rtl">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  مەخپىي نۇمۇر:
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    placeholder="••••••••"
                    required
                    dir="ltr"
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full opacity-0 focus-within:opacity-100 transition-opacity"></div>
                </div>
              </motion.div>

              {/* Hint Text */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-white/5 border border-white/10 rounded-lg p-3"
              >
                <p className="text-xs text-white/60 text-center" dir="rtl">
                  <span className="text-cyan-300 font-semibold">مىسال:</span> musa.ismar / musa.ismar@qml26
                </p>
              </motion.div>

              {/* Login Button */}
              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 40px rgba(6,182,212,0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full relative overflow-hidden bg-gradient-to-r from-cyan-500 via-emerald-500 to-cyan-600 hover:from-cyan-400 hover:via-emerald-400 hover:to-cyan-500 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg group"
              >
                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Button Content */}
                <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  سىستېمىغا كىرىش
                </span>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-xl border-2 border-white/30 group-hover:border-white/50 transition-colors"></div>
              </motion.button>

              {/* Security Badge */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center justify-center gap-2 text-xs text-white/40 mt-4"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>بىخەتەر ۋە شىفىرلانغان ئۇلىنىش</span>
              </motion.div>
            </form>
          </div>

          {/* Bottom Decorative Gradient */}
          <div className="h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        {/* Footer Text */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-center text-white/40 text-xs mt-6"
        >
          © 2026 KelBiL Uyghur High Tech • بارلىق ھوقۇقلار قوغدالغان
        </motion.p>
      </motion.div>

      {/* Corner Decorations */}
      <div className="absolute top-4 left-4 w-20 h-20 border-l-2 border-t-2 border-cyan-400/30 rounded-tl-3xl"></div>
      <div className="absolute bottom-4 right-4 w-20 h-20 border-r-2 border-b-2 border-emerald-400/30 rounded-br-3xl"></div>
    </div>
  );
}

  // Admin Dashboard
  if (currentUser.role === 'admin') {
    return (
      <div className="admin-dashboard">
        <header className="dashboard-header">
          <h1>باشقۇرغۇچى سۇپىسى - كەلبىل</h1>
          <div className="header-actions">
            <span>خوش كەپسىز، {currentUser.name}</span>
            <button onClick={handleLogout} className="logout-btn">چىقىش</button>
          </div>
        </header>

        <div className="admin-controls">
          <button onClick={exportData} className="control-btn export">📊 چىقىرىش</button>
          <label className="control-btn import">
            📁 يۈكلەش
            <input type="file" accept=".json" onChange={importData} style={{ display: 'none' }} />
          </label>
          <button onClick={() => setActiveTab('addStudent')} className="control-btn add">➕ يېڭى ئوقۇغۇچى</button>
        </div>

        <div className="tabs">
          <button 
            className={activeTab === 'attendance' ? 'active' : ''} 
            onClick={() => setActiveTab('attendance')}
          >
            قاتنىشىش
          </button>
          <button 
            className={activeTab === 'homework' ? 'active' : ''} 
            onClick={() => setActiveTab('homework')}
          >
            تاپشۇرۇقلار
          </button>
          <button 
            className={activeTab === 'comments' ? 'active' : ''} 
            onClick={() => setActiveTab('comments')}
          >
            ئىنكاسلار
          </button>
        </div>

        <div className="week-selector">
          <select value={selectedWeek} onChange={(e) => setSelectedWeek(e.target.value)}>
            <option value="all">ھەممە ھەپتە</option>
            {generateWeeks().map(week => (
              <option key={week} value={week}>{week}-ھەپتە</option>
            ))}
          </select>
        </div>

        {/* Attendance Tab */}
        {activeTab === 'attendance' && (
          <div className="attendance-table-container">
            <table className="attendance-table">
              <thead>
                <tr>
                  <th>ئىسىم</th>
                  {selectedWeek === 'all' ? (
                    generateWeeks().slice(0, 4).map(week => (
                      <th key={week} colSpan="3">{week}-ھەپتە</th>
                    ))
                  ) : (
                    [1, 2, 3].map(lesson => (
                      <th key={lesson}>{selectedWeek}-ھەپتە {lesson}-دەرس</th>
                    ))
                  )}
                </tr>
                <tr>
                  <th></th>
                  {selectedWeek === 'all' ? (
                    generateWeeks().slice(0, 4).flatMap(() => [
                      <th key={`att1`}>🎯</th>,
                      <th key={`hw1`}>📝</th>,
                      <th key={`att2`}>✅</th>
                    ])
                  ) : (
                    [1, 2, 3].flatMap(() => [
                      <th key={`att`}>🎯</th>,
                      <th key={`hw`}>📝</th>,
                      <th key={`check`}>✅</th>
                    ])
                  )}
                </tr>
              </thead>
              <tbody>
                {students.map(student => (
                  <tr key={student.id}>
                    <td className="student-name">{student.name}</td>
                    {selectedWeek === 'all' ? (
                      generateWeeks().slice(0, 4).flatMap(week => 
                        [1, 2, 3].map(lesson => {
                          const attKey = `${week}-${lesson}-attendance`;
                          const hwKey = `${week}-${lesson}-homework`;
                          return (
                            <React.Fragment key={`${week}-${lesson}`}>
                              <td 
                                className={`clickable ${student.attendance[attKey] ? 'present' : 'absent'}`}
                                onClick={() => toggleAttendance(student.id, week, lesson, 'attendance')}
                              >
                                {student.attendance[attKey] ? '✅' : '❌'}
                              </td>
                              <td 
                                className={`clickable ${student.attendance[hwKey] ? 'present' : 'absent'}`}
                                onClick={() => toggleAttendance(student.id, week, lesson, 'homework')}
                              >
                                {student.attendance[hwKey] ? '✅' : '❌'}
                              </td>
                              <td 
                                className="clickable delete"
                                onClick={() => deleteStudent(student.id)}
                              >
                                🗑️
                              </td>
                            </React.Fragment>
                          );
                        })
                      )
                    ) : (
                      [1, 2, 3].map(lesson => {
                        const attKey = `${selectedWeek}-${lesson}-attendance`;
                        const hwKey = `${selectedWeek}-${lesson}-homework`;
                        return (
                          <React.Fragment key={lesson}>
                            <td 
                              className={`clickable ${student.attendance[attKey] ? 'present' : 'absent'}`}
                              onClick={() => toggleAttendance(student.id, selectedWeek, lesson, 'attendance')}
                            >
                              {student.attendance[attKey] ? '✅' : '❌'}
                            </td>
                            <td 
                              className={`clickable ${student.attendance[hwKey] ? 'present' : 'absent'}`}
                              onClick={() => toggleAttendance(student.id, selectedWeek, lesson, 'homework')}
                            >
                              {student.attendance[hwKey] ? '✅' : '❌'}
                            </td>
                            <td 
                              className="clickable delete"
                              onClick={() => deleteStudent(student.id)}
                            >
                              🗑️
                            </td>
                          </React.Fragment>
                        );
                      })
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Homework Tab */}
        {activeTab === 'homework' && (
          <div className="homework-review">
            {students.map(student => (
              <div key={student.id} className="student-homework">
                <h3>{student.name}</h3>
                {student.homework.length === 0 ? (
                  <p>ھېچقانداق تاپشۇرۇق يوق</p>
                ) : (
                  student.homework.map(hw => (
                    <div key={hw.id} className="homework-item">
                      <div className="homework-info">
                        <span className="file-name">{hw.fileName}</span>
                        <span className="upload-date">{new Date(hw.uploadDate).toLocaleDateString('ug-CN')}</span>
                        <span className={`status ${hw.status}`}>
                          {hw.status === 'pending' ? '⏳ كۈتۈۋاتىدۇ' : 
                           hw.status === 'approved' ? '✅ ماقۇللاندى' : '❌ رەت قىلىندى'}
                        </span>
                      </div>
                      {hw.status === 'pending' && (
                        <div className="review-actions">
                          <input
                            type="text"
                            placeholder="ئىنكاس يېزىڭ..."
                            className="comment-input"
                            onChange={(e) => hw.tempComment = e.target.value}
                          />
                          <button 
                            className="approve-btn"
                            onClick={() => handleHomeworkReview(student.id, hw.id, true, hw.tempComment || '')}
                          >
                            ✅ ماقۇللاش
                          </button>
                          <button 
                            className="reject-btn"
                            onClick={() => handleHomeworkReview(student.id, hw.id, false, hw.tempComment || '')}
                          >
                            ❌ رەت قىلىش
                          </button>
                        </div>
                      )}
                      {hw.comment && (
                        <div className="homework-comment">
                          <strong>ئىنكاس:</strong> {hw.comment}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            ))}
          </div>
        )}

        {/* Comments Tab */}
        {activeTab === 'comments' && (
          <div className="comments-section">
            {students.map(student => (
              <div key={student.id} className="student-comments">
                <h3>{student.name}</h3>
                <div className="add-comment">
                  <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="يېڭى ئىنكاس قوشۇڭ..."
                  />
                  <button onClick={() => handleAddComment(student.id)}>قوشۇش</button>
                </div>
                <div className="comments-list">
                  {student.comments.map(c => (
                    <div key={c.id} className="comment-item">
                      <div className="comment-header">
                        <span className="author">{c.author}</span>
                        <span className="date">{new Date(c.date).toLocaleDateString('ug-CN')}</span>
                      </div>
                      <p>{c.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add Student Tab */}
        {activeTab === 'addStudent' && (
          <div className="add-student-form">
            <h2>يېڭى ئوقۇغۇچى قوشۇش</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              addNewStudent({
                username: formData.get('username'),
                password: formData.get('password'),
                name: formData.get('name')
              });
              e.target.reset();
              setActiveTab('attendance');
            }}>
              <div className="form-group">
                <label>ئىسىم:</label>
                <input type="text" name="name" required />
              </div>
              <div className="form-group">
                <label>ئەزا نامى:</label>
                <input type="text" name="username" required />
              </div>
              <div className="form-group">
                <label>مەخپىي نۇمۇر:</label>
                <input type="password" name="password" required />
              </div>
              <button type="submit" className="submit-btn">قوشۇش</button>
            </form>
          </div>
        )}
      </div>
    );
  }

  // Student Dashboard
  return (
    <div className="student-dashboard">
      <header className="dashboard-header">
        <h1>ئوقۇغۇچى سۇپىسى - كەلبىل</h1>
        <div className="header-actions">
          <span>خوش كەپسىز، {currentUser.name}</span>
          <button onClick={handleLogout} className="logout-btn">چىقىش</button>
        </div>
      </header>

      <div className="tabs">
        <button 
          className={activeTab === 'attendance' ? 'active' : ''} 
          onClick={() => setActiveTab('attendance')}
        >
          مېنىڭ قاتنىشىشىم
        </button>
        <button 
          className={activeTab === 'homework' ? 'active' : ''} 
          onClick={() => setActiveTab('homework')}
        >
          مېنىڭ تاپشۇرۇقلىرىم
        </button>
        <button 
          className={activeTab === 'comments' ? 'active' : ''} 
          onClick={() => setActiveTab('comments')}
        >
          ئىنكاسلار
        </button>
      </div>

      {/* Student Attendance */}
      {activeTab === 'attendance' && (
        <div className="my-attendance">
          <h2>قاتنىشىش ئەھۋالىم</h2>
          <div className="week-selector">
            <select value={selectedWeek} onChange={(e) => setSelectedWeek(e.target.value)}>
              <option value="all">ھەممە ھەپتە</option>
              {generateWeeks().map(week => (
                <option key={week} value={week}>{week}-ھەپتە</option>
              ))}
            </select>
          </div>
          <div className="attendance-grid">
            {selectedWeek === 'all' ? (
              generateWeeks().map(week => (
                <div key={week} className="week-card">
                  <h3>{week}-ھەپتە</h3>
                  {[1, 2, 3].map(lesson => {
                    const attKey = `${week}-${lesson}-attendance`;
                    const hwKey = `${week}-${lesson}-homework`;
                    return (
                      <div key={lesson} className="lesson-status">
                        <span>{lesson}-دەرس</span>
                        <span className={currentUser.attendance[attKey] ? 'present' : 'absent'}>
                          🎯 {currentUser.attendance[attKey] ? 'قاتناشتى' : 'قاتناشمىدى'}
                        </span>
                        <span className={currentUser.attendance[hwKey] ? 'present' : 'absent'}>
                          📝 {currentUser.attendance[hwKey] ? 'تاپشۇردى' : 'تاپشۇرمىدى'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ))
            ) : (
              <div className="week-card">
                <h3>{selectedWeek}-ھەپتە</h3>
                {[1, 2, 3].map(lesson => {
                  const attKey = `${selectedWeek}-${lesson}-attendance`;
                  const hwKey = `${selectedWeek}-${lesson}-homework`;
                  return (
                    <div key={lesson} className="lesson-status">
                      <span>{lesson}-دەرس</span>
                      <span className={currentUser.attendance[attKey] ? 'present' : 'absent'}>
                        🎯 {currentUser.attendance[attKey] ? 'قاتناشتى' : 'قاتناشمىدى'}
                      </span>
                      <span className={currentUser.attendance[hwKey] ? 'present' : 'absent'}>
                        📝 {currentUser.attendance[hwKey] ? 'تاپشۇردى' : 'تاپشۇرمىدى'}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Student Homework */}
      {activeTab === 'homework' && (
        <div className="my-homework">
          <h2>تاپشۇرۇق يۈكلەش</h2>
          <div className="upload-section">
            <input
              type="file"
              onChange={(e) => setHomeworkFile(e.target.files[0])}
              className="file-input"
            />
            <button 
              onClick={() => handleHomeworkUpload(currentUser.id)}
              className="upload-btn"
            >
              يۈكلەش
            </button>
          </div>
          <div className="homework-list">
            <h3>مېنىڭ تاپشۇرۇقلىرىم</h3>
            {currentUser.homework.length === 0 ? (
              <p>ھېچقانداق تاپشۇرۇق يۈكلەنمىگەن</p>
            ) : (
              currentUser.homework.map(hw => (
                <div key={hw.id} className="homework-item">
                  <div className="homework-info">
                    <span className="file-name">{hw.fileName}</span>
                    <span className="upload-date">{new Date(hw.uploadDate).toLocaleDateString('ug-CN')}</span>
                    <span className={`status ${hw.status}`}>
                      {hw.status === 'pending' ? '⏳ تەكشۈرۈلۈۋاتىدۇ' : 
                       hw.status === 'approved' ? '✅ ماقۇللاندى' : '❌ تۈزىتىش كېرەك'}
                    </span>
                  </div>
                  {hw.comment && (
                    <div className="homework-comment">
                      <strong>ئوقۇتقۇچى ئىنكاسى:</strong> {hw.comment}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Student Comments */}
      {activeTab === 'comments' && (
        <div className="my-comments">
          <h2>ئوقۇتقۇچى ئىنكاسلىرى</h2>
          {currentUser.comments.length === 0 ? (
            <p>ھېچقانداق ئىنكاس يوق</p>
          ) : (
            currentUser.comments.map(c => (
              <div key={c.id} className="comment-item">
                <div className="comment-header">
                  <span className="author">{c.author}</span>
                  <span className="date">{new Date(c.date).toLocaleDateString('ug-CN')}</span>
                </div>
                <p>{c.text}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default StudentInfo;