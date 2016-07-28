// var text = "";
// var obj = JSON.parse(text);
renderPage();

function renderPage() {
  document.getElementById("top-head").innerHTML = flowPageCurrent.posts[0].slides[0].head;
  document.getElementById("top-body").innerHTML = flowPageCurrent.posts[0].slides[0].body;
  document.getElementById("middle-head").innerHTML = flowPageCurrent.posts[1].slides[0].head;
  document.getElementById("middle-body").innerHTML = flowPageCurrent.posts[1].slides[0].body;
  document.getElementById("bottom-head").innerHTML = flowPageCurrent.posts[2].slides[0].head;
  document.getElementById("bottom-body").innerHTML = flowPageCurrent.posts[2].slides[0].body;
  stateNextSlideFromTopPost = 0;
  stateNextSlideFromMiddlePost = 0;
  stateNextSlideFromBottomPost = 0;
}

function backButton() {
  // If stack is empty, them already at home
  if(stack.length==0) { alertModal("Can't go further back. Already at home."); return; }
  stack.pop(); // Peel current page off
  // If only one deep, bring back to home page
  flowPageCurrent = flowPage;
  if(stack.length==0) { renderPage(); return; }
  // If deep in the hier, start from the begining until you reach one less
  var i, post_loc;
  for(i=0; i<stack.length; i++) {
    post_loc = stack[i];
    if(flowPageCurrent.posts[post_loc].next == undefined) return;
    flowPageCurrent = flowPageCurrent.posts[post_loc].next 
  }
  renderPage();
}

function homeButton() {
  flowPageCurrent = flowPage;
  renderPage();
}

/* ------------------------- Top-post buttons ------------------------ */
function nextPageFromTopPost() {
  if(flowPageCurrent.posts[0].next == undefined) { alertModal("No further content"); return; }
  flowPageCurrent = flowPageCurrent.posts[0].next;
  renderPage();
  stack.push(0);
}

function nextSlideFromTopPost() {
  if(flowPageCurrent.posts[0].slides.length == 1) { alertModal("No other slide"); return; }
  stateNextSlideFromTopPost++;
  if(flowPageCurrent.posts[0].slides[stateNextSlideFromTopPost] == undefined) {  stateNextSlideFromTopPost = 0 }
  document.getElementById("top-head").innerHTML = flowPageCurrent.posts[0].slides[stateNextSlideFromTopPost].head
  document.getElementById("top-body").innerHTML = flowPageCurrent.posts[0].slides[stateNextSlideFromTopPost].body
}
function prevSlideFromTopPost() {
  if(flowPageCurrent.posts[0].slides.length == 1) { alertModal("No other slide"); return; }
  stateNextSlideFromTopPost--;
  if(flowPageCurrent.posts[0].slides[stateNextSlideFromTopPost] == undefined) 
    {  stateNextSlideFromTopPost = flowPageCurrent.posts[0].slides.length - 1 }
  document.getElementById("top-head").innerHTML = flowPageCurrent.posts[0].slides[stateNextSlideFromTopPost].head
  document.getElementById("top-body").innerHTML = flowPageCurrent.posts[0].slides[stateNextSlideFromTopPost].body
}

/* ------------------------- Middle-post buttons ------------------------ */
function nextPageFromMiddlePost() {
  if(flowPageCurrent.posts[1].next == undefined) { alertModal("No further content"); return; }
  flowPageCurrent = flowPageCurrent.posts[1].next;
  renderPage();
  stack.push(1);
}

function nextSlideFromMiddlePost() {
  if(flowPageCurrent.posts[1].slides.length == 1) { alertModal("No other slide"); return; }
  stateNextSlideFromMiddlePost++;
  if(flowPageCurrent.posts[1].slides[stateNextSlideFromMiddlePost] == undefined) {  stateNextSlideFromMiddlePost = 0 }
  document.getElementById("middle-head").innerHTML = flowPageCurrent.posts[1].slides[stateNextSlideFromMiddlePost].head
  document.getElementById("middle-body").innerHTML = flowPageCurrent.posts[1].slides[stateNextSlideFromMiddlePost].body
}
function prevSlideFromMiddlePost() {
  if(flowPageCurrent.posts[1].slides.length == 1) { alertModal("No other slide"); return; }
  stateNextSlideFromMiddlePost--;
  if(flowPageCurrent.posts[1].slides[stateNextSlideFromMiddlePost] == undefined) 
    {  stateNextSlideFromMiddlePost = flowPageCurrent.posts[1].slides.length - 1 }
  document.getElementById("middle-head").innerHTML = flowPageCurrent.posts[1].slides[stateNextSlideFromMiddlePost].head
  document.getElementById("middle-body").innerHTML = flowPageCurrent.posts[1].slides[stateNextSlideFromMiddlePost].body
}

/* ------------------------- Bottom-post buttons ------------------------ */
function nextPageFromBottomPost() {
  if(flowPageCurrent.posts[2].next == undefined) { alertModal("No further content"); return; }
  flowPageCurrent = flowPageCurrent.posts[2].next;
  renderPage();
  stack.push(2);
}

function nextSlideFromBottomPost() {
  if(flowPageCurrent.posts[2].slides.length == 1) { alertModal("No other slide"); return; }
  stateNextSlideFromBottomPost++;
  if(flowPageCurrent.posts[2].slides[stateNextSlideFromBottomPost] == undefined) {  stateNextSlideFromBottomPost = 0 }
  document.getElementById("bottom-head").innerHTML = flowPageCurrent.posts[2].slides[stateNextSlideFromBottomPost].head
  document.getElementById("bottom-body").innerHTML = flowPageCurrent.posts[2].slides[stateNextSlideFromBottomPost].body
}
function prevSlideFromBottomPost() {
  if(flowPageCurrent.posts[2].slides.length == 1) { alertModal("No other slide"); return; }
  stateNextSlideFromBottomPost--;
  if(flowPageCurrent.posts[2].slides[stateNextSlideFromBottomPost] == undefined) 
    {  stateNextSlideFromBottomPost = flowPageCurrent.posts[2].slides.length - 1 }
  document.getElementById("bottom-head").innerHTML = flowPageCurrent.posts[2].slides[stateNextSlideFromBottomPost].head
  document.getElementById("bottom-body").innerHTML = flowPageCurrent.posts[2].slides[stateNextSlideFromBottomPost].body
}
