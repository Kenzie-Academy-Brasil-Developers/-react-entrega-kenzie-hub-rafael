import { StyledInput } from "./styled";

export function Input({
  placeholder,
  id,
  callBack,
  type,
  label,
  register,
  name,
}) {
  return (
    <>
      <label className="LabelText" htmlFor={id}>
        {label}
      </label>
      <StyledInput
        {...register(name)}
        type={type}
        placeholder={placeholder}
        id={id}
        onInput={() => callBack}
      />
    </>
  );
}
