// DON"T NEED BELOW CODE BUT YOU CAN USE IT TO EXPERIMENT

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       console.log("from either extension or content script");
//       if (request.greeting === "hello")
//         sendResponse({farewell: "goodbye"});
//     }
// );

tellContentScriptToReload = (tab) => {
    var {tabId} = tab;

    chrome.scripting.executeScript({
        target: { tabId },
        files: ["content-injection.js"]
    })
    .then(() => {
        console.log("injected a function")
    });

}
  
chrome.webRequest.onCompleted.addListener(
    tellContentScriptToReload,          
    {urls: ["https://medium.com/*/stats?*"]}
)

