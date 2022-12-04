import { StyledButton } from "./styled";

export function Button({ callback, children, type, className }) {
  return (
    <StyledButton className={className} type={type} onClick={() => callback}>
      {children}
    </StyledButton>
  );
}
