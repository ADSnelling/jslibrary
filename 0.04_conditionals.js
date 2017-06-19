// conditionals
// && (and logical)
// || (or logical)
// < greater than
// > less than
// >= greater than equal to
// <= less than equal to
// == equal to
// === Strictly equal(type and value)
// ! not		
// != not equal to

console.log(1 > 3);
console.log(10 != 10);
var name = "snail";
console.log(name == "Snail");
console.log(name === "Snail");
//== is not the same as ===

console.log(6 == "6");
console.log(6 === "6");
var orNah = true;
// if statements
if (242 % 2 === 0) {

	console.log("suh bruhh");	

} else {

	console.log("nah breh");
	
}//end if | checking if a number is divisible evenly by two, (checking for even or odd)

var userName = "adminn";
var password = "passwordd";

// if (userName == "admin") {

// 	console.log("you have been granted access!");
	
// }

if (userName == "admin" && password == "password") {

	console.log("you have been granted access!");
	
}else{

	if(userName != "admin"){

		console.log("username is wrong breh");
		
	}else if(password != "password"){

		console.log("password is wrong breh");

	}
	
}
//using conditionals for a basic password and username checker(login thingy)
var age = 20;

if (age >= 35) {

	console.log("You can vote and also hold any place in gov");
	
}else if (age >= 25) {

	console.log("You can vote and run for senates");
	
}else if (age >= 18) {

	console.log("You can only vote");

}else{
	
	console.log("sucks to suck");

}
//using conditionals to let you know what you can do at the age specified in 'age', hardest condition always first

var coltsWins = 4;
var patsWins = 0;

if (coltsWins == 0 && patsWins == 0){

	console.log("soon as we can, we're gonna play and beat you");
	
}else if (patsWins > coltsWins) {

	console.log("you guys cheated tf bros");

}else if(patsWins == coltsWins){

	console.log("you think youre as good as us huh? you thought wront cuzzo");
	
}else{
	
	console.log("sucks to suck brady");

}
//using conditionals to compare colts vs pats wins, talking crap regardless of the outcome because its the pats

for (i = 1; i <= 100; i++) { 

    if(i % 3 == 0 && i % 5 == 0){

    	console.log("FizzBuzz");

    }else if (i % 3 == 0) {

    	console.log("Fizz");

    }else if (i % 5 == 0) {

    	console.log("Buzz");

    }else{

    	console.log(i)

    }//end if

}//end for loop

//fizzbuzz, print 1-100, multiples of 3 print fixx, multiples of 5 print buzz, multiples of both print fizzbuzz
//using a for loop

var num = 1;
 
while(num < 101){ //while means that the whole time the conditional is true it will loop
 
	if(num % 3 == 0 && num % 5 == 0){ //checking for most difficult condition
 
		console.log("FizzBuzz");
 
	}else if (num % 3 == 0) { //checking for divisible by 3
 
		console.log("Fizz");
 
	}else if (num % 5 == 0) { //checking for divisible by 5
 
		console.log("Buzz");
 
	}else{ //not divisible by either
 
		console.log(num) //neither, so print the variable
 
	}//end if
 
	num += 1; //increments the variable so the loop can end, not having an expression such as this will cause you to loop endlessly and crash(youll have to quit the compiler and reopen in most cases
 
}//end while

//using a while loop to recieve the same results as the for loop above