import styled, { css } from "styled-components";

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  ${(props) =>
    props.$vertical &&
    css`
      padding: 10px;
      background: var(--blue-transparent);
      z-index: 5;
      height: 100%;

      overflow-y: scroll;
      overflow-x: hidden;

      position: relative;
      transition: transform 0.3s;
    `}
  ${(props) =>
    props.$horizontal &&
    css`
      display: flex;
      align-items: center;
      gap: 30px;
      @media only screen and (min-width: 112.5rem) {
        gap: 54px;
      }
      @media only screen and (max-width: 87.5rem) {
        scrollbar-width: thin;
        scrollbar-color: rgba(180, 148, 249, 0.5) transparent;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        justify-content: unset;
        padding-bottom: 20px;
        width: 100%;
      }
      @media only screen and (max-width: 80rem) {
        gap: 20px;
      }
    `}
`;

export default List;
