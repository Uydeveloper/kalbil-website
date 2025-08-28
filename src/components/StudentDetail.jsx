
import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { python } from "@codemirror/lang-python";
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula";
import students from "../data/students.json";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useReactToPrint } from "react-to-print";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

// Constants for configuration
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/gif"];

// Sub-component for Student Info
function StudentInfo({ student, avatar, setAvatar, editingAvatar, setEditingAvatar }) {
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      alert("❌ پەقەت JPEG، PNG ياكى GIF رەسىملىرىنى يوللاشكا بولىدۇ");
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      alert("❌ رەسىم چوڭلۇقى 2MB دىن ئېشىپ كەتمەسلىكى كېرەك");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatar(reader.result);
      localStorage.setItem(`avatar-${student.id}`, reader.result);
      setEditingAvatar(false);
      alert("🖼️ ئاۋاتار يېڭىلاندى");
    };
    reader.readAsDataURL(file);
  };


    // 🌟 Rotating Quotes
  const quotes = [
  "    بىلىم قانىتىمىز، روھ يولدىشىمىز، كەلگۈسىمىز يورۇقلۇق — KalBiL🌟" ,
  "🌟 KalBiL — With knowledge as our wings and spirit as our guide, the future shines bright.",

  "  يېڭى بىلىم بىلەن يېڭى پۇرسەت   — KalBiL🎉",
  "🎉 A new year is more than time — it’s new knowledge and new opportunities. Begin with KalBiL!",

  "  ئۆگىنىشچىلەرگە كۈچ بەھشىت قىلىپ، جەمئىيەتلەرگە نۇر سېپىدۇ — KalBiL📚",
  "📚 KalBiL — Empowering learners with strength, and spreading light to communities.",

  " ئۇيغۇر تىلىنىڭ كۈچى، ئۇيغۇر روھىنىڭ مەڭگۈلۈكى بىلەن بىلىمغا يول ئېچىدۇ —  KalBiL💡 ",
  "💡 KalBiL — Opening the path to knowledge through the power of the Uyghur language and the eternity of its spirit.",

  "  بىلىم ئارقىلىق ئارزۇلارغا، روھ ئارقىلىق يۇلتۇزلارغا يېتىش  — KalBiL🚀",
  "🚀 KalBiL — Reaching dreams through knowledge, and stars through spirit.",

  "  بىلىم دەۋرىدە ئۆسۈپ، كەلگۈسىدە مېۋە بىرىمىز  — KalBiL🌱",
  "🌱 KalBiL — Growing in the era of knowledge, bearing fruit in the future."
];

  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <div className="flex items-center justify-center mb-6">
      <div className="text-center">
        <div className="relative inline-block">
          <img
            src={avatar}
            alt={student.name}
            className="w-24 h-24 rounded-full border-4 border-yellow-300 cursor-pointer hover:opacity-80"
            onClick={() => setEditingAvatar(true)}
          />
          {editingAvatar ? (
            <input
              type="file"
              accept="image/image05.png"
              onChange={handleAvatarChange}
              className="mt-2"
              aria-label="Upload new avatar"
            />
          ) : (
            <button
              onClick={() => setEditingAvatar(true)}
              className="mt-2 text-sm text-blue-600 underline"
              aria-label="Change avatar"
            >
          
              {/* 🖼️ ئاۋاتارنى ئۆزگەرت */}
            </button>
          )}
        </div>
        <h2 className="text-xl font-bold mt-2">{student.name}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">ID: {student.id}</p>
      </div>
      
    </div>
        {/* 🎡 Rotating Quote */}
      <div className="mt-8 text-center text-sm text-blue-700 dark:text-yellow-400 italic transition-opacity duration-500 ease-in-out">
        {quotes[quoteIndex]}
      </div>
  </>
  );
}

// Sub-component for Course List
function CourseList({ courses }) {
  if (courses.length === 0) {
    return <p className="text-gray-500">🚫 ھازىرچە دەرس يوق</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {courses.map((course, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-32 object-cover rounded mb-2"
          />
          <h4 className="text-lg font-bold">{course.title}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">👩‍🏫 {course.teacher}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">⏱ {course.duration}</p>
          <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div
              className="bg-blue-500 h-3 rounded-full"
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
          <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">
            ✅ {course.progress}% تاماملاندى
          </p>
        </div>
      ))}
    </div>
  );
}

