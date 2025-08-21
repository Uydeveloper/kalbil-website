import { createContext, useState, useEffect, useContext } from "react";
import students from "../data/students.json";

// ✅ باشقۇرغۇچى credential نى constants بىلەن قۇرۇش
const ADMIN_CREDENTIALS = {
  id: "kaalbil",
  password: "kalbil3120",
  name: "kawuuljan99"
};

// ✅ Context قۇرۇش
export const AuthContext = createContext();

// ✅ Provider
export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  // ✅ user نى localStorage غا ساقلاش
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // ✅ لوگىن قىلىش
  function login(id, password) {
    if (typeof id !== "string" || typeof password !== "string") {
      console.error("❌ ID ياكى Password قىممەتسىز");
      return false;
    }

    const trimmedId = id.trim();
    const trimmedPassword = password.trim();

    // ✅ باشقۇرچى تەكشۈرۈش
    if (
      trimmedId === ADMIN_CREDENTIALS.id &&
      trimmedPassword === ADMIN_CREDENTIALS.password
    ) {
      const adminUser = {
        id: ADMIN_CREDENTIALS.id,
        name: ADMIN_CREDENTIALS.name,
        role: "admin"
      };
      setUser(adminUser);
      return true;
    }

    // ✅ ئوقۇغۇچى تەكشۈرۈش
    const student = students.find(
      (s) =>
        String(s.id).trim() === trimmedId &&
        s.password === trimmedPassword
    );

    if (student) {
      const studentUser = {
        id: student.id,
        name: student.name,
        role: "student"
      };
      setUser(studentUser);
      return true;
    }

    return false;
  }

  // 🚪 چىقىش
  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// ✅ Custom hook: useAuth
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