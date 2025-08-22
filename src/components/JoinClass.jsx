import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddClassForm from "./AddClassForm";
import { useUser } from "../context/UserContext";


const initialLinks = [
  {
    id: 1,
    title: "🧠 ئاساس بىلىم (Python)",
    platform: "Zoom",
    time: "2025-08-22T14:00",
    link: "https://zoom.us/j/123456789"
  },
  {
    id: 2,
    title: "🤖 كىۋانىت ماشىنا ئۈگنىش",
    platform: "Google Meet",
    time: "2025-08-23T10:00",
    link: "https://meet.google.com/abc-defg-hij"
  },
  {
    id: 3,
    title: "🧬 نىرۋاتورى ئۈگنىش",
    platform: "Microsoft Teams",
    time: "2025-08-24T16:30",
    link: "https://teams.microsoft.com/l/meetup-join/xyz"
  },
  {
    id: 4,
    title: "📊 سىاتستىكا",
    platform: "Zoom",
    time: "2025-08-25T13:00",
    link: "https://zoom.us/j/987654321"
  },
  {
    id: 5,
    title: "📈 سانلىق مەلۇمات ئانالىز",
    platform: "Google Meet",
    time: "2025-08-26T15:30",
    link: "https://meet.google.com/xyz-abc-def"
  }
];

export default function JoinClass() {
  const [classLinks, setClassLinks] = useState(initialLinks);
  const [joined, setJoined] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleJoin = (link, id) => {
    window.open(link, "_blank");
    setJoined(id);
  };

  const handleAddClass = (newClass) => {
    setClassLinks([...classLinks, newClass]);
    setShowForm(false);
  };

   const user = useUser();
   const isAdmin = user?.role === "admin";

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        {/* 🎓 باش تېما */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            🎓 Live دەرسكە قاتنىشىش
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            تۆۋەندىكى دەرسلەر Zoom, Google Meet, ۋە Teams ئارقىلىق ئۆتكۈزۈلىدۇ. ۋاقتى كەلگەندە «قاتنىشىش» كۇنۇپكىسىنى بېسىڭ.
          </p>
        </div>

        {/* ✅ قايتىش + قوشۇش بوتۇنلىرى */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <button
            onClick={() => navigate("/students")}
            className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 shadow transition"
          >
            ⬅️ KalBiL غا قايتىش
          </button>
         {isAdmin && (
  <button
    onClick={() => setShowForm(true)}
    className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 shadow transition"
  >
    ➕ يېڭى دەرس قوشۇش
  </button>
)}

{isAdmin && showForm && (
  <AddClassForm onAdd={handleAddClass} onCancel={() => setShowForm(false)} />
)}
        </div>

        {/* ✅ فورما كۆرۈنۈش */}
        {showForm && (
          <AddClassForm onAdd={handleAddClass} onCancel={() => setShowForm(false)} />
        )}

        {/* 📚 دەرس تىزىمى */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {classLinks.map((cls) => (
            <div
              key={cls.id}
              className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold text-blue-800 mb-2">{cls.title}</h3>
              <p className="text-sm text-gray-600 mb-1">🕒 ۋاقتى: {new Date(cls.time).toLocaleString()}</p>
              <p className="text-sm text-gray-600 mb-4">🔗 پلاتفورما: {cls.platform}</p>
              <button
                onClick={() => handleJoin(cls.link, cls.id)}
                className={`w-full px-4 py-2 rounded text-white font-semibold transition ${
                  joined === cls.id ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {joined === cls.id ? "✅ قاتناشتىڭىز" : "دەرسكە قاتنىشىش"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}