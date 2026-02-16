import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function MessageCard({ msg, onDelete }) {
  const navigate = useNavigate();
  const [likes, setLikes] = useState(msg.likes || 0);
  const { isLoggedIn, userRole } = useAuth();

  const handleLike = () => {
    if (!isLoggedIn) return;
    setLikes((prev) => prev + 1);
    // Optional: axios.post(`/api/messages/${msg.id}/like`)
  };

  const handleDelete = () => {
    if (!isLoggedIn || userRole !== "admin") return;
    if (window.confirm("راستىنلا ئۆچۈرەمسىز؟")) {
      onDelete(msg.id);
    }
  };

  const handleView = () => {
    if (!isLoggedIn) return;
    navigate(`/messages/${msg.id}`);
  };

  const handleComment = () => {
    if (!isLoggedIn) return;
    navigate(`/messages/${msg.id}#comments`);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 mb-6">
      {/* ✅ Header: Avatar + Author */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={msg.avatar || "/images/default-avatar.png"}
          alt="Avatar"
          className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
        />
        <div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            {msg.author}
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{msg.time}</p>
        </div>
      </div>

      {/* ✅ Title */}
      <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2">
        {msg.title}
      </h3>

      {/* ✅ Body */}
      <p className="text-gray-800 dark:text-gray-300 mb-4 whitespace-pre-line">
        {msg.body.length > 300 ? msg.body.slice(0, 300) + "..." : msg.body}
      </p>

      {/* ✅ Image Preview */}
      {msg.image && (
        <div className="mb-4">
          <img
            src={msg.image}
            alt="Message"
            className="w-full max-h-64 object-cover rounded-lg shadow"
          />
        </div>
      )}

      {/* ✅ Stats */}
      <div className="flex justify-between text-sm mb-2 text-gray-600 dark:text-gray-400">
        <span>👁 {msg.views || 0}</span>
        <span>❤️ {likes}</span>
        <span>💬 {msg.comments?.length || 0}</span>
      </div>

      {/* ✅ Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* ✅ View/Delete */}
        <div className="flex gap-4 text-sm">
          {isLoggedIn ? (
            <>
              <button
                onClick={handleView}
                className="text-blue-600 hover:underline"
              >
                ▶️ تولۇق كۆرۈش
              </button>
              {userRole === "admin" && (
                <button
                  onClick={handleDelete}
                  className="text-red-600 hover:underline"
                >
                  🗑 ئۆچۈرۈش
                </button>
              )}
            </>
          ) : (
            <>
              <span className="text-gray-400 cursor-not-allowed">▶️ تولۇق كۆرۈش</span>
              <span className="text-gray-400 cursor-not-allowed">🗑 ئۆچۈرۈش</span>
            </>
          )}
        </div>

        {/* ✅ Like + Comment */}
        <div className="flex gap-4 text-sm">
          {isLoggedIn ? (
            <>
              <button
                onClick={handleLike}
                className="text-gray-600 hover:text-blue-600 flex items-center gap-1"
              >
                👍 Like <span className="text-xs text-gray-500">({likes})</span>
              </button>
              <button
                onClick={handleComment}
                className="text-gray-600 hover:text-green-600"
              >
                💬 Comment
              </button>
            </>
          ) : (
            <>
              <span className="text-gray-400 cursor-not-allowed">
                👍 Like ({likes})
              </span>
              <span className="text-gray-400 cursor-not-allowed">💬 Comment</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}