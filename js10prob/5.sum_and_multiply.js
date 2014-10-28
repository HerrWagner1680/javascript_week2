// Define a functon sum() and a function multiply() that sums and multiplies (respectively)
// all the numbers in an array of numbers.

// Function for adding together the contents of an array

function sum(x) {
	var total = 0
		for( var i = 0; i < x.length; i++) { // For loop will examine each number in the array
			var nums = (x[i]); // Variable nums defined as the next number in the sequence
			var total = total + nums // variable total adds up each number
		};
			return(total); // return total sum
	};


// NOW FOR THE MULTIPLICATION VERSION

function multiply(x) {
	var total = 1
		for( var i = 0; i < x.length; i++) { // For loop will examine each number in the array
			var nums = (x[i]); // Variable nums defined as the next number in the sequence
			var total = total * nums // variable total multiplies each number
		};
			return(total); // return total product
	};
	