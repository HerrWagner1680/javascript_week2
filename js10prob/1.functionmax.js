// PROBLEM #1
// Define a function max() that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else contruct available in Javascript.


function max (x, y) {
	if (x>y){
		return x + " is larger than " + y;
	} else if (x<y) {
		return y + " is larger than " + x;
	} else {
		return "Neither one is larger. Both numbers are equal.";
	}
};