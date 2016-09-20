/* Vriables */
var price1 = 5, price2 = 12;
var total = price1 + price2 + 7 + ++price1;

//Testing the variable result
//window.alert(total);
//Not working for my firefox version: window.alert(10**2);

var name = "Jessica";
//window.alert(name);
name = 'Matt';
//window.alert(name);
name += ' und Jessi';
//window.alert(name);

//The result of mixing strings and numbers differs from the position of the first string
//In this example even 2 and 3 are being treated as strings
//window.alert("5"+2+3);
//In this example 2 and 3 are not being treated as strings but as numbers!
//window.alert(2+3+"5");

/* Types */
//window.alert(typeof(name));
//Doesn't work this way: window.alert(name.instanceof("string"));
