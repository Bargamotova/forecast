import styled, { css } from "styled-components";

const Image = styled.img`
  ${(props) =>
    props.$big_icon &&
    css`
      width: 20vmin;
      height: auto;
      opacity: 0.8;
      display: block;

      @media only screen and (min-width: 125rem) {
        width: 250px;
      }
    `}
  ${(props) =>
    props.$small_icon &&
    css`
      width: 50px;

      @media only screen and (max-width: 25.875rem) {
        width: 38px;
      }
    `}
  ${(props) =>
    props.$burger &&
    css`
      width: 100%;
      height: 100%;
      aspect-ratio: 2 / 1.5;
      object-fit: cover;

      @media only screen and (max-width: 37.5rem) {
        aspect-ratio: 2 / 2;
      }
    `}
   
    @keyframes fail {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;
export default Image;
