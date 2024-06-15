import styled from "styled-components";
import { useWeather } from "../hooks/useWeather";
import { useEffect } from "react";
import Day from "../ui/Day";
import Skeleton from "../ui/Skeleton";
import List from "../ui/List";

const StyledList = styled.div`
  padding: 20px;
  margin-top: auto;
  margin-bottom: auto;

  @media only screen and (max-width: 1440px) {
    overflow-x: hidden;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    width: unset;
    padding: 0 20px;
  }
  @media only screen and (max-width: 1024px) {
    padding: 10px 20px;
    width: 100vw;
    overflow-x: hidden;
  }
  @media only screen and (max-width: 768px) {
    width: 100vw;
    overflow-x: hidden;
  }
  @media only screen and (max-width: 490px) {
    padding: 2vmin 0px 0;
  }
`;

function Days() {
  const { weather } = useWeather();
  useEffect;
  const weatherTemp = weather?.daily?.temperature_2m_max;
  const weatherTempMin = weather?.daily?.temperature_2m_min;
  const weatherCode = weather?.daily?.weathercode;
  const days = weather?.daily?.time;

  const nextDays = days?.slice(1, days.length);
  const fakeArr = [...Array.from({ length: 6 })];

  return (
    <StyledList>
      <List $horizontal>
        {!weather
          ? fakeArr.map((_, i) => <Skeleton key={i} color={i} day={i} />)
          : nextDays?.map((day, i) => (
              <Day
                key={i}
                color={i}
                data={day}
                code={weatherCode[i]}
                temp={weatherTemp[i]}
                temp_min={weatherTempMin[i]}
              />
            ))}
      </List>
    </StyledList>
  );
}

export default Days;
