import { createContext, useState, useEffect, useContext } from "react";
import { login as apiLogin } from "../services/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // ✅ لوگىن: backend API ئارقىلىق
  async function login(id, password) {
    if (!id || !password) {
      console.error("❌ ID ياكى Password قىممەتسىز");
      return false;
    }

    try {
      const data = await apiLogin(id.trim(), password.trim());

      if (data.accessToken) {
        setUser(data.user);
        localStorage.setItem("token", data.accessToken);
        return true;
      } else {
        console.error("❌ Login failed:", data.message);
        return false;
      }
    } catch (err) {
      console.error("❌ Login error:", err);
      return false;
    }
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const { user, login, logout } = useContext(AuthContext);
  const isLoggedIn = !!user;
  const userRole = user?.role || null;
  const isAdmin = userRole === "admin";
  const isStudent = userRole === "student";

  return {
    user,
    login,
    logout,
    isLoggedIn,
    userRole,
    isAdmin,
    isStudent
  };
}