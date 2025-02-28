// Content Script
chrome.runtime.sendMessage({ action: "getStorageValue" }, async function(response) {
    if (response && response.summarizedText) {
      document.getElementById("summarizedText").innerText = response.summarizedText;
      document.getElementById("summarizedText").style.lineHeight = "1.5";
    }
  });
  
  