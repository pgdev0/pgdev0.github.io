// var text = "";
// var obj = JSON.parse(text);
document.getElementById("top-head").innerHTML = flowPage.top[0].head;
document.getElementById("top-body").innerHTML = flowPage.top[0].body;
document.getElementById("middle-head").innerHTML = flowPage.middle.head;
document.getElementById("middle-body").innerHTML = flowPage.middle.body;
document.getElementById("bottom-head").innerHTML = flowPage.bottom.head;
document.getElementById("bottom-body").innerHTML = flowPage.bottom.body;

var stateNextPageFromTopPost = 0;
function nextPageFromTopPost1() {
  if(stateNextPageFromTopPost == 0) {
    document.getElementById("top-body").innerHTML = flowPage.top.body + "      ...clicked";
    stateNextPageFromTopPost = 1;
    document.getElementById("aaa").style.visibility = "hidden";
  } else {
    document.getElementById("top-body").innerHTML = flowPage.top.body;
    stateNextPageFromTopPost = 0;   
  }
}
function nextPageFromTopPost() {
  flowPageCurrent = flowPage.top[0].next;
  document.getElementById("top-head").innerHTML = flowPageCurrent.top[0].head
  document.getElementById("top-body").innerHTML = flowPageCurrent.top[0].body
  stateNextSlideFromTopPost = 0;
}

function nextSlideFromTopPost() {
  stateNextSlideFromTopPost++;
  if(flowPageCurrent.top[stateNextSlideFromTopPost] == undefined) {  stateNextSlideFromTopPost = 0 }
  document.getElementById("top-head").innerHTML = flowPageCurrent.top[stateNextSlideFromTopPost].head
  document.getElementById("top-body").innerHTML = flowPageCurrent.top[stateNextSlideFromTopPost].body
}
function prevSlideFromTopPost() {
  stateNextSlideFromTopPost--;
  if(flowPageCurrent.top[stateNextSlideFromTopPost] == undefined) 
    {  stateNextSlideFromTopPost = flowPageCurrent.top.length - 1 }
  document.getElementById("top-body").innerHTML = flowPageCurrent.top[stateNextSlideFromTopPost].body
}

function nextSlideFromTopPost1() {
  if(stateNextPageFromTopPost == 0) {
    document.getElementById("top-body").innerHTML = flowPage.top.next.top[0].body + "      ...clicked";
    stateNextPageFromTopPost = 1;
  } else if(stateNextPageFromTopPost == 1) {
    document.getElementById("top-body").innerHTML = flowPage.top.next.top[1].body + "      ...clicked again";
    stateNextPageFromTopPost = 2;
  } else {
    document.getElementById("top-body").innerHTML = flowPage.top.next.top[2].body;
    stateNextPageFromTopPost = 0;   
  }
}
function nextSlideFromMiddlePost() {
  if(stateNextPageFromMiddlePost == 0) {
    document.getElementById("middle-body").innerHTML = flowPage.middle.body + "      ...clicked";
    stateNextPageFromMiddlePost = 1;
    document.getElementById("bbb").style.visibility = "hidden";
  } else if(stateNextPageFromMiddlePost == 1) {
    document.getElementById("middle-body").innerHTML = flowPage.middle.body + "      ...clicked again";
    stateNextPageFromMiddlePost = 2;
  } else {
    document.getElementById("middle-body").innerHTML = flowPage.middle.body;
    stateNextPageFromMiddlePost = 0;   
  }
}
function nextSlideFromBottomPost() {
  if(stateNextPageFromBottomPost == 0) {
    document.getElementById("bottom-body").innerHTML = flowPage.bottom.body + "      ...clicked";
    stateNextPageFromBottomPost = 1;
    document.getElementById("ccc").style.visibility = "hidden";
  } else {
    document.getElementById("bottom-body").innerHTML = flowPage.bottom.body;
    stateNextPageFromBottomPost = 0;   
  }
}
