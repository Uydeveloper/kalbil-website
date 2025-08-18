import { useState } from "react";

export default function Enroll() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    course: "",
    avatar: null,
  });

  const [avatarPreview, setAvatarPreview] = useState(null); // ✅ preview URL

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "avatar" && files[0]) {
      const file = files[0];
      setFormData((prev) => ({ ...prev, avatar: file }));
      setAvatarPreview(URL.createObjectURL(file)); // ✅ create preview
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📦 Submitted:", formData);
    // TODO: Send to backend or show success modal
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6 md:p-12">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
        {/* Header with dynamic avatar */}
        <div className="text-center mb-8">
          <img
            src={avatarPreview || "/images/avatar-logo.png"}
            alt="Avatar"
            className="w-20 h-20 mx-auto mb-4 rounded-full shadow-md object-cover"
          />
          <h2 className="text-3xl font-bold text-blue-900 drop-shadow">دەرسكە تىزىملىتىش</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-blue-800 font-semibold mb-1">تاللايدىغان دەرس تىمىسى</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full border border-blue-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">-- تاللاڭ --</option>
              <option value="Quantum Computing">Quantum Computing</option>
              <option value="Neural Networks">Neural Networks</option>
              <option value="Uyghur Literature">python</option>
              <option value="Quantum Computing">Machine learning</option>
              <option value="Neural Networks">Data Analysis</option>
              <option value="Uyghur Literature">Statistics</option>
            </select>
          </div>

          <div>
            <label className="block text-blue-800 font-semibold mb-1">قاتناشقۇچى ئىسمى</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-blue-300 rounded px-4 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-blue-800 font-semibold mb-1">ئىلخەت</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-blue-300 rounded px-4 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-blue-800 font-semibold mb-1">تېلفۇن</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-blue-300 rounded px-4 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-blue-800 font-semibold mb-1">ئادرىس</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-blue-300 rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-blue-800 font-semibold mb-1">رەسىم يوللاش</label>
            <input
              type="file"
              name="avatar"
              accept="image/*"
              onChange={handleChange}
              className="w-full border border-blue-300 rounded px-4 py-2"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded shadow transition duration-300"
            >
              ساقلاش
            </button>
            <button
              type="reset"
              onClick={() => {
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  address: "",
                  course: "",
                  avatar: null,
                });
                setAvatarPreview(null); // ✅ clear preview
              }}
              className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-blue-900 font-semibold rounded shadow transition duration-300"
            >
              ئېدىت قىلىش
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}