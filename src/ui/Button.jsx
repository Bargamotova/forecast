import styled from "styled-components";
const Button = styled.button`
  border: none;
  color: inherit;
  text-transform: capitalize;
  background-color: transparent;
  display: inline-block;
  font-family: "Architext";
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 0.3em;
  transition: color 0.3s ease-in;
  background-image: var(--gradient_two_clr);
  border: var(--border-thin);
  box-sizing: content-box;
  border-radius: 10px;
  padding: 15px 10px 10px;

  transition: opacity 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
export default Button;
