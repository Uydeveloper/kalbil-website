// StudentInfo.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const StudentInfo = () => {
  // State Management
  const [currentUser, setCurrentUser] = useState(null);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [activeTab, setActiveTab] = useState('attendance');
  const [selectedWeek, setSelectedWeek] = useState('1');
  const [selectedLesson, setSelectedLesson] = useState('all');
  const [homeworkFile, setHomeworkFile] = useState(null);
  const [comment, setComment] = useState('');
  const [students, setStudents] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationMessage, setCelebrationMessage] = useState('');

  // ھەر بىر ئوقۇغۇچىغا خاس ھاياجانلىق سىلوگانلار
  const studentMotivations = {
    "musa ismail": { emoji: "🚀", message: "مۇسا ئىسمائىل، سەن بۈگۈن يۇلتۇز بولۇپ پارلاۋاتىسەن! ⭐️", color: "from-yellow-400 to-orange-500" },
    "hijran kiroran": { emoji: "💪", message: "ھىجران كىروران، سەن بۈگۈن تېخىمۇ كۈچلۈك! داۋام قىل! 🔥", color: "from-red-400 to-pink-500" },
    "ابدۈشۈكۈر": { emoji: "🌙", message: "ئابدۈشۈكۈر، سەن بىر ئىستېدات! مۇۋەپپەقىيەت سېنىڭ! ✨", color: "from-purple-400 to-indigo-500" },
    "ئابدۇراھمان": { emoji: "🦁", message: "ئابدۇراھمان، شىر دەل سەن! داۋام قىلغىن! 👑", color: "from-amber-400 to-orange-500" },
    "ئابدۇلۋارىس ئاتاسوي": { emoji: "🎯", message: "ئابدۇلۋارىس، نىشانغا يەتكىلى تاي! بىز ساڭا ئىشىنىمىز! 🎖️", color: "from-green-400 to-emerald-500" },
    "ھۈسەنجان ئوبۇل": { emoji: "🏆", message: "ھۈسەنجان، سەن بىر چەمپىيون! شۇنداق داۋام قىل! 🥇", color: "from-amber-400 to-orange-500" },
    "musa ismail2": { emoji: "⭐️", message: "مۇسا ئىسمائىل، سەن بىر يۇلتۇز! پارلاشنى داۋام قىل! 💫", color: "from-blue-400 to-cyan-500" },
    "ئاسىيە ياشار": { emoji: "💎", message: "ئاسىيە، سەن ھەقىقىي ئالماس! پارلاشنى داۋام قىل! ✨", color: "from-indigo-400 to-purple-500" },
    "abdusalam niyas": { emoji: "📚", message: "ئابدۇسالام، بىلىم دېڭىزىدا ئۈزۈشنى داۋام قىل! 🌊", color: "from-blue-400 to-indigo-500" },
    "irshat eysa": { emoji: "⚡️", message: "ئىرشات، سەن بۈگۈن بىر ئىنقىلاب! داۋام قىل! 🔥", color: "from-orange-400 to-red-500" },
    "polat uyghur": { emoji: "🦅", message: "پولات، بۈركۈتتەك ئۇچ! سەن بۇنىڭغا لايىق! 🌈", color: "from-teal-400 to-cyan-500" },
    "ئالىمجان ئابدۇكېرىم": { emoji: "🎨", message: "ئالىمجان، سەن بىر سەنئەت ئەسىرى! داۋام قىل! 🎭", color: "from-rose-400 to-red-500" },
    "hezirteli": { emoji: "⚡️", message: "ھەزىرتىلى، سەن بۈگۈن بىر ئىنقىلاب! داۋام قىل! 🔥", color: "from-orange-400 to-red-500" },
    "melikeabliz": { emoji: "👑", message: "مەلىكە، سەن بىر شاھزادە! ئۇتۇق سېنىڭ! 💫", color: "from-purple-400 to-pink-500" },
    "ئابدۇللا": { emoji: "🌟", message: "ئابدۇللا، سەن بىر يۇلتۇز! پارلاشنى داۋام قىل! ⭐️", color: "from-yellow-400 to-amber-500" },
    "jamalidin": { emoji: "🎯", message: "جامالىدىن، نىشانغا يەتكىلى تاي! داۋام قىل! 🎖️", color: "from-green-400 to-emerald-500" },
    "ئائىشە ئىسمائىل": { emoji: "🌸", message: "ئائىشە، گۈلدەك ئېچىلىۋاتىسەن! ئۇتۇق سېنى كۈتىدۇ! 🌟", color: "from-pink-400 to-purple-500" }
  };

  const defaultMotivation = { emoji: "🎓", message: "بۈگۈن يېڭى ئۇتۇقلارغا ئېرىشىش ۋاقتى! داۋام قىلىڭ!", color: "from-gray-400 to-gray-500" };

  // Initialize data - يېڭى ئىسىملار بىلەن
  useEffect(() => {
    const studentsFromJSON = [
      { id: "student001", name: "musa ismail", username: "musa ismail", password: "musa@qml26", role: "student", email: "musa.ismail@kelbil.com", phone: "+998 90 123 45 01", joinDate: "2024-01-15" },
      { id: "student002", name: "hijran kiroran", username: "hijran kiroran", password: "hijran@qml26", role: "student", email: "hijran@kelbil.com", phone: "+998 90 123 45 02", joinDate: "2024-01-15" },
      { id: "student003", name: "ابدۈشۈكۈر", username: "abduxukur", password: "abduxukur@qml26", role: "student", email: "abduxukur@kelbil.com", phone: "+998 90 123 45 03", joinDate: "2024-01-16" },
      { id: "student004", name: "ئابدۇراھمان", username: "abdurahman", password: "abdurahman@qml26", role: "student", email: "abdurahman@kelbil.com", phone: "+998 90 123 45 04", joinDate: "2024-01-16" },
      { id: "student005", name: "ئابدۇلۋارىس ئاتاسوي", username: "abdulvaris atasoy", password: "varis@qml26", role: "student", email: "varis@kelbil.com", phone: "+998 90 123 45 05", joinDate: "2024-01-17" },
      { id: "student006", name: "ھۈسەنجان ئوبۇل", username: "husenjan obul", password: "husenjan@qml26", role: "student", email: "husenjan@kelbil.com", phone: "+998 90 123 45 06", joinDate: "2024-01-17" },
      { id: "student007", name: "musa ismail2", username: "musa ismail2", password: "musa2@qml26", role: "student", email: "musa2@kelbil.com", phone: "+998 90 123 45 07", joinDate: "2024-01-18" },
      { id: "student008", name: "ئاسىيە ياشار", username: "asiya yashar", password: "asiya@qml26", role: "student", email: "asiya@kelbil.com", phone: "+998 90 123 45 08", joinDate: "2024-01-18" },
      { id: "student009", name: "abdusalam niyas", username: "abdusalam niyas", password: "abdusalam@qml26", role: "student", email: "abdusalam@kelbil.com", phone: "+998 90 123 45 09", joinDate: "2024-01-19" },
      { id: "student010", name: "irshat eysa", username: "irshat eysa", password: "irshat@qml26", role: "student", email: "irshat@kelbil.com", phone: "+998 90 123 45 10", joinDate: "2024-01-19" },
      { id: "student011", name: "polat uyghur", username: "polat uyghur", password: "polat@qml26", role: "student", email: "polat@kelbil.com", phone: "+998 90 123 45 11", joinDate: "2024-01-20" },
      { id: "student012", name: "ئالىمجان ئابدۇكېرىم", username: "alimjan abdukerim", password: "alimjan@qml26", role: "student", email: "alimjan@kelbil.com", phone: "+998 90 123 45 12", joinDate: "2024-01-20" },
      { id: "student013", name: "hezirteli", username: "hezirteli", password: "hezirteli@qml26", role: "student", email: "hezirteli@kelbil.com", phone: "+998 90 123 45 13", joinDate: "2024-01-21" },
      { id: "student014", name: "melikeabliz", username: "melikeabliz", password: "melike@qml26", role: "student", email: "melike@kelbil.com", phone: "+998 90 123 45 14", joinDate: "2024-01-21" },
      { id: "student015", name: "ئابدۇللا", username: "abdulla", password: "abdulla@qml26", role: "student", email: "abdulla@kelbil.com", phone: "+998 90 123 45 15", joinDate: "2024-01-22" },
      { id: "student016", name: "jamalidin", username: "jamalidin", password: "jamalidin@qml26", role: "student", email: "jamalidin@kelbil.com", phone: "+998 90 123 45 16", joinDate: "2024-01-22" },
      { id: "student017", name: "ئائىشە ئىسمائىل", username: "aisha ismail", password: "aisha@qml26", role: "student", email: "aisha@kelbil.com", phone: "+998 90 123 45 17", joinDate: "2024-01-23" }
    ].map((u, index) => ({
      ...u,
      attendance: {
        // 1-ھەپتە 1-سائەت
        '1-1-attendance': index === 0 ? false : (index === 1 ? false : false),
        '1-1-homework': index === 0 ? true : (index === 1 ? true : false),
        // 1-ھەپتە 2-سائەت  
        '1-2-attendance': index === 0 ? true : (index === 1 ? true : false),
        '1-2-homework': index === 0 ? false : (index === 1 ? false : false),
        // 1-ھەپتە 3-سائەت
        '1-3-attendance': index === 0 ? true : (index === 1 ? true : false),
        '1-3-homework': index === 0 ? false : (index === 1 ? false : false),
      },
      homework: [],
      comments: [],
      progress: {
        totalAttendance: Math.floor(Math.random() * 20) + 10,
        totalHomework: Math.floor(Math.random() * 15) + 5,
        averageScore: Math.floor(Math.random() * 30) + 65
      }
    }));

    const adminsFromJSON = [
      { id: "admin001", name: "Uyghurjan", password: "u_kelbil2026", role: "admin", fullName: "ئۇيغۇرجان كەلبىل" }
    ];

    const savedStudents = localStorage.getItem('kelbil_students_v3');
    const savedAdmins = localStorage.getItem('kelbil_admins_v3');
    
    if (savedStudents) {
      try {
        setStudents(JSON.parse(savedStudents));
      } catch (e) {
        setStudents(studentsFromJSON);
        localStorage.setItem('kelbil_students_v3', JSON.stringify(studentsFromJSON));
      }
    } else {
      setStudents(studentsFromJSON);
      localStorage.setItem('kelbil_students_v3', JSON.stringify(studentsFromJSON));
    }

    if (savedAdmins) {
      try {
        setAdmins(JSON.parse(savedAdmins));
      } catch (e) {
        setAdmins(adminsFromJSON);
      }
    } else {
      setAdmins(adminsFromJSON);
      localStorage.setItem('kelbil_admins_v3', JSON.stringify(adminsFromJSON));
    }
  }, []);

  // Login Handler
  const handleLogin = (e) => {
    e.preventDefault();
    const inputName = loginForm.username.trim();
    const inputPass = loginForm.password.trim();

    const admin = admins.find(a => a.name === inputName && a.password === inputPass);
    if (admin) {
      setCurrentUser({ ...admin, role: 'admin' });
      setCelebrationMessage(`خۇش كەپسىز ${admin.fullName || admin.name}! سىزنىڭ رەھبەرلىكىڭىز بىزگە كۈچ بېرىدۇ! 👨‍🏫`);
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 4000);
      return;
    }

    const student = students.find(s => s.name === inputName && s.password === inputPass);
    if (student) {
      const mot = studentMotivations[student.name] || defaultMotivation;
      setCurrentUser({ ...student, role: 'student', attendance: student.attendance || {}, homework: student.homework || [], comments: student.comments || [] });
      setCelebrationMessage(`${mot.emoji} ${mot.message}`);
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 5000);
    } else {
      alert('ئىسىم ياكى مەخپىي نۇمۇر خاتا!');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setLoginForm({ username: '', password: '' });
    setActiveTab('attendance');
  };

  const toggleAttendance = (studentId, week, lesson, type) => {
    if (currentUser.role !== 'admin') return;
    setStudents(prev => prev.map(student => {
      if (student.id === studentId) {
        const key = `${week}-${lesson}-${type}`;
        return { ...student, attendance: { ...student.attendance, [key]: !student.attendance[key] } };
      }
      return student;
    }));
  };

  const deleteStudent = (studentId) => {
    if (window.confirm('بۇ ئوقۇغۇچىنى ئۆچۈرمەكچىمۇسىز؟')) {
      setStudents(prev => prev.filter(s => s.id !== studentId));
    }
  };

  const addNewStudent = (newStudent) => {
    const student = {
      id: Date.now().toString(),
      ...newStudent,
      attendance: {},
      homework: [],
      comments: [],
      progress: { totalAttendance: 0, totalHomework: 0, averageScore: 0 }
    };
    setStudents(prev => [...prev, student]);
  };

  const exportData = () => {
    const dataStr = JSON.stringify(students, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `kelbil_students_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  const importData = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          setStudents(JSON.parse(event.target.result));
          alert('سانلىق مەلۇمات مۇۋەپپەقىيەتلىك يۈكلەندى!');
        } catch (error) {
          alert('ھۆججەت خاتا!');
        }
      };
      reader.readAsText(file);
    }
  };

  const generateWeeks = () => {
    const weeks = [];
    for (let i = 1; i <= 24; i++) weeks.push(i);
    return weeks;
  };

  // Login Form
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 flex items-center justify-center p-4 relative overflow-hidden">
        <div className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-20`} ></div>
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="relative w-full max-w-md">
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500"></div>
            <div className="p-8 text-center">
              <motion.div initial={{ y: -20 }} animate={{ y: 0 }} className="w-28 h-28 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl mb-6">
                <span className="text-white text-5xl font-black">ئۇيغۇر</span>
              </motion.div>
              <h1 className="text-4xl font-black bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-2">KelBiL</h1>
              <p className="text-white/60 mb-8">كەلبىل ئۇيغۇر يۇقىرى تېخنىكا</p>
              <form onSubmit={handleLogin} className="space-y-4">
                <input type="text" value={loginForm.username} onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })} placeholder="ئىسىم" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20" required />
                <input type="password" value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} placeholder="مەخپىي نۇمۇر" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20" required />
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold py-3 rounded-xl transition-all shadow-lg">سىستېمىغا كىرىش</motion.button>
              </form>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-white/40 text-xs">© 2026 KelBiL Uyghur High Tech</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Celebration Banner
  if (showCelebration) {
    const mot = studentMotivations[currentUser.name] || defaultMotivation;
    const bgColor = currentUser.role === 'admin' ? 'from-orange-500 to-red-500' : (mot.color || 'from-purple-500 to-pink-500');
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
        <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", duration: 0.6 }} className={`text-center p-8 rounded-3xl bg-gradient-to-r ${bgColor} shadow-2xl max-w-md mx-4`}>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 0.5 }} className="text-7xl mb-4">{currentUser.role === 'admin' ? '👨‍🏫' : (studentMotivations[currentUser.name]?.emoji || '🎉')}</motion.div>
          <h2 className="text-2xl font-bold text-white mb-2">{currentUser.role === 'admin' ? 'خۇش كەپسىز!' : 'سىز بىلەن تونۇشقانىمىزغا خۇش!'}</h2>
          <p className="text-white/90 text-lg">{celebrationMessage}</p>
          <button onClick={() => setShowCelebration(false)} className="mt-6 bg-white/20 hover:bg-white/30 px-6 py-2 rounded-full text-white transition-all">باشلاش →</button>
        </motion.div>
      </div>
    );
  }

  // Admin Dashboard
  if (currentUser.role === 'admin') {
    const displayedWeeks = selectedWeek === 'all' ? generateWeeks().slice(0, 4) : [parseInt(selectedWeek)];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-xl sticky top-0 z-20">
          <div className="px-6 py-4 flex justify-between items-center flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"><span className="text-white text-xl font-bold">K</span></div>
              <h1 className="text-white font-bold text-xl">كەلبىل باشقۇرۇش سۇپىسى</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white/90">👨‍💼 {currentUser.fullName || currentUser.name}</span>
              <button onClick={handleLogout} className="bg-red-500/80 hover:bg-red-600 px-4 py-2 rounded-xl text-white transition-all">🚪 چىقىش</button>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur rounded-2xl p-4 border border-white/10">
              <div className="text-3xl mb-2">👨‍🎓</div>
              <div className="text-white/60 text-sm">جەمئىي ئوقۇغۇچى</div>
              <div className="text-white text-2xl font-bold">{students.length}</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur rounded-2xl p-4 border border-white/10">
              <div className="text-3xl mb-2">📊</div>
              <div className="text-white/60 text-sm">ئوتتۇرىچە قاتنىشىش</div>
              <div className="text-white text-2xl font-bold">87%</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur rounded-2xl p-4 border border-white/10">
              <div className="text-3xl mb-2">📝</div>
              <div className="text-white/60 text-sm">تاپشۇرۇق تەكشۈرۈش</div>
              <div className="text-white text-2xl font-bold">12 يېڭى</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur rounded-2xl p-4 border border-white/10">
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-white/60 text-sm">ئەڭ ياخشى ئوقۇغۇچى</div>
              <div className="text-white text-lg font-bold">كەلبىل</div>
            </div>
          </div>

          {/* Controls */}
          <div className="bg-white/5 backdrop-blur rounded-2xl p-4 mb-6 flex gap-3 flex-wrap border border-white/10">
            <button onClick={exportData} className="bg-blue-500/80 hover:bg-blue-600 px-4 py-2 rounded-xl text-white transition-all">📥 سانلىق مەلۇمات چىقىرىش</button>
            <label className="bg-purple-500/80 hover:bg-purple-600 px-4 py-2 rounded-xl text-white transition-all cursor-pointer">📂 سانلىق مەلۇمات يۈكلەш<input type="file" accept=".json" onChange={importData} className="hidden"/></label>
            <button onClick={() => setActiveTab('addStudent')} className="bg-green-500/80 hover:bg-green-600 px-4 py-2 rounded-xl text-white transition-all">➕ يېڭى ئوقۇغۇچى</button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 border-b border-white/10 flex-wrap">
            <button onClick={() => setActiveTab('attendance')} className={`px-6 py-3 rounded-t-xl font-semibold transition-all ${activeTab === 'attendance' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>📊 قاتنىشىش جەدۋىلى</button>
            <button onClick={() => setActiveTab('homework')} className={`px-6 py-3 rounded-t-xl font-semibold transition-all ${activeTab === 'homework' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>📝 تاپشۇرۇقلار</button>
            <button onClick={() => setActiveTab('comments')} className={`px-6 py-3 rounded-t-xl font-semibold transition-all ${activeTab === 'comments' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>💬 ئىنكاسلار</button>
          </div>

          {/* Filters */}
          <div className="mb-6 flex gap-4 flex-wrap items-center">
            <div className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-2">
              <span className="text-white/60">📅 ھەپتە:</span>
              <select value={selectedWeek} onChange={(e) => setSelectedWeek(e.target.value)} className="bg-transparent text-white focus:outline-none">
                <option value="all">بارلىق ھەپتىلەر</option>
                {generateWeeks().map(w => <option key={w} value={w}>{w}-ھەپتە</option>)}
              </select>
            </div>
            <div className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-2">
              <span className="text-white/60">⏰ سائەت:</span>
              <select value={selectedLesson} onChange={(e) => setSelectedLesson(e.target.value)} className="bg-transparent text-white focus:outline-none">
                <option value="all">بارلىق سائەتلەر</option>
                <option value="1">1-سائەت</option>
                <option value="2">2-سائەت</option>
                <option value="3">3-سائەت</option>
              </select>
            </div>
          </div>

          {/* Attendance Table */}
          {activeTab === 'attendance' && (
            <div className="bg-white/5 backdrop-blur rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
                      <th rowSpan="3" className="px-5 py-4 text-right text-white font-bold text-lg sticky left-0 bg-gradient-to-r from-gray-900 to-transparent min-w-[150px]">ئىسىم</th>
                      {displayedWeeks.map(week => (
                        <th key={week} colSpan="9" className="px-2 py-3 text-center text-indigo-300 font-bold border-x border-white/10 text-lg">{week}-ھەپتە</th>
                      ))}
                    </tr>
                    <tr className="bg-white/5">
                      {displayedWeeks.map(week => (
                        <React.Fragment key={`sub1-${week}`}>
                          <th colSpan="3" className="px-2 py-2 text-center text-cyan-300 text-sm border-r border-white/10">1-سائەت</th>
                          <th colSpan="3" className="px-2 py-2 text-center text-emerald-300 text-sm border-r border-white/10">2-سائەت</th>
                          <th colSpan="3" className="px-2 py-2 text-center text-pink-300 text-sm">3-سائەت</th>
                        </React.Fragment>
                      ))}
                    </tr>
                    <tr className="bg-white/10">
                      {displayedWeeks.map(week => (
                        <React.Fragment key={`sub2-${week}`}>
                          <th className="px-2 py-2 text-center text-sm border-r border-white/10">🎯</th>
                          <th className="px-2 py-2 text-center text-sm border-r border-white/10">📝</th>
                          <th className="px-2 py-2 text-center text-sm border-r border-white/10">🗑️</th>
                          <th className="px-2 py-2 text-center text-sm border-r border-white/10">🎯</th>
                          <th className="px-2 py-2 text-center text-sm border-r border-white/10">📝</th>
                          <th className="px-2 py-2 text-center text-sm border-r border-white/10">🗑️</th>
                          <th className="px-2 py-2 text-center text-sm border-r border-white/10">🎯</th>
                          <th className="px-2 py-2 text-center text-sm border-r border-white/10">📝</th>
                          <th className="px-2 py-2 text-center text-sm">🗑️</th>
                        </React.Fragment>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student, idx) => {
                      const lessons = selectedLesson === 'all' ? [1, 2, 3] : [parseInt(selectedLesson)];
                      return (
                        <motion.tr key={student.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.02 }} className={`border-b border-white/5 hover:bg-white/5 transition-all ${idx % 2 === 0 ? 'bg-white/5' : ''}`}>
                          <td className={`px-5 py-4 text-white font-medium sticky left-0 ${idx % 2 === 0 ? 'bg-gray-900/80' : 'bg-gray-900/60'}`}>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 flex items-center justify-center text-white font-bold text-sm">{student.name.charAt(0).toUpperCase()}</div>
                              <div><div>{student.name}</div><div className="text-xs text-white/40">{student.email}</div></div>
                            </div>
                          </td>
                          {displayedWeeks.map(week => (
                            <React.Fragment key={`${student.id}-${week}`}>
                              {lessons.map(lesson => {
                                const attKey = `${week}-${lesson}-attendance`;
                                const hwKey = `${week}-${lesson}-homework`;
                                const isAtt = student.attendance?.[attKey];
                                const isHw = student.attendance?.[hwKey];
                                return (
                                  <React.Fragment key={`${student.id}-${week}-${lesson}`}>
                                    <td className={`px-2 py-3 text-center cursor-pointer transition-all border-r border-white/5 ${isAtt ? 'bg-emerald-500/30' : 'bg-red-500/20'} hover:scale-105`} onClick={() => toggleAttendance(student.id, week, lesson, 'attendance')}>
                                      <motion.span whileHover={{ scale: 1.2 }} className={`text-xl ${isAtt ? 'text-emerald-400' : 'text-red-400'}`}>{isAtt ? '✓' : '✗'}</motion.span>
                                    </td>
                                    <td className={`px-2 py-3 text-center cursor-pointer transition-all border-r border-white/5 ${isHw ? 'bg-emerald-500/30' : 'bg-red-500/20'} hover:scale-105`} onClick={() => toggleAttendance(student.id, week, lesson, 'homework')}>
                                      <motion.span whileHover={{ scale: 1.2 }} className={`text-xl ${isHw ? 'text-emerald-400' : 'text-red-400'}`}>{isHw ? '✓' : '✗'}</motion.span>
                                    </td>
                                    <td className="px-2 py-3 text-center cursor-pointer transition-all hover:bg-red-500/20 border-r border-white/5" onClick={() => deleteStudent(student.id)}>
                                      <motion.span whileHover={{ scale: 1.2 }} className="text-xl text-red-400">🗑️</motion.span>
                                    </td>
                                  </React.Fragment>
                                );
                              })}
                            </React.Fragment>
                          ))}
                        </motion.tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="bg-white/5 px-6 py-3 border-t border-white/10 flex justify-between text-white/50 text-sm flex-wrap gap-2">
                <div className="flex gap-4">✅ قاتناشقان / تاپشۇرغان &nbsp;&nbsp; ❌ قاتناشمىغان / تاپشۇرمىغان</div>
                <div>📊 جەمئىي: {students.length} ئوقۇغۇچى | 🗑️ ئۆچۈرۈش ئۈچۈن بېسىڭ</div>
              </div>
            </div>
          )}

          {/* Homework Tab */}
          {activeTab === 'homework' && (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {students.map(student => (
                <div key={student.id} className="bg-white/5 backdrop-blur rounded-2xl p-5 border border-white/10 hover:border-indigo-500/50 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-400 to-purple-400 flex items-center justify-center text-white font-bold text-lg">{student.name.charAt(0).toUpperCase()}</div>
                    <div><h3 className="text-white font-bold">{student.name}</h3><p className="text-white/40 text-xs">{student.email}</p></div>
                  </div>
                  <div className="space-y-2">
                    {student.homework.length === 0 ? <p className="text-gray-400 text-center py-4">تاپشۇرۇق يوق</p> : student.homework.map(hw => (
                      <div key={hw.id} className="bg-white/5 rounded-xl p-3"><div className="flex justify-between items-center"><span className="text-white text-sm">{hw.fileName}</span><span className={`px-2 py-1 rounded-full text-xs ${hw.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' : hw.status === 'approved' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>{hw.status === 'pending' ? 'كۈتۈۋاتىدۇ' : hw.status === 'approved' ? 'ماقۇللاندى' : 'رەت قىلىندى'}</span></div></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Comments Tab */}
          {activeTab === 'comments' && (
            <div className="grid gap-4">
              {students.map(student => (
                <div key={student.id} className="bg-white/5 backdrop-blur rounded-2xl p-5 border border-white/10">
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 flex items-center justify-center text-white">{student.name.charAt(0).toUpperCase()}</div><h3 className="text-white font-bold">{student.name}</h3></div>
                    <div className="flex gap-2"><input type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="يېڭى ئىنكاس..." className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-400 w-64"/><button onClick={() => { if(comment.trim()){ const newComment = { id: Date.now(), text: comment, date: new Date().toISOString(), author: currentUser.name }; setStudents(prev => prev.map(s => s.id === student.id ? { ...s, comments: [...s.comments, newComment] } : s)); setComment(''); } }} className="bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 rounded-xl text-white text-sm">قوشۇش</button></div>
                  </div>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {student.comments.length === 0 ? <p className="text-gray-400 text-center py-4">ئىنكاس يوق</p> : student.comments.map(c => <div key={c.id} className="bg-white/5 rounded-xl p-3"><div className="flex justify-between text-white/50 text-xs mb-1"><span>{c.author}</span><span>{new Date(c.date).toLocaleDateString()}</span></div><p className="text-white/80 text-sm">{c.text}</p></div>)}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Add Student */}
          {activeTab === 'addStudent' && (
            <div className="max-w-md mx-auto bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10">
              <h2 className="text-white text-2xl font-bold text-center mb-6">➕ يېڭى ئوقۇغۇچى قوشۇش</h2>
              <form onSubmit={(e) => { e.preventDefault(); const fd = new FormData(e.target); addNewStudent({ name: fd.get('name'), username: fd.get('username'), password: fd.get('password'), email: fd.get('email'), phone: fd.get('phone'), joinDate: new Date().toISOString().split('T')[0] }); e.target.reset(); setActiveTab('attendance'); alert('ئوقۇغۇچى قوشۇلدى!'); }} className="space-y-4">
                <input type="text" name="name" placeholder="ئىسىم" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-400" required />
                <input type="text" name="username" placeholder="ئەزا نامى" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-400" required />
                <input type="email" name="email" placeholder="ئېلېكتىرونلۇق خەت" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-400" />
                <input type="text" name="phone" placeholder="تېلېفون" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-400" />
                <input type="password" name="password" placeholder="مەخپىي نۇمۇر" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-400" required />
                <button type="submit" className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold py-3 rounded-xl transition-all">قوشۇش</button>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Student Dashboard
  const mot = studentMotivations[currentUser.name] || defaultMotivation;
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-xl sticky top-0 z-20">
        <div className="px-6 py-4 flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"><span className="text-white text-xl font-bold">K</span></div><h1 className="text-white font-bold text-xl">كەلبىل ئوقۇغۇچى سۇپىسى</h1></div>
          <div className="flex items-center gap-4"><span className="text-white/90">{mot.emoji} {currentUser.name}</span><button onClick={handleLogout} className="bg-red-500/80 hover:bg-red-600 px-4 py-2 rounded-xl text-white transition-all">چىقىش</button></div>
        </div>
      </div>

      {/* Motivation Banner */}
      <div className={`mx-6 mt-6 bg-gradient-to-r ${mot.color} rounded-2xl p-4 shadow-lg`}>
        <div className="flex items-center gap-3"><span className="text-3xl">{mot.emoji}</span><p className="text-white font-semibold">{mot.message}</p></div>
      </div>

      <div className="p-6">
        <div className="flex gap-2 mb-6 border-b border-white/10 flex-wrap">
          <button onClick={() => setActiveTab('attendance')} className={`px-6 py-3 rounded-t-xl font-semibold transition-all ${activeTab === 'attendance' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}>📊 قاتنىشىش</button>
          <button onClick={() => setActiveTab('homework')} className={`px-6 py-3 rounded-t-xl font-semibold transition-all ${activeTab === 'homework' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}>📝 تاپشۇرۇقلار</button>
          <button onClick={() => setActiveTab('comments')} className={`px-6 py-3 rounded-t-xl font-semibold transition-all ${activeTab === 'comments' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}>💬 ئىنكاسلار</button>
        </div>

        {activeTab === 'attendance' && (
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="flex justify-between items-center mb-6 flex-wrap gap-4"><h2 className="text-white text-xl font-bold">📊 قاتنىشىش ئەھۋالىم</h2>
              <div className="flex gap-3"><select value={selectedWeek} onChange={(e) => setSelectedWeek(e.target.value)} className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white"><option value="all">ھەممە ھەپتە</option>{generateWeeks().map(w => <option key={w} value={w}>{w}-ھەپتە</option>)}</select>
              <select value={selectedLesson} onChange={(e) => setSelectedLesson(e.target.value)} className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white"><option value="all">بارلىق سائەتلەر</option><option value="1">1-سائەت</option><option value="2">2-سائەت</option><option value="3">3-سائەت</option></select></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {generateWeeks().filter(w => selectedWeek === 'all' || w === parseInt(selectedWeek)).map(week => {
                const lessons = selectedLesson === 'all' ? [1, 2, 3] : [parseInt(selectedLesson)];
                const totalAtt = lessons.filter(l => currentUser.attendance?.[`${week}-${l}-attendance`]).length;
                const totalHw = lessons.filter(l => currentUser.attendance?.[`${week}-${l}-homework`]).length;
                return (<div key={week} className="bg-white/10 rounded-xl p-4"><h3 className="text-indigo-300 font-bold mb-3 text-lg">{week}-ھەپتە</h3>{lessons.map(lesson => { const att = currentUser.attendance?.[`${week}-${lesson}-attendance`]; const hw = currentUser.attendance?.[`${week}-${lesson}-homework`]; return (<div key={lesson} className="flex justify-between py-2 border-b border-white/10 last:border-0"><span className="text-white/80">{lesson}-سائەت</span><div className="flex gap-3"><span className={att ? 'text-emerald-400' : 'text-red-400'}>🎯 {att ? 'قاتناشتى' : 'قاتناشمىدى'}</span><span className={hw ? 'text-emerald-400' : 'text-red-400'}>📝 {hw ? 'تاپشۇردى' : 'تاپشۇرمىدى'}</span></div></div>);})}<div className="mt-3 pt-2 border-t border-white/20 flex justify-between text-sm"><span className="text-green-400">🎯 {totalAtt}/{lessons.length}</span><span className="text-blue-400">📝 {totalHw}/{lessons.length}</span></div></div>);
              })}
            </div>
          </div>
        )}

        {activeTab === 'homework' && (
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <h2 className="text-white text-xl font-bold mb-4">📝 تاپشۇرۇق يۈكلەش</h2>
            <div className="flex gap-4 mb-6"><input type="file" onChange={(e) => setHomeworkFile(e.target.files[0])} className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white file:mr-3 file:px-4 file:py-2 file:rounded-xl file:border-0 file:bg-indigo-500 file:text-white hover:file:bg-indigo-600"/><button onClick={() => { if(homeworkFile){ const newHw = { id: Date.now(), fileName: homeworkFile.name, uploadDate: new Date().toISOString(), status: 'pending' }; setCurrentUser({ ...currentUser, homework: [...currentUser.homework, newHw] }); setStudents(prev => prev.map(s => s.id === currentUser.id ? { ...s, homework: [...s.homework, newHw] } : s)); setHomeworkFile(null); alert('تاپشۇرۇق يۈكلەندى!'); } else { alert('ھۆججەت تاللاڭ!'); } }} className="bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 rounded-xl text-white font-bold">يۈكلەش</button></div>
            <div className="space-y-3">{currentUser.homework?.map(hw => (<div key={hw.id} className="bg-white/10 rounded-xl p-4"><div className="flex justify-between items-center flex-wrap gap-2"><span className="text-white">{hw.fileName}</span><span className="text-white/50 text-sm">{new Date(hw.uploadDate).toLocaleDateString()}</span><span className={`px-3 py-1 rounded-full text-xs ${hw.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' : hw.status === 'approved' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>{hw.status === 'pending' ? 'تەكشۈرۈلۈۋاتىدۇ' : hw.status === 'approved' ? 'ماقۇللاندى' : 'تۈزىتىش كېرەك'}</span></div>{hw.comment && <div className="mt-2 p-2 bg-purple-500/20 rounded-lg"><span className="text-purple-300 text-sm">ئىنكاس: {hw.comment}</span></div>}</div>))}</div>
          </div>
        )}

        {activeTab === 'comments' && (
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <h2 className="text-white text-xl font-bold mb-4">💬 ئوقۇتقۇچى ئىنكاسلىرى</h2>
            <div className="space-y-3">{currentUser.comments?.length === 0 ? <p className="text-gray-400 text-center py-8">ھېچقانداق ئىنكاس يوق</p> : currentUser.comments?.map(c => (<div key={c.id} className="bg-white/10 rounded-xl p-4"><div className="flex justify-between text-white/50 text-sm mb-2"><span>👤 {c.author}</span><span>📅 {new Date(c.date).toLocaleDateString()}</span></div><p className="text-white/80">{c.text}</p></div>))}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentInfo;