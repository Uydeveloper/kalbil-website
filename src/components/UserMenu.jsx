import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import ProfileModal from "./ProfileModal";

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { user, avatar, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  if (!user) return null;

  const initial = user.username?.charAt(0).toUpperCase() || "U";

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("user-avatar");
    navigate("/");
  };

  return (
    <div className="relative z-50">
      {/* Avatar Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center overflow-hidden border hover:ring-2 ring-blue-400 transition"
        title="User Menu"
      >
        {avatar ? (
          <img
            src={avatar}
            alt="Avatar"
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          initial
        )}
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-52 sm:w-56 bg-white dark:bg-gray-800 border rounded-xl shadow-xl z-50 animate-fade-in overflow-hidden">
          {user.role === "admin" && (
            <>
              <button
                onClick={() => {
                  navigate("/view-registration");
                  setOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                🧑‍💼 باشقۇرغۇچى
              </button>

              <button
                onClick={() => {
                  navigate("/studntsinfo");
                  setOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                🧑‍🎓 ئوقۇغۇچىلار
              </button>
            </>
          )}

          <button
            onClick={() => {
              setShowProfile(true);
              setOpen(false);
            }}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            👤 پروفايىل
          </button>

          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-red-600"
          >
            🚪 Logout
          </button>
        </div>
      )}

      {/* Profile Modal */}
      {showProfile && <ProfileModal onClose={() => setShowProfile(false)} />}
    </div>
  );
}
