import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useUpdateWeather } from '../hooks/useWeather';
import { useEffect, useState } from 'react';
import { getCapitalCityName } from '../utils/helpers';

const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  min-width: 350px;
  @media only screen and (max-width: 768px) {
    gap: 10px;
    width: 100%;
    min-width: unset;
  }
`;
const Form = styled.form`
  align-self: end;
  position: relative;
  color: var(--gray-light);
  position: relative;
  width: 100%;

  @media only screen and (max-width: 768px) {
    margin-bottom: 20px;
    top: 0;
    width: 100%;
  }
  @media only screen and (max-width: 490px) {
    margin-bottom: 20px;
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 10px 80px 10px 10px;

  font-family: 'Architext';
  font-size: 2rem;
  letter-spacing: 3px;

  background: transparent;
  border: 3px solid #fff;
  border-radius: 15px;
  color: #fff;
  transition: all 0.3s;
  &::placeholder {
    font-size: 1.5rem;
    color: var(--gray-light);
    width: max-content;
    @media only screen and (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
  &:focus,
  &:focus + * {
    outline: none;
    border-color: var(--blue);
  }
`;
const ButtonSearch = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  border-left: 3px solid #fff;
  font-size: 1rem;
  width: 50px;
  height: 100%;

  position: absolute;
  right: 0;
  transition: all 0.5s;
  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 50%;
    background-color: blue;
    background-image: radial-gradient(
      circle at 30% 30%,
      var(--blue),
      rgba(120, 120, 120, 0.5)
    );
    box-shadow: 3px 3px 5px rgba(128, 128, 128, 0.6);
    transition: all 0.5s;
  }
  &:hover {
    &::after {
      background-color: #7e55f4;
      box-shadow: 1px 1px 2px rgba(128, 128, 128, 0.2);
    }
  }
`;
const City = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  line-height: 1;
  text-align: center;
  color: var(--gray-light);
  @media only screen and (max-width: 768px) {
    margin: 0 auto;
  }
  animation: faid 0.3s linear;
  @keyframes faid {
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
function Search() {
  const [city, setCity] = useState('');

  const { uploadNewWeather } = useUpdateWeather();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: '',
  });
  const [localData, setLocalData] = useState({});

  useEffect(() => {
    setLocalData(getCapitalCityName());
  }, []);
  const handleChangeData = (data) => {
    uploadNewWeather(data.name);
    setCity(data.name);
    reset();
  };
  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit(handleChangeData)}>
          <Input
            type='text'
            id='name'
            placeholder='Enter the city'
            {...register('name')}
          />
          <ButtonSearch type='submit' aria-label='Submit' />
        </Form>
      </Container>
      <City>{city}</City>
      <City>
        {localData.userCity}/{localData.userRegion}
      </City>
    </>
  );
}

export default Search;
