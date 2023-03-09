// Replace YOUR_AUTH_TOKEN with your Blynk project's Auth Token
const url = `http://cloud.blynk.cc:8080/Le1pNdDBrs0jBm2qL3VKWulK3QBCF7ix/update/v1`;

// Get the current location of the device
navigator.geolocation.getCurrentPosition(position => {
  const { latitude, longitude } = position.coords;
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

  // Send the location data to Blynk using the Virtual Pin API
  const data = `${latitude},${longitude}`;
  fetch(`${url}?value=${data}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => console.log(response))
  .catch(error => console.error(error));
}, error => {
  console.error(`Error getting location: ${error.message}`);
});
