import { images } from "../data/data-icons";
import { timeZoneCityToCountry } from "../data/data_cities_to_countries";
import { weekdays } from "../data/weekdays";

export function customGetDay(dateInput) {
  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date input');
  }
  const dayOfWeek = date.getDay();
  return weekdays[dayOfWeek];
}


export function formatDateLocal(dateStr) {
  const options = { year: 'numeric', month: 'long', day: '2-digit' };
  const dataFormat = dateStr.toLocaleDateString('en-US', options).replace('/', '.').replace('/', '.');
  return dataFormat;
}

export function getWeatherIcon(wmoCode) {
  const icons = new Map([
    [[0], `${images[0]}`],// sunny
    [[1], `${images[1]}`],// sun-windy
    [[2], `${images[2]}`],// 
    [[3], `${images[2]}`],// cloudy
    [[45, 48], `${images[3]}`],// fog
    [[51, 56, 61, 66, 80], `${images[11]}`],// sun-snow

    [[53, 55, 63, 65, 57, 67, 81, 82], `${images[5]}`],// rainy
    [[71, 73, 75, 77, 85, 86], `${images[6]}`],// snowy
    [[93, 94], `${images[7]}`],// wed-snow
    [[95], `${images[8]}`],// big-rain
    [[96, 99], `${images[9]}`],// storm
    [[26, 27, 28, 29], `${images[10]}`]// rain-snow
  ]);
  const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return 'Not Found';
  return icons.get(arr);
}
export const separateDateTime = (dateTime) => {
  return dateTime?.split("T")[1].split(".")[0]
}


export function getWindDirection(degrees) {
  const directions = ['North', 'Northeast', 'East', 'Southeast', 'South', 'Southwest', 'West', 'Northwest'];
  degrees = degrees * directions.length / 360;
  degrees = Math.round(degrees, 0);
  degrees = (degrees + 8) % 8;
  return directions[degrees];
}

export function getCapitalCityName() {
  let userRegion;
  let userCity;
  let userCountry;
  let userTimeZone;

  if (Intl) {

    userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    var tzArr = userTimeZone.split("/");
    userRegion = tzArr[0];
    userCity = tzArr[tzArr.length - 1];
    userCountry = timeZoneCityToCountry[userCity];

  }
  return { userCity, userCountry, userRegion };

}
