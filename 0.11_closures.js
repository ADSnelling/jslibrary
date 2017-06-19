/*
closures essentially functions
	variables inside of functions cannot be used outside

*/
var init = function(){
	var name = "Summer";

	function displayName(){
		console.log(name);
	}
	displayName();
}
init();