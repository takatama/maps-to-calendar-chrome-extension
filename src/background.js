var urlRegExp = new RegExp('^https?://www.google.com/maps/preview');

function showIcon(tabId, changeInfo, tab) {
    if (tab.url.match(urlRegExp)) {
      chrome.pageAction.show(tabId);
    }
}

chrome.tabs.onUpdated.addListener(showIcon);

chrome.pageAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {
        "file": "execute.js"
    }, function () {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
        }
    });
});
