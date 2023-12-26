chrome.browserAction.disable();
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if(changeInfo.status === 'loading'){
        console.log(changeInfo.status)
    	if (tab.url.indexOf("instagram.com") > 0) {
	        chrome.tabs.executeScript(tabId, {file: "jquery.min.js"}, function(){
                chrome.browserAction.enable(tabId);
        	});
        }
    }
});

