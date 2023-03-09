const url = 'https://blynk.cloud/external/api/update?token=Le1pNdDBrs0jBm2qL3VKWulK3QBCF7ix&pin=V1';

navigator.geolocation.getCurrentPosition(position => {
  const { latitude, longitude } = position.coords;
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  
  const data = `${latitude},${longitude}`;
  
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify([data])
  })
  .then(response => console.log(response))
  .catch(error => console.error(error));
}, error => {
  console.error(`Error getting location: ${error.message}`);
});
