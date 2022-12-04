import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Dashbord } from "./page/DashBord";
import { Login } from "./page/Login";
import { Register } from "./page/Register";
import { StyledApp } from "./styles/styled";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});

  return (
    <StyledApp className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="register" element={<Register />} />
        <Route
          path="dashbord"
          element={<Dashbord user={user} setUser={setUser} />}
        />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </StyledApp>
  );
}

export default App;
