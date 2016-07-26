// var text = "";
// var obj = JSON.parse(text);
document.getElementById("top-head").innerHTML = flowPage.top.head;
document.getElementById("top-body").innerHTML = flowPage.top.body;
document.getElementById("middle-head").innerHTML = flowPage.middle.head;
document.getElementById("middle-body").innerHTML = flowPage.middle.body;
document.getElementById("bottom-head").innerHTML = flowPage.bottom.head;
document.getElementById("bottom-body").innerHTML = flowPage.bottom.body;

var stateNextPageFromTopPost = 0;
function nextPageFromTopPost() {
  if(stateNextPageFromTopPost == 0) {
    document.getElementById("top-body").innerHTML = flowPage.top.body + "      ...clicked";
    stateNextPageFromTopPost = 1;
  } else {
    document.getElementById("top-body").innerHTML = flowPage.top.body;
    stateNextPageFromTopPost = 0;   
  }
}
var stateNextPageFromMiddlePost = 0;
function nextPageFromMiddlePost() {
  if(stateNextPageFromMiddlePost == 0) {
    document.getElementById("middle-body").innerHTML = flowPage.middle.body + "      ...clicked";
    stateNextPageFromMiddlePost = 1;
  } else if(stateNextPageFromMiddlePost == 1) {
    document.getElementById("middle-body").innerHTML = flowPage.middle.body + "      ...clicked again";
    stateNextPageFromMiddlePost = 2;
  } else {
    document.getElementById("middle-body").innerHTML = flowPage.middle.body;
    stateNextPageFromMiddlePost = 0;   
  }
}
var stateNextPageFromBottomPost = 0;
function nextPageFromBottomPost() {
  if(stateNextPageFromBottomPost == 0) {
    document.getElementById("bottom-body").innerHTML = flowPage.bottom.body + "      ...clicked";
    stateNextPageFromBottomPost = 1;
  } else {
    document.getElementById("bottom-body").innerHTML = flowPage.bottom.body;
    stateNextPageFromBottomPost = 0;   
  }
}
