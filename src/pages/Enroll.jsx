import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Enroll() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    course: "",
    avatar: null,
  });

  const [avatarPreview, setAvatarPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "avatar" && files[0]) {
      const file = files[0];
      setFormData((prev) => ({ ...prev, avatar: file }));
      setAvatarPreview(URL.createObjectURL(file));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🧠 Convert avatar to base64 (optional)
    const reader = new FileReader();
    reader.onloadend = () => {
      const avatarBase64 = reader.result;

      const newStudent = {
        ...formData,
        avatar: avatarBase64,
      };

      const students = JSON.parse(localStorage.getItem("students")) || [];
      students.push(newStudent);
      localStorage.setItem("students", JSON.stringify(students));

      navigate("/students");
    };

    if (formData.avatar) {
      reader.readAsDataURL(formData.avatar);
    } else {
      const students = JSON.parse(localStorage.getItem("students")) || [];
      students.push(formData);
      localStorage.setItem("students", JSON.stringify(students));
      navigate("/students");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6 md:p-12">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <div className="text-center mb-8">
          <img
            src={avatarPreview || "/images/avatar-logo.png"}
            alt="Avatar"
            className="w-20 h-20 mx-auto mb-4 rounded-full shadow-md object-cover"
          />
          <h2 className="text-3xl font-bold text-blue-900">دەرسكە تىزىملىتىش</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="ئىسمى"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-blue-300 rounded px-4 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="ئىلخەت"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-blue-300 rounded px-4 py-2"
          />
          <input
            type="tel"
            name="phone"
            placeholder="تېلفۇن"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-blue-300 rounded px-4 py-2"
          />
          <input
            type="text"
            name="address"
            placeholder="ئادرىس"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-blue-300 rounded px-4 py-2"
          />

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full border border-blue-300 rounded px-4 py-2"
            required
          >
            <option value="">-- دەرس تاللاڭ --</option>
            <option value="Python">Python</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Data Analysis">Data Analysis</option>
          </select>

          <input
            type="file"
            name="avatar"
            accept="image/*"
            onChange={handleChange}
            className="w-full border border-blue-300 rounded px-4 py-2"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition"
          >
            ساقلاش
          </button>
        </form>
      </div>
    </section>
  );
}