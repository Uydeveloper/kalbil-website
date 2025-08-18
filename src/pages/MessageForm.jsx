import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function MessageForm({ onPost }) {
  const { user, avatar } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!title.trim() || !body.trim()) {
      setError("❌ تېما ۋە مەزمۇن تولۇق بولۇشى كېرەك");
      return;
    }

    const newMessage = {
      id: Date.now(),
      title: title.trim(),
      body: body.trim(),
      image: image.trim(),
      author: user?.username || "Guest",
      avatar: avatar || "/images/default-avatar.png",
      time: new Date().toLocaleString(),
      likes: 0,
      views: 0,
      comments: [],
    };

    if (typeof onPost === "function") {
      onPost(newMessage);
      setTitle("");
      setBody("");
      setImage("");
      setPreview(false);
      setError("");
    } else {
      console.warn("⚠️ onPost function not provided");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">📝 خەۋەر يوللاش</h2>

      {error && (
        <div className="mb-4 text-red-600 text-sm font-medium">
          {error}
        </div>
      )}

      <input
        type="text"
        placeholder="خەۋەر تېمىسى (Title)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-4 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
      />

      <textarea
        placeholder="خەۋەر مەزمۇنى (Body)"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={6}
        className="w-full mb-4 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded resize-none focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
      />

      <input
        type="text"
        placeholder="رەسىم URL (ئىختىيارى)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full mb-4 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
      />

      {image && (
        <div className="mb-4">
          <button
            onClick={() => setPreview(!preview)}
            className="text-sm text-blue-600 hover:underline"
          >
            {preview ? "👁‍🗨 رەسىمنى يوشۇر" : "👁‍🗨 رەسىمنى كۆرسەت"}
          </button>
          {preview && (
            <img
              src={image}
              alt="Preview"
              className="mt-2 max-h-64 rounded shadow border"
              onError={(e) => {
                e.target.src = "/images/default-preview.png";
              }}
            />
          )}
        </div>
      )}

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          يوللىغۇچى: <strong>{user?.username || "Guest"}</strong>
        </div>
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          💾 ساقلاش
        </button>
      </div>
    </div>
  );
}