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