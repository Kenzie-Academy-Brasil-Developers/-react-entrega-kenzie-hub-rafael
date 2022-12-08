import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../context/AuthContext";
import { instance } from "../../../../service/api";
import { schemaCreatTec } from "./schemaCreatTec";
import { StyledFormEdit } from "./styled";

export function FormEdit({ setModalEdit, techs: tecnologia }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { status: `${tecnologia.status}` },
    mode: "onblur",
    resolver: yupResolver(schemaCreatTec),
  });

  const { setUser, user } = useContext(AuthContext);

  const { id: idTech } = tecnologia;

  async function editTec(data) {
    try {
      const response = await instance.put(
        `/users/techs/${tecnologia.id}`,
        data
      );
      const techs = user.techs.filter(({ id }) => id !== idTech);

      techs.push(response.data);
      const newUse = { ...user, techs };

      setUser(newUse);

      setModalEdit(false);
    } catch (error) {
      toast.error("error");
    }
  }
  async function delet() {
    try {
      await instance.delete(`/users/techs/${tecnologia.id}`);

      const techs = user.techs.filter(({ id }) => id !== idTech);
      const newUse = { ...user, techs };

      setUser(newUse);
      setModalEdit(false);
    } catch (error) {
      toast.error("error");
    }
  }
  return (
    <StyledFormEdit onSubmit={handleSubmit(editTec)} noValidate>
      <div className="div-top">
        <h3>Editar Tecnologia</h3>

        <button onClick={() => setModalEdit(false)}>
          <AiOutlineClose />
        </button>
      </div>
      <label className="LabelText" htmlFor="nameTec">
        Nome
      </label>
      <div className="div_tche_value">
        <p>{tecnologia.title}</p>
      </div>
      {errors.title?.message && (
        <p className="LabelText">{errors.title.message}</p>
      )}
      <label className="LabelText" htmlFor="levelTec">
        Selecionar status
      </label>
      <select {...register("status")} name="status" id="levelTec">
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>
      <div className="div_button">
        <button className="registerTech" type="submit">
          Cadastrar Tecnologia
        </button>
        <button onClick={() => delet()} className="deletTech">
          Excluir
        </button>
      </div>
    </StyledFormEdit>
  );
}
