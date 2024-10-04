import styled from "styled-components";
import Logo from "../ui/Logo";
import Sign from "../ui/Sign";

const StyledAside = styled.aside`
  position: relative;
  z-index: 2;
  width: 150px;
  height: 100vh;
  height: 100%;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.9);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    mask: var(--noise);
    background-image: var(--gradient_two_clr);

    border-right: 2px solid rgba(150, 40, 246, 0.5);
  }
  @media only screen and (max-width: 1366px) {
    width: 100%;
  }
`;
const AsideInner = styled.div`
  height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0.625rem 2rem;

  position: fixed;
  left: 20px;
  @media only screen and (max-width: 1366px) {
    height: unset;
    flex-direction: row;
    align-items: center;
    padding: 0 20px;
    position: unset;
  }
`;
function Aside() {
  return (
    <StyledAside>
      <AsideInner>
        <Logo />
        <Sign>Forecast</Sign>
      </AsideInner>
    </StyledAside>
  );
}

export default Aside;
