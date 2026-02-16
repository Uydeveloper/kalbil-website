// src/components/PrivateRoute.jsx
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { isLoggedIn, userRole } = useAuth();

  const allowedRoles = ["admin", "student"];

  if (!isLoggedIn || !allowedRoles.includes(userRole)) {
    return (
      <div className="p-8 text-center text-lg text-red-600">
        🔒 بۇ بەتكە كىرىش ئۈچۈن ئالدى بىلەن كىرىڭ.
        <br />
        <a href="/login" className="text-blue-500 underline">كىرىش بىتىگە ئۆتۈش</a>
      </div>
    );
  }

  return children;
}