// PROBLEM #8
// Write a function findLongestWord() that takes an array of words and
// returns the length of the longest one.

function findLongestWord(x) { // X is array
	var longest_word_length = 0;

	for(var i = 0; i < x.length; i++) {
		var current_word_length = x[i].length;
		if(current_word_length > longest_word_length) { // continually adjust to find longest word
			longest_word_length = current_word_length;
		}
	}
	return ("The longest word in the array is " + longest_word_length + " letters long.");
}