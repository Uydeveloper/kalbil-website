import { useState } from "react";

export default function AddStudentForm({ onAdd, onCancel }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [course, setCourse] = useState("");
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    reader.onloadend = () => {
      const newStudent = {
        id: Date.now(),
        name: `${name} ${surname}`,
        nickname,
        phone,
        address,
        avatar: reader.result || "/avatars/default.png",
        courses: [
          {
            title: course,
            teacher: "Unknown",
            duration: "نامەلۇم",
            progress,
            image: "/courses/default.png"
          }
        ]
      };

      // ✅ localStorage قا ساقلاش
      const existing = JSON.parse(localStorage.getItem("students")) || [];
      const updated = [...existing, newStudent];
      localStorage.setItem("students", JSON.stringify(updated));

      onAdd(newStudent);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      reader.onloadend(); // fallback
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-6">
      <h3 className="text-xl font-bold mb-4">📝 يېڭى ئوقۇغۇچى قوشۇش</h3>

      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="ئىسمى" required className="w-full mb-2 p-2 border rounded" />
      <input value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="فامىلىسى" required className="w-full mb-2 p-2 border rounded" />
      <input value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="لەقىم" className="w-full mb-2 p-2 border rounded" />
      <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="تېلېفون" className="w-full mb-2 p-2 border rounded" />
      <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="ئادرىس" className="w-full mb-2 p-2 border rounded" />

      <select value={course} onChange={(e) => setCourse(e.target.value)} required className="w-full mb-2 p-2 border rounded">
        <option value="">-- دەرس تاللاڭ --</option>
        <option value="Python">Python</option>
        <option value="JavaScript">JavaScript</option>
        <option value="React">React</option>
        <option value="Machine Learning">Machine Learning</option>
      </select>

      <input type="number" value={progress} onChange={(e) => setProgress(Number(e.target.value))} placeholder="تاماملاش %" required className="w-full mb-2 p-2 border rounded" />

      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} className="w-full mb-4" />

      <div className="flex gap-2 mt-4">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">ساقلاش</button>
        <button type="button" onClick={onCancel} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">تاقاش</button>
      </div>
    </form>
  );
}