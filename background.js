chrome.contextMenus.create({
  id: "copyToConverting",
  title: "Cyrillic-Latin",
  contexts: ["selection"], // ContextType
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "copyToConverting") {
    chrome.tabs.create({ url: "index.html?text=" + info.selectionText });
  }
});
