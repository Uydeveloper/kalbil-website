import { useState } from "react";
import { useNavigate } from "react-router-dom";
import students from "../../data/students.json";

export default function Students() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const found = students.find(
      (s) => s.id === id && s.password === password
    );

    if (found) {
      if (found.role === "admin") {
        setMessage(`👑 باشقۇرغۇچى كىرىشى مۇۋاپىقىيەتلىك، خۇش كەپسىز ${found.name}`);
        navigate("/admin");
      } else {
        setMessage(`🎉 خۇش كەپسىز ${found.name}`);
        navigate(`/students/${found.id}`);
      }
    } else {
      setMessage("⚠️ ID ياكى مەخپى نومۇر خاتا!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg space-y-4">
      <h1 className="text-2xl font-bold text-center">🧑‍🎓 كىرىش بىتى</h1>

      <input
        type="text"
        placeholder="ID كىرگۈزۈڭ"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="password"
        placeholder="مەخپى نومۇر"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        🚀 كىرىش
      </button>

      {message && <p className="text-center text-sm mt-3">{message}</p>}
    </div>
  );
}
