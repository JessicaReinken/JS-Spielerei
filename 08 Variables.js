// Variables
// Exercise 01
// Create a variable called carName, assign the value "Volvo" to it, and display it.
function excercise_08_01(p_id) {
	var carName;
	carName = "Volvo";
    document.getElementById(p_id).innerHTML = carName;
}

// Exercise 02
// Create a variable called number, assign the value 50 to it, and display it.
function excercise_08_02(p_id) {
	var number;
	number = 50;
    document.getElementById(p_id).innerHTML = number;
}

// Exercise 03
// The code below should display "Volvo" - Fix it.
function excercise_08_03(p_id) {
	//var carName = "Volvo";
	//document.getElementById("demo").innerHTML = carname;
	var carName = "Volvo";
    document.getElementById(p_id).innerHTML = carName; // <- Variable names are case sensitive.
}

// Exercise 04
// Display the sum of 5 + 10, using two variables x and y.
function excercise_08_04(p_id) {
	var x = 5, y = 10;
    document.getElementById(p_id).innerHTML = x + y;
}

// Exercise 05
// Create a third variable called z, assign x + y to it, and display it.
function excercise_08_05(p_id) {
	var x = 5, y = 10;
	var z;
	z = x + y;
    document.getElementById(p_id).innerHTML = z;
}

// Exercise 06
// Use a single var keyword to create three variables with the following values:
// firstName = "John"
// lastName = "Doe"
// age = 35
function excercise_08_06(p_id) {
	var firstName = "John", lastName = "Doe", age = 35;
    document.getElementById(p_id).innerHTML = firstName + " " + lastName + " ist " + age;
}