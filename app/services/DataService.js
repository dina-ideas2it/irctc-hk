app.service('DataService', function() {
  var storage = {},
    passengers = [];

    chrome.storage.sync.get('passengers', function(data) {
      passengers = data.passengers || [];
    });

    function addPassengers(passengersArg) {
      passengers = passengers.concat(passengersArg);

      chrome.storage.sync.set({
        'passengers': passengers
      }, function() {

      });
    };

    function saveJourney(journey) {
      chrome.storage.sync.set({
        'journey': journey
      }, function() {

      });
    };

  function getBerthTypes() {
    var berths = [{
      "value": " ",
      "label": "No Preference"
    }, {
      "value": "LB",
      "label": "LOWER"
    }, {
      "value": "MB",
      "label": "MIDDLE"
    }, {
      "value": "UB",
      "label": "UPPER"
    }, {
      "value": "SIDE LOWER",
      "label": "SL"
    }, {
      "value": "SIDE UPPER",
      "label": "SU"
    }, {
      "value": "WINDOW SIDE",
      "label": "WS"
    }];

    return berths
  }

  function getPassengers(cb){
    chrome.storage.sync.get('passengers', function(data) {
      passengers = data.passengers || [];
      cb(passengers);
    });
  }

  return {
    addPassengers: addPassengers,
    getBerthTypes: getBerthTypes,
    getPassengers : getPassengers,
    saveJourney : saveJourney
  };
});
