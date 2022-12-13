import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/ContextApi";

export function ProtectRoutes() {
  const { user, remaking } = useContext(AuthContext);

  if (remaking) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
}
