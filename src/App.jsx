import { ToastContainer } from "react-toastify";
import { StyledApp } from "./styles/styled";
import "react-toastify/dist/ReactToastify.css";
import { RoutesMain } from "./routes/RoutesMain";
import { AuthProvider } from "./context/AuthContext";

function App() {
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
