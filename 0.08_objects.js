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
};//keys for objects are seperated by commas, and assigned with :

console.log(furryFriends.type);
console.log(furryFriends);
console.log(furryFriends["habitat"]);
furryFriends["nickName"] = "Rodent Squid";
//setting object keys to values

console.log(furryFriends["nickName"] + " lives in " + furryFriends["habitat"]);

furryFriends["weight"] = 35;
console.log(furryFriends);
furryFriends["moviesAboutMe"] = "All movies in a forrest";
console.log(furryFriends);

console.log(Object.keys(furryFriends));

// objects with methods in JS

var theBryceIsRight = {
	name       : "Bryce Greene",
	age        : 55,
	vocation   : "TA",
	email      : "thebryceisright@gmail.com",
	greeting   : function(){
					return "Greetings Earthlings I am " + this.name + " I am here to learn you";
			   },
	getAtMe  : function(){
					return "Get at me via my emaill, It's " + this.email;
				},
	bothOfEm  : function(){
					console.log(this.greeting());
					console.log(this.getAtMe());
				}
}

console.log(theBryceIsRight.greeting());

theBryceIsRight.bothOfEm();
//entire functions can be implemented into an object, and you can call those functions by referencing the function after the objecct itself with .




var paul = new Object;
var james = {};
paul.name = "Paul O' Connor";
paul.vocaton = "curriculum master";
paul.hobbies = ["rocking out code", "listening to music", "baking banana muffins"];


console.log(paul);


function Hotel(name, rooms, booked){
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.check = function(){
		return "There are " + (this.rooms - this.booked) + " rooms left.";
	};
}

var jw = new Hotel("JW Marriot", 300, 250);
var holIn = new Hotel("Holiday Inn", 300, 300);
console.log(jw);
console.log(holIn);
console.log(holIn.check());
console.log(jw.check());

var hotels = [jw, holIn];
console.log(hotels);
console.log(hotels[1].name);

for(var h in hotels){
	console.log(hotels[h].name);
}


var persons = {
	name : "Dick C",
	age : 50,
	height : "6ft",
	mass : 240,
	getName : function(){
		return this.name;
	},
	getAge : function(){
		return this.age;
	},
	getHeight : function(){
		return this.height;
	},
	getMass : function(){
		return this.mass;
	}
}


console.log(persons.getName());
console.log(persons.getAge());
console.log(persons.getHeight());
console.log(persons.getMass());

var child2 = Object.create(persons, {})

var childrens = persons;

console.log(childrens);
childrens.school = "elementary";
console.log(childrens.school);
console.log(childrens);

console.log(childrens.getAge());



function PersonsNew (name, age,height, mass){
	this.name = name;
	this.age = age;
	this.height = height;
	this.mass = mass;
	this.gName = function(){return name};
	this.gAge = function(){return age};
	this.gHeight = function(){return height};
	this.gMass = function(){return mass};

}

var dude = new PersonsNew("breh", 35, "6ft", 200);

console.log(dude);
console.log(dude.gName());


var child4 = Object.create(dude);

child4.isHealthy = function(){
	if (this.mass > 250){
		return "Go runnung you weigh too much";
	}else{
		return "You're kinda healthy good job";
	}
}

var child3 = new PersonsNew("jack", 12, "4ft", 100);


console.log(child4.isHealthy());
console.log(child3.gName());
console.log(child3.name);
console.log(child4.gName());
console.log(child4.gAge());











