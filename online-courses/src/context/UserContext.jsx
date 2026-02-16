import { createContext, useContext, useState, useEffect } from "react";

export const UserContext = createContext(null);
export const useUser = () => useContext(UserContext);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState(null);

  // Load user from localStorage on mount
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("loggedInUser");
      if (storedUser) {
        const parsed = JSON.parse(storedUser);
        if (parsed && typeof parsed === "object") {
          setUser(parsed);
          setAvatar(parsed.avatar || null);
        }
      }
    } catch (err) {
      console.error("Failed to load user:", err);
    }
  }, []);

  // Update avatar and sync with user + localStorage
  const updateAvatar = (newAvatar) => {
    setAvatar(newAvatar);
    setUser((prev) => {
      const updatedUser = { ...prev, avatar: newAvatar };
      localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  // Optional: logout function
  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setAvatar(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, avatar, updateAvatar, logout }}>
      {children}
    </UserContext.Provider>
  );
}