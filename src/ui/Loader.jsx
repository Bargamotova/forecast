import styled from "styled-components";

const LoaderPin = styled.span`
  width: 24px;
  height: 24px;
  display: block;
  margin: 0px auto;
  margin-bottom: 5px;
  box-sizing: border-box;
  position: relative;
  &::after {
    content: "";
    box-sizing: border-box;
    width: 24px;
    height: 24px;
    left: 0;
    bottom: 5px;
    position: absolute;
    border-radius: 50% 50% 0;
    border: 5px solid #ffbe56;
    transform: rotate(45deg) translate(0, 0);
    box-sizing: border-box;
    animation: animMarker 0.7s ease-in-out 10s alternate;
  }
  &::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 125%;
    width: 12px;
    height: 2px;
    border-radius: 50%;
    background: rgba(0, 75, 154, 0.2);
    @media (prefers-reduced-motion) {
      animation: animShadow 0.7s ease-in-out infinite alternate;
    }
  }

  @keyframes animMarker {
    0% {
      transform: rotate(45deg) translate(5px, 5px);
    }
    100% {
      transform: rotate(45deg) translate(-5px, -5px);
    }
  }
  @keyframes animShadow {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;
function Loader() {
  return <LoaderPin />;
}

export default Loader;
//
