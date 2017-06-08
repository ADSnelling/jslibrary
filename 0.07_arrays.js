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
	console.log(students[s] + " is in the position of: " + s);
}

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]);

