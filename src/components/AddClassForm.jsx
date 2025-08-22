import { useState } from "react";

export default function AddClassForm({ onAdd, onCancel }) {
  const [formData, setFormData] = useState({
    title: "",
    platform: "Zoom",
    time: "",
    link: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.link || !formData.time) return;
    onAdd({ ...formData, id: Date.now() });
    setFormData({ title: "", platform: "Zoom", time: "", link: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow mb-8">
      <h3 className="text-xl font-bold text-gray-800 mb-4">➕ يېڭى دەرس قوشۇش</h3>

      <input
        type="text"
        name="title"
        placeholder="دەرس نامى (مەسىلەن: Python دەرسى)"
        value={formData.title}
        onChange={handleChange}
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
      />

      <select
        name="platform"
        value={formData.platform}
        onChange={handleChange}
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
      >
        <option value="Zoom">Zoom</option>
        <option value="Google Meet">Google Meet</option>
        <option value="Microsoft Teams">Microsoft Teams</option>
      </select>

      <input
        type="datetime-local"
        name="time"
        value={formData.time}
        onChange={handleChange}
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
      />

      <input
        type="url"
        name="link"
        placeholder="دەرس link (https://...)"
        value={formData.link}
        onChange={handleChange}
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
      />

      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          قوشۇش
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
        >
          بېكىتىش
        </button>
      </div>
    </form>
  );
}