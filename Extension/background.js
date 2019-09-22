
chrome.browserAction.onClicked.addListener(function(inactiveTab){
  var newURL = "http://localhost:8080";
  chrome.tabs.create({url: newURL, active: false });
});

