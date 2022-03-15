document.addEventListener("DOMContentLoaded" , () => {





    let body = document.body
    body.style.display = "none"

var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var current = 0;

var keyHandler = function (event) {

	// If the key isn't in the pattern, or isn't the current key in the pattern, reset
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
        
        body.style.display = "none"
		return;
	}

	// Update how much of the pattern is complete
	current++;

	// If complete, alert and reset
	if (pattern.length === current) {
		current = 0;
        body.style.display ="block"
		
	}

};

// Listen for keydown events
document.addEventListener('keydown', keyHandler, false);

});