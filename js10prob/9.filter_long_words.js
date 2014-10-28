//PROBLEM #9
// Write a function filterLongWords() that takes an array of words and
// an integer i and returns the array of words that are longer than i.

function filterLongWords(array, i) {
	var only_long_words = []; // create a new array
	var x = 0;
	while (x<array.length) {
		var current_word_length = array[x].length;
		if (i<=current_word_length) {
			only_long_words.push(array[x]); // compile the long words into an array
				x++;
		} else {
			x++;
		}
	};
	return(only_long_words);
};