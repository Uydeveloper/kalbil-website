// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("guest"); // "user", "admin", "guest"
  const [username, setUsername] = useState(null);

  // ✅ بەت ئېچىلغاندا localStorage'dan قىممەت ئوقۇش
  useEffect(() => {
    const storedStatus = localStorage.getItem("isLoggedIn");
    const storedRole = localStorage.getItem("userRole");
    const storedName = localStorage.getItem("username");
    setIsLoggedIn(storedStatus === "true");
    setUserRole(storedRole || "guest");
    setUsername(storedName || null);
  }, []);

  // ✅ login: Context + localStorage persist
  const login = (name, role = "user") => {
    setIsLoggedIn(true);
    setUserRole(role);
    setUsername(name);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userRole", role);
    localStorage.setItem("username", name);
  };

  // ✅ logout: Context + localStorage clear
  const logout = () => {
    setIsLoggedIn(false);
    setUserRole("guest");
    setUsername(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    localStorage.removeItem("username");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userRole, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// ✅ Context نى ئىشلىتىش ئۈچۈن hook
export function useAuth() {
  return useContext(AuthContext);
}
