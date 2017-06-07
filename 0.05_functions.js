//functions

// function Name_of_Function(){
// 
// }


function greeting(name){

	var name;
	console.log(name + " says \"Hello there buddy ol pal\"");

}

var stringOne = "ayyyyyyy";

greeting(stringOne);

function getWeather(){

	console.log("Todays weather is weather my dude");

}

getWeather();


function zapatos(brand){

	console.log("man those " + brand + " are dapper");
}

zapatos("vans");



function add(num1, num2){

	console.log(num1 + num2);

}

add(23, 45);


function sum (num1, num2){
	return num1 + num2;
}

sum(56, 78);

var numbersAdded = sum(65, 45);

console.log(sum(43, 12));

console.log(numbersAdded);

function multilply(num1, num2){
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


console.log(multilply(3,4));
console.log(divide(100,5));
console.log(remain(60,4));
console.log(subby(103,34));


function makeWord(word,wordTwo){
	var wordNew = word + " " + wordTwo;
	console.log(wordNew)
}

makeWord("hello","goodbye");


function getBills(rent,util,web,cable,food){
	var billTotal = rent + util + web + cable + food;
	console.log("Your monthly bills are $" + billTotal + "!");
}

getBills(1000,200,100,50,300);



function sodaCost(amount, cost){
	var beforeTax = (amount*cost);
	var tax = .07;
	console.log(amount + " Sodas will cost $" + (beforeTax + (beforeTax*tax)).toFixed(2));
}

sodaCost(90,1);









