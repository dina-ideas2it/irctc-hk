chrome.webRequest.onBeforeRequest.addListener(function(request) {
  console.log(request);
  if (request.requestBody && request.requestBody.formData && request.requestBody.formData['avlAndFareForm:addtab']) {
    console.log(request.requestBody.formData);
    monitorCompletedRequest();
  }
}, {
  urls: ["https://*.irctc.co.in/*"]
}, ['requestBody']);

function monitorCompletedRequest() {
  function addRequestCompleteListener() {
    chrome.webRequest.onCompleted.removeListener(addRequestCompleteListener);
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function(tabs) {
        console.log(tabs);
      chrome.tabs.sendMessage(tabs[0].id, {
        invoke: "hello"
      }, function(response) {
        console.log(response.farewell);
      });
    });
  }

  chrome.webRequest.onCompleted.addListener(addRequestCompleteListener, {
    urls: ["https://*.irctc.co.in/*"]
  });
}
