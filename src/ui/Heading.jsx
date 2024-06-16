import styled, { css } from 'styled-components';
const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 5vmin;
      margin: 0;
      line-height: 1;
      text-align: center;
      @media only screen and (max-width: 30.625rem) {
        font-size: 2rem;
      }
    `}
  ${(props) =>
    props.as === 'h2' &&
    css`
      margin: 0;
      font-size: 2rem;
      @media only screen and (max-width: 87.5rem) {
        font-size: 1.25rem;
        font-weight: 900;
      }
    `}
    ${(props) =>
    props.as === 'h3' &&
    css`
      margin: 0;
      font-weight: 600;
      font-size: 1.5rem;
      @media only screen and (max-width: 37.5rem) {
        font-size: 1.25rem;
      }
    `}
    ${(props) =>
    props.as === 'h4' &&
    css`
      line-height: 1;
      margin: 0;
      font-size: 1.5rem;
      @media only screen and (max-width: 25.875rem) {
        font-size: 1rem;
      }
    `}
    ${(props) =>
    props.$type === 'bg' &&
    css`
      background-image: var(--gradient_two_clr);
      border: var(--border-thin);
      box-sizing: content-box;
      border-radius: var(--border-radius);
      padding: 5px;

      box-shadow: 0 0 5px var(--gray-dark);
    `}
    font-family: ${(props) =>
    props.$secondary ? 'Architext' : 'SnellRoundhand'};

  color: ${(props) => (props.$dark ? 'var(--gray-dark)' : 'var(--gray-light)')};
`;
export default Heading;
