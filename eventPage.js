// Listen for messages sent from other parts of the extension
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // Check if the message received has a property 'todo' with the value 'showPageAction'
  if (request.todo === "showPageAction") {
    // Query the currently active tab in the current window
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // Show the page action icon for the first tab in the result (the active tab)
      chrome.pageAction.show(tabs[0].id);
    });
  }
});
