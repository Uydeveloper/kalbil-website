import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginForm({ onClose, onSuccess }) {
  const { login } = useAuth();
  const [form, setForm] = useState({ id: "", password: "" });
  const [message, setMessage] = useState("");

  // ✅ input نى يېڭىلاش
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await login(form.id, form.password);

    if (success) {
      toast.success("✅ كىرىش مۇۋەپپەقىيەتلىك بولدى!", { position: "top-center" });
      setTimeout(() => {
        onSuccess?.(); 
        onClose?.();   
      }, 800);
    } else {
      setMessage("❌ ID ياكى Password خاتا!");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
          🔐 Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            name="id"
            placeholder="🆔 ID"
            value={form.id}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="🔒 Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            🔓 تىزملىتىش
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-red-600 dark:text-red-400 font-semibold">
            {message}
          </p>
        )}

        <div className="mt-4 text-center">
          <button onClick={onClose} className="text-red-500 hover:underline">
            ❌ تاقاش
          </button>
        </div>
      </div>
    </div>
  );
}
