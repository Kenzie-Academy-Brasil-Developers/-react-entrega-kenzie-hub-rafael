import { StyledListTec } from "./styled";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { instance } from "../../../service/api";
import { toast } from "react-toastify";

export function ListTec({ setModalEdit, setTches }) {
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
  function editTches(event, element) {
    if (event.target.id === element.title) {
      setModalEdit(true);
      setTches(element);
    }
  }

  return (
    <StyledListTec>
      {techs.length ? (
        techs.map((element, i) => (
          <li
            id={element.title}
            key={i}
            onClick={(event) => editTches(event, element)}
          >
            <p className="Title3">{element.title}</p>
            <div>
              <span className="Headline">{element.status}</span>
              <button id={element.id} onClick={() => delet(element.id, i)}>
                <RiDeleteBin6Line id={element.id} className="delet-img" />
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
