import styled from 'styled-components';
import wind from './../assets/windy.svg';
import Inner from './Inner';

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
`;
function Spinner({ w, h }) {
  return (
    <Inner $width={w} $height={h}>
      <Image src={wind} alt='the wind' />
    </Inner>
  );
}

export default Spinner;
