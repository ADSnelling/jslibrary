var age = 22;
var carYear = 2003;
var sibOldAge = 25;
var sibYoungAge = 19;
var dadAge = 55;
//declaring random variables for testing/practicing code
console.log("your age is" , age);
console.log("your cars year is" , carYear);
console.log("your older brothers age is" , sibOldAge);
console.log("your younger brothers age is" , sibYoungAge);
console.log("your dads age is" , dadAge);
//logging those vars with strings
var myNumber = 0;
console.log(myNumber);
myNumber += 10;
console.log(myNumber);
myNumber -= 1;
console.log(myNumber);
myNumber *= 9;
console.log(myNumber);
myNumber /= 7;
console.log(myNumber);
//using various assignment operators on a single var and logging the changes to the var

var currentAge = 22;
var maxAge = 100;
var bagChips = 1;
var chipAmt = (((maxAge - currentAge) * 365) * bagChips);
console.log("You will need" , chipAmt , "to last until you die horribly at the age of" , maxAge);
//writing an equation that will determine the chips needed for a bag of chips a day, until you die