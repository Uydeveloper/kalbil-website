import { useState } from "react";
import { useNavigate } from "react-router-dom";
import students from "../../data/students.json";

export default function Students({ onClose }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const found = students.find(
      (s) => String(s.id) === String(id) && s.password === password
    );

    if (found) {
      setMessage(`🎉 خۇش كەپسىز ${found.name}`);
      setTimeout(() => {
        if (found.role === "admin") {
          navigate("/students-list");
        } else {
          navigate(`/students/${found.id}`);
        }
        onClose?.(); // ✅ مودالىنى تاقاش
      }, 500);
    } else {
      setMessage("⚠️ ID ياكى مەخپى نومۇر خاتا!");
    }
  };

  return (
    <div className="relative max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg space-y-4">
      {/* ❌ تاقاش ئايكونى */}
      <button
        onClick={onClose}
        className="absolute top-2 left-3 text-blue-500 hover:text-red-600 text-m font-bold"
        title="🎉ئوقۇغۇچلار ئۇچۇر مەركىزگە خوش كلدىڭىز KalBil"
      >
        KalBiL
      </button>

      <h1 className="text-2xl font-bold text-center text-blue-600 dark:text-yellow-400">
        🧑‍🎓 كىرىش بىتى
      </h1>

      {/* 🆔 ID */}
      <input
        type="text"
        placeholder="🆔 ID كىرگۈزۈڭ"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="w-full p-2 border rounded mb-2 dark:bg-gray-700 dark:text-white"
      />

      {/* 🔒 Password + 👁️ Toggle */}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="🔒 مەخپى نومۇر"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-2 pr-10 dark:bg-gray-700 dark:text-white"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 dark:text-gray-300"
          title={showPassword ? "يوشۇرۇش" : "كۆرۈش"}
        >
          {showPassword ? "🙈" : "👁️"}
        </button>
      </div>

      {/* 🚀 Login Button */}
      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
      >
        🚀 كىرىش
      </button>

      {/* 📢 Message */}
      {message && (
        <p
          className={`text-center text-sm mt-3 font-semibold ${
            message.includes("خاتا") ? "text-red-500" : "text-green-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}