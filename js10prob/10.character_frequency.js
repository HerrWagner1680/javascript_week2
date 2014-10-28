//PROBLEM #10
// Write a function charFreq() that takes a string and builds a frequency listing of the characters
// contained in it. Represent the frequency listing as a Javascript object. Try it with something
// like charFreq("abbabcbdbabdbdbabababcbcbab").

// split up the string into individual characters
// sort each letter using if else statements
// the number of each can be calculated either by a counter or by .length
// keep the possible kind of characters limited a through d


// NOTE - THIS VERSION, WHILE FUNCTIONAL, IS INCOMPLETE, SINCE IT DOES NOT PROPERLY USE AN OBJECT
 function charFreq(x) {

 	var chars = x.split(""); //split string into single characters
	var new_word = [] // creating new array variable
	var a = 0; var b = 0; var c = 0; var d = 0; // setting up the letter counters

		for( var i = 0; i < x.length; i++) { // For loop will examine each letter
		var letter = (x[i]); // Variable letter defined as the next letter in the sequence

			if (letter == "a") { //either counter or combile separate array or add to object
				a++;
			}	else if (letter == "b") {
						b++;
			}	else if (letter == "c") {
						c++;
			}	else if (letter == "d") {
						d++;
			}	else
						console.log("This program only counts the letters a, b, c, or d in the string.")

 		};

 console.log("number of A's : ", a, "number of B's : ", b, "number of C's : ", c, "number of D's : ", d);
 
 //add number stats to object

 // var Char = {"number of A's : " a, "number of B's : "b, "number of C's : " c, "number of D's : "d};
 // Characters(a,b,c,d);
};

// NOTE - THIS VERSION, WHILE FUNCTIONAL, IS INCOMPLETE, SINCE IT DOES NOT PROPERLY USE AN OBJECT

// function Characters(a, b, c, d) {
//   this.a = a;
//   this.b = b;
//   this.c = c;
//   this.d = d;
//   //return (a,"As",b,"Bs",c,"Cs",d,"Ds");
// }
