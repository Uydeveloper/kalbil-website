import { createContext, useState, useEffect, useContext } from "react";
import students from "../data/students.json";

// ✅ باشقۇرغۇچى credential نى constants بىلەن قۇرۇش
// ✅ باشقۇرغۇچى credential نى موقۇم قۇرۇش
const ADMIN_CREDENTIALS = {
  id: "kalbil",
  password: "kalbil3120",
  name: "kawuljan99"
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
    trimmedId === "kalbil" &&
    trimmedPassword === "kalbil3120"
  ) {
    const adminUser = {
      id: "kalbil",
      name: "kawuljan99",
      role: "admin"
    };
    localStorage.setItem("id", adminUser.id);
    localStorage.setItem("role", adminUser.role);
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
    localStorage.setItem("id", studentUser.id);
    localStorage.setItem("role", studentUser.role);
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
  const context = useContext(AuthContext);
  const isAdmin = context.user?.role === "admin";
  const isStudent = context.user?.role === "student";
  return { ...context, isAdmin, isStudent };
}