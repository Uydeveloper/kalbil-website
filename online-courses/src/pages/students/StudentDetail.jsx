import { useParams, useNavigate } from "react-router-dom";
import students from "../../data/students.json";

export default function StudentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const student = students.find((s) => String(s.id) === id);

  if (!student) {
    return <p className="text-center text-red-500">⚠️ بۇ ID بار ئەمەس</p>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">
        👤 {student.name} نىڭ تەپسىلاتى
      </h2>

      <p><b>ID:</b> {student.id}</p>
      <p><b>Email:</b> {student.email}</p>
      <p><b>تېلىفون:</b> {student.phone}</p>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">📘 دەرسكە قاتنىشىش ئەھۋالى</h3>
        <ul className="list-disc ml-6">
          {student.courses?.map((c, i) => (
            <li key={i}>
              {c.title} - {c.progress}% تاماملاندى
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">📝 تاپشۇرۇقلار</h3>
        <ul className="list-disc ml-6">
          {student.assignments?.map((a, i) => (
            <li key={i}>
              {a.title} - {a.status}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">🚀 پۇرۇژىلەر</h3>
        <ul className="list-disc ml-6">
          {student.projects?.map((p, i) => (
            <li key={i}>
              {p.title} - {p.status}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mt-6 w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        ◀️ قايتىش
      </button>
    </div>
  );
}
