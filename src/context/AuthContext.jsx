import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../service/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  async function login(data) {
    try {
      setLoading(true);

      const response = await api.post("/sessions", data);

      const { token, user: userResponse } = response.data;

      setUser(await userResponse);

      localStorage.setItem("@token", JSON.stringify(token));

      toast.success("Login feito com sucesso.");
      navigate("/dashbord");
    } catch (error) {
      toast.error("Usuario não existe");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        setUser,
        user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
