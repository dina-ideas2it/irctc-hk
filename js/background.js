alert('App Launched');


chrome.webRequest.onCompleted.addListener(function(details){
  console.log(details);
},{urls: ["https://*.irctc.co.in/*"]});
