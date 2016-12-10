console.log("background page loaded ");
var text;
chrome.runtime.onMessage.addListener(
	function(info) {
		console.log("message received " + info);
		text = info.trim();
});

chrome.runtime.onInstalled.addListener(function() {
	chrome.contextMenus.create({
		"type":"normal",
		"title":"Copy link text",
		"contexts":["link"],
		"id":"item"
	},console.log("context menu item added"));
});	

chrome.contextMenus.onClicked.addListener(
	function() {
		console.log("received context menu click");
		if (text === "" || text === null)
			window.prompt("","No text to copy");
		else	
			window.prompt("",text);
	});