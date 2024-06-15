import styled from "styled-components";
import Spinner from "./Spinner";
import TextLoader from "./TextLoader";

const StyledWindy = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  place-items: center;
`;

function WindySpinner({ w, h, size }) {
  return (
    <StyledWindy>
      <Spinner w={w} h={h} />
      <TextLoader size={size} />
    </StyledWindy>
  );
}

export default WindySpinner;
