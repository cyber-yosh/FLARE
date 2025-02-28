document.addEventListener("mouseup", function(event) {
  var selectedText = window.getSelection().toString();
  var selection = window.getSelection();
  

  if (selectedText.length>1)
  {

    var range = selection.getRangeAt(0);

    var rect = range.getBoundingClientRect();

    var button = document.createElement("button");
    
    button.classList.add("logo-button");


    button.style.position = "absolute";
    button.style.left = rect.left + window.scrollX + "px"; // Adjusted by 20px to offset the button's width
    button.style.top = rect.bottom + window.scrollY + "px"; // Adjusted by 20px to offset the button's height
    button.style.zIndex = "999999"; // Ensure it's on top of other elements
    button.style.backgroundPosition = "center";

    var size = "30px"; // Adjust the size of the button as needed
    button.style.width = size;
    button.style.height = size;
    button.style.borderRadius = "50%";

    document.body.appendChild(button);


    
    // Add click event listener to handle button click action

    document.addEventListener("mouseup", function(event) {
      if (button.contains(event.target))
      {
        console.log("Button clicked")
        button.remove();
        
        chrome.runtime.sendMessage({
          action: "highlight",
          text: selectedText
          });

        
      }
      else {
        button.remove();
      }
    });

  }

});



