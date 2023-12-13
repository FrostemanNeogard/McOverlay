var isOverlayActive = true;

document.getElementById("toggleOverlay").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs[0].url.match("https://.*.twitch.tv/.*")) {
      if (tabs.length > 0) {
        isOverlayActive = !isOverlayActive;
        chrome.tabs.sendMessage(tabs[0].id, {
          action: isOverlayActive ? "removeOverlay" : "addOverlay",
        });
      } else {
        console.log("Error: No active tab found");
      }
    }
  });
});
