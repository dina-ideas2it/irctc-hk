function filluserCred(){
  document.getElementById('usernameId').value = 'Dina_Karan';
  document.querySelector('input[type="password"]').value = "Dcd856";
  $(".loginCaptcha").focus();

  $(".loginCaptcha").blur(function(){
    $("#loginbutton").click();
  });
}

function fillStations() {
  document.getElementById('jpform').elements['jpform:fromStation'].value = 'TAMBARAM - TBM';
  document.getElementById('jpform').elements['jpform:toStation'].value = 'MADURAI JN - MDU';
  document.getElementById('jpform').elements['jpform:journeyDateInputDate'].value = '21-03-2016';
  $(document.getElementById('jpform').elements['jpform:journeyDateInputDate']).change();
  setTimeout(function() {
    $('#jpform').find('input[type=\'submit\']').click()
  }, 200)
}


function getBookNowLink() {
  $('input[value=\'CK\']').click();
  var x = $('.journeyTrainList').find('tr td:first-child a');
  x.each(function(index, obj) {
    if ($(obj).text() == '12631') {
      var classes = $(obj).closest('tr').find('td:last-child a');
      classes.each(function(cIndex, classe) {
        if ($(classe).text() == 'SL') {
          var ev = $(classe).attr('href').split('javascript:')[1];
          setTimeout(function(){
              $(classe)[0].click();
          },1000)

        }
      })
    }
  });
}

function fillPass() {
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
  });


  $("#j_captcha").focus();
}

function makeItPay(){
  $("#NETBANKING").click();
  j.each(function(index, elm){
    if(elm.value === '36'){
      $(elm).click();
    }
  })
}

function activateAutoFill(url){
  chrome.storage.sync.get("passengers", function (obj) {
    console.log(obj);
});


  if(url == "https://www.irctc.co.in/eticketing/loginHome.jsf"){
    filluserCred();
  } else if(url=="https://www.irctc.co.in/eticketing/home"){
    fillStations();
  } else if(url == "https://www.irctc.co.in/eticketing/mainpage.jsf" ||  url.indexOf("https://www.irctc.co.in/eticketing/trainbetweenstns.jsf") > -1){
    if($("#avlAndFareForm").length > 0){
      getBookNowLink();
    }else if($("#addPassengerForm").length > 0){
      fillPass();
    }
  } else if(url.indexOf("https://www.irctc.co.in/eticketing/jpInput.jsf") > -1){
    makeItPay();
  }
}
var currentUrl = window.location.href;
activateAutoFill(currentUrl);
