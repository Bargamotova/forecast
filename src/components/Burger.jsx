import styled from 'styled-components';
import { useBurger } from '../hooks/useBurgers';
import { useState } from 'react';
import burgerImg from '../assets/icons/i_burger.svg';
import noicy from '../assets/icons/noise.svg';

import Button from '../ui/Button';
import Heading from '../ui/Heading';
import Ingredient from './Ingredient';
import LinkTo from '../ui/LinkTo';
import Image from '../ui/Image';
import List from '../ui/List';
import TextLoader from '../ui/TextLoader';

const StyledBurger = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 20px;
  padding-bottom: 30px;
  background: var(--blue-transparent);

  border: var(--border-thin);
  border-radius: var(--border-radius);
  box-shadow: 6px 5px 10px rgba(120, 120, 120, 0.2);

  color: var(--gray-light);

  display: flex;
  flex-direction: column;

  position: relative;
  transition: all 0.3s;
  @media only screen and (max-width: 490px) {
    padding: 10px;
    padding-bottom: 30px;
    border: none;
  }
  & h2 {
    margin-bottom: 20px;
  }
  & h3:first-child {
    margin-bottom: 20px;
  }
  & h4 {
    margin-bottom: 10px;
  }

  & button {
    margin-top: 30px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: unset;
  }
  @media only screen and (max-width: 490px) {
    margin-inline: auto;
    max-width: unset;
    max-height: unset;
    width: 100%;
    position: relative;
    top: unset;
    left: unset;
  }
`;
const Container = styled.div`
  position: relative;
  border-radius: var(--border-radius);
  margin: auto;
`;
const Inner = styled.div`
  overflow: hidden;
  width: 100%;
  height: 500px;
  border-radius: var(--border-radius);
  & img {
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 600px) {
    padding-bottom: 20px;
  }
`;
const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  aspect-ratio: 2 / 1.5;
  transition: transform 0.3s;
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    mask: url(${noicy});
    background: linear-gradient(90deg, var(--grad_yellow), var(--grad_purple)),
      url(${noicy});
  }
  @media only screen and (max-width: 64rem) {
    aspect-ratio: unset;
  }
`;

function Burger() {
  const [open, setOpen] = useState(true);
  const { isLoading, data } = useBurger();
  const { ingredients } = data || [];

  const handleClick = (e) => {
    e.preventDefault();
    setOpen((w) => !w);
  };
  return (
    <StyledBurger>
      <Heading as='h2'>Get Burger of the Day</Heading>
      <Container>
        <Heading as='h3' $type='bg'>
          {!data ? <TextLoader size='2rem' /> : data?.title}
        </Heading>
        <Heading as='h4' $type='bg' $secondary>
          Servings for {data?.servings} persons
        </Heading>
        <Inner>
          <ImageBox style={{ transform: `translateY(${!open ? 105 : 0}%)` }}>
            <Image
              $burger
              src={isLoading || !data ? burgerImg : data?.image_url}
              alt={data?.title}
              width='5vmin'
              loading='lazy'
            />
          </ImageBox>

          <List
            $vertical
            style={{ transform: `translateY(${open ? 0 : -100}%)` }}
          >
            {ingredients?.map((el, i) => (
              <Ingredient {...el} key={i} />
            ))}
          </List>
        </Inner>
        <LinkTo href={data?.source_url} target='_blank'>
          How to cook source: <span>&quot;{data?.publisher}&quot</span>
        </LinkTo>
      </Container>
      <Button onClick={handleClick}>
        {open ? 'Open recipe' : 'Close recipe'}
      </Button>
    </StyledBurger>
  );
}

export default Burger;
