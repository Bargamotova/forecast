import { getCapitalCityName } from "../utils/helpers";
import { getMyPosition } from "./apiGeocoding";

const weatherURL = import.meta.env.VITE_WEATHER_URL;
const geocodingURL = import.meta.env.VITE_GEOCODING_URL;



async function getCity(location) {

  if (location.length === 0) {
    location = await getMyPosition();
  }
  try {
    const geoRes = await fetch(
      `${geocodingURL}search?name=${location.length > 0 ? location : location.city}`
    );
    const geoData = await geoRes.json();
    if (!geoData.results) throw new Error('Location not found');
    const { latitude, longitude, timezone } = geoData.results.at(0);
    return { latitude, longitude, timezone };
  } catch (error) {
    throw new Error(`Something went wrong ${error}`)
  }
}

export async function getWeather(location = "") {
  let locationObj;
  if (!location) {
    locationObj = getCapitalCityName();
  }
  const data = await getCity(location || locationObj.userCity);
  const { latitude, longitude, timezone } = data;
  try {
    const weatherRes = await fetch(`${weatherURL}forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max,wind_speed_10m_max,wind_direction_10m_dominant&&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m`);

    const weatherData = await weatherRes.json();
    return weatherData;
  } catch (error) {
    console.log(error)
  }
}

