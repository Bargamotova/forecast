import styled from "styled-components";
import { useWeather } from "../hooks/useWeather";
import { customGetDay, getWeatherIcon } from "../utils/helpers";
import { colors } from "../data/colors";
import Heading from "./Heading";
import Unit from "./Unit";

const StyledDay = styled.li`
  scroll-snap-align: center;

  min-width: 200px;
  max-width: 200px;
  width: 200px;
  height: 300px;

  flex-basis: 200px;
  flex: 1 0 auto;

  border: 5px solid #fff;
  border-radius: 10px;
  display: flex;

  flex-direction: column;
  align-items: center;

  position: relative;
  box-shadow: var(--shadow), inset 1px 1px 7px 1px rgba(120, 120, 120, 0.2),
    inset -1px -1px 7px 1px rgba(120, 120, 120, 0.2);

  color: var(--gray-dark);
  @media only screen and (max-width: 90rem) {
    height: auto;
    padding: 40px 0;
  }
  @media only screen and (max-width: 64rem) {
    justify-content: space-evenly;
  }
  @media only screen and (max-width: 30.625rem) {
    border: var(--border-thin);
  }
  &::after {
    content: "";
    position: absolute;
    inset: 20px;
    background: rgba(245, 233, 233, 0.5);
    border: 1px solid var(--gray-dark);
    border-radius: 10px;
    z-index: 0;
    @media only screen and (max-width: 64rem) {
      inset: 10px;
    }
  }
  @media only screen and (max-width: 90rem) {
    min-width: 180px;
    width: 180px;
  }
  @media only screen and (max-width: 64rem) {
    min-width: 120px;
  }
`;
const Container = styled.div`
  text-align: center;
  padding: 20px;
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
`;

const Dates = styled.data`
  font-size: 1rem;
  text-wrap: nowrap;
  @media only screen and (max-width: 25.875rem) {
    font-size: 0.875rem;
  }
`;
const Img = styled.img`
  height: auto;
  width: 80px;
  @media only screen and (min-width: 100rem) {
    width: 120px;
  }
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Temperature = styled.div`
  display: flex;
  text-align: center;
  font-size: 3vmin;
  line-height: 1;
  @media only screen and (max-width: 64rem) {
    font-size: 1.5rem;
  }
`;

function Day({
  data = "day of week",
  code = "0",
  temp = "0",
  temp_min = "0",
  color,
}) {
  const { weather } = useWeather();
  const { temperature_2m_min } = weather.daily_units;
  return (
    <StyledDay style={{ backgroundColor: `${colors[color]}` }}>
      <Container>
        <Heading as="h3" $dark>
          {customGetDay(data)}
        </Heading>
        <Dates>{data}</Dates>
        <Img
          src={getWeatherIcon(code)}
          alt="icon weather code"
          width="100px"
          loading="lazy"
        />
        <Box>
          <Temperature>
            {Math.floor(temp_min)}
            <Unit $darkFont>{temperature_2m_min.slice(0, 1)}</Unit>
          </Temperature>
          <Unit $darkFont>•</Unit>
          <Temperature>
            {Math.floor(temp)}{" "}
            <Unit $darkFont>{temperature_2m_min.slice(0, 1)}</Unit>
          </Temperature>
        </Box>
      </Container>
    </StyledDay>
  );
}

export default Day;
