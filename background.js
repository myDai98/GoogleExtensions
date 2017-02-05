// Set up context menu at install time.


/*chrome.runtime.onInstalled.addListener(function() {
  var context2 = "selection";
  var title2 = "CampusBooks for Selected Book";
  var id2 = chrome.contextMenus.create({"title": title2, "contexts":[context2],
                                         "id": "context" + context2});  
});

chrome.runtime.onInstalled.addListener(function() {
  var context1 = "selection";
  var title1 = "Amazon for Selected Book";
  var id1 = chrome.contextMenus.create({"title": title1, "contexts":[context1],
                                         "id": "context" + context1});  
});
*/
// function genericOnClick(info, tab) {
//   console.log("item " + info.menuItemId + " was clicked");
//   console.log("info: " + JSON.stringify(info));
//   console.log("tab: " + JSON.stringify(tab));
// }

var parent = chrome.contextMenus.create({"title": "Buybooks","contexts":["selection"]});
var child1 = chrome.contextMenus.create(
  {"title": "Amazon", "contexts":["selection"],"parentId": parent, "onclick": onClickHandlerAmazon});
var child2 = chrome.contextMenus.create(
  {"title": "CampusBooks", "contexts":["selection"],"parentId": parent, "onclick": onClickHandlerCampusBooks});
var child3 = chrome.contextMenus.create(
  {"title": "eBay", "contexts":["selection"],"parentId": parent, "onclick": onClickHandlereBay});

/*// add click event
chrome.contextMenus.onClicked.addListener(onClickHandlerAmazon);
chrome.contextMenus.onClicked.addListener(onClickHandlerCampusBooks);*/


function onClickHandlerAmazon(info, tab) {
  var sText = info.selectionText;
  var url = "https://www.amazon.com/s/ref=nb_sb_ss_sc_4_5?url=search-alias%3Daps&field-keywords=" + encodeURIComponent(sText);  
  window.open(url, '_blank');
};

function onClickHandlerCampusBooks(info, tab) {
  var sText = info.selectionText;
  var url = "https://www.campusbooks.com/books/search?keywords=" + encodeURIComponent(sText);  
  window.open(url, '_blank');
};

function onClickHandlereBay(info, tab) {
  var sText = info.selectionText;
  var url = "http://www.ebay.com/sch/i.html?_from=R40&_trksid=p2050601.m570.l1313.TR12.TRC2.A0.H0.Xjj.TRS0&_nkw=" + encodeURIComponent(sText);  
  window.open(url, '_blank');
};



