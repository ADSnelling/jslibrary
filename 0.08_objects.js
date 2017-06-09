var empObject = {};

var johnQualls = {
// key            value
	name 		: "John Qualls",
	age         : 39,
	hairColor   : "Brown Hair"
};

console.log(johnQualls);
console.log(johnQualls.age);
console.log(johnQualls.hairColor);
console.log(johnQualls.name + " is of the age: " + johnQualls.age);

console.log(johnQualls.height);
johnQualls.height = "6ft";
console.log(johnQualls.height);
console.log(johnQualls);

// create an animal object with prop of type, weight, commonINindiana, habitat

var furryFriends = {
	type      : "Critter",
	weight    : 20,
	foundHere : false,
	habitat   : "Forested areas"
};

console.log(furryFriends.type);
console.log(furryFriends);
console.log(furryFriends["habitat"]);
furryFriends["nickName"] = "Rodent Squid";

console.log(furryFriends["nickName"] + " lives in " + furryFriends["habitat"]);

furryFriends["weight"] = 35;
console.log(furryFriends);
furryFriends["moviesAboutMe"] = "All movies in a forrest";
console.log(furryFriends);

