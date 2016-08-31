app.service('DataService', function() {
  var storage = {},
    passengers = [],
    passengersLookup = {};

  chrome.storage.sync.get('passengers', function(data) {
    passengers = data.passengers || [];
  });

  function addPassengers(passengersArg, successCb) {
    passengers = passengers.concat(passengersArg);

    chrome.storage.sync.set({
      'passengers': passengers
    }, function() {
      successCb();
    });
  };

  function addJourneyPassengers(passengerIds, successCb) {
    var psngrs = [];
    for(var i=0;i<passengerIds.length;i++){
      psngrs.push(passengersLookup[passengerIds[i]]);
    }
    chrome.storage.sync.set({
      'journeyPassengers': psngrs
    }, function() {
      successCb();
    });
  };

  function saveJourney(journey) {
    chrome.storage.sync.set({
      'journey': journey
    }, function() {

    });
  };

  function savePayment(payment){
      chrome.storage.sync.set({
        'payment': payment
      }, function() {

      });
  }

  function getBerthTypes() {
    var berths = [{
      'value': ' ',
      'label': 'No Preference'
    }, {
      'value': 'LB',
      'label': 'LOWER'
    }, {
      'value': 'MB',
      'label': 'MIDDLE'
    }, {
      'value': 'UB',
      'label': 'UPPER'
    }, {
      'value': 'SIDE LOWER',
      'label': 'SL'
    }, {
      'value': 'SIDE UPPER',
      'label': 'SU'
    }, {
      'value': 'WINDOW SIDE',
      'label': 'WS'
    }];

    return berths
  }

  function getPassengers(cb) {
    chrome.storage.sync.get('passengers', function(data) {
      passengers = data.passengers || [];
      constructPassengerLookup();
      cb(passengers);
    });
  }

  function constructPassengerLookup(){
    for(var i=0;i<passengers.length;i++){
      passengersLookup[passengers[i].id] = passengers[i];
    }
  }
  return {
    addPassengers: addPassengers,
    getBerthTypes: getBerthTypes,
    getPassengers: getPassengers,
    saveJourney: saveJourney,
    savePayment: savePayment,
    addJourneyPassengers: addJourneyPassengers
  };
});

function orderedTest(){
var k = {
  'boardingDate': {},
  'classType': 'SL',
  'fromStation': {
    'display': 'CHENNAI CENTRAL - MAS',
    'value': 'chennai central - mas'
  },
  'journeyDate': '08-03-2016',
  'password': 'Dcd856',
  'ticketType': 'CK',
  'toStation': {
    'display': 'ERODE JN - ED',
    'value': 'erode jn - ed'
  },
  'trainNumber': '12681',
  'username': 'Dina_Karan'
};

chrome.storage.sync.set({
  'journey': k
}, function() {

});
}
