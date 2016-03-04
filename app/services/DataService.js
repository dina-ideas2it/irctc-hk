app.service('DataService', function() {
  var storage = {},
    passengers = [];


  function addPassenger(passenger) {
    passengers.push(passenger);

    chrome.storage.sync.set({
      'passengers': passengers
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

  return {
    addPassenger: addPassenger,
    getBerthTypes: getBerthTypes
  };
});
