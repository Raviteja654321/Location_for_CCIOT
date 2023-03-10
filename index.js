var AUTH = 'your_auth_token';
var blynk = new Blynk.Blynk(AUTH);

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(sendLocationToBlynk, locationError);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function sendLocationToBlynk(position) {
  var lat = position.coords.latitude;
  var lng = position.coords.longitude; 
  var mapUrl = "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + lng + "&zoom=15&size=300x300&markers=color:red%7Clabel:S%7C" + lat + "," + lng + "&key=YOUR_API_KEY";
  
//   blynk.virtualWrite(0, lat);
  blynk.virtualWrite(4, lng);
//   blynk.virtualWrite(4, mapUrl);
}

function locationError(error) {
  console.warn(`ERROR(${error.code}): ${error.message}`);
}

// Call the getLocation() function to initiate geolocation and send the location to Blynk dashboard
getLocation();
