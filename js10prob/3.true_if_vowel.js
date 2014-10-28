// PROBLEM # 3
// Write a function that takes a character (i.e. a string of length 1) and
// returns TRUE if it is a vowel, false if otherwise.


function vowel_check(x) {
	if(x.length > 1) {
		// if more than one letter is entered, message requests the user to try again
	return ("Work with me, here. I only need one character to check, not " + x.length + " .");
	} else if (x == "A" || x =="a" || x == "E" || x == "e" || x == "I" || x == "i" ||
				x == "O" || x == "o" || x == "U" || x == "u") { // looking for upper and lowercase vowels
		var vowel = true;
		return (vowel);
	}
	else {
		var vowel = false;
		return (vowel);
	}
};

