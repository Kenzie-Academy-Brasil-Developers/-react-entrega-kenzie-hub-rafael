import { Navigate, Route, Routes } from "react-router-dom";
import { ProtectRoutes } from "../ProtectRoutes";
import { Dashbord } from "../page/DashBord";
import { Login } from "../page/Login";
import { Register } from "../page/Register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectRoutes />}>
        <Route path="/dashbord" element={<Dashbord />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
