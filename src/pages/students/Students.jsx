import { useState } from "react";
import students from "../../data/students.json";

export default function Students() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [student, setStudent] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    const found = students.find(
      (s) => s.id === id && s.password === password
    );

    if (found) {
      setStudent(found);
      setLoggedIn(true);
      setMessage(`🎉 كىرشى مۇۋاپىقىيەتلىك! خۇش كەپسىز ${found.name}`);
    } else {
      setMessage("⚠️ كىرگۈزگەن ID ياكى مەخپى نومۇر ناتوغرا. باشقۇرغۇچى بىلەن ئالاقىلىشىڭ.");
    }
  };

  const handlePasswordChange = () => {
    if (!newPassword) {
      setMessage("⚠️ يېڭى مەخپى نومۇرنى كىرگۈزۈڭ!");
      return;
    }
    // مەخپى نومۇرنى ئۆزگەرتىش
    student.password = newPassword;
    setMessage("✅ مەخپى نومۇر مۇۋاپىقىيەتلىك ئۆزگەردى!");
    setNewPassword("");
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setId("");
    setPassword("");
    setStudent(null);
    setMessage("🚪 چىقىپ كەتتىڭىز");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg space-y-4">
      <h1 className="text-2xl font-bold text-center">🧑‍🎓 ئوقۇغۇچىلار كىرىش سىستېمىسى</h1>

      {!loggedIn ? (
        <>
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
        </>
      ) : (
        <>
          <p className="text-green-600 font-semibold">{message}</p>
          <p className="mt-2">👋 {student?.name}</p>

          <div className="mt-4">
            <input
              type="password"
              placeholder="يېڭى مەخپى نومۇر"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 border rounded mb-2"
            />
            <button
              onClick={handlePasswordChange}
              className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
            >
              🔑 مەخپى نومۇرنى ئۆزگەرت
            </button>
          </div>

          <button
            onClick={handleLogout}
            className="w-full bg-red-600 text-white p-2 rounded mt-3 hover:bg-red-700"
          >
            🚪 چىقىش
          </button>
        </>
      )}

      {message && <p className="text-center text-sm mt-3">{message}</p>}
    </div>
  );
}
