import styled from "styled-components";
import Span from "./Span";

const StyledFooter = styled.footer`
  align-self: flex-start;
  margin-top: auto;

  color: var(--gray-light);
  position: relative;
  z-index: 2;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  padding: 20px 0;
`;

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Span>&copy; 2024</Span>
        <Span>Created by Bargamotova</Span>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
