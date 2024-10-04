import { useEffect, useState } from "react";
import styled from "styled-components";
import { customGetDay, formatDateLocal } from "../utils/helpers";
import Heading from "../ui/Heading";

const StyledHeader = styled.header`
  padding: 0 10px 20px;
  font-size: 1.5rem;
  color: #fff;
  position: relative;
  z-index: 2;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;
const Text = styled.span`
  font-size: 1.5rem;
  color: #fff;
  @media only screen and (max-width: 490px) {
    font-size: 1rem;
  }
`;

function Header() {
  const [dayOfWeek, setDayOfWeek] = useState(new Date());

  useEffect(() => {
    setDayOfWeek(new Date());
  }, []);

  return (
    <StyledHeader>
      <Container>
        <Text>{customGetDay(dayOfWeek)}</Text>
        <Text>{formatDateLocal(dayOfWeek)}</Text>
      </Container>
      <Heading as="h1">Today</Heading>
    </StyledHeader>
  );
}

export default Header;
