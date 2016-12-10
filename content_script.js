var allLinks = document.getElementsByTagName("a");
console.log(allLinks);
for (var i = 0; i < allLinks.length; i++) {
	allLinks[i].addEventListener("contextmenu",eventFunction,false);
}

function eventFunction(event) {
	console.log(event.target.outerText);
	chrome.runtime.sendMessage(event.target.outerText);
}