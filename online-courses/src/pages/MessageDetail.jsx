import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";

export default function MessageDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [msg, setMsg] = useState(null);
  const [error, setError] = useState(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    axios.get(`/api/messages/${id}`)
      .then((res) => setMsg(res.data))
      .catch(() => {
        setError("⚠️ خەۋەرنى يۈكلەش مەغلۇپ بولدى. بۇ خەۋەر تېپىلمىدى ياكى ئۆچۈرۈلگەن.");
      });
  }, [id]);

  const handleCommentSubmit = () => {
    if (!comment.trim()) return;
    const newComment = {
      author: user?.username || "Guest",
      text: comment,
      time: new Date().toLocaleString(),
    };
    setMsg({
      ...msg,
      comments: [...(msg.comments || []), newComment],
    });
    setComment("");
  };

  if (error) {
    return (
      <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow text-center">
        <p className="text-red-600 text-lg font-semibold mb-4">{error}</p>
        <button
          onClick={() => navigate("/messages")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          ◀️ قايتىش
        </button>
      </div>
    );
  }

  if (!msg) {
    return <p className="text-center text-gray-500 dark:text-gray-400">⏳ يۈكلەۋاتىدۇ...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-lg shadow-md">
      {/* ✅ Header: Avatar + Author + Time */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={msg.avatar || "/images/default-avatar.png"}
          alt="avatar"
          className="w-16 h-16 rounded-full border-4 border-blue-500"
        />
        <div>
          <h4 className="text-lg font-semibold">{msg.author}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{msg.time}</p>
        </div>
      </div>

      {/* ✅ Title + Body */}
      <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">{msg.title}</h2>
      <p className="whitespace-pre-line mb-6 text-gray-800 dark:text-gray-300">{msg.body}</p>

      {/* ✅ Image */}
      {msg.image && (
        <img
          src={msg.image}
          alt="message"
          className="w-full max-h-[400px] object-cover rounded-lg shadow mb-6"
        />
      )}

      {/* ✅ Stats */}
      <div className="flex justify-between items-center text-sm mb-6">
        <span>👁 {msg.views || 0}</span>
        <span>❤️ {msg.likes || 0}</span>
        <span>💬 {msg.comments?.length || 0}</span>
      </div>

      {/* ✅ Comment Input */}
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <h3 className="text-lg font-bold mb-2">💬 ئىنكاس يوللاش</h3>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={3}
          placeholder="خەۋەرگە ئىنكاس يېزىڭ..."
          className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={handleCommentSubmit}
          className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          ➕ يوللاش
        </button>
      </div>

      {/* ✅ Comments List */}
      {msg.comments?.length > 0 && (
        <div className="space-y-4">
          {msg.comments.map((cmt, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-3 rounded shadow flex items-start gap-3">
              <img
                src="/images/default-avatar.png"
                alt="comment avatar"
                className="w-8 h-8 rounded-full border"
              />
              <div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>{cmt.author}</strong> <span className="text-xs text-gray-500 dark:text-gray-400">({cmt.time})</span>
                </p>
                <p className="mt-1 text-sm text-gray-800 dark:text-gray-200">{cmt.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}