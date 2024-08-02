// Send a message to the background script to show the page action (icon)
chrome.runtime.sendMessage({ todo: "showPageAction" });

// Add an event listener for incoming messages from the background script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // Check if the message is to change the color
  if (request.todo === "changeColor") {
    // Create the color string by concatenating a '#' with the color code received in the message
    var addColor = "#" + request.clickedColor;

    // Select all elements with the class 'title' and set their font style to italic
    document.querySelectorAll(".title").forEach(function (element) {
      element.style.fontStyle = "italic";
    });

    // Select all elements with the class 'title' and set their color to the new color
    document.querySelectorAll(".title").forEach(function (element) {
      element.style.color = addColor;
    });
  }
});
