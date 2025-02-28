chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'displaySummarization') {
      // Display the summarized text in the popup
      const summarizedTextElement = document.getElementById('summarizedText');
      summarizedTextElement.textContent = message.text;
      // Open the popup
      chrome.action.openPopup();
    }
  });
  