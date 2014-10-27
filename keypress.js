//ASSIGNMENT:
// When the user pressed a key on your web
// page, tell them if that key is a letter or a
// number. This result (“letter” or “number”) should
// be displayed in an H1 on the page. (USE CLASS ".keystroke")
$(document).ready(function(){


// Numbers 48 through 57 are keycodes for numbers 0 - 9
// Numbers 65 through 90 are keycodes for lowercase letters
// if != to above state that it was not a number or a letter

//"You pressed a number key!"
//"You pressed a letter key!"


	$(document).keydown(function(x) {
		if (x.keyCode >= 48 && x.keyCode <= 57) {
			$(".keystroke").text("You pressed a number key!");
			//console.log("You pressed a number key!");
		}
		else if (x.keyCode >=65 && x.keyCode <=90) {
			$(".keystroke").text("You pressed a letter key!");		
			//console.log("You pressed a letter key!");
		}
		else {
			$(".keystroke").text("That wasn't a letter or a number.");	
			//console.log("That wasn't a letter or a number.");
		}



	});


});