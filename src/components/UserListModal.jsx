// src/components/UserListModal.jsx
import { useState, useEffect } from "react";

export default function UserListModal({ onClose }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(stored);
  }, []);

  const handleDelete = (username) => {
    const filtered = users.filter((u) => u.username !== username);
    localStorage.setItem("users", JSON.stringify(filtered));
    setUsers(filtered);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-24 z-50">
  <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-lg w-full max-w-xl relative">
 
        <h2 className="text-xl font-bold mb-4 text-center">👥 Registered Users</h2>
        {users.length === 0 ? (
          <p className="text-center text-gray-500">🚫 No users found.</p>
        ) : (
          <ul className="space-y-3">
            {users.map((user) => (
              <li key={user.username} className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded">
                <div>
                  <p className="font-semibold">{user.username}</p>
                  <p className="text-sm text-gray-500">{user.phone || "📱 No phone"}</p>
                </div>
                <button
                  onClick={() => handleDelete(user.username)}
                  className="text-red-500 hover:underline"
                >
                  ❌ Delete
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6 text-center">
          <button onClick={onClose} className="text-blue-600 hover:underline">❎ Close</button>
        </div>
      </div>
    </div>
  );
}