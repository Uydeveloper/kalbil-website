import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("guest");

  // 🔄 Context قىممەتلىرىنى localStorage دىن ئېلىش
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsLoggedIn(true);
        setUserRole(parsedUser.role || "guest");
      } catch (err) {
        console.error("❌ User parse error:", err);
        setUser(null);
        setIsLoggedIn(false);
        setUserRole("guest");
      }
    } else {
      setUser(null);
      setIsLoggedIn(false);
      setUserRole("guest");
    }
  }, []);

  // ✅ Login function
  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    setUserRole(userData.role || "user");
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // 🚪 Logout function
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setUserRole("guest");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        userRole,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// 🧠 Custom hook for easy access
export function useAuth() {
  return useContext(AuthContext);
}