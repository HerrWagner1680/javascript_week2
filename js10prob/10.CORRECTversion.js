// SAMPLE OF CORRECT NUMBER 10 JS problem

function charFreq(string) {
	var freqList = {}; /* new empty object */
	for (var i = 0; i < string.length; i++) {
		var currentChar = string.charAt(i); /* evaluate the character at this position in string */
		if (currentChar in freqList) { /* if the character has already been added to object */
			freqList[currentChar] += 1; /* increment its value */
		}
		else { /* if character hasn't appeared in object yet */
			freqList[currentChar] = 1 /* value is 1 */
		}
	}

	return freqList;
}

charFreq("abbabcbdbabdbdbabababcbcbab");