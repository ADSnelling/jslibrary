function Hotel(name, rooms, booked){

	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkVac = function(){

		return this.rooms - this.booked;

	};

}

var rri = new Hotel("Red Roof Inn", 250, 230);
var alex = new Hotel("The Alexander", 500, 150);

var hotels = [rri, alex];

function showAllHotelsInfo(){
	for(var i in hotels){
		
		var hotelName = hotels[i].name;
		var hotelHtmlText = document.createTextNode(hotelName);
		var listItem = document.createElement("li");
		listItem.appendChild(hotelHtmlText);
		document.getElementById("hotels").appendChild(listItem);
	}
}
showAllHotelsInfo();
//using element ids and appendchild to directly apply javascript code to the html page
