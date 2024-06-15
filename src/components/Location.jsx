import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from '../hooks/useLocation';
import Loader from '../ui/Loader';

const StyledLocation = styled.div`
  max-width: 30vw;
  width: fit-content;
  padding: 10px;

  font-size: 1.25rem;
  background-image: var(--gradient_two_clr);
  box-shadow: 0 0 5px var(--gray-dark);
  border: 3px solid var(--gray-light);
  border-radius: 10px;
  line-height: 1;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  color: var(--gray-light);

  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: unset;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const Text = styled.p`
  margin: 0;
  font-size: 1.5rem;
`;
const Time = styled.div`
  width: 5ch;
  font-size: 1.875rem;
  font-weight: 900;
  letter-spacing: 4px;
  font-family: 'Architext';
  margin: 0 10px 0;
`;
function Location() {
  const { isLoading, data } = useLocation();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <StyledLocation>
      <Container>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Text>{data?.city}</Text>
            <Text>{data?.country}</Text>
          </>
        )}
      </Container>
      <Time>
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </Time>
    </StyledLocation>
  );
}

export default Location;
