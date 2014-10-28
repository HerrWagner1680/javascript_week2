// PROBLEM # 2
// Define a function maxOfThree() that takes three numbers as arguments and returns
// the largest of them.


function maxOfThree (x, y, z) {
	if (x>y && y>=z || x>z && z>=y){
		return x + " is the largest number of the three.";
	} else if (y>x && x>z || y>z && z>x) {
		return y + " is the largest number of the three.";
	} else if (z>x && x>y || z>y && y>x) {
		return z + " is the largest number of the three.";
	} else if (x == y || x == z || y == z) {
		return "Hang on. Re-enter those numbers. They're not all different values."
	};
};