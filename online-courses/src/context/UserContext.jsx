import { createContext, useContext, useState, useEffect } from "react";

export const UserContext = createContext(null);
export const useUser = () => useContext(UserContext);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState(null);

  // 1. بەت تۇنجى يۈكلەنگەندە localStorage دىن ئەزانى ئوقۇش
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
      console.error("Failed to load user from localStorage:", err);
    }
  }, []);

  // 2. ئاۋاتارنى يېڭىلاش فۇنكسىيەسى (Side Effect سىرتىغا چىقىرىلدى)
  const updateAvatar = (newAvatar) => {
    setAvatar(newAvatar);
    
    // يېڭى يۈزلىنىشنى ئالدى بىلەن ھېسابلاپ چىقىمىز
    const updatedUser = user ? { ...user, avatar: newAvatar } : { avatar: newAvatar };
    
    // State نى يېڭىلايمىز
    setUser(updatedUser);
    
    // localStorage غا بىخەتەر ھالەتتە ساقلايمىز
    localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
  };

  // 3. سىستېمىدىن چىقىش (Logout)
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