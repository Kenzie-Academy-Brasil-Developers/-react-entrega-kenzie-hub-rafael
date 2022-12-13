import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import { Button } from "../../../../components/Button";
import { AuthContext } from "../../../../context/ContextApi";
import { ContextDashBord } from "../../../../context/TechUser";
import { instance } from "../../../../service/api";
import { schemaCreatTec } from "./schemaCreatTec";
import { StyledFormModal } from "./styled";

export function FormModal() {
  const { setModalCreatTec } = useContext(ContextDashBord);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { status: "Iniciante" },
    mode: "onblur",
    resolver: yupResolver(schemaCreatTec),
  });

  const { user, setUser } = useContext(AuthContext);

  async function creatTec(data) {
    try {
      const response = await instance.post("/users/techs", data);
      const { techs: newTechs } = user;
      const techs = [...newTechs, response.data];
      const newUser = { ...user, techs };
      setUser(newUser);
      setModalCreatTec(false);
    } catch (error) {
      toast.error("error");
    }
  }
  return (
    <StyledFormModal onSubmit={handleSubmit(creatTec)} noValidate>
      <div>
        <h3>Cadastrar Tecnologia</h3>

        <button onClick={() => setModalCreatTec(false)}>
          <AiOutlineClose />
        </button>
      </div>
      <label className="LabelText" htmlFor="nameTec">
        Nome
      </label>
      <input
        {...register("title")}
        placeholder="Digite o nome da tecnologia"
        id="nameTec"
        type="text"
      />
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
      <Button type="submit">Cadastrar Tecnologia</Button>
    </StyledFormModal>
  );
}