// Sub-component for Progress Chart
function ProgressChart({ courses }) {
  if (courses.length === 0) {
    return <p className="text-gray-500">📊 گرافىك ئۇچۇرى يوق</p>;
  }

  return (
    <div className="h-64 mb-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={courses}>
          <XAxis dataKey="title" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Bar dataKey="progress" fill="#38bdf8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function StudentDetail() {
  const { id } = useParams();
  const { user, loading: authLoading } = useAuth();
  const student = students.find((s) => String(s.id) === id);
  const printRef = useRef();
  
  // use نى useState غا ئۆزگەرتىش
  const [task, setTask] = useState("");
  const [code, setCode] = useState("print('Salam KalBil!')");
  const [output, setOutput] = useState("");
  const [avatar, setAvatar] = useState("");
  const [editingAvatar, setEditingAvatar] = useState(false);
  const [running, setRunning] = useState(false);

  const [form, setForm] = useState({
    attendance: student.attendance || "",
    assignments: student.assignments || "",
    punctuality: student.punctuality || "",
    feedback: student.feedback || "",
  });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };



  const handleDelete = () => {
    const confirmed = window.confirm("❌ بۇ ئوقۇغۇچىنى ئۆچۈرەمسىز؟");
    if (confirmed) {
      const filtered = students.filter((s) => String(s.id) !== String(id));
      localStorage.setItem("users", JSON.stringify(filtered));
      alert("🗑️ ئۆچۈرۈش مۇۋاپىقىيەتلىك بولدى!");
    }
  };

  useEffect(() => {
  const savedHistory = localStorage.getItem(`history_${id}`);
  console.log("📦 Raw history from localStorage:", savedHistory);
  if (savedHistory) {
    try {
      const parsed = JSON.parse(savedHistory);
      console.log("✅ Parsed history:", parsed);
      setHistory(Array.isArray(parsed) ? parsed : []);
    } catch (e) {
      console.error("❌ JSON parse error:", e);
      setHistory([]);
    }
  }
}, [id]);



  




  useEffect(() => {
    const savedAvatar = localStorage.getItem(`avatar-${id}`);
    if (savedAvatar) {
      setAvatar(savedAvatar);
    } else {
      setAvatar(student?.avatar || "/avatars/default.png");
    }
  }, [id, student]);

  const handleRun = async () => {
    if (!code.trim()) {
      setOutput("❌ كود بوش بولسا ئىجرا قىلغىلى بولمايدۇ");
      return;
    }
    setRunning(true);
    try {
      const res = await fetch("http://localhost:5000/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      if (!res.ok) {
        throw new Error("Server error");
      }
      const data = await res.json();
      setOutput(data.output || "✅ ئىجرا قىلىندى، ئەمما نەتىجە يوق");
    } catch (err) {
      setOutput(`❌ خاتالىق: ${err.message}`);
    } finally {
      setRunning(false);
    }
  };

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: `${student?.name}-KalBil`,
    onAfterPrint: () => alert("📄 PDF چىقىرىلدى"),
  });

  const handleSave = () => alert("✅ تاپشۇرۇق ساقلاندى");
  const handleShare = () => alert("📤 شەيىر قىلىندى");
  const handleCopy = () => {
    navigator.clipboard.writeText(task + "\n\n" + code);
    alert("📋 كوپى قىلىندى");
  };
  const handleEmail = () => {
    const body = encodeURIComponent(`تاپشۇرۇق:\n${task}\n\nPython كود:\n${code}`);
    window.location.href = `mailto:?subject=KalBil تاپشۇرۇق&body=${body}`;
  };

  if (authLoading) {
    return <div className="p-6 text-center">⏳ يۈكلىنىۋاتىدۇ...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!student) {
    return (
      <div className="p-6 text-center text-red-600">❌ ئوقۇغۇچى تېپىلمىدى</div>
    );
  }

  if (user.role === "student" && user.id !== id) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
    <div className="max-w-5xl mx-auto p-4 sm:p-6 bg-yellow-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-lg shadow-md">
      <div ref={printRef}>
        <StudentInfo
          student={student}
          avatar={avatar}
          setAvatar={setAvatar}
          editingAvatar={editingAvatar}
          setEditingAvatar={setEditingAvatar}
        />

        <h3 className="font-semibold mb-2">📚 ئالغان دەرسلىرى:</h3>
        <CourseList courses={student.courses} />

        <h3 className="font-semibold mb-2">📊 تاماملاش گرافىكىسى:</h3>
        <ProgressChart courses={student.courses} />

        <label htmlFor="task" className="block font-semibold mb-1">
          📘 تاپشۇرۇق تېكىستى:
        </label>
        <textarea
          id="task"
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md font-mono mb-4"
          rows={6}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="تاپشۇرۇقنى بۇ يەردە يېزىڭ..."
          aria-label="Task description"
        />

        <label className="block font-semibold mb-1">🐍 Python كود:</label>
        <CodeMirror
          value={code}
          height="200px"
          extensions={[python()]}
          theme={dracula}
          onChange={(value) => setCode(value)}
          className="mb-4 border border-gray-300 rounded-md"
          aria-label="Python code editor"
        />

        <button
          onClick={handleRun}
          disabled={running}
          className={`px-4 py-2 rounded transition ${
            running ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          } text-white`}
          aria-label={running ? "Running code" : "Run Python code"}
        >
          {running ? "⏳ ئىجرا قىلىنىۋاتىدۇ..." : "▶️ كودنى ئىجرا قىلىش"}
        </button>

        <div className="mt-6 bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
          <h3 className="font-semibold mb-2">📤 نەتىجە:</h3>
          <pre className="whitespace-pre-wrap font-mono">{output}</pre>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <button
          onClick={handleSave}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          aria-label="Save task"
        >
          💾 ساقلاش
        </button>
        <button
          onClick={handleShare}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          aria-label="Share task"
        >
          📤 شەيىر قىلىش
        </button>
        <button
          onClick={handleCopy}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          aria-label="Copy task and code"
        >
          📋 كوپىلاش
        </button>
        <button
          onClick={handleEmail}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          aria-label="Email task and code"
        >
          ✉️ Email يوللاش
        </button>

        
      </div>
      {/* 🔙 Back */}
      <div className="text-center mt-6">
        <Link
          to="/students-list"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          ⬅ قايتىش
        </Link>
      </div>
    </div>


    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-center text-blue-600 dark:text-yellow-400">
        🧑‍🎓 ئوقۇغۇچى تەپسىلاتى
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">📚 دەرسكە قاتناشقان ئەھۋالى</label>
          <input
            type="text"
            name="attendance"
            value={form.attendance}
            onChange={handleChange}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">📝 تاپشۇرۇق ئىشلەش ئەھۋالى</label>
          <input
            type="text"
            name="assignments"
            value={form.assignments}
            onChange={handleChange}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">⏱️ پۇرۇجىنى ۋاقىتدا ئىشلەش ئەھۋالى</label>
          <input
            type="text"
            name="punctuality"
            value={form.punctuality}
            onChange={handleChange}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">🗣️ ئاخىرقى باھا</label>
          <textarea
            name="feedback"
            value={form.feedback}
            onChange={handleChange}
            rows={4}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            placeholder="ئوقۇغۇچى ھەققىدە باھا يېزىڭ..."
          />
        </div>
      </div>

      {/* 🔘 Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mt-6">
        <button
          onClick={handleSave}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          💾 ساقلاش
        </button>
        <button
          onClick={handleEmail}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          📧 ئۇچۇر يوللاش
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          🗑️ ئۆچۈرۈش
        </button>
      </div>

     
      
    </div>
     {/* 🗂️ History Cards */}
      <div className="mt-10 space-y-4">
        <h3 className="text-xl font-bold text-gray-700 dark:text-white">🗂️ ئالدىنقى ساقلاندىغان مەزمۇنلار</h3>
        {Array.isArray(history) && history.map((entry, index)  => (
          <div key={index} className="p-4 border rounded bg-gray-50 dark:bg-gray-700">
            <p><strong>🕒 ۋاقىت:</strong> {entry.timestamp}</p>
            <p><strong>📚 قاتناشقان:</strong> {entry.attendance}</p>
            <p><strong>📝 تاپشۇرۇق:</strong> {entry.assignments}</p>
            <p><strong>⏱️ پۇرۇجى:</strong> {entry.punctuality}</p>
            <p><strong>🗣️ باھا:</strong> {entry.feedback}</p>
          </div>
        ))}
      </div>

   

    </>
  );
}
