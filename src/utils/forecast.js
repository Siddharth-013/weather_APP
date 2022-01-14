const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    // "http://api.weatherstack.com/current?access_key=40d6d926becfbc8bb8f2a5db8115d2ec&query=37.8267,-122.4233";
    "http://api.weatherstack.com/current?access_key=40d6d926becfbc8bb8f2a5db8115d2ec&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";


  //==================  USING DESTRUCTRING======================
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to the location service", undefined);
    } else if (body.error) {
      callback(
        "Unable to find the location , try another search.. ",
        undefined
      );
    } else {
      //console.log(body.current);
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is Currently " +
          body.current.temperature +
          " Degress out. It feels like " +
          body.current.feelslike +
          " degree out & The humidity is " +
          body.current.humidity +
          "%" +
          " & The visibility is " +
          body.current.visibility +
          "%"
      );
    }
  });
};
module.exports = forecast;
