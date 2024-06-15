import burger from "../assets/icons/i_burger_logo.svg";
import styled from "styled-components";

const StyledLogo = styled.div`
  position: relative;
  width: 100px;
  @media only screen and (max-width: 1024px) {
    padding-left: 20px;
  }
`;
const Image = styled.img`
  width: 100%;
`;

function Logo() {
  return (
    <StyledLogo>
      <Image src={burger} alt="logo" width="100%" />
    </StyledLogo>
  );
}

export default Logo;
