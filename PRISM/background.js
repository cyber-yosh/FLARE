let webText = ""; 

chrome.runtime.onMessage.addListener(async function(message, sender, sendResponse) {
  if (message.action == "highlight") {
    
    chrome.tabs.query({ active: true, currentWindow: true }, async function(tabs) {
      // tabs is an array of Tab objects representing the currently active tabs
      if (tabs && tabs.length > 0) {
        // Get the URL of the current tab
        var currentUrl = tabs[0].url;
        console.log("Current URL:", currentUrl);
        
        chrome.sidePanel.open({ tabId: tabs[0].id });
        await chrome.sidePanel.setOptions({
          tabId: tabs[0].id,
          path: 'loadingscreen.html',
          enabled: true
        });
        webText = await summarizeText(message.text);
        await chrome.sidePanel.setOptions({
          tabId: tabs[0].id,
          path: 'sidepanel.html',
          enabled: true
        });
      }
    });

  }
  else if (message.action=="summarizeVideo")
  {
    chrome.tabs.query({ active: true, currentWindow: true }, async function(tabs) {
      // tabs is an array of Tab objects representing the currently active tabs
      if (tabs && tabs.length > 0) {
        // Get the URL of the current tab
        var currentUrl = tabs[0].url;        
        chrome.sidePanel.open({ tabId: tabs[0].id });
        await chrome.sidePanel.setOptions({
          tabId: tabs[0].id,
          path: 'loadingscreen.html',
          enabled: true
        });
        webText = await summarizeVideo(currentUrl);
        await chrome.sidePanel.setOptions({
          tabId: tabs[0].id,
          path: 'sidepanel.html',
          enabled: true
        });
      }
    });

  }
});

// Background Script
chrome.runtime.onMessage.addListener(async function(message, sender, sendResponse) {
  if (message.action === "getStorageValue") {
    sendResponse({ summarizedText: webText });
  }
});



chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.active && changeInfo.url) {
    updatePopupBasedOnURL(changeInfo.url);
  }
});

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
      updatePopupBasedOnURL(tab.url);
  });
});

function updatePopupBasedOnURL(url) {
  let popupHTML = "default.html"; // Default HTML

  // Determine HTML file based on the URL
  if (url.includes("youtube.com/watch")) {
    popupHTML = "popup_youtube.html";
  } else if (url.includes(".pdf")) {
    popupHTML = "popup_pdf.html";
  }

  // Set the new default popup HTML
  chrome.action.setPopup({ popup: popupHTML });
}

async function summarizeVideo(url) 
{
  try {
    const response = await fetch('http://127.0.0.1:5000/summarizeVideo', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({url: url})
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const ans = data.summarized_text;
      return ans;

  } catch (error) {
      console.error('Error:', error);
      return null
  }
}

async function summarizeText(text) {
  try {
      const response = await fetch('http://127.0.0.1:5000/summarizeHighlighted', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({text: text})
      });

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const ans = data.summarized_text;
      return ans;

      //displaySummarization(ans);

  } catch (error) {
      console.error('Error:', error);
      return null; // or handle the error as needed
  }
}


  









