import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function LoginForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle"); // ✅ ئۇچۇر كۆرسىتىش ئۈچۈن
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // ✅ قىممەت قوغداش
    if (!id.trim() || !password.trim()) {
      setStatus("error");
      return;
    }

    const success = login(id, password);

    if (success) {
      setStatus("success");

      // ✅ رولغا قاراپ redirect
      const userRole = localStorage.getItem("role");
      const userId = localStorage.getItem("id");

      setTimeout(() => {
        if (userRole === "admin") {
          navigate("/admin");
        } else {
          navigate(`/students/${userId}`);
        }
      }, 1000);
    } else {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-900 p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-white">
        لوگىن قىلسۇن
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          required
          type="text"
          placeholder="ID نى كىرگۈزۈڭ"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
        />

        <input
          required
          type="password"
          placeholder="مەخپى نۇمۇر"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          لوگىن
        </button>
      </form>

      {/* ✅ ئۇچۇر كۆرسىتىش */}
      {status === "success" && (
        <p className="mt-4 text-green-600 text-center font-semibold">
          ✅ كىرۈش مۇۋاپىقيەتلىك بولدى! Redirect قىلىنىۋاتىدۇ...
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-600 text-center font-semibold">
          ❌ ID ياكى مەخپى نۇمۇر خاتا. قايتا كىرگۈزۈڭ.
        </p>
      )}
    </div>
  );
}