import styled from "styled-components";
const Sign = styled.div`
  position: absolute;
  top: 15vmin;
  font-weight: 600;
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-size: 6vmin;
  color: #fff;
  opacity: 0.3;
  @media only screen and (max-width: 85.375rem) {
    writing-mode: unset;
    text-orientation: unset;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scaleY(1.3) scaleX(1.5);
    letter-spacing: 10px;
  }
  @media only screen and (max-width: 37.5rem) {
    left: 70%;
  }
`;
export default Sign;
