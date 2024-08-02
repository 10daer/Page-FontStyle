// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize color variable with the current value of the input element with id 'fontColor'
  let color = document.getElementById("fontColor").value;

  // Add event listeners to the input element to update the color variable when its value changes
  document.getElementById("fontColor").addEventListener("change", function () {
    color = this.value;
  });
  document.getElementById("fontColor").addEventListener("paste", function () {
    color = this.value;
  });
  document.getElementById("fontColor").addEventListener("keyup", function () {
    color = this.value;
  });

  // Add a click event listener to the button with id 'btnChange'
  document.getElementById("btnChange").addEventListener("click", function () {
    // Query for the currently active tab in the current window
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // Send a message to the content script of the active tab to change the color
      chrome.tabs.sendMessage(tabs[0].id, {
        todo: "changeColor",
        clickedColor: color,
      });
    });
  });
});
