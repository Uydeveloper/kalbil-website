import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import fallbackMessages from "../data/messages.json";

export default function MessagesPage() {
  const { user, avatar } = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [likes, setLikes] = useState({});
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", body: "", image: "" });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/messages")
      .then((res) => {
        setMessages(res.data);
        const initialLikes = {};
        res.data.forEach((msg) => {
          initialLikes[msg.id] = msg.likes || 0;
        });
        setLikes(initialLikes);
      })
      .catch(() => {
  const localMsgs = localStorage.getItem("messages");
  if (localMsgs) {
    const parsed = JSON.parse(localMsgs);
    setMessages(parsed);
    const initialLikes = {};
    parsed.forEach((msg) => {
      initialLikes[msg.id] = msg.likes || 0;
    });
    setLikes(initialLikes);
  } else {
    setMessages(fallbackMessages);
    
  }
});
  }, []);
// ✅ Draft ساقلاش
useEffect(() => {
  const savedDraft = localStorage.getItem("draftMessage");
  if (savedDraft) {
    const { title, body, image } = JSON.parse(savedDraft);
    setTitle(title);
    setBody(body);
    setImage(image);
  }
}, []);

useEffect(() => {
  const draft = { title, body, image };
  localStorage.setItem("draftMessage", JSON.stringify(draft));
}, [title, body, image]);


  const handlePost = () => {
  if (!title || !body || !user) return;
  const newMsg = {
    id: Date.now(),
    title,
    body,
    image,
    author: user.username,
    avatar,
    time: new Date().toLocaleString(),
    views: 0,
    likes: 0,
    comments: [],
  };

  const updatedMessages = [newMsg, ...messages];
  setMessages(updatedMessages);
  localStorage.setItem("messages", JSON.stringify(updatedMessages)); // ✅ locally save

  setTitle("");
  setBody("");
  setImage("");
  localStorage.removeItem("draftMessage"); // ✅ clear draft
};

  const handleDelete = (id) => {
    axios.delete(`/api/messages/${id}`)
      .then(() => {
        setMessages(messages.filter((m) => m.id !== id));
      })
      .catch(() => {
        setMessages(messages.filter((m) => m.id !== id)); // fallback locally
      });
  };

  const handleEdit = (msg) => {
    setEditingId(msg.id);
    setEditForm({ title: msg.title, body: msg.body, image: msg.image || "" });
  };

  const handleSaveEdit = () => {
    axios.put(`/api/messages/${editingId}`, editForm)
      .then((res) => {
        setMessages(messages.map((m) => (m.id === editingId ? res.data : m)));
        setEditingId(null);
        setEditForm({ title: "", body: "", image: "" });
      })
      .catch(() => {
        setMessages(messages.map((m) =>
          m.id === editingId ? { ...m, ...editForm } : m
        ));
        setEditingId(null);
      });
  };

  const handleLike = (id) => {
    const newLikes = (likes[id] || 0) + 1;
    setLikes({ ...likes, [id]: newLikes });
    axios.put(`/api/messages/${id}/like`, { likes: newLikes }).catch(() => {});
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">🧾 ئۇچۇر تىزىمى</h2>

      {error && (
        <p className="text-red-600 mb-4 text-sm">{error}</p>
      )}

      {/* ✅ خەۋەر يوللاش فورمىسى */}
      {user && (
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-6">
          <h3 className="text-xl font-bold mb-4">📝 يېڭى خەۋەر يوللاش</h3>
          <input
            type="text"
            placeholder="خەۋەر تېمىسى"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mb-2 px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <textarea
            placeholder="خەۋەر مەزمۇنى"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full mb-2 px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <input
            type="text"
            placeholder="رەسىم URL (ئىختىيارى)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full mb-2 px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <button
            onClick={handlePost}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            ➕ يوللاش
          </button>
          {(title || body || image) && (
  <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded shadow">
    <h4 className="text-lg font-bold mb-2">🧾 خەۋەر كۆرۈنۈشى</h4>
    <p className="text-blue-600 font-semibold">{title}</p>
    <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line mt-2">{body}</p>
    {image && (
      <img
        src={image}
        alt="preview"
        className="mt-3 w-full h-48 object-cover rounded"
      />
    )}
  </div>
)}
        </div>
      )}

      {/* ✅ Card-based خەۋەرلەر */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {messages.map((msg) => (
          <div key={msg.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className="flex items-center gap-3 mb-3">
              <img src={msg.avatar || "/images/default-avatar.png"} alt="avatar" className="w-10 h-10 rounded-full border-2 border-blue-500" />
              <div>
                <h4 className="font-semibold">{msg.author}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{msg.time}</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">{msg.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3 whitespace-pre-line">
              {msg.body.length > 300 ? msg.body.slice(0, 300) + "..." : msg.body}
            </p>

            {msg.image && (
              <img src={msg.image} alt="message" className="w-full h-48 object-cover rounded mb-3" />
            )}

            <div className="flex justify-between text-sm mb-2">
              <span>👁 {msg.views || 0}</span>
              <span>❤️ {likes[msg.id] || 0}</span>
              <span>💬 {msg.comments?.length || 0}</span>
            </div>

            <div className="flex gap-3 text-sm">
              <button
                onClick={() => navigate(`/messages/${msg.id}`)}
                className="text-blue-600 hover:underline"
              >
                ▶️ تولۇق كۆرۈش
              </button>
              <button
                onClick={() => handleLike(msg.id)}
                className="text-gray-600 hover:text-blue-600"
              >
                👍 Like
              </button>
              {user?.username === msg.author && (
                <>
                  <button
                    onClick={() => handleEdit(msg)}
                    className="text-yellow-600 hover:underline"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(msg.id)}
                    className="text-red-600 hover:underline"
                  >
                    🗑 Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>


      {/* ✅ تەھرىرلەش فورمىسى */}
      {editingId && (
        <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-4">✏️ خەۋەرنى تەھرىرلەش</h3>
          <input
            type="text"
            value={editForm.title}
            onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
            className="w-full mb-2 px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <textarea
            value={editForm.body}
            onChange={(e) => setEditForm({ ...editForm, body: e.target.value })}
            className="w-full mb-2 px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <input
            type="text"
            value={editForm.image}
            onChange={(e) => setEditForm({ ...editForm, image: e.target.value })}
            className="w-full mb-2 px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <button
            onClick={handleSaveEdit}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mr-2"
          >
            💾 ساقلاش
          </button>
          <button
            onClick={() => setEditingId(null)}
            className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
          >
            ❌ بىكار قىلىش
          </button>
       
        </div>
      )}
    </div>
  );
}




