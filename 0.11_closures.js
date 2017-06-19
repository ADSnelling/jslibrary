/*
closures essentially functions
	variables inside of functions cannot be used outside

*/
var init = function(){

	var name = "Summer";

	function displayName(){

		console.log(name);

	}//close displayName

	displayName();

}//close init

init();


var friend = {};

var setAge = function(myAge){

	var bitrhday = '5/16/2017';

	return {

		getAge: function(){

			console.log(myAge);
			return myAge;

		}//close getAge

	}//close return

}//close setAge



friend.age = setAge(55);
console.log(friend.age);
console.log(friend.age.getAge());
console.log(friend.birthday);