import styled from "styled-components";
const LinkTo = styled.a`
  text-align: center;
  font-family: "Architext";
  font-size: 1.5rem;
  text-decoration: none;
  display: inline-block;
  color: var(--mint);
  padding: 10px;
  padding-right: 25px;
  margin-top: 40px;
  position: relative;
  transition: transform 0.4s, text-shadow 0.3s, color 0.3s;

  &:hover {
    text-shadow: 0 0 5px var(--yellow), 0 0 15px var(--yellow);
    transform: translateX(35px);
    color: var(--mint);
  }
  &::after {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    border-top-right-radius: 5px;
    border-top: 2px solid var(--mint);
    border-right: 2px solid var(--mint);
    transform: rotate(45deg) translateX(14px) translateY(-1px);
  }
  & span {
    padding: 5px;
  }
`;
export default LinkTo;
