



document.addEventListener('DOMContentLoaded', function () {
  //alert('dfdfdfdf');
  $("#bookmarks").click(function(){
    //alert('sdsdsd');
    chrome.tabs.create({'url': chrome.extension.getURL('index.html')}, function(tab) {
      // Tab opened.
    });
  });
});
