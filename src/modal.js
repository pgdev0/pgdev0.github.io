	// ----------------------------- Model 1 -----------------------------
	// Get the modal
	var modal = document.getElementById('myModal1');

	// Get the button that opens the modal
	var link = document.getElementById("modal1");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal
	link.onclick = function() {
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

