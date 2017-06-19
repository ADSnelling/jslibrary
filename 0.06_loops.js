// loops

// do while loop
// lcv = 0;
// do{
	// this code inside the "do" section of the loop will always iterate
	//code and stuff 
	// lcv += 1;
// }while(conditional T/F){ 
	// anything inside the while will loop so long as the 
	// conditional evaluates to true(make sure to add a condition
	// that can actually happen, you will loop forever otherwise)
	// code to loop after "DO"

	
	// code to end the loop(using increments(more options as we learn more code))
	// lcv++;
	// 
// }
// 
var lcv = 0;
do{
	lcv+=1;
	console.log(lcv)
}while(lcv < 6);


var counter = 0;

do{
	counter +=2;
	console.log(counter);
}while(counter < 20);

var counterTwo = 10;

do{
	console.log(counterTwo);
	counterTwo--;
}while(counterTwo >= 0);

var loop = 0;

while(loop < 50){
	loop += 5;
	console.log(loop);
}

var countWackula = 10;

while(countWackula >= 0){

	if(countWackula != 0){

		console.log(countWackula);

	}else{

		console.log("Blast Off Breh");

	}//end if

	countWackula--;

}//end while

for(i = 1; i <= 100; i++){
	console.log(i);
}//end for



