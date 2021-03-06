	// ----------------------------- Model 1 -----------------------------
	// Get the modal
	var modal = document.getElementById('myModal1');

	// Get the button that opens the modal
	var link1 = document.getElementById("top-head");
	var link2 = document.getElementById("middle-head");
	var link3 = document.getElementById("bottom-head");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal
	link1.onclick = function() {
		document.getElementById("modal-body-1").innerHTML = flowPageCurrent.posts[0].slides[stateNextSlideFromTopPost].modal.body.details;
		modal.style.display = "block"; 
	}
	link2.onclick = function() {
		document.getElementById("modal-body-1").innerHTML = flowPageCurrent.posts[1].slides[stateNextSlideFromTopPost].modal.body.details;
		modal.style.display = "block"; 
	}
	link3.onclick = function() {
		document.getElementById("modal-body-1").innerHTML = flowPageCurrent.posts[2].slides[stateNextSlideFromTopPost].modal.body.details;
	    modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}

	// ----------------------------- Model 2 -----------------------------
	// Get the modal
	var modal2 = document.getElementById('myModal2');

	// Get the button that opens the modal
	var link2 = document.getElementById("modal2");

	// Get the <span> element that closes the modal
	var span2 = document.getElementsByClassName("close")[1];

	// When the user clicks the button, open the modal
	link2.onclick = function() {
	    modal2.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span2.onclick = function() {
	    modal2.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal2) {
	        modal2.style.display = "none";
	    }
	}


	// ----------------------------- Model 3 -----------------------------
	// Get the modal
	var modal3 = document.getElementById('myModal3');

	// Get the button that opens the modal
	var link3 = document.getElementById("modal3");

	// Get the <span> element that closes the modal
	var span3 = document.getElementsByClassName("close")[2];

	// When the user clicks the button, open the modal
	link3.onclick = function() {
	    modal3.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span3.onclick = function() {
	    modal3.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal3) {
	        modal3.style.display = "none";
	    }
	}


	// ----------------------------- Model 4 -----------------------------
	// Get the modal
	var modal4 = document.getElementById('myModal4');

	// Get the button that opens the modal
	var link4 = document.getElementById("modal4");

	// Get the <span> element that closes the modal
	var span4 = document.getElementsByClassName("close")[3];

	// When the user clicks the button, open the modal
	link4.onclick = function() {
	    modal4.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span4.onclick = function() {
	    modal4.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal4) {
	        modal4.style.display = "none";
	    }
	}


	// ----------------------------- Modal 5 -----------------------------
	// Get the modal
	var modal5 = document.getElementById('myModal5');

	/*
	// Get the button that opens the modal
	var link5 = document.getElementById("modal5");
	// When the user clicks the button, open the modal
	link5.onclick = function() {
	    modal5.style.display = "block";
	}

	*/

	// Get the <span> element that closes the modal
	var span5 = document.getElementsByClassName("close")[4];

	// When the user clicks on <span> (x), close the modal
	span5.onclick = function() {
	    modal5.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal5) {
	        modal5.style.display = "none";
	    }
	}

	function alertModal(msg) {	
	  document.getElementById("alertModalMsg").innerHTML = msg;
	  var modal5 = document.getElementById('myModal5');
	  modal5.style.display = "block";
	}
