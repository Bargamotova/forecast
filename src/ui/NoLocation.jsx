import styled from "styled-components";
import Heading from "./Heading";

const StyledNoLocation = styled.div`
  font-family: "Architext";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: linear-gradient(
    90deg,
    var(--gradient_f),
    var(--gradient_m)
  );
  box-shadow: 0 0 5px var(--gray-dark);
  padding: 10px 0;
  & h3 {
    font-size: 1.875rem;
    color: var(--green);
  }
`;
const Text = styled.p`
  margin: 0;
  color: var(--green);
  font-size: 1.5rem;
`;
function NoLocation() {
  return (
    <StyledNoLocation>
      <Heading as="h3" style={{ fontFamily: "Architext" }}>
        The geolocation on your device is turned off
      </Heading>
      <Text>Please notice your city to the form above</Text>
      <Text>or turn on access to geolocation on your device</Text>
    </StyledNoLocation>
  );
}

export default NoLocation;
