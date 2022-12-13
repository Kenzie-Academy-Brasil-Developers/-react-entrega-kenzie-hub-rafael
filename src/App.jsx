import { ToastContainer } from "react-toastify";
import { StyledApp } from "./styles/styled";
import "react-toastify/dist/ReactToastify.css";
import { RoutesMain } from "./routes/RoutesMain";
import { AuthProvider } from "./context/ContextApi";
import { instance } from "./service/api";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem("@token");

  async function Get() {
    if (!token) {
      return;
    }
    try {
      await instance.get("/profile");
      navigate("/dashbord");
    } catch (error) {
      return;
    }
  }
  Get();

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
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </StyledApp>
  );
}

export default App;
