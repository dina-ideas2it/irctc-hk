alert('App Launched');


chrome.webRequest.onCompleted.addListener(function(request){
  console.log(arguments);
},{urls: ["https://*.irctc.co.in/*"]}, ['requestBody']);
