chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "addOverlay") {
    const overlay = document.createElement("div");
    overlay.style =
      "height: 100%; width: 100%; display: flex; align-items: center;";
    overlay.id = "mcdelivery-overlay";
    overlay.innerHTML =
      '<img src="https://cdn.discordapp.com/attachments/1103056407634383012/1184522537070247997/mcdelivery_1.png?ex=658c4794&is=6579d294&hm=c894aeedc5d4d31600a88544da420c055f94ee3b4b6d29e52afa5a8858cfbc48&" />';
    const videoPlayerDiv = document.querySelector(
      "div.InjectLayout-sc-1i43xsx-0.click-handler.zzTJm"
    );
    videoPlayerDiv.appendChild(overlay);
  }
  if (request.action === "removeOverlay") {
    const overlay = document.getElementById("mcdelivery-overlay");
    overlay.remove();
  }
});
