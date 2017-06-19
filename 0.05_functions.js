//functions
function greeting(name){

	var name;
	console.log(name + " says \"Hello there buddy ol pal\"");

}//end greeting
//a function that passes a 'name' parameter to greet the user with a console log

var stringOne = "ayyyyyyy";

greeting(stringOne);
//calling said function with a var 'stringOne' being passed as the parameter

function getWeather(){

	console.log("Todays weather is weather my dude");

}

getWeather();
//a function that logs a string about the weather

function zapatos(brand){

	console.log("man those " + brand + " are dapper");
}

zapatos("vans");

//function to complement your shoes, passing a string not inside of a var as the parameter

function add(num1, num2){

	console.log(num1 + num2);

}
//using a function to add two numbers together

add(23, 45);


function sum (num1, num2){
	return num1 + num2;
}
//returning the value to be stored in place of a console log
sum(56, 78);

var numbersAdded = sum(65, 45);

console.log(sum(43, 12));

console.log(numbersAdded);

function multiply(num1, num2){
	return num1 * num2;
}

function divide(num1, num2){
	return num1 / num2;
}

function remain(num1, num2){
	return num1 % num2;
}

function subby(num1, num2){
	return num1 - num2;
}
//functions for basic math operators and modulus

console.log(multiply(3,4));
console.log(divide(100,5));
console.log(remain(60,4));
console.log(subby(103,34));


function makeWord(word,wordTwo){
	var wordNew = word + " " + wordTwo;
	console.log(wordNew);
}

makeWord("hello","goodbye");
//concat a string and log it by calling the makeWord function, using '+' concats strings together

function getBills(rent,util,web,cable,food){
	var billTotal = rent + util + web + cable + food;
	console.log("Your monthly bills are $" + billTotal + "!");
}

getBills(1000,200,100,50,300);

//a function that passes vars through that represent rent utilities cable and food and tells you the monthly bills

function sodaCost(amount, cost){
	var beforeTax = (amount*cost);
	var tax = .07;
	console.log(amount + " Sodas will cost $" + (beforeTax + (beforeTax*tax)).toFixed(2));
}

sodaCost(90,1);

//toFixed rounds with specified number of digits, using that here to calculate cost of x amount of sodas at x cost with a tax of 7%

// Challenge, make a calculator function that accepts 3 arguments2 numbers and 1 operator
// ex calculator(2,*,2) -- 4

function calculatte(num1, num2, op){

	if (op == "+") {

		return num1 + num2;

	}else if(op == "-"){

		return num1-num2;

	}else if (op == "*") {

		return num1*num2;

	}else if (op == "/"){

		return num1/num2;

	}else if(op == "%"){

		return num1%num2;

	}else{

		return "Please enter a real operator bro you goofed it";

	}//end if

}//end calculatte

console.log(calculatte(2, 5, "*"));

//using multiple if else statements to make a basic calculator with passed variables including a string form of the operator desired






