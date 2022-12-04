import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { instance } from "../../service/api";
import { DivDashBord } from "./DivDashBord";
import { HeaderDashBord } from "./HeaderDashBord";
import { ModalLogout } from "./ModalLogout";
import { StyledDivDash } from "./styled";

export function Dashbord({ user, setUser }) {
  const token = localStorage.getItem("@token");
  const [renderModal, setRenderModal] = useState(false);
  useEffect(() => {
    async function GET() {
      try {
        const response = await instance.get("profile");
        setUser(response.data);
        console.log(user);
      } catch {
        toast.error("Erro token");
      }
    }
    GET();
  }, [setUser]);

  return (
    <div>
      {renderModal && (
        <ModalLogout setRenderModal={setRenderModal} setUser={setUser} />
      )}
      {token ? (
        <StyledDivDash>
          <HeaderDashBord setRenderModal={setRenderModal} />
          <DivDashBord user={user} />
        </StyledDivDash>
      ) : (
        <Navigate to={"*"} />
      )}
    </div>
  );
}
