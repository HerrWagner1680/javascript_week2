// PROBLEM #4
// Write a function translate() that will translate a text into "rovarspraket".
// That is, double every consonant and place an occurrence of "o" in between.
// For example, translate ("this is fun") should return the string "tothohisos isos fofunon".

// REMEMBER TO NOT ONLY IGNORE VOWELS, BUT SPACES AS WELL

function translate(x) {
	var letters = x.split(""); //split string into single characters
	var new_word = [] // creating new array variable

		for( var i = 0; i < x.length; i++) { // For loop will examine each letter
		var char = (x[i]); // Variable char defined as the next letter in the sequence

			// If statement looking for non-vowels (an overly broad definition for consonants)
			if (!(char == "a" || char == "A" || char == "e" || char == "E" || char == "i" || char == "I" || 
				char == "o" || char == "O" || char == "u" || char == "U" || char == " ")) {
				var new_letters = char.replace(char, char+"o"+char); // Doubles consonant and adds "o".
				new_word.push(new_letters); // Adds the new letter combination into new_word array.
			} else {
				new_word.push(char); // Vowels and spaces are added to new_word array without alteration
			}
		};
	return (new_word.join("")); // return the joined array
};

