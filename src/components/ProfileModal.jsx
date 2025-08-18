// src/components/ProfileModal.jsx
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";

export default function ProfileModal({ onClose }) {
  const { user, setUser } = useContext(UserContext);
  const [form, setForm] = useState(user);
  const [original, setOriginal] = useState(user);
  const [changed, setChanged] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [preview, setPreview] = useState(user.avatar || "");

  useEffect(() => {
    setChanged(JSON.stringify(form) !== JSON.stringify(original));
  }, [form, original]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser(form);
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const updated = users.map((u) =>
      u.username === user.username ? form : u
    );
    localStorage.setItem("users", JSON.stringify(updated));
    alert("✅ ئۇچۇر يېڭىلاندى!");
    setOriginal(form);
    setChanged(false);
    onClose(); // ✅ تاقاش
  };

  const handleCancel = () => {
    setForm(original);
    setPreview(original.avatar || "");
    setChanged(false);
    onClose(); // ✅ تاقاش
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, avatar: reader.result });
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
   <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start  pt-24 z-50">
  <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-lg w-full max-w-xl relative">

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl text-gray-600 hover:text-red-600"
        >
          ❌
        </button>

        <h2 className="text-2xl font-bold mb-4">👤 پروفايىل ئۇچۇرى</h2>

        <label className="block mb-2 font-semibold">👤 ئىسم</label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded"
          disabled
        />

        <label className="block mb-2 font-semibold">📱 تېلېفون نۇمۇرى</label>
        <input
          type="text"
          name="phone"
          value={form.phone || ""}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded"
        />

        <label className="block mb-2 font-semibold">📧 Email</label>
        <input
          type="email"
          name="email"
          value={form.email || ""}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded"
        />

        <label className="block mb-2 font-semibold">🔒 مەخپى نۇمۇر</label>
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 text-sm text-gray-600"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <label className="block mb-2 font-semibold">🖼️ Avatar</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="w-full mb-4"
        />

        {preview && (
          <img
            src={preview}
            alt="Avatar"
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
        )}

        <div className="flex gap-4">
          <button
            onClick={handleSave}
            className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            💾 ساقلاش
          </button>

          {!changed && (
            <button
              onClick={handleCancel}
              className="flex-1 bg-gray-400 text-white py-2 rounded hover:bg-gray-500"
            >
              ❌ تاقاش
            </button>
          )}
        </div>
      </div>
    </div>
  );
}