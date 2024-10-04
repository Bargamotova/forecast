import styled from "styled-components";
import Header from "./Header";
import Forecast from "./Forecast";

const StyledToday = styled.article`
  width: 100%;
  padding: 10px;
  padding-bottom: 30px;
  color: var(--gray-light);
  border-radius: 10px;
  border: var(--border-thin);
  box-shadow: var(--shadow);
  background: var(--bg-card);
  background: rgba(197, 147, 255, 0.4);
  @media only screen and (max-width: 1280px) {
    padding: 0 0 30px;
  }
  @media only screen and (max-width: 490px) {
    padding: 10px;
    border: none;
  }
`;

function Today() {
  return (
    <StyledToday>
      <Header />
      <Forecast />
    </StyledToday>
  );
}

export default Today;
