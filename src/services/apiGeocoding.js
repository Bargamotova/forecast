export function getPosition() {
  if (navigator.geolocation) {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    })
  }
}

async function getAddress({ latitude, longitude }) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw Error("Failed getting address");
  const data = await res.json();
  return data;
}

export const getMyPosition = async function fetchAddress() {
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };
  const addressObj = await getAddress(position);
  const address = { city: `${addressObj?.locality}`, country: `${addressObj?.countryName}`, latitude: `${addressObj?.latitude}`, longitude: `${addressObj?.longitude}` };
  return address;
}


