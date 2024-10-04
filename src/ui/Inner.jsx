import styled from "styled-components";

const Inner = styled.div`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  position: relative;
  animation: round 10s infinite backwards;
  z-index: 2;
  @keyframes round {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(-359deg);
    }
  }
`;
export default Inner;
