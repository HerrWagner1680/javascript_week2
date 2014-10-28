// PROBLEM #6
// Define a function reverse() that computes the reversal of a string. 

function reverse(x) {
	var letters = x.split(""); //split string into single characters
	var reverse = letters.reverse(); // reverse the order
	var reverse = reverse.join(""); // combine the letters
	return (reverse);
}