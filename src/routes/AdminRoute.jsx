import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";

export default function AdminRoute({ children }) {
  const { user } = useContext(UserContext);

  if (!user || user.role !== "admin") {
    toast.error("⛔ بۇ بەتكە كىرىش رۇخسەتسىز!");
    return <Navigate to="/" replace />;
  }

  return children;
}