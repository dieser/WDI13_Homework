$(document).ready(function () {

      $("#weather-lookup").on('submit', function (event) {

      event.preventDefault(); //prevents browser sending form info to server.


      var city = $('#city').val();
      var cityWeatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=72469dd254350adafae9f9e30dce8a46';

      $.ajax(cityWeatherURL).done(function (data) {
        var $h2 = $('<h3>' + data.weather[0].description + '</h3>',  {content: data.name});
        $('#result').html($h2);
        var $theResult = $('<h3> The weather in </h3>');
        $('#result2').html($theResult);
        var $theResult1 = $('<h3> is </h3>');
        $('#result3').html($theResult1);
        var $h3 = $('<h3>' + data.name + '</h3>',  {content: data.name});
        $('#result1').html($h3);
      });
    });
  });
