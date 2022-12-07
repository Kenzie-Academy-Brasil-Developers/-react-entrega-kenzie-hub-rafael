import { StyledListTec } from "./styled";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { instance } from "../../../service/api";
import { toast } from "react-toastify";

export function ListTec() {
  const { user, setUser } = useContext(AuthContext);
  const { techs } = user;

  async function delet(id, i) {
    try {
      await instance.delete(`/users/techs/${id}`);

      const techs = user.techs.filter((element) => element.id !== id);

      const newUser = { ...user, techs };
      setUser(newUser);
    } catch (error) {
      toast.error("deu merda");
    }
  }

  return (
    <StyledListTec>
      {techs.length ? (
        techs.map(({ id, title, status }, i) => (
          <li key={i}>
            <p className="Title3">{title}</p>
            <div>
              <span className="Headline">{status}</span>
              <button id={id} onClick={() => delet(id, i)}>
                <RiDeleteBin6Line className="delet-img" />
              </button>
            </div>
          </li>
        ))
      ) : (
        <p className="Title1">sua lista está vazia :(</p>
      )}
    </StyledListTec>
  );
}
