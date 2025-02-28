// Function to summarize the video
function summarizeVideo() {
    chrome.runtime.sendMessage({action: "summarizeVideo"});
  
}

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    const summarizeButton = document.getElementById("summarizeVidButton");

    // Add event listener to the button if it exists
    summarizeButton.addEventListener("click", summarizeVideo);
});
