import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState(null);

  // Load user from localStorage on mount
  useEffect(() => {
  const storedUser = localStorage.getItem("currentUser");
  if (storedUser) {
    setUser(JSON.parse(storedUser));
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

  return (
    <UserContext.Provider value={{ user, setUser, avatar, updateAvatar }}>
      {children}
    </UserContext.Provider>
  );
}