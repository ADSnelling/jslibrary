



var students = ["Jack", "Nick", "Frodo", "Baba Yaga", "The Dude"];
console.log(students);
console.log(students.length);
console.log(students[0]);
students[3] = "breh";
console.log(students);
students.push("Aaron");
console.log(students);
students.pop();
console.log(students);

for(var s in students){
	var toUpper = students[s].toUpperCase();
	console.log(toUpper + " is in the position of: " + s);
}

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]);

// create an array of numbers 1-10 then use a for each loop to print them

var nums = [1,2,3,4,5,6,7,8,9,10];

for(var ct in nums){
	console.log(nums[ct]);
}

//creating a for loop that pushes numbers into an empty array
var newNums = [];
for(arAdd = 1; arAdd <=10; arAdd++){
	newNums.push(arAdd);
}
console.log(newNums);


var ranThings = ["bryce", 45, "Winter", true, false, "never"];
console.log(ranThings);

console.log("\n\n\n\n\n\n\n");




function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var rand = [];
var word = "";

for(bet = 0; bet <5; bet++){

	for(lett = 0; lett <5; lett++){

		word = word.concat(alph[(getRandomInt(1,27) - 1)]);

	}//end inside for

	rand.push(word);
	word = "";

}//end outside for

console.log(rand);


