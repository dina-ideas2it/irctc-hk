function filluserCred(journey){
  document.getElementById('usernameId').value = journey.username;
  document.querySelector('input[type="password"]').value = journey.password;
  $(".loginCaptcha").focus();

  $(".loginCaptcha").blur(function(){
    $("#loginbutton").click();
  });
}

function fillStations(journey) {
  document.getElementById('jpform').elements['jpform:fromStation'].value = journey.fromStation.display;
  document.getElementById('jpform').elements['jpform:toStation'].value = journey.toStation.display;
  document.getElementById('jpform').elements['jpform:journeyDateInputDate'].value = journey.journeyDate;
  $(document.getElementById('jpform').elements['jpform:journeyDateInputDate']).change();
  setTimeout(function() {
    $('#jpform').find('input[type=\'submit\']').click()
  }, 200)
}

function getBookNowLink(journey) {
  $('input[value=\''+journey.ticketType+'\']').click();
  var x = $('.journeyTrainList').find('tr td:first-child a');
  x.each(function(index, obj) {
    if ($(obj).text() == journey.trainNumber) {
      var classes = $(obj).closest('tr').find('td:last-child a');
      classes.each(function(cIndex, classe) {
        if ($(classe).text() == journey.classType) {
          var ev = $(classe).attr('href').split('javascript:')[1];
          setTimeout(function(){
              $(classe)[0].click();
          },1000)

        }
      })
    }
  });
}

function fillPass(journey) {
  var tr = {};
  chrome.storage.sync.get('passengers', function(data) {
    var passengers = data.passengers || [];

    for(var i= 0;i<passengers.length;i++){
      var tr = $('tr[id=\'addPassengerForm:psdetail:'+i+'\']');
      tr.find('.psgn-name').val(passengers[i].name);
      tr.find('.psgn-age').val(passengers[i].age);
      tr.find('.psgn-gender').val(passengers[i].gender);
      tr.find('.psgn-berth-choice').val(passengers[i].berthType);
    }
    $("input[id=\"addPassengerForm:mobileNo\"]").val(journey.phoneNumber);
  });
  $("#j_captcha").focus();
  $("#j_captcha").blur(function(){
      $("input#validate").click();
  });
}

function fillCard(payment) {
    var tr = $('table[id=\'card-input-table\']');
    tr.find('#card_type_id').val(payment.cardType);
    tr.find('#card_no_id').val(payment.cardNumber);
    tr.find('#card_expiry_mon_id').val(payment.month);
    tr.find('#card_expiry_year_id').val(payment.year);
    tr.find('#cvv_no_id').val(payment.cvv);
    tr.find('#card_name_id').val(payment.name);
    tr.find('#captcha_txt').focus();
}

function makeItPay(){
    chrome.storage.sync.get('payment', function(data) {
        var payment = data.payment;
        //var payment = {"paymentType":"CREDIT_CARD","bank":"21","cardType":"VISA","cardNumber":"4587963258742365","month":"05","year":"2018","cvv":"456","name":"DINAKARAN S"};

        $("#"+payment.paymentType).click();
        setTimeout(function(){
            $("input#"+payment.paymentType+"[value='"+payment.bank+"']")[0].click();
            fillCard(payment);
        }, 100);
    });
}

function activateAutoFill(url, journey){
  if(url == "https://www.irctc.co.in/eticketing/loginHome.jsf"){
    filluserCred(journey);
} else if(url=="https://www.irctc.co.in/eticketing/home" || url == "https://www.irctc.co.in/eticketing/loginConfirm.jsf"){
    fillStations(journey);
  } else if(url == "https://www.irctc.co.in/eticketing/mainpage.jsf" ||  url.indexOf("https://www.irctc.co.in/eticketing/trainbetweenstns.jsf") > -1){
    if($("#avlAndFareForm").length > 0){
      getBookNowLink(journey);
    }else if($("#addPassengerForm").length > 0){
      fillPass(journey);
    }
  } else if(url.indexOf("https://www.irctc.co.in/eticketing/jpInput.jsf") > -1){
    makeItPay();
  }
}


function getjourneyDetails(cb){
chrome.storage.sync.get("journey", function (obj){
  //console.log(JSON.stringify(obj));
  cb(obj.journey)
});
}


function init(){
  var currentUrl = window.location.href;
  var joou = {"boardingDate":{},"classType":"SL","fromStation":{"display":"CHENNAI CENTRAL - MAS","value":"chennai central - mas"},"journeyDate":"07-03-2016","password":"daf474","ticketType":"CK","toStation":{"display":"ERODE JN - ED","value":"erode jn - ed"},"trainNumber":"12671","username":"dineshvgp"};
  getjourneyDetails(function(journey){
    activateAutoFill(currentUrl, journey);
  })
//  activateAutoFill(currentUrl, joou);
}

init();

function clickBooknow(journey){
    //var elmId = "a#12686-SL-CK-1";

    var elmId = "a#"+journey.trainNumber+"-"+journey.classType+"-"+journey.ticketType+"-0"
    $(elmId)[0].click();
}

function initiateBookNowLink(){
    getjourneyDetails(clickBooknow);
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request);
    initiateBookNowLink();
  });
