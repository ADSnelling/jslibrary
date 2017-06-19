var gradYear = 2013;
var highSchool = "Carmel High School";
//two vars, one a string one a int

console.log("I graduated from" , highSchool , "in" , gradYear + ".");
//printing the vars to see how they come out with commas instead of a +
//plus concats the vars into a string, comma prints them all seperately

var carYear = "2003";
var carMake = "Dodge";
var carModel = "Stratus";


var carInfo = carYear + " " + carMake + " " + carModel;
console.log("I drive a" + " " + carInfo + ".");
//concat strings using '+' to one var, logging that one var with all info as one string
var lowerCase = "hello";
var upperCase = lowerCase.toUpperCase();
console.log(lowerCase);
console.log(upperCase);
//using toUpperCase() to change a string to upper case and assign it to a new var then calling the original and uppercase vars