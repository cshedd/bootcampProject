$(document).ready(function(event) {
  $('.weatherDisplay').empty();
  var cityName = "Austin";
  var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=54311ab33bc34ffaeaf50afd2d1b0fc3";

  $.ajax({url: queryURL, method: 'GET'})
    .done(function(response) {
      console.log(response);
      $('.weatherDisplay').append("<div><p class='weatherStats'>" + response.name + ", " + response.weather[0].description + ", " + response.main.temp + "\u2109" + "</p></div>");
  });
});
