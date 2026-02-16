import { useState } from "react";
import studentsData from "../../data/students.json";

export default function AdminPanel() {
  const [students, setStudents] = useState(studentsData);

  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const handleSave = (id, field, value) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, [field]: value } : s
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">👑 باشقۇرغۇچى بىتى</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">ID</th>
            <th>ئىسمى</th>
            <th>Email</th>
            <th>تېلىفون</th>
            <th>🛠️ مەشغۇلات</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id} className="border-t">
              <td className="p-2">{s.id}</td>
              <td>
                <input
                  type="text"
                  value={s.name}
                  onChange={(e) => handleSave(s.id, "name", e.target.value)}
                  className="border p-1 rounded w-full"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={s.email}
                  onChange={(e) => handleSave(s.id, "email", e.target.value)}
                  className="border p-1 rounded w-full"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={s.phone}
                  onChange={(e) => handleSave(s.id, "phone", e.target.value)}
                  className="border p-1 rounded w-full"
                />
              </td>
              <td>
                <button
                  onClick={() => handleDelete(s.id)}
                  className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                >
                  ❌ يۇيۇش
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-sm text-gray-500 mt-4">💾 ھازىرچە ساقلاش يەرلىكتە (JSON ئۆزگىرىدۇ، بەكئەندگە چۈشۈرۈش كېرەك بولسا API قوشۇش كېرەك).</p>
    </div>
  );
}
