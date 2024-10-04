import styled from "styled-components";

const Unit = styled.span`
  font-size: 16px;
  display: inline-block;
  color: ${(props) =>
    props.$darkFont ? "var(--gray-dark)" : "var(--gray-light)"};
`;
export default Unit;
