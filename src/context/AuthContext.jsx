import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../service/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [remaking, setRemaking] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    async function loadUser() {
      const token = JSON.parse(localStorage.getItem("@token"));
      console.log(token);

      if (!token) {
        setRemaking(false);
        return;
      }

      try {
        const { data } = await api.get("/profile", {
          headers: {
            authorization: `Beare ${token}`,
          },
        });
        setUser(data);
      } catch (error) {
        toast.error("deu merda");
      } finally {
        setRemaking(false);
      }
    }
    loadUser();
  }, []);

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
        remaking,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
