function getCurrentLocation(callback, errorCallback) {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      callback(position.coords.latitude, position.coords.longitude);
    }, errorCallback);
  } else {
    errorCallback("Geolocation is not available");
  }
}
