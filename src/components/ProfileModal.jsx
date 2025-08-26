import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";

export default function ProfileModal({ onClose }) {
  const { user, setUser } = useContext(UserContext);
  const [form, setForm] = useState({ ...user, countryCode: user.countryCode || "+81" });
  const [original, setOriginal] = useState(user);
  const [changed, setChanged] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [preview, setPreview] = useState(user.avatar || "");

  // List of country codes
  const countryCodes = [
    { code: "+81", name: "ياپونىيە (+81)" },
    { code: "+86", name: "جۇڭگو (+86)" },
    { code: "+1", name: "ئامېرىكا (+1)" },
    { code: "+44", name: "ئەنگلىيە (+44)" },
    { code: "+90", name: "تۈركىيە (+90)" },
    // Add more country codes as needed
  ];

  useEffect(() => {
    setChanged(JSON.stringify(form) !== JSON.stringify(original));
  }, [form, original]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser(form);
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const updated = users.map((U) =>
      U.username === user.username ? form : U
    );
    localStorage.setItem("users", JSON.stringify(updated));
    alert("✅ ئۇچۇر مۇۋاپىقىيەتلىك يېڭىلاندى!");
    setOriginal(form);
    setChanged(false);
    onClose();
  };

  const handleCancel = () => {
    setForm(original);
    setPreview(original.avatar || "");
    setChanged(false);
    onClose();
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
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl sm:text-2xl text-gray-500 hover:text-red-500 transition-colors"
        >
          ❌
        </button>

        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
          👤 پروفايىل ئۇچۇرى
        </h2>

        {/* Name */}
        <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">👤 ئىسم</label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          disabled
        />

        {/* Phone */}
        <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">📱 تېلېفون نۇمۇرى</label>
        <div className="flex gap-2 mb-4">
          <select
            name="countryCode"
            value={form.countryCode}
            onChange={handleChange}
            className="w-1/3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800"
          >
            {countryCodes.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
          <input
            type="tel"
            name="phone"
            value={form.phone || ""}
            onChange={handleChange}
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="ئۇنۋان: 999999999"
            className="w-2/3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-gray-800 dark:text-gray-200"
          />
        </div>

        {/* Email */}
        <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">📧 Email</label>
        <input
          type="email"
          name="email"
          value={form.email || ""}
          onChange={handleChange}
          placeholder="example@mail.com"
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none text-gray-800 dark:text-gray-200"
        />

        {/* Password */}
        <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">🔒 مەخپى نۇمۇر</label>
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg pr-12 focus:ring-2 focus:ring-red-500 outline-none text-gray-800 dark:text-gray-200"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lg text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        {/* Avatar Upload */}
        <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">🖼️ Avatar</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="w-full mb-4 text-sm text-gray-700 dark:text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-600"
        />

        {preview && (
          <div className="flex justify-center mb-4">
            <img
              src={preview}
              alt="Avatar"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-gray-300 dark:border-gray-600 object-cover shadow-md"
            />
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={handleSave}
            disabled={!changed}
            className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            💾 ساقلاش
          </button>

          <button
            onClick={handleCancel}
            className="flex-1 bg-gray-500 text-white py-2 rounded-lg font-semibold hover:bg-gray-600 transition"
          >
            ❌ تاقاش
          </button>
        </div>
      </div>
    </div>
  );
}