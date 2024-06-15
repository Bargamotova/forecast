import styled from "styled-components";
import Today from "../components/Today";
import Burger from "../components/Burger";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  @media only screen and (max-width: 64rem) {
    margin-top: auto;
    padding: 0 10px;
  }
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
  justify-items: center;
  width: 100%;
  @media only screen and (min-width: 125rem) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 64rem) {
    flex-direction: row;
    gap: 10px;
  }
  @media only screen and (max-width: 48rem) {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }
`;
function TopContent() {
  return (
    <StyledContent>
      <Container>
        <Today />
        <Burger />
      </Container>
    </StyledContent>
  );
}

export default TopContent;
