import styled from "styled-components";
import { useLocation } from "../hooks/useLocation";
import { useWeather } from "../hooks/useWeather";
import {
  getWeatherIcon,
  getWindDirection,
  separateDateTime,
} from "../utils/helpers";

import rise from "../assets/icons/rise.svg";
import down from "../assets/icons/down.svg";
import wind from "../assets/icons/wind_bind.svg";
import rain from "../assets/icons/i_light_rain.svg";
import sunny from "../assets/icons/i_sunny.svg";

import Heading from "../ui/Heading";
import Image from "../ui/Image";
import NoLocation from "../ui/NoLocation";

import TextLoader from "../ui/TextLoader";
import WindySpinner from "../ui/WindySpinner";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: #fff;
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

  @media only screen and (max-width: 30.625rem) {
    margin-inline: auto;
    margin-bottom: 20px;
    width: 100%;
    gap: 10px;
  }
`;
const BoxToday = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Temp = styled.div`
  margin: 0;
  font-size: 9vmin;
  line-height: 0.8;
  color: #fff;
  & span {
    font-size: 16px;
    display: block;
    text-align: center;
  }
  @media only screen and (min-width: 125rem) {
    font-size: 90px;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 220px);
  align-items: center;
  justify-items: center;
  gap: 30px;
  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    width: 90%;
  }
  @media only screen and (max-width: 25.875rem) {
    gap: 10px;
  }
`;
const TempNow = styled.div`
  text-align: center;
  background: var(--purple);
  padding: 10px 5px;
  border-radius: 10px;
  width: 100%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  text-wrap: nowrap;
  background-image: var(--gradient_two_clr);
  border: var(--border-thin);
  box-sizing: content-box;

  display: flex;
  justify-content: space-between;
`;
const Sunrise = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  border: var(--border-thin);
  box-sizing: content-box;
  padding: 10px 5px;
  border-radius: 10px;
  width: 100%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  background-image: var(--gradient_two_clr);
  @media only screen and (max-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: unset;
  }
`;
const SunTime = styled.div`
  line-height: 1;
  margin: 0;
  margin-bottom: 10px;
  font-size: 1.5rem;
`;
const Unit = styled.div`
  font-size: 16px;
  display: inline-block;
`;
function Forecast() {
  const { isLoading } = useLocation();
  const { isWeatherDataLoading, weather } = useWeather();

  const image = getWeatherIcon(weather?.current?.weather_code);
  const windDirection = weather?.current?.wind_direction_10m;
  const windSpeed = weather?.current?.wind_speed_10m;
  const apparentTemperature = weather?.current?.apparent_temperature;
  const precipitationProbability = weather?.current?.precipitation;
  const Temperature = weather?.current?.temperature_2m;

  const temp = Math.floor(weather?.daily?.temperature_2m_max.at(0));
  const temp_min = Math.floor(weather?.daily?.temperature_2m_min.at(0));
  const sunriseTime = weather?.daily?.sunrise.at(0);
  const sunsetTime = weather?.daily?.sunset.at(0);

  if (isLoading || isWeatherDataLoading)
    return <WindySpinner w="30vmin" h="30vmin" size="7vmin" />;
  if (!weather) return <NoLocation />;
  if (isWeatherDataLoading) return <TextLoader />;
  return (
    <Container>
      <BoxToday>
        <Temp>
          {isWeatherDataLoading ? "0" : temp_min}
          <Unit> {weather?.current_units.temperature_2m}</Unit>
          <span>min</span>
        </Temp>
        <Image
          loading="lazy"
          $big_icon
          src={isWeatherDataLoading ? sunny : image}
          alt="icon weather"
          width="30vmin"
        />
        <Temp>
          {isWeatherDataLoading ? "0" : temp}
          <Unit> {weather?.current_units.temperature_2m}</Unit>
          <span>max</span>
        </Temp>
      </BoxToday>
      <Grid>
        <TempNow>
          <Heading as="h4" $secondary>
            Temperature
          </Heading>
          <Heading as="h4" $secondary>
            {Temperature} <Unit> {weather?.current_units.temperature_2m}</Unit>
          </Heading>
        </TempNow>
        <TempNow>
          <Heading as="h4" $secondary>
            Apparent
          </Heading>
          <Heading as="h4" $secondary>
            {apparentTemperature}
            <span>{weather?.daily_units.precipitation_probability_max}</span>
          </Heading>
        </TempNow>
      </Grid>
      <Grid>
        <Sunrise>
          <Heading as="h4" $secondary>
            Sunrise
          </Heading>
          <Image
            loading="lazy"
            $small_icon
            src={rise}
            alt="icon weather"
            width="50px"
          />
          <SunTime>{separateDateTime(sunriseTime)}</SunTime>
        </Sunrise>
        <Sunrise>
          <Heading as="h4" $secondary>
            Sunset
          </Heading>
          <Image
            loading="lazy"
            $small_icon
            src={down}
            alt="icon weather"
            width="50px"
          />
          <SunTime>{separateDateTime(sunsetTime)}</SunTime>
        </Sunrise>
      </Grid>
      <Grid>
        <Sunrise>
          <Heading as="h4" $secondary>
            Precipitation
          </Heading>
          <Image
            loading="lazy"
            $small_icon
            src={rain}
            alt="icon weather"
            width="50px"
          />
          <Heading as="h4" $secondary>
            {precipitationProbability}%
          </Heading>
        </Sunrise>
        <Sunrise>
          <Heading as="h4" $secondary>
            {getWindDirection(windDirection)} Wind
          </Heading>
          <Image
            loading="lazy"
            $small_icon
            src={wind}
            alt="icon weather"
            width="50px"
          />
          <Heading as="h4" $secondary>
            {windSpeed} • km/h
          </Heading>
        </Sunrise>
      </Grid>
    </Container>
  );
}

export default Forecast;
