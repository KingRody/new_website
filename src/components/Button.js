import { Link, styled } from "@kuma-ui/core";

const StyledButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 60px;
  font-weight: 600;
  border: 2px solid #17fff9;
  background: #17fff9;
  color: #000000;

  &.secondary {
    border: 2px solid #001f24;
    background: #001f24;
    color: #17fff9;
  }

  &:hover {
    scale: 1.1;
  }
`;

const Button = ({ children, variant, ...props }) => (
  <StyledButton className={variant} {...props}>
    {children}
  </StyledButton>
);

export default Button;
