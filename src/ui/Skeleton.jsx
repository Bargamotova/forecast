import styled from "styled-components";
import { colors } from "../data/colors";
import { weekdays } from "../data/weekdays";
import WindySpinner from "./WindySpinner";

const StylesDaySkeleton = styled.li`
  scroll-snap-align: center;

  min-width: 200px;
  max-width: 200px;
  width: 200px;
  height: 300px;

  flex-basis: 200px;
  flex: 1 0 auto;

  border: 5px solid #fff;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  box-shadow: var(--shadow), inset 1px 1px 7px 1px rgba(120, 120, 120, 0.2),
    inset -1px -1px 7px 1px rgba(120, 120, 120, 0.2);

  color: var(--gray-dark);
  @media only screen and (max-width: 1024px) {
    justify-content: space-evenly;
  }
  &::after {
    content: "";
    position: absolute;
    inset: 20px;
    background: rgba(245, 233, 233, 0.5);
    border: 1px solid var(--gray-dark);
    border-radius: 10px;
    z-index: 0;
    @media only screen and (max-width: 1024px) {
      inset: 10px;
    }
  }
  @media only screen and (max-width: 1440px) {
    min-width: 180px;
    width: 180px;
  }
  @media only screen and (max-width: 1024px) {
    min-width: 120px;
  }
`;
const Container = styled.div`
  text-align: center;
  padding: 20px;
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  @media only screen and (max-width: 87.5rem) {
    gap: 0;
  }
`;
const Title = styled.h3`
  font-size: clamp(16px, 7vw, 30px);
  margin: 0;
  @media only screen and (max-width: 87.5rem) {
    font-size: 1.125rem;
  }
`;

const Skeleton = ({ color, day }) => {
  return (
    <StylesDaySkeleton style={{ backgroundColor: `${colors[color]}` }}>
      <Container>
        <Title>{weekdays[day]}</Title>
        <WindySpinner w="100px" h="100px" size="2rem" />
      </Container>
    </StylesDaySkeleton>
  );
};

export default Skeleton;
