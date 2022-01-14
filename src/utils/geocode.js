const request = require("request");

const geocode = (address, callback) => {
  const url =
    // "https://api.mapbox.com/geocoding/v5/mapbox.places/ '+ encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2lkZGhhcnRoLTEzIiwiYSI6ImNrdzF3d3RsMDFxNzIyb3FpZnE2bTVjcnIifQ.hMFpzCN2pOHWzldTkG6kHQ&limit=1";

    "http://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1Ijoic2lkZGhhcnRoLTEzIiwiYSI6ImNrdzF3d3RsMDFxNzIyb3FpZnE2bTVjcnIifQ.hMFpzCN2pOHWzldTkG6kHQ&limit=1";

  //=======================Using Destructring=======================
  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to the location service", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find the location. try Another Search", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[0],
        longitude: body.features[0].center[1],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
